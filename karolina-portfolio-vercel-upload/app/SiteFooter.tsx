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
      <div className="site-shell footer-contact">
        <div className="footer-contact-copy">
          <p className="eyebrow">Kontakta mig</p>
          <h2>Hör gärna av dig.</h2>
          <p>
            Vill du prata UX, visuell gestaltning, LIA eller ett framtida
            samarbete är du varmt välkommen att kontakta mig.
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
        <p>Karolina Paraskevas · Experience Design</p>
        <a href={backHref}>{backLabel}</a>
      </div>
    </footer>
  );
}
