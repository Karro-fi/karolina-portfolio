import SiteFooter from './SiteFooter';
import SiteNavigation from './SiteNavigation';

export default function PortfolioHome() {
  return (
    <main>
      <header className="site-header">
        <div className="site-shell site-nav">
          <a
            className="wordmark"
            href="#top"
            aria-label="Karolina Paraskevas, startsida"
          >
            Karolina Paraskevas
          </a>
          <SiteNavigation
            initialHref="#work"
            items={[
              { href: '#work', label: 'Projekt' },
              { href: '#contribution', label: 'Vad jag bidrar med' },
              { href: '#about', label: 'Om mig' },
              { href: '#lia', label: 'LIA' },
              { href: '#contact', label: 'Kontakta mig' },
            ]}
          />
        </div>
      </header>

      <section className="portfolio-hero" id="top">
        <div className="site-shell">
          <div className="eyebrow-row">
            <p className="eyebrow">Experience designer · Karlstad</p>
            <p className="case-index">Portfolio · 2026</p>
          </div>
          <h1
            className="portfolio-hero-title"
            aria-label="Jag skapar visuella upplevelser som gör idéer tydliga, engagerande och lätta att ta till sig."
          >
            <span aria-hidden="true">Jag skapar visuella</span>
            <span aria-hidden="true">upplevelser som gör idéer</span>
            <span aria-hidden="true">tydliga, engagerande</span>
            <span aria-hidden="true">och lätta att ta till sig.</span>
          </h1>
          <div className="portfolio-hero-bottom">
            <div>
              <p className="hero-intro">
                Jag kombinerar design, innehåll och digitala verktyg för att
                forma genomtänkta uttryck som når fram.
              </p>
              <a className="text-link" href="#work">
                Se mina projekt <span aria-hidden="true">↓</span>
              </a>
            </div>
            <a className="status-pill" href="#lia">
              Söker LIA · 4/1 till 21/5 2027
            </a>
          </div>
        </div>
      </section>

      <section className="home-work section-rule" id="work">
        <div className="site-shell">
          <div className="home-section-head">
            <div>
              <p className="eyebrow">Avslutade arbeten</p>
              <h2>Projekt</h2>
            </div>
            <p>04 / 04</p>
          </div>

          <div className="project-card-grid">
            <a
              className="case-card"
              href="/case/academedia"
              aria-label="Läs AcadeMedia Academy case study"
            >
              <div className="case-card-media case-card-media--academedia">
                <img
                  src="/images/dashboard-start.webp"
                  alt="Dashboarden i Karolinas redesign av AcadeMedia Academy."
                />
              </div>
              <div className="case-card-copy">
                <p className="eyebrow">UX/UI · Accessibility · 2026 Q2</p>
                <h3>En tydligare väg genom lärandet.</h3>
                <p>
                  En personcentrerad redesign av AcadeMedia Academy som minskar
                  informationsöverflöd och gör nästa steg lättare att förstå.
                </p>
                <span>
                  Läs case study <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>

            <a
              className="case-card"
              href="/case/kommunal"
              aria-label="Läs Kommunal Måendestöd case study"
            >
              <div className="case-card-media case-card-media--kommunal">
                <img
                  src="/images/kommunal-overview.png"
                  alt="Bilder före och efter redesignen av Kommunal Måendestöd."
                  loading="lazy"
                />
              </div>
              <div className="case-card-copy">
                <p className="eyebrow">UI design · Prototyping · 2025 Q2</p>
                <h3>Kommunal Måendestöd</h3>
                <p>
                  Ett lugnare självskattningsflöde som gör resultat och nästa
                  steg lättare att förstå.
                </p>
                <span>
                  Läs case study <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>

            <a
              className="case-card"
              href="/case/duro"
              aria-label="Läs Duro Sweden case study"
            >
              <div className="case-card-media case-card-media--duro">
                <img
                  src="/images/duro-product-grid.png"
                  alt="Redesignad tapetkatalog för Duro Sweden."
                  loading="lazy"
                />
              </div>
              <div className="case-card-copy">
                <p className="eyebrow">UX/UI · WCAG 2.1 AA · 2026 Q1</p>
                <h3>Duro Sweden: tillgänglig webbhandel</h3>
                <p>
                  Tydligare filtrering, bättre kontrast och en mer inkluderande
                  väg genom sortimentet.
                </p>
                <span>
                  Läs case study <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>

            <article
              className="case-card case-card--pending"
              aria-label="Le Keramik, kommande projekt"
            >
              <div className="case-card-media pending-card-media">
                <div>
                  <p>Kommande projekt</p>
                  <span>UX</span>
                </div>
              </div>
              <div className="case-card-copy">
                <p className="eyebrow">UX · 2026 Q4</p>
                <h3>Le Keramik</h3>
                <p>Information om detta projekt kommer inom kort.</p>
                <span>Kommande</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="home-contribution section-rule" id="contribution">
        <div className="site-shell">
          <div className="home-section-head contribution-heading">
            <div>
              <p className="eyebrow">Mitt perspektiv</p>
              <h2>Vad jag bidrar med</h2>
            </div>
            <p>
              Design som håller ihop helheten, med ett skarpt öga för detaljer.
            </p>
          </div>

          <div className="value-grid">
            <article>
              <span>01</span>
              <h3>Designgrunder</h3>
              <p>
                Färsk kunskap och ett perspektiv grundat i goda designprinciper,
                användarcentrerad design och tillgänglighet.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>UI och visuell gestaltning</h3>
              <p>
                Ett särskilt intresse för hur visuell estetik, typografi och
                färglära möter funktionell layout och tydlig hierarki.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Videoproduktion</h3>
              <p>
                En passion för rörligt berättande och redigering i CapCut, från
                idé till färdig visuell berättelse.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="home-about section-rule" id="about">
        <div className="site-shell">
          <div className="about-grid">
            <div className="about-copy">
              <p className="eyebrow">Om mig</p>
              <h2>Nyfiken på detaljerna som gör skillnad.</h2>
              <p>
                Jag heter Karolina och studerar Experience Design på
                Futuregames. Jag är nyfiken på hur form, innehåll och teknik kan
                samspela för att skapa tydliga och engagerande upplevelser. Med
                ett skarpt öga för detaljer arbetar jag strukturerat och
                kreativt, med både mottagaren och helheten i fokus.
              </p>
              <p>
                Mitt fokus ligger i skärningspunkten mellan visuell form, smarta
                flöden och stark kommunikation. Jag tycker om att utveckla idéer
                från första koncept till färdigt uttryck och rör mig obehindrat
                mellan research, design, bild, rörligt innehåll och digitala
                verktyg. Oavsett format vill jag skapa lösningar som känns
                relevanta, genomtänkta och lätta att ta till sig.
              </p>
            </div>

            <div className="about-aside">
              <figure className="about-portrait">
                <img
                  src="/images/karolina-portrait.jpg"
                  alt="Porträtt av Karolina Paraskevas i en höstpark"
                  width={1600}
                  height={1043}
                  loading="lazy"
                />
              </figure>

              <dl className="coordinates" aria-label="Kort om Karolina">
                <div>
                  <dt>Utgår från</dt>
                  <dd>Karlstad, Värmland</dd>
                </div>
                <div>
                  <dt>Fokus</dt>
                  <dd>Digital design &amp; AI</dd>
                </div>
                <div>
                  <dt>Just nu</dt>
                  <dd>Söker LIA</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="about-expertise" aria-label="Kompetenser och verktyg">
            <div className="expertise-group">
              <p className="eyebrow">Kompetens</p>
              <ul className="expertise-list">
                {[
                  'UX/UI',
                  'UX Research',
                  'User testing',
                  'Gamification',
                  'Agil projektmetodik',
                  'Service design',
                  'Speldesign',
                  'Interaktionsdesign',
                  'Tillgänglighet',
                  'Generativ AI',
                  'Vibe / flow coding',
                  'Videoredigering',
                  'Fotografi',
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="expertise-group">
              <p className="eyebrow">Verktyg</p>
              <ul className="expertise-list expertise-list-tools">
                {[
                  'Figma',
                  'Google Gemini',
                  'Codex',
                  'Trello',
                  'ChatGPT',
                  'Miro',
                  'CapCut',
                  'Canva',
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="home-lia section-rule" id="lia">
        <div className="site-shell lia-grid">
          <div>
            <p className="eyebrow">Nästa kapitel</p>
            <h2>Jag söker LIA inom UX.</h2>
          </div>
          <div className="lia-copy">
            <p className="prose-large">
              Jag vill bidra med nyfikenhet, struktur och ett starkt driv att
              förstå både användare, team och produkt.
            </p>
            <p className="lia-period">
              <span>Period</span> 4/1 till 21/5 2027
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
