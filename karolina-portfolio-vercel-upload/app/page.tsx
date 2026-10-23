import ContributionRevealSection from './ContributionRevealSection';
import PortfolioEffects from './PortfolioEffects';
import SiteFooter from './SiteFooter';
import SiteNavigation from './SiteNavigation';

export default function PortfolioHome() {
  return (
    <main>
      <PortfolioEffects />
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
            <p className="eyebrow">Studerande Experience Designer · Karlstad</p>
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
              <a className="text-link text-link-scroll" href="#work">
                <span>Se mina projekt</span>
                <span className="text-link-arrow" aria-hidden="true">↓</span>
              </a>
            </div>
            <a className="status-pill" href="#lia">
              Söker LIA · 4 jan–21 maj 2027
            </a>
          </div>
        </div>
      </section>

      <section className="home-work section-rule motion-line" id="work">
        <div className="site-shell">
          <div className="home-section-head">
            <div>
              <p className="eyebrow">Utvalda projekt</p>
              <h2>Projekt</h2>
            </div>
            <p>4 publicerade · 1 kommande</p>
          </div>

          <div className="project-card-grid">
            <a
              className="case-card"
              href="/case/academedia"
              aria-label="Läs projektet AcadeMedia Academy"
            >
              <div className="case-card-media case-card-media--academedia">
                <img
                  src="/images/dashboard-start.webp"
                  alt="Dashboarden i Karolinas redesign av AcadeMedia Academy."
                />
              </div>
              <div className="case-card-copy">
                <p className="eyebrow">UX/UI · Lärplattform · 2026 Q2</p>
                <h3>AcadeMedia Academy</h3>
                <p>
                  En personcentrerad redesign av AcadeMedia Academy som minskar
                  informationsöverflöd och gör nästa steg lättare att förstå.
                </p>
                <span>
                  Läs projektet <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>

            <a
              className="case-card"
              href="/case/kommunal"
              aria-label="Läs projektet Kommunal Måendestöd"
            >
              <div className="case-card-media case-card-media--kommunal">
                <img
                  src="/images/kommunal-mobile.png"
                  alt="Mobilmockup för Kommunal Måendestöd."
                  loading="lazy"
                />
              </div>
              <div className="case-card-copy">
                <p className="eyebrow">UX/UI · Självskattning · 2025 Q2</p>
                <h3>Kommunal Måendestöd</h3>
                <p>
                  Ett lugnare självskattningsflöde som gör resultat och nästa
                  steg lättare att förstå.
                </p>
                <span>
                  Läs projektet <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>

            <a
              className="case-card"
              href="/case/duro"
              aria-label="Läs projektet Duro Sweden"
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
                <h3>Duro Sweden</h3>
                <p>
                  Tydligare filtrering, bättre kontrast och en mer inkluderande
                  väg genom sortimentet.
                </p>
                <span>
                  Läs projektet <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>

            <article
              className="case-card case-card--pending"
              aria-label="LE Keramik, kommande projekt"
            >
              <div className="case-card-media pending-card-media">
                <div>
                  <p>Kommande projekt</p>
                  <span>UX</span>
                </div>
              </div>
              <div className="case-card-copy">
                <p className="eyebrow">UX · 2026 Q4</p>
                <h3>LE Keramik</h3>
                <p>Case study publiceras när projektet är redo att visas.</p>
                <span>Kommande</span>
              </div>
            </article>

            <a
              className="case-card case-card--game"
              href="https://karropara.itch.io/hxan-till-blkulla"
              target="_blank"
              rel="noreferrer"
              aria-label="Spela Häxan till Blåkulla på itch.io, öppnas i en ny flik"
            >
              <div className="case-card-media case-card-media--game">
                <img
                  src="/images/haxan-till-blakulla.webp"
                  alt="Pixelillustration från Häxan till Blåkulla med en liten häxa, plattformar, fiender och Blåkulla i bakgrunden."
                  loading="lazy"
                />
              </div>
              <div className="case-card-copy">
                <p className="eyebrow">
                  Game design · Experience design · Spelkurs
                </p>
                <h3>Häxan till Blåkulla</h3>
                <p className="game-card-intro">
                  Ett vibekodat miniprojekt från en speldesignkurs: ett
                  2D-plattformsspel i retrostil med åtta banor på vägen mot
                  Blåkulla.
                </p>
                <p className="game-card-detail">
                  Jag formgav progression, svårighetskurva och spelarfeedback,
                  från samlarobjekt och flygkraft till större strider.
                </p>
                <p className="game-card-hook">
                  Klarar du dig hela vägen till slutbossen?
                </p>
                <span>
                  Spela på itch.io <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <ContributionRevealSection
        className="home-contribution section-rule motion-line"
        id="contribution"
      >
        <div className="site-shell">
          <div className="home-section-head contribution-heading">
            <div>
              <p className="eyebrow">Mitt perspektiv</p>
              <h2>Vad jag bidrar med</h2>
            </div>
            <p>
              <span className="heading-line">Design som håller ihop helheten,</span>
              <span className="heading-line">med ett skarpt öga för detaljer.</span>
            </p>
          </div>

          <div className="value-grid">
            <article>
              <h3>Designgrunder</h3>
              <p>
                Ett perspektiv grundat i designprinciper, användarcentrerade
                metoder och tillgänglighet.
              </p>
            </article>
            <article>
              <h3>UI och visuell gestaltning</h3>
              <p>
                Ett särskilt intresse för hur visuell estetik, typografi och
                färglära möter funktionell layout och tydlig hierarki.
              </p>
            </article>
            <article>
              <h3>Videoproduktion</h3>
              <p>
                En passion för rörligt berättande och redigering i CapCut, från
                idé till färdig visuell berättelse.
              </p>
            </article>
          </div>
        </div>
      </ContributionRevealSection>

      <section className="home-about section-rule motion-line" id="about">
        <div className="site-shell">
          <div className="about-grid">
            <div className="about-copy">
              <p className="eyebrow">Om mig</p>
              <h2>Nyfiken på detaljerna som gör skillnad.</h2>
              <p>
                Jag heter Karolina och studerar Experience Design på
                Futuregames. Jag trivs i skärningspunkten mellan visuell form,
                användarflöden och stark kommunikation.
              </p>
              <p>
                Jag arbetar strukturerat från research och koncept till färdig
                design, med mottagaren och helheten i fokus. Oavsett format vill
                jag skapa lösningar som känns relevanta, genomtänkta och lätta
                att ta till sig.
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

          <div className="about-expertise" aria-labelledby="expertise-title">
            <div className="expertise-intro">
              <p className="eyebrow">Kompetens &amp; verktyg</p>
              <h3 id="expertise-title">Det jag arbetar med</h3>
            </div>

            <div className="expertise-editorial-grid">
              <section className="expertise-column">
                <h4>UX &amp; design</h4>
                <ul>
                  {[
                    'UX/UI',
                    'Användarresearch',
                    'Användartester',
                    'Interaktionsdesign',
                    'Tillgänglighet',
                    'Tjänstedesign',
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="expertise-column">
                <h4>Skapande &amp; arbetssätt</h4>
                <ul>
                  {[
                    'Spelifiering',
                    'Agila arbetssätt',
                    'Speldesign',
                    'Generativ AI',
                    'AI-assisterad prototypning',
                    'Videoredigering',
                    'Fotografi',
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="expertise-column">
                <h4>Verktyg</h4>
                <ul>
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
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="home-lia section-rule motion-line" id="lia">
        <div className="site-shell lia-grid">
          <div>
            <p className="eyebrow">Nästa kapitel</p>
            <h2>Jag söker LIA inom digital design.</h2>
          </div>
          <div className="lia-copy">
            <p className="prose-large">
              Jag vill bidra med nyfikenhet, struktur och ett starkt driv att
              förstå både användare, team och produkt.
            </p>
            <p className="lia-period">
              <span>Period</span> 4 jan–21 maj 2027
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
