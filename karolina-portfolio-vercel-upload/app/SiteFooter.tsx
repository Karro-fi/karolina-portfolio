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
          Låt oss prata vidare
        </h2>
        <div className="footer-marquee" aria-hidden="true">
          <div className="footer-marquee-track">
            {[0, 1].map((group) => (
              <div className="footer-marquee-group" key={group}>
                <span>Låt oss prata vidare</span>
                <span className="footer-marquee-dot">●</span>
                <span>Låt oss prata vidare</span>
                <span className="footer-marquee-dot">●</span>
              </div>
            ))}
          </div>
        </div>

        <div className="site-shell footer-contact-bar">
          <p>Kontakt &amp; samarbete</p>
          <nav className="footer-contact-links" aria-label="Kontaktlänkar">
            <a href="mailto:karolina.paraskevas@gmail.com">
              karolina.paraskevas@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/karolina-paraskevas-887808200/"
              target="_blank"
              rel="noreferrer"
              aria-label="Karolina Paraskevas på LinkedIn"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </section>

      <div className="site-shell footer-meta">
        <p>Karolina Paraskevas · Experience Designer</p>
        <a href={backHref}>{backLabel}</a>
      </div>
    </footer>
  );
}
