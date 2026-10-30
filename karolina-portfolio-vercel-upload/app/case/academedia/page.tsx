import type { Metadata } from 'next';
import CaseProgress from '../../CaseProgress';
import SiteFooter from '../../SiteFooter';
import SiteNavigation from '../../SiteNavigation';

export const metadata: Metadata = {
  title: 'AcadeMedia Academy · UX/UI-case',
  description:
    'Ett UX/UI-case om hur AcadeMedia Academy omformades för tydligare navigation, personliga rekommendationer och lägre kognitiv belastning.',
  openGraph: {
    title: 'En tydligare väg genom lärandet.',
    description: 'AcadeMedia Academy · UX/UI-case',
    images: [
      {
        url: '/images/dashboard-start.webp',
        alt: 'Dashboarden i Karolina Paraskevas redesign av AcadeMedia Academy.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'En tydligare väg genom lärandet.',
    description: 'AcadeMedia Academy · UX/UI-case',
    images: ['/images/dashboard-start.webp'],
  },
};

const processSteps = [
  {
    number: '01',
    title: 'Insikter & syntes',
    text: 'Vi analyserade befintliga intervjuer, klustrade återkommande hinder och jämförde andra lärplattformar.',
  },
  {
    number: '02',
    title: 'Idégenerering & prototyp',
    text: 'Teamet tog fram parallella mockups och kombinerade de starkaste riktningarna i en gemensam Figma-prototyp.',
  },
  {
    number: '03',
    title: 'Test & validering',
    text: 'Ett användbarhetstest och två heuristiska utvärderingar visade vad som fungerade och vad som behövde tydligare prioritering.',
  },
];

function BrowserFrame({
  label,
  src,
  alt,
  caption,
  className = '',
  priority = false,
  expandable = false,
}: {
  label: string;
  src: string;
  alt: string;
  caption: string;
  className?: string;
  priority?: boolean;
  expandable?: boolean;
}) {
  return (
    <figure className={`browser-frame ${className}`}>
      <div className="browser-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <span className="browser-label">{label}</span>
      </div>
      {expandable ? (
        <a
          className="expandable-image"
          href={src}
          target="_blank"
          rel="noreferrer"
          aria-label={`Öppna ${label} i full storlek`}
        >
          <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} />
          <span>Visa hela vyn ↗</span>
        </a>
      ) : (
        <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} />
      )}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <main className="case-page academedia-case">
      <header className="site-header">
        <div className="site-shell site-nav">
          <a className="wordmark" href="/" aria-label="Karolina Paraskevas, startsida">
            Karolina Paraskevas
          </a>
          <SiteNavigation
            initialHref="#case"
            items={[
              { href: '/', label: 'Alla projekt' },
              { href: '#case', label: 'Översikt' },
              { href: '#process', label: 'Process' },
              { href: '#solution', label: 'Lösning' },
              { href: '#reflection', label: 'Reflektion' },
              { href: '#contact', label: 'Kontakta mig' },
            ]}
          />
        </div>
        <CaseProgress />
      </header>

      <section className="hero" id="top">
        <div className="site-shell">
          <div className="eyebrow-row">
            <p className="eyebrow">UX/UI-case · Lärplattform</p>
            <div className="case-context" aria-label="Projektinformation">
              <p className="case-index">Lästid · 4 min</p>
            </div>
          </div>

          <h1>En tydligare väg genom lärandet.</h1>
          <p className="hero-intro">
            En personcentrerad redesign av AcadeMedia Academy som minskar
            informationsöverflöd och gör relevant kompetensutveckling enklare att hitta och
            fortsätta.
          </p>

          <dl className="project-meta" aria-label="Projektfakta">
            <div>
              <dt>Min roll</dt>
              <dd>UX/UI-designer · prototypansvar</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>5 Experience Designers</dd>
            </div>
            <div>
              <dt>Period</dt>
              <dd>2026 Q2</dd>
            </div>
            <div>
              <dt>Verktyg</dt>
              <dd>Figma & FigJam</dd>
            </div>
          </dl>

          <figure className="hero-visual" id="case">
            <div className="browser-bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <span className="browser-label">Academy · Dashboard</span>
            </div>
            <div className="hero-image-window">
              <img
                src="/images/dashboard-start.webp"
                alt="Den omdesignade dashboarden för AcadeMedia Academy med profil, kursprogression och rekommendationer."
              />
            </div>
            <figcaption>
              Den nya dashboarden samlar progression, sparade utbildningar och personliga
              rekommendationer i ett tydligt första läge.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section section-rule">
        <div className="site-shell split-intro">
          <div>
            <p className="eyebrow">Utmaningen</p>
            <h2>Relevant innehåll försvann i mängden.</h2>
          </div>
          <div className="prose-large">
            <p>
              Academy ska vara navet för medarbetarnas kompetensutveckling. I utgångsläget
              gjorde en opersonlig struktur, otydlig navigation och ett stort kursutbud det
              svårt att hitta rätt.
            </p>
            <p>
              Osäkerheten följde användaren från sökning till anmälan: vad är relevant för min
              roll och vad blir nästa steg? Målgruppen bestod av lärare, pedagoger,
              administrativ personal och skolledare.
            </p>
            <div className="case-question-compact">
              <p className="eyebrow">Designfråga</p>
              <p>
                Hur kan dashboarden och utbildningskatalogen visa rollrelevant innehåll,
                synliga framsteg och ett tydligt nästa steg?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section contribution-section">
        <div className="site-shell contribution-grid">
          <div className="contribution-marker">
            <span>Min roll</span>
            <strong>
              <span className="heading-line">UX/UI-designer</span>
              <span className="heading-line">med prototypansvar</span>
            </strong>
          </div>
          <div className="contribution-copy">
            <p className="eyebrow">Mitt bidrag</p>
            <h2>Struktur i både produkt och process.</h2>
            <p className="prose-large">
              Jag ansvarade särskilt för den interaktiva Figma-prototypen, gränssnittets
              visuella flöde och strukturen i teamets arbetsfiler.
            </p>
            <ul className="contribution-list">
              <li>Byggde och samordnade den klickbara prototypen i Figma.</li>
              <li>Strukturerade komponenter, lager och arbetsflöde i FigJam och Figma.</li>
              <li>Formgav AcadeMedia tipsar med navigation, hovringslägen och återkoppling.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section tipsar-section">
        <div className="site-shell tipsar-grid">
          <div className="tipsar-copy">
            <p className="eyebrow">Mitt komponentansvar</p>
            <h2>AcadeMedia tipsar</h2>
            <div className="prose-large tipsar-copy-prose">
              <p>
                Jag formgav karusellen från kortstruktur och visuell hierarki till navigation,
                hovringslägen och återkoppling.
              </p>
              <p>
                Den hjälper användaren att upptäcka relevanta utbildningar utan att tappa
                sammanhanget.
              </p>
            </div>
          </div>
          <figure className="tipsar-visual">
            <img
              src="/images/academedia-tipsar.png"
              alt="Karusellkomponenten AcadeMedia tipsar med ett aktivt utbildningskort och tydliga navigationskontroller."
              loading="lazy"
            />
            <figcaption>
              AcadeMedia tipsar samlar rekommendationer i en fokuserad karusell där det
              aktiva kortet får tydligast visuell prioritet.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section section-rule" id="process">
        <div className="site-shell">
          <div className="section-heading">
            <p className="eyebrow">Process</p>
            <h2>Från insikter till en validerad riktning.</h2>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <div className="insight-panel">
            <div>
              <p className="eyebrow">Tidigt användbarhetstest</p>
              <h3>
                <span className="heading-line">Det personliga var rätt.</span>
                <span className="heading-line">Prioriteringen behövde bli skarpare.</span>
              </h3>
            </div>
            <div className="insight-columns">
              <div>
                <h4>Det fungerade</h4>
                <ul>
                  <li>Progression och certifikat uppskattades.</li>
                  <li>Kurskort och navigation upplevdes tydliga.</li>
                </ul>
              </div>
              <div>
                <h4>Det behövde justeras</h4>
                <ul>
                  <li>Kurser borde filtreras efter målgrupp automatiskt.</li>
                  <li>Nya utbildningar och nästa steg behövde högre prioritet.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-rule catalog-section" id="solution">
        <div className="site-shell catalog-grid">
          <div className="sticky-copy">
            <p className="eyebrow">Utbildningskatalog</p>
            <h2>Mer information. Mindre osäkerhet.</h2>
            <p>
              Filtrering efter roll, verksamhet, utbildningsform och plats ger kontroll över
              ett stort kursutbud. Tydlig metadata och konsekventa kort gör det enklare att
              avgöra om en utbildning passar.
            </p>
            <ul className="feature-list">
              <li>Valda filter syns direkt och kan tas bort.</li>
              <li>Påbörjade och obligatoriska kurser kan avgränsas.</li>
              <li>Status och primär handling anpassas efter kursläget.</li>
            </ul>
          </div>
          <BrowserFrame
            label="Academy · Utbildningskatalog"
            src="/images/course-catalog.webp"
            alt="Utbildningskatalogen med filter, sökfält och en grid av detaljerade kurskort."
            caption="Katalogen ger en samlad vy över filter, sökresultat och de viktigaste beslutsunderlagen på varje kort."
            className="catalog-visual"
          />
        </div>
      </section>

      <section className="section learning-section">
        <div className="site-shell section-heading compact-heading">
          <p className="eyebrow">Lärandeytor</p>
          <h2>Progression som går att förstå med en blick.</h2>
          <p>
            Påbörjade och sparade utbildningar får en tydlig kontext så att det blir enklare
            att fortsätta eller återvända.
          </p>
        </div>

        <div className="site-shell learning-gallery">
          <BrowserFrame
            label="Påbörjade"
            src="/images/started-courses.webp"
            alt="Sidan för påbörjade utbildningar med progressionskort grupperade per verksamhet."
            caption="Påbörjade utbildningar visar återstående tid och progression."
          />
          <BrowserFrame
            label="Sparade"
            src="/images/saved-courses-updated.png"
            alt="Hela sidan Mina sparade utbildningar med kategorier, kurskort och personliga rekommendationer."
            caption="Sparade utbildningar visas i sin helhet med det uppdaterade kortet Google Suite introduktion Förskola."
          />
        </div>
      </section>

      <section className="section outcome-section">
        <div className="site-shell outcome-grid">
          <div>
            <p className="eyebrow">Resultat</p>
            <h2>Vad valideringen visade.</h2>
          </div>
          <div className="outcome-copy">
            <p className="prose-large">
              Utvärderingarna bekräftade att dashboarden gav en tydlig överblick och att
              filter och informationshierarki gjorde katalogen lättare att använda.
            </p>
            <div className="outcome-list">
              <div><p>Personliga rekommendationer minskar irrelevant innehåll.</p></div>
              <div><p>Synlig kursstatus gör nästa handling tydlig.</p></div>
              <div><p>Filter och konsekventa mönster stärker orientering och kontroll.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section reflection-section" id="reflection">
        <div className="site-shell reflection-grid">
          <div>
            <p className="eyebrow">Reflektion</p>
            <h2>Validera riktningen innan detaljerna blir dyra.</h2>
          </div>
          <div className="reflection-copy">
            <p>
              Vi gick tidigt långt i Figma och fick backa när nya insikter kom. Det skapade
              merarbete.
            </p>
            <p>
              Min viktigaste lärdom är därför timing: utvärdera konceptet medan det fortfarande
              är billigt att ändra. Jag tog också med mig hur mycket enklare det blir att iterera
              när komponenter, arbetsfiler och ansvar är tydliga från början.
            </p>
            <blockquote>
              Struktur är inte bara ordning i filerna. Det är ett designbeslut som gör bättre
              iterationer möjliga.
            </blockquote>
          </div>
        </div>
      </section>

      <a className="next-case" href="/case/kommunal">
        <span>Nästa case</span>
        <strong>Kommunal Måendestöd</strong>
        <span aria-hidden="true">→</span>
      </a>

      <SiteFooter backHref="/" backLabel="← Till portfolion" />
    </main>
  );
}
