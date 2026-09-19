import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { LeadForm } from "@/components/LeadForm";
import { MotionController } from "@/components/MotionController";
import { processSteps, services, siteConfig, team, whatsappHref } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  areaServed: "BR",
  serviceType: [
    "Landing pages",
    "Sites institucionais",
    "Desenvolvimento de sistemas web",
  ],
};

function SectionIndex({ number, label }: { number: string; label: string }) {
  return (
    <p className="section-index">
      <strong>{number}</strong>
      <span>{label}</span>
    </p>
  );
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
            <h1 id="hero-title">
              Negócios reais.
              <br />
              <span>Experiências digitais</span>
              <br />
              de alto nível.
            </h1>
            <p className="hero-summary">
              Estratégia, design e engenharia para transformar uma necessidade do seu negócio em um site ou
              sistema pronto para trabalhar.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#contato">
                Conversar sobre o projeto <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="text-link" href="#portfolio">
                Ver trabalho real <ArrowDown size={17} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-proof">
            <div className="proof-board">
              <div className="board-meta" aria-hidden="true">
                <span>CASE / 001</span>
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

        <section className="signal-strip" aria-label="Princípios de execução">
          <div><span>01</span> Estratégia antes da tela</div>
          <div><span>02</span> Design que orienta a ação</div>
          <div><span>03</span> Código pronto para evoluir</div>
        </section>

        <section className="section services-section" id="servicos" aria-labelledby="services-title">
          <div className="section-intro">
            <SectionIndex number="01" label="O que fazemos" />
            <h2 id="services-title">A entrega certa para o momento do seu negócio.</h2>
            <p>
              Do primeiro canal comercial a uma operação inteira, desenhamos cada projeto ao redor do problema
              que precisa ser resolvido.
            </p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.index}>
                <span className="service-index">{service.index}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <ul aria-label={`Entregas de ${service.title}`}>
                  {service.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href="#contato" aria-label={`Conversar sobre ${service.title}`}>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section" id="portfolio" aria-labelledby="case-title">
          <div className="case-header section">
            <div>
              <SectionIndex number="02" label="Trabalho em evidência" />
              <h2 id="case-title">Náutica Engenharia</h2>
            </div>
            <p>
              Uma presença digital criada para organizar serviços, estabelecer confiança e facilitar o primeiro
              contato em qualquer tela.
            </p>
          </div>

          <div className="case-stage section">
            <div className="case-desktop">
              <div className="browser-bar dark" aria-hidden="true">
                <i />
                <i />
                <i />
                <span>Experiência desktop</span>
              </div>
              <Image
                src="/assets/cases/nautica-after-desktop.webp"
                alt="Site da Náutica Engenharia em desktop"
                width={1440}
                height={900}
                loading="lazy"
                sizes="(max-width: 900px) 100vw, 72vw"
              />
            </div>
            <div className="case-mobile">
              <div className="case-mobile-label">ADAPTAÇÃO MOBILE</div>
              <Image
                src="/assets/cases/nautica-after-mobile.webp"
                alt="Site da Náutica Engenharia em celular"
                width={390}
                height={844}
                loading="lazy"
                sizes="(max-width: 700px) 34vw, 18vw"
              />
            </div>
            <span className="case-stamp" aria-hidden="true">PROJETO REAL</span>
          </div>

          <div className="case-details section">
            <p>LANDING PAGE DE SERVIÇOS</p>
            <ul>
              <li>Arquitetura de conteúdo</li>
              <li>Direção de interface</li>
              <li>Desenvolvimento responsivo</li>
            </ul>
            <p className="case-caption">
              O case é apresentado como evidência de execução. Não publicamos métricas ou resultados comerciais
              que não tenham sido documentados pelo cliente.
            </p>
          </div>
        </section>

        <section className="section method-section" id="metodo" aria-labelledby="method-title">
          <div className="method-heading">
            <SectionIndex number="03" label="Método Tekton" />
            <h2 id="method-title">Clareza para decidir. Rigor para executar.</h2>
          </div>

          <div className="method-grid">
            <div className="method-ruler" aria-hidden="true">
              <span className="ruler-track" />
              {processSteps.map((step) => (
                <i key={step.index}>{step.index}</i>
              ))}
            </div>
            <div className="method-steps">
              {processSteps.map((step) => (
                <article key={step.index} data-stage>
                  <span>{step.index}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="capabilities-section" aria-labelledby="capabilities-title">
          <div className="section capabilities-inner">
            <div>
              <SectionIndex number="04" label="Evidência técnica" />
              <h2 id="capabilities-title">Bonito na apresentação. Forte no uso real.</h2>
            </div>
            <div className="audit-board" role="group" aria-label="Resultado da validação local deste site">
              <div className="audit-lead">
                <span>LIGHTHOUSE MOBILE / LOCAL</span>
                <strong>96</strong>
                <p>Performance</p>
              </div>
              <dl className="audit-scores">
                <div><dt>Acessibilidade</dt><dd>100</dd></div>
                <div><dt>Boas práticas</dt><dd>100</dd></div>
                <div><dt>SEO</dt><dd>100</dd></div>
              </dl>
              <div className="audit-notes">
                <h3>Medimos o que entregamos.</h3>
                <ul>
                  <li>Build de produção, viewport mobile e dados reais desta página.</li>
                  <li>HTML semântico, imagens responsivas e interação com movimento reduzido.</li>
                  <li>PageSpeed da URL pública será validado após a publicação.</li>
                </ul>
                <p>Auditoria local executada em 18 set. 2026. Resultado pode variar conforme rede e hospedagem.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section team-section" id="equipe" aria-labelledby="team-title">
          <div className="team-heading">
            <SectionIndex number="05" label="Quem executa" />
            <h2 id="team-title">Uma equipe próxima do problema e da entrega.</h2>
            <p>
              A Tekton reúne competências de produto, interface, infraestrutura e dados para manter as decisões
              conectadas de ponta a ponta.
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
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
                  <span aria-hidden="true">0{index + 1}</span>
                </div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p>{member.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contato" aria-labelledby="contact-title">
          <div className="section contact-grid">
            <div className="contact-copy">
              <SectionIndex number="06" label="Próximo projeto" />
              <h2 id="contact-title">Traga o contexto. A gente desenha o caminho.</h2>
              <p>
                Conte o que sua empresa precisa resolver. Vamos avaliar o cenário e retornar com os próximos
                passos para a conversa.
              </p>
              {whatsappHref ? (
                <a className="whatsapp-link" href={whatsappHref} target="_blank" rel="noreferrer">
                  Prefere WhatsApp? Abrir conversa <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              ) : (
                <p className="contact-note">O canal de WhatsApp será exibido quando o número comercial for configurado.</p>
              )}
            </div>
            <div>
              <LeadForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark" aria-hidden="true">T</span>
            <span>TEKTON DIGITAL</span>
          </a>
          <p>Design e engenharia para negócios que querem avançar.</p>
          <a href="#top">Voltar ao topo <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Tekton Digital</span>
          <a href="/privacidade">Política de Privacidade</a>
          <span>Brasil · Atendimento remoto</span>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
