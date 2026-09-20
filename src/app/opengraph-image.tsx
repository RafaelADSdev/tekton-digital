import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Tekton Digital: design e desenvolvimento para negócios reais";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logo = readFileSync(join(process.cwd(), "public/assets/brand/tekton-logo.png")).toString(
  "base64",
);

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        color: "#CFCFCF",
        background: "#141414",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/png;base64,${logo}`} width={334} height={90} alt="Tekton Digital" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <span style={{ color: "#BE96E0", fontSize: 22 }}>ESTRATÉGIA · DESIGN · ENGENHARIA</span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 74,
            lineHeight: 1.05,
            fontWeight: 750,
            letterSpacing: -3,
          }}
        >
          <span>Negócios reais.</span>
          <span>Experiências digitais de alto nível.</span>
        </div>
      </div>
    </div>,
    size,
  );
}
