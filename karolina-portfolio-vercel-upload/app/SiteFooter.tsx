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
      <section className="footer-contact" aria-labelledby="footer-contact-title">
        <h2 className="sr-only" id="footer-contact-title">
          Let&apos;s connect!
        </h2>
        <div className="footer-marquee" aria-hidden="true">
          <div className="footer-marquee-window">
            <div className="footer-marquee-track">
              <span>Let&apos;s connect!</span>
            </div>
          </div>
        </div>

        <div className="site-shell footer-contact-bar">
          <p className="sr-only">Kontakt &amp; samarbete</p>
          <nav className="footer-contact-links" aria-label="Kontaktlänkar">
            <a
              className="footer-contact-link"
              href="mailto:karolina.paraskevas@gmail.com"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
              <span>karolina.paraskevas@gmail.com</span>
            </a>
            <a
              className="footer-contact-link"
              href="https://www.linkedin.com/in/karolina-paraskevas-887808200/"
              target="_blank"
              rel="noreferrer"
              aria-label="Karolina Paraskevas på LinkedIn"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M8 10v7M8 7v.01M12 17v-7M12 13.5a3.5 3.5 0 0 1 7 0V17" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </nav>
        </div>
      </section>

      <div className="site-shell footer-meta">
        <p>Karolina Paraskevas · Studerande Experience Designer</p>
        <a href={backHref}>{backLabel}</a>
      </div>
    </footer>
  );
}
