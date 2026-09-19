import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome.").max(100),
  email: z.email("Informe um e-mail válido.").max(180),
  company: z.string().trim().max(140).optional().default(""),
  phone: z.string().trim().max(30).optional().default(""),
  service: z.enum(["landing-page", "site-institucional", "sistema-web", "a-definir"], {
    error: "Selecione o tipo de projeto.",
  }),
  message: z.string().trim().min(20, "Conte um pouco mais sobre o projeto.").max(2000),
  website: z.string().max(0).optional().default(""),
});

export type LeadInput = z.infer<typeof leadSchema>;
