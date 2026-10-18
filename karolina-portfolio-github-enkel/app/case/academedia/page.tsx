import type { Metadata } from 'next';
import SiteFooter from '../../SiteFooter';
import SiteNavigation from '../../SiteNavigation';

export const metadata: Metadata = {
  title: 'AcadeMedia Academy: Case study',
  description:
    'En UX/UI case study om hur AcadeMedia Academy omformades för tydligare navigation, personliga rekommendationer och lägre kognitiv belastning.',
  openGraph: {
    title: 'En tydligare väg genom lärandet.',
    description: 'AcadeMedia Academy · UX/UI case study',
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
    description: 'AcadeMedia Academy · UX/UI case study',
    images: ['/images/dashboard-start.webp'],
  },
};

const processSteps = [
  {
    number: '01',
    title: 'Research & syntes',
    text: 'Vi analyserade befintliga användarintervjuer, klustrade återkommande hinder och gjorde desk research på jämförbara lärplattformar.',
  },
  {
    number: '02',
    title: 'Idégenerering & prototyp',
    text: 'Teamet tog fram parallella mockups, röstade fram de starkaste riktningarna och kombinerade dem i en gemensam, iterativ prototyp i Figma.',
  },
  {
    number: '03',
    title: 'Test & validering',
    text: 'Ett användbarhetstest och två heuristiska utvärderingar synliggjorde vad som fungerade och vilka delar som behövde tydligare återkoppling.',
  },
];

const principles = [
  {
    title: 'Igenkänning framför minne',
    text: 'Rollrelevanta rekommendationer och tydlig kursstatus gör att användaren slipper komma ihåg var innehållet finns.',
  },
  {
    title: 'Förebygg fel',
    text: 'Fördefinierade filter, synliga val och en tydlig funktion för Rensa filter minskar osäkerhet i sökflödet.',
  },
  {
    title: 'Kontroll & frihet',
    text: 'Sparade, påbörjade och avslutade utbildningar får egna ytor så att nästa steg alltid går att överblicka.',
  },
];

