import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { MotionController } from "@/components/MotionController";
import { services, siteConfig, team, whatsappHref } from "@/data/site";

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
            <p className="hero-eyebrow">Tekton — Software e design</p>
            <h1 id="hero-title">
              Construímos
              <br />
              <span>presença digital</span>
              <br />
              que aguenta uso real.
            </h1>
            <p className="hero-summary">
              Não vendemos pacote de site. Projetamos, desenvolvemos e entregamos produtos digitais — landing
              pages, sites institucionais e sistemas web — com a mesma exigência técnica que aplicaríamos a um
              software crítico. Se o seu projeto tiver fundamento, a gente avalia.
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
            {services.map((service) => (
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
                <a href="#contato" aria-label={`Conversar sobre ${service.title}`}>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>

          <p className="section-closing">
            Se a sua demanda não for nenhuma dessas três, provavelmente conhecemos alguém melhor para ela. E
            vamos te dizer isso.
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
              chega nele. Nada disso é enfeite — é o que separa uma página que funciona de uma página que
              apenas existe. Cada projeto aqui foi construído do zero.
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
            <p>NÁUTICA ENGENHARIA · LANDING PAGE DE SERVIÇOS</p>
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
            <SectionLabel>Quem executa</SectionLabel>
            <h2 id="team-title">Três sócios. Nenhum intermediário.</h2>
            <p>
              A Tekton é uma casa pequena por escolha. Quem conversa com você na primeira mensagem é quem vai
              escrever o código e desenhar a interface do seu projeto. Não existe camada de gerente de contas
              repassando recado, nem equipe júnior anônima executando aquilo que outra pessoa vendeu.
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
                <p className="member-role">{member.role}</p>
                <p>{member.description}</p>
              </article>
            ))}
          </div>
          <p className="section-closing">
            Somos jovens e temos plena consciência disso. Compensamos com nível técnico, com processo e com uma
            noção honesta do que não sabemos fazer. Você fala com os três, do primeiro escopo à entrega.
          </p>
        </section>

        <section className="contact-section" id="contato" aria-labelledby="contact-title">
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
              sai da conversa com uma direção melhor do que entrou — e sem ter perdido a tarde.
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
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark" aria-hidden="true">T</span>
            <span>TEKTON DIGITAL</span>
          </a>
          <p>Software e design para quem leva o próprio negócio a sério.</p>
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
