export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand">
              <span className="brand-mark" aria-hidden="true">◆</span>
              <span className="brand-text">Enterprise</span>
            </div>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--fs-sm)', marginTop: 'var(--space-3)' }}>
              Enterprise-grade platform for modern teams.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <div className="footer-nav-group">
              <h3 style={{ fontSize: 'var(--fs-sm)', margin: '0 0 var(--space-3)' }}>Product</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><a href="#features" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--fs-sm)' }}>Features</a></li>
                <li><a href="#pricing" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--fs-sm)' }}>Pricing</a></li>
                <li><a href="#testimonials" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--fs-sm)' }}>Testimonials</a></li>
              </ul>
            </div>

            <div className="footer-nav-group">
              <h3 style={{ fontSize: 'var(--fs-sm)', margin: '0 0 var(--space-3)' }}>Company</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><a href="#contact" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--fs-sm)' }}>Contact</a></li>
                <li><a href="#" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--fs-sm)' }}>About</a></li>
                <li><a href="#" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--fs-sm)' }}>Blog</a></li>
              </ul>
            </div>

            <div className="footer-nav-group">
              <h3 style={{ fontSize: 'var(--fs-sm)', margin: '0 0 var(--space-3)' }}>Legal</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><a href="#" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--fs-sm)' }}>Privacy</a></li>
                <li><a href="#" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--fs-sm)' }}>Terms</a></li>
                <li><a href="#" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--fs-sm)' }}>Security</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <small style={{ color: 'var(--color-text-muted)' }}>
            © {new Date().getFullYear()} Enterprise. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  )
}