function BrowserFrame({
  label,
  src,
  alt,
  caption,
  className = '',
  priority = false,
}: {
  label: string;
  src: string;
  alt: string;
  caption: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={`browser-frame ${className}`}>
      <div className="browser-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <span className="browser-label">{label}</span>
      </div>
      <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="site-shell site-nav">
          <a className="wordmark" href="/" aria-label="Karolina Paraskevas, startsida">
            Karolina Paraskevas
          </a>
          <SiteNavigation
            initialHref="#case"
            items={[
              { href: '/', label: 'Alla projekt' },
              { href: '#case', label: 'Case study' },
              { href: '#process', label: 'Process' },
              { href: '#solution', label: 'Lösning' },
              { href: '#reflection', label: 'Reflektion' },
              { href: '#contact', label: 'Kontakta mig' },
            ]}
          />
        </div>
      </header>

      <section className="hero" id="top">
        <div className="site-shell">
          <div className="eyebrow-row">
            <p className="eyebrow">Case study · Experience design</p>
            <p className="case-index">Projektperiod · 2026 Q2</p>
          </div>

          <h1>En tydligare väg genom lärandet.</h1>
          <p className="hero-intro">
            En personcentrerad redesign av AcadeMedia Academy, skapad för att minska
            informationsöverflöd, synliggöra framsteg och göra relevant kompetensutveckling
            enklare att hitta.
          </p>

          <dl className="project-meta" aria-label="Projektfakta">
            <div>
              <dt>Min roll</dt>
              <dd>UX/UI designer & prototyper</dd>
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
              Academy ska vara navet för AcadeMedias medarbetares kompetensutveckling. I
              utgångsläget möttes användaren av en opersonlig struktur, otydlig navigation och
              ett stort kursutbud som var svårt att sålla.
            </p>
            <p>
              Resultatet blev digital osäkerhet genom hela flödet, från att hitta rätt kurs
              till att förstå formatet och känna sig trygg nog att anmäla sig.
            </p>
          </div>
        </div>

        <div className="site-shell stat-strip" aria-label="Projektets omfattning">
          <div>
            <strong>700+</strong>
            <span>verksamheter i norra Europa</span>
          </div>
          <div>
            <strong>3</strong>
            <span>länder: Sverige, Norge och Tyskland</span>
          </div>
          <div>
            <strong>1</strong>
            <span>gemensam lärplattform</span>
          </div>
        </div>
      </section>

      <section className="section statement-section">
        <div className="site-shell statement-grid">
          <p className="eyebrow">Designfråga</p>
          <blockquote>
            Hur kan vi skapa en dashboard och katalog som visar rollrelevanta utbildningar,
            motiverar genom synliga framsteg och gör nästa steg självklart?
          </blockquote>
        </div>
      </section>

      <section className="section section-rule">
        <div className="site-shell">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Målgrupp</p>
            <h2>En plattform. Flera arbetssituationer.</h2>
            <p>
              Lösningen behöver fungera både för kontinuerligt lärande och för obligatoriska
              utbildningar, oavsett roll eller verksamhet.
            </p>
          </div>

          <div className="audience-grid">
            <article>
              <span>01</span>
              <h3>Lärare & pedagoger</h3>
              <p>Behöver hitta relevant kompetensutveckling utan att lämna det dagliga arbetets tempo.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Administrativ personal</h3>
              <p>Behöver överblick över obligatoriskt innehåll, riktlinjer och återkommande utbildningar.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Skolledare</h3>
              <p>Behöver kunna följa progression och stötta medarbetarnas utveckling på ett tydligt sätt.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section contribution-section">
        <div className="site-shell contribution-grid">
          <div className="contribution-marker">
            <span>Min roll</span>
            <strong>UX/UI designer och prototyper</strong>
          </div>
          <div className="contribution-copy">
            <p className="eyebrow">Mitt bidrag</p>
            <h2>Struktur i både produkt och process.</h2>
            <p className="prose-large">
              Jag tog en aktiv designerroll med fokus på gränssnittsprototyp, visuellt flöde och ordning
              i teamets gemensamma arbetsfiler.
            </p>
            <ul className="contribution-list">
              <li>Drev den interaktiva prototypen i Figma framåt.</li>
              <li>Strukturerade planering, komponenter och lager i FigJam och Figma.</li>
              <li>Formgav ”AcadeMedia tipsar” som en tydlig, navigerbar karusell.</li>
              <li>Byggde hovringslägen och mikrointeraktioner för utbildningskorten.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section tipsar-section">
        <div className="site-shell tipsar-grid">
          <div className="tipsar-copy">
            <p className="eyebrow">Mitt komponentansvar</p>
            <h2>AcadeMedia tipsar</h2>
            <p className="prose-large">
              Jag formgav karusellkomponenten från kortstruktur och visuell hierarki till
              navigation och återkoppling.
            </p>
            <p>
              Komponenten hjälper användaren att upptäcka relevanta utbildningar utan att
              tappa sammanhanget på dashboarden.
            </p>
            <dl className="component-facts" aria-label="Mitt ansvar för komponenten">
              <div><dt>Ansvar</dt><dd>Komponentdesign och prototyp</dd></div>
              <div><dt>Fokus</dt><dd>Tydlig navigation och igenkänning</dd></div>
            </dl>
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
            <h2>Från research till en validerad riktning.</h2>
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
              <h3>Det personliga var rätt. Prioriteringen behövde bli skarpare.</h3>
            </div>
            <div className="insight-columns">
              <div>
                <h4>Det fungerade</h4>
                <ul>
                  <li>Progression och certifikat uppskattades.</li>
                  <li>Kurskorten gav relevant information.</li>
                  <li>Navigationen upplevdes intuitiv.</li>
                </ul>
              </div>
              <div>
                <h4>Det behövde justeras</h4>
                <ul>
                  <li>Kurser borde filtreras efter målgrupp automatiskt.</li>
                  <li>CTA för nya utbildningar behövde högre prioritet.</li>
                  <li>Nästa steg behövde bli mer framträdande.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section solution-section" id="solution">
        <div className="site-shell section-heading solution-heading">
          <p className="eyebrow">Slutlig lösning</p>
          <h2>Ett lugnare gränssnitt med tydligare vägval.</h2>
          <p>
            Dashboarden prioriterar det som är relevant just nu. Katalogen hjälper användaren
            att förstå innehållet innan ett beslut, och separata lärandeytor gör progressionen
            lätt att följa.
          </p>
        </div>

        <div className="site-shell full-visual">
          <BrowserFrame
            label="Academy · Dashboard"
            src="/images/dashboard-start.webp"
            alt="Hela den omdesignade dashboarden i Academy från välkomstyta till rekommenderade och obligatoriska utbildningar."
            caption="Dashboarden i sin helhet. Bilden visas utan beskärning för att bevara den tänkta vertikala rytmen och prioriteringen mellan sektionerna."
          />
        </div>
      </section>

      <section className="section section-rule catalog-section">
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
          <p className="eyebrow">Mitt lärande</p>
          <h2>Progression som går att förstå med en blick.</h2>
          <p>
            Påbörjade, avslutade och sparade utbildningar får varsin tydlig kontext. Det gör
            det enklare att fortsätta, återvända eller hitta nästa relevanta kurs.
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
            label="Avslutade"
            src="/images/completed-courses.webp"
            alt="Sidan för avslutade utbildningar med slutförda kurskort och hundra procents progression."
            caption="Avslutade utbildningar gör resultat och certifikat synliga."
          />
          <BrowserFrame
            label="Sparade"
            src="/images/saved-courses-updated.png"
            alt="Hela sidan Mina sparade utbildningar med kategorier, kurskort och personliga rekommendationer."
            caption="Sparade utbildningar visas i sin helhet med det uppdaterade kortet Google Suite introduktion Förskola."
          />
        </div>
      </section>

      <section className="section principle-section section-rule">
        <div className="site-shell">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Designprinciper</p>
            <h2>Tre principer höll lösningen samman.</h2>
          </div>
          <div className="principle-grid">
            {principles.map((principle, index) => (
              <article key={principle.title}>
                <span>0{index + 1}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section outcome-section">
        <div className="site-shell outcome-grid">
          <div>
            <p className="eyebrow">Validering</p>
            <h2>Tydligare helhet med identifierade nästa steg.</h2>
          </div>
          <div className="outcome-copy">
            <p className="prose-large">
              De heuristiska utvärderingarna bekräftade att dashboarden gav en tydlig och
              motiverande överblick, medan katalogens filter och informationshierarki gjorde
              det lättare att fatta beslut.
            </p>
            <div className="outcome-list">
              <div><span>01</span><p>Personliga rekommendationer minskar irrelevant innehåll.</p></div>
              <div><span>02</span><p>Konsekventa mönster stärker orientering och kontroll.</p></div>
              <div><span>03</span><p>Tydlig kursstatus stödjer nästa handling.</p></div>
              <div><span>04</span><p>Support, empty states och feedback är naturliga nästa steg.</p></div>
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
              merarbete och gjorde den sena valideringen mer kostsam än den behövde vara.
            </p>
            <p>
              Min viktigaste lärdom är därför timing: utvärdera konceptet medan det fortfarande
              är billigt att ändra. Jag tog också med mig hur mycket kognitiv energi ett team
              sparar när struktur, komponenter och ansvar är tydliga från första dagen.
            </p>
            <blockquote>
              ”Struktur är inte bara ordning i filerna. Det är ett designbeslut som gör bättre
              iterationer möjliga.”
            </blockquote>
          </div>
        </div>
      </section>

      <a className="next-case" href="/case/kommunal">
        <span>Nästa case</span>
        <strong>Kommunal Måendestöd</strong>
        <span aria-hidden="true">↗</span>
      </a>

      <SiteFooter backHref="/" backLabel="Till portfolion ↗" />
    </main>
  );
}
