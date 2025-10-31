export default function Hero() {
    return (
      <section id="home" className="section hero" aria-labelledby="hero-title">
        <div className="container">
          <h1 id="hero-title" className="hero-title">
            Enterprise-grade platform for modern teams
          </h1>
          <p className="hero-sub">
            Ship faster, scale securely, and stay compliant—without slowing your team down.
          </p>
          <div className="hero-ctas">
            <a className="btn" href="#contact">Request a demo</a>
            <a className="btn ghost" href="#features">Explore features</a>
          </div>
          <div className="trust">
            <span className="trust-badge">SOC 2</span>
            <span className="trust-badge">ISO 27001</span>
            <span className="trust-badge">GDPR</span>
          </div>
        </div>
      </section>
    )
  }