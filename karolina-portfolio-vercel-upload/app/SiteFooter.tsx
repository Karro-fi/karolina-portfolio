import ContactPanelEffects from './ContactPanelEffects';

type SiteFooterProps = {
  backHref?: string;
  backLabel?: string;
};

export default function SiteFooter({
  backHref = '#top',
  backLabel = 'Tillbaka till toppen ↑',
}: SiteFooterProps) {
  return (
    <footer className="site-footer" id="contact">
      <ContactPanelEffects />
      <div className="site-shell footer-contact">
        <div className="footer-contact-copy">
          <p className="eyebrow">Kontakt &amp; samarbete</p>
          <h2>Låt oss prata vidare.</h2>
          <p>
            Har du en LIA-plats, ett projekt eller en idé som du vill bolla?
            Jag tar gärna ett första samtal om UX, visuell gestaltning och
            digital design.
          </p>
        </div>

        <nav className="footer-contact-links" aria-label="Kontaktlänkar">
          <a href="mailto:karolina.paraskevas@gmail.com">
            <span>Mail</span>
            <strong>karolina.paraskevas@gmail.com</strong>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/karolina-paraskevas-887808200/"
            target="_blank"
            rel="noreferrer"
            aria-label="Karolina Paraskevas på LinkedIn"
          >
            <span>LinkedIn</span>
            <strong>LinkedIn</strong>
            <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>

      <div className="site-shell footer-meta">
        <p>Karolina Paraskevas · Experience Designer</p>
        <a href={backHref}>{backLabel}</a>
      </div>
    </footer>
  );
}
