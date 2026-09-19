import { NextResponse, type NextRequest } from "next/server";
import { leadSchema } from "@/lib/lead-schema";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (requestLog.get(key) || []).filter((time) => now - time < RATE_WINDOW_MS);
  recent.push(now);
  requestLog.set(key, recent);
  return recent.length > RATE_LIMIT;
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 12_000) {
    return NextResponse.json({ message: "O conteúdo enviado é muito grande." }, { status: 413 });
  }

  const forwarded = request.headers.get("x-forwarded-for");
  const clientKey = forwarded?.split(",")[0]?.trim() || "local";
  if (isRateLimited(clientKey)) {
    return NextResponse.json(
      { message: "Recebemos várias tentativas. Aguarde alguns minutos e tente novamente." },
      { status: 429 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Não foi possível ler os dados enviados." }, { status: 400 });
  }

  const result = leadSchema.safeParse(payload);
  if (!result.success) {
    const firstIssue = result.error.issues[0];
    return NextResponse.json(
      { message: firstIssue?.message || "Revise os campos e tente novamente." },
      { status: 422 },
    );
  }

  // Bots recebem uma resposta neutra sem alcançar o banco.
  if (result.data.website) {
    return NextResponse.json({ ok: true });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    const hasWhatsapp = Boolean((process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, ""));
    return NextResponse.json(
      {
        message: hasWhatsapp
          ? "O formulário ainda não está conectado. Use o WhatsApp ou tente novamente mais tarde."
          : "O formulário ainda não está conectado. Tente novamente mais tarde.",
      },
      { status: 503 },
    );
  }

  const { website: _website, ...lead } = result.data;
  const { error } = await supabase.from("leads").insert({
    ...lead,
    source: "site-tekton",
    user_agent: request.headers.get("user-agent")?.slice(0, 500) || null,
  });

  if (error) {
    console.error("lead_insert_failed", { code: error.code, message: error.message });
    return NextResponse.json(
      { message: "Não conseguimos registrar sua mensagem agora. Tente novamente em alguns instantes." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
