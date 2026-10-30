import CaseProgress from '../CaseProgress';
import SiteFooter from '../SiteFooter';
import SiteNavigation from '../SiteNavigation';

type MetaItem = {
  label: string;
  value: string;
};

type ProcessStep = {
  number: string;
  title: string;
  text: string;
};

type Principle = {
  title: string;
  text: string;
};

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export type EditorialCaseProps = {
  readingTime: string;
  eyebrow: string;
  title: string;
  intro: string;
  meta: MetaItem[];
  hero: GalleryImage;
  challengeTitle: string;
  challengeText: string[];
  designQuestion: string[];
  problemText: string;
  solutionTitle: string;
  solutionText: string;
  contributionTitle: string[];
  contributionIntro: string;
  contributionItems: string[];
  contributionImage: GalleryImage;
  processTitle: string;
  processIntro: string;
  processSteps: ProcessStep[];
  galleryTitle: string;
  galleryIntro: string;
  gallery: GalleryImage[];
  principlesTitle: string;
  principles: Principle[];
  reflectionTitle: string;
  reflectionText: string[];
  quote: string;
  nextHref: string;
  nextLabel: string;
};

function BrowserFrame({
  label,
  image,
  className = '',
}: {
  label: string;
  image: GalleryImage;
  className?: string;
}) {
  return (
    <figure className={`browser-frame ${className}`}>
      <div className="browser-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <span className="browser-label">{label}</span>
      </div>
      <img src={image.src} alt={image.alt} loading="lazy" />
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}

export default function EditorialCase(props: EditorialCaseProps) {
  return (
    <main className="case-page editorial-case">
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
            <p className="eyebrow">{props.eyebrow}</p>
            <div className="case-context" aria-label="Projektinformation">
              <p className="case-index">Lästid · {props.readingTime}</p>
            </div>
          </div>
          <h1>{props.title}</h1>
          <p className="hero-intro">{props.intro}</p>

          <dl className="project-meta" aria-label="Projektfakta">
            {props.meta.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <figure className="hero-visual" id="case">
            <div className="browser-bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <span className="browser-label">{props.title}</span>
            </div>
            <div className="hero-image-window">
              <img src={props.hero.src} alt={props.hero.alt} />
            </div>
            <figcaption>{props.hero.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section-rule">
        <div className="site-shell split-intro">
          <div>
            <p className="eyebrow">Utmaningen</p>
            <h2>{props.challengeTitle}</h2>
          </div>
          <div className="prose-large">
            {props.challengeText.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="case-question-compact">
              <p className="eyebrow">Designfråga</p>
              <p>{props.designQuestion.join(' ')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section contribution-section">
        <div className="site-shell contribution-grid">
          <div className="contribution-marker">
            <span>Min roll</span>
            <strong>
              {props.meta[0]?.value.split(' · ').map((role) => (
                <span className="heading-line" key={role}>{role}</span>
              ))}
            </strong>
          </div>
          <div className="contribution-copy">
            <p className="eyebrow">Mitt bidrag</p>
            <h2>
              {props.contributionTitle.map((line) => (
                <span className="heading-line" key={line}>{line}</span>
              ))}
            </h2>
            <p className="prose-large">{props.contributionIntro}</p>
            <ul className="contribution-list">
              {props.contributionItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-rule" id="process">
        <div className="site-shell">
          <div className="section-heading">
            <p className="eyebrow">Process</p>
            <h2>{props.processTitle}</h2>
            <p>{props.processIntro}</p>
          </div>

          <div className="process-grid">
            {props.processSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <div className="insight-panel">
            <div>
              <p className="eyebrow">Från problem till riktning</p>
              <h3>{props.solutionTitle}</h3>
            </div>
            <div className="insight-columns">
              <div>
                <h4>Utgångsläge</h4>
                <p>{props.problemText}</p>
              </div>
              <div>
                <h4>Designbeslut</h4>
                <p>{props.solutionText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section solution-section" id="solution">
        <div className="site-shell section-heading solution-heading">
          <p className="eyebrow">Slutlig lösning</p>
          <h2>{props.galleryTitle}</h2>
          <p>{props.galleryIntro}</p>
        </div>
        <div className="site-shell full-visual">
          <BrowserFrame label={`${props.title} · huvudflöde`} image={props.contributionImage} />
        </div>
        <div className="site-shell learning-gallery solution-gallery-compact">
          {props.gallery.map((image, index) => (
            <BrowserFrame key={image.src} label={`Vy 0${index + 1}`} image={image} />
          ))}
        </div>
        <div className="site-shell case-decisions-compact">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Bärande designbeslut</p>
            <h2>{props.principlesTitle}</h2>
          </div>
          <div className="principle-grid">
            {props.principles.map((principle, index) => (
              <article key={principle.title}>
                <span>0{index + 1}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section reflection-section" id="reflection">
        <div className="site-shell reflection-grid">
          <div>
            <p className="eyebrow">Reflektion</p>
            <h2>{props.reflectionTitle}</h2>
          </div>
          <div className="reflection-copy">
            {props.reflectionText.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <blockquote>{props.quote}</blockquote>
          </div>
        </div>
      </section>

      <a className="next-case" href={props.nextHref}>
        <span>Nästa case</span>
        <strong>{props.nextLabel}</strong>
        <span aria-hidden="true">→</span>
      </a>

      <SiteFooter backHref="/" backLabel="← Till portfolion" />
    </main>
  );
}
