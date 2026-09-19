import { describe, expect, it } from "vitest";
import { leadSchema } from "./lead-schema";

const validLead = {
  name: "Maria Silva",
  email: "maria@empresa.com.br",
  company: "Empresa",
  phone: "(81) 99999-9999",
  service: "site-institucional",
  message: "Precisamos reorganizar o site e melhorar a captação de contatos.",
  website: "",
};

describe("leadSchema", () => {
  it("aceita um briefing completo", () => {
    expect(leadSchema.safeParse(validLead).success).toBe(true);
  });

  it("recusa e-mail inválido e mensagem curta", () => {
    const result = leadSchema.safeParse({ ...validLead, email: "invalido", message: "curta" });
    expect(result.success).toBe(false);
  });

  it("recusa o campo-isca preenchido", () => {
    const result = leadSchema.safeParse({ ...validLead, website: "https://spam.example" });
    expect(result.success).toBe(false);
  });
});
