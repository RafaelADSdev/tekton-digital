import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a Tekton Labs trata os dados enviados pelo formulário de contato.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <a className="legal-back" href="/">
        <ArrowLeft size={17} aria-hidden="true" /> Voltar para o site
      </a>
      <article>
        <p className="section-label">Documento legal</p>
        <h1>Política de Privacidade</h1>
        <p className="legal-updated">Última atualização: 18 de setembro de 2026.</p>

        <h2>Quais dados coletamos</h2>
        <p>
          O formulário pode coletar nome, e-mail, empresa, telefone, tipo de serviço e a mensagem enviada por
          você. A empresa e o telefone são opcionais.
        </p>

        <h2>Por que usamos esses dados</h2>
        <p>
          Usamos essas informações exclusivamente para analisar a solicitação, responder ao contato e conduzir
          uma possível conversa comercial relacionada ao projeto descrito.
        </p>

        <h2>Armazenamento e acesso</h2>
        <p>
          Quando a integração estiver ativa, os dados serão armazenados em infraestrutura Supabase com acesso
          restrito à equipe autorizada da Tekton. Os registros não ficam disponíveis publicamente pelo site.
        </p>

        <h2>Compartilhamento e retenção</h2>
        <p>
          Não vendemos os dados enviados. Informações podem ser processadas por fornecedores técnicos
          necessários à operação do site. O prazo de retenção e o canal formal para solicitações serão revisados
          antes da publicação oficial.
        </p>

        <h2>Seus direitos</h2>
        <p>
          Você poderá solicitar acesso, correção ou exclusão dos dados. O contato do controlador será incluído
          aqui antes da publicação oficial do site.
        </p>
      </article>
    </main>
  );
}
