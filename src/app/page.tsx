import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { CaseCompare } from "@/components/CaseCompare";
import { Header } from "@/components/Header";
import { MotionController } from "@/components/MotionController";
import {
  auditScores,
  buildWhatsappHref,
  services,
  siteConfig,
  team,
  technicalEvidence,
  whatsappHref,
} from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  areaServed: "BR",
  serviceType: [
    "Criação de landing pages",
    "Desenvolvimento de sites institucionais",
    "Sistemas web complexos",
  ],
};

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label">{children}</p>;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <MotionController />
      <div className="page-ruler" aria-hidden="true">
        <span />
      </div>

      <main id="conteudo">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-orbit" aria-hidden="true" />
          <div className="hero-copy">
            <p className="hero-eyebrow">Tekton Labs · Software e design</p>
            <h1 id="hero-title">
              <span>Construímos</span>
              <span className="accent">presença digital</span>
              <span>que aguenta uso real.</span>
            </h1>
            <p className="hero-summary">
              Não vendemos pacote de site. Projetamos, desenvolvemos e entregamos produtos digitais — landing
              pages, sites institucionais e sistemas web — com a mesma exigência técnica de um software
              crítico. Se o projeto tiver fundamento, a gente avalia.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#contato">
                Verificar disponibilidade da equipe <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="text-link" href="#portfolio">
                Ver o que já construímos <ArrowDown size={17} aria-hidden="true" />
              </a>
            </div>
            <p className="hero-note">
              Analisamos o escopo antes de qualquer proposta. Nem todo projeto entra na fila.
            </p>
          </div>

          <div className="hero-proof">
            <div className="proof-board">
              <div className="board-meta" aria-hidden="true">
                <span>PROJETO ENTREGUE</span>
                <span>NAUTICA.ENG</span>
              </div>
              <div className="desktop-frame">
                <div className="browser-bar" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <span>nauticaengenharia.com.br</span>
                </div>
                <Image
                  src="/assets/cases/nautica-after-desktop.webp"
                  alt="Página inicial da Náutica Engenharia em uma tela de computador"
                  width={1440}
                  height={900}
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 900px) 90vw, 48vw"
                />
              </div>
              <div className="mobile-frame">
                <span className="mobile-speaker" aria-hidden="true" />
                <Image
                  src="/assets/cases/nautica-after-mobile.webp"
                  alt="Página da Náutica Engenharia adaptada para celular"
                  width={390}
                  height={844}
                  sizes="(max-width: 640px) 24vw, 10vw"
                />
              </div>
              <div className="board-note">
                <span>ENTREGA REAL</span>
                <strong>Site responsivo + direção visual</strong>
              </div>
            </div>
          </div>

          <div className="hero-footer" aria-hidden="true">
            <span>RECIFE / BRASIL</span>
            <span className="hero-line" />
            <span>PROJETOS DIGITAIS · 2026</span>
          </div>
        </section>

        <section className="section services-section" id="servicos" aria-labelledby="services-title">
          <div className="section-intro">
            <SectionLabel>O que construímos</SectionLabel>
            <h2 id="services-title">Três frentes. Nenhuma delas pela metade.</h2>
            <p>
              Trabalhamos com um conjunto fechado de disciplinas porque é nelas que somos bons. Não
              terceirizamos código, não montamos site em template e não entregamos nada que a gente mesmo não
              assinaria embaixo.
            </p>
          </div>

          <div className="service-list">
            {services.map((service) => {
              const serviceHref = buildWhatsappHref(service.whatsappMessage);
              return (
                <article className="service-row" key={service.title}>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <ul aria-label={`Entregas de ${service.title}`}>
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {serviceHref ? (
                    <a className="service-cta" href={serviceHref} target="_blank" rel="noreferrer">
                      {service.cta} <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                  ) : (
                    <a className="service-cta" href="#contato">
                      {service.cta} <ArrowDown size={17} aria-hidden="true" />
                    </a>
                  )}
                </article>
              );
            })}
          </div>

          <p className="section-closing">
            Sua demanda não se encaixa em nenhuma dessas três? Fale com a gente mesmo assim. Todo projeto é
            avaliado, e você recebe uma resposta honesta sobre o melhor caminho.
          </p>
        </section>

        <section className="case-section" id="portfolio" aria-labelledby="case-title">
          <div className="case-header section">
            <div>
              <SectionLabel>Portfólio e execução</SectionLabel>
              <h2 id="case-title">O detalhe é o argumento.</h2>
            </div>
            <p>
              Repare no que costuma passar despercebido: o comportamento da rolagem, o tempo de uma transição,
              o alinhamento que se mantém quando a tela muda de tamanho, o estado do botão quando o cursor
              chega nele. Nada disso é enfeite. É o que separa uma página que funciona de uma página que
              apenas existe. Cada projeto aqui foi construído do zero.
            </p>
          </div>

          <CaseCompare />

          <div className="case-details section">
            <div className="case-project">
              <p className="case-detail-label">Projeto entregue</p>
              <h3>Náutica Engenharia</h3>
              <p>Landing page de serviços</p>
            </div>

            <div className="case-scope">
              <p className="case-detail-label">Escopo de execução</p>
              <ul>
                <li>Arquitetura de conteúdo</li>
                <li>Direção de interface</li>
                <li>Desenvolvimento responsivo</li>
              </ul>
            </div>

            <aside className="case-evidence-note" aria-label="Nota de evidência do projeto">
              <p className="case-detail-label">Nota de evidência</p>
              <p>
                O case é apresentado como evidência de execução. Não publicamos métricas ou resultados comerciais
                que não tenham sido documentados pelo cliente.
              </p>
            </aside>
          </div>
        </section>

        <section className="capabilities-section" aria-labelledby="capabilities-title">
          <div className="section capabilities-inner">
            <div>
              <SectionLabel>Evidência técnica</SectionLabel>
              <h2 id="capabilities-title">Bonito na apresentação. Forte no uso real.</h2>
            </div>
            <div className="audit-board" role="group" aria-label="Resultado da validação local deste site">
              <div className="audit-lead">
                <span>LIGHTHOUSE MOBILE / LOCAL</span>
                <strong>96</strong>
                <div>
                  <p>Performance</p>
                  <small>O quanto a página abre rápido no celular. Página lenta perde o visitante antes da primeira linha.</small>
                </div>
              </div>
              <dl className="audit-scores">
                {auditScores.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd className="audit-score">{item.score}</dd>
                    <dd className="audit-hint">{item.hint}</dd>
                  </div>
                ))}
              </dl>
              <div className="audit-notes">
                <h3>Medimos o que entregamos.</h3>
                <p className="audit-explainer">
                  Os números vêm do Lighthouse, a ferramenta do Google que dá nota de 0 a 100 para a qualidade de
                  um site. Rodamos no próprio site que você está vendo, simulando um celular.
                </p>
                <p>
                  Auditoria local da versão de produção em 18 set. 2026. O resultado pode variar conforme rede e
                  hospedagem, e o PageSpeed da URL pública será validado após a publicação.
                </p>
              </div>
            </div>

            <div className="evidence-heading">
              <h3>O que tem por trás dos números.</h3>
              <p>Cada termo técnico, e o que ele muda para quem visita o seu site.</p>
            </div>
            <ul className="evidence-grid">
              {technicalEvidence.map((item) => (
                <li key={item.term}>
                  <span className="evidence-term">{item.term}</span>
                  <strong>{item.benefit}</strong>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section team-section" id="equipe" aria-labelledby="team-title">
          <div className="team-heading">
            <SectionLabel>Quem executa</SectionLabel>
            <h2 id="team-title">Três sócios. Nenhum intermediário.</h2>
            <p>
              A Tekton é uma casa pequena por escolha. Quem conversa com você na primeira mensagem é sócio da
              casa e senta na mesma mesa de quem vai escrever o código do seu projeto. Não existe camada de
              gerente de contas repassando recado, nem equipe júnior anônima executando aquilo que outra
              pessoa vendeu.
            </p>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <article key={member.name}>
                <div className="portrait">
                  <Image
                    src={member.image}
                    alt={`Retrato de ${member.name}`}
                    width={900}
                    height={900}
                    loading="lazy"
                    sizes="(max-width: 700px) 86vw, 30vw"
                  />
                </div>
                <h3>{member.name}</h3>
                <p>{member.description}</p>
              </article>
            ))}
          </div>
          <p className="section-closing">
            Arquitetura de conteúdo, interface e código próprio ficam na mesma mesa. Performance medida, SEO
            técnico na base e sistema versionado para continuar depois da publicação.
          </p>
        </section>

        <section className="contact-section" id="contato" aria-labelledby="contact-title">
          <div className="contact-glow" aria-hidden="true" />
          <div className="section contact-copy">
            <SectionLabel>Próximo passo</SectionLabel>
            <h2 id="contact-title">Sem formulário. Conversa direta.</h2>
            <p>
              Não temos um campo de &ldquo;conte-nos sobre o seu projeto&rdquo; para a sua mensagem cair numa
              caixa de entrada que ninguém abre. Temos um número de WhatsApp onde você fala com um dos sócios.
            </p>
            <p>
              O que acontece lá: você explica o que precisa, a gente faz as perguntas certas sobre escopo,
              prazo e o que já existe hoje. A partir disso dizemos com honestidade se faz sentido a Tekton
              assumir esse projeto. Se fizer, tratamos de números e cronograma no privado. Se não fizer, você
              sai da conversa com uma direção melhor do que entrou, e sem ter perdido a tarde.
            </p>
            <p>
              Aceitamos um número limitado de projetos por vez. É assim que se mantém o padrão. Vale checar se
              há espaço agora.
            </p>
            {whatsappHref ? (
              <>
                <a className="primary-button" href={whatsappHref} target="_blank" rel="noreferrer">
                  Falar com um dos sócios no WhatsApp <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <p className="contact-note">
                  Respondemos em horário comercial. Se não houver agenda, dizemos isso já na primeira resposta.
                </p>
              </>
            ) : (
              <p className="contact-note">
                O canal de WhatsApp será exibido quando o número comercial for configurado.
              </p>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <a className="brand footer-brand" href="#top" aria-label="Tekton Labs, ir para o topo">
            <Image
              src="/assets/brand/tekton-logo.png"
              alt="Tekton Labs"
              width={720}
              height={194}
              loading="lazy"
            />
          </a>
          <p>Software e design para quem leva o próprio negócio a sério.</p>
          <a href="#top">Voltar ao topo <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Tekton Labs</span>
          <a href="/privacidade">Política de Privacidade</a>
          <span>Brasil · Atendimento remoto</span>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
