export default function CTA() {
  return (
    <section className="section cta-section" aria-labelledby="cta-title">
      <div className="container">
        <h2 id="cta-title" className="cta-title">Ready to get started?</h2>
        <p className="cta-text">
          Join thousands of teams already using our platform to scale their operations.
        </p>
        <div className="cta-actions">
          <a className="btn" href="#contact">Request a demo</a>
          <a className="btn ghost" href="#pricing">View pricing</a>
        </div>
      </div>
    </section>
  )
}
