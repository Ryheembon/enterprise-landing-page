export default function FeatureGrid() {
  const features = [
    { title: 'Security-first', text: 'SOC 2, ISO 27001, SSO/SAML, SCIM, audit logs.' },
    { title: 'Scales with you', text: 'Multi-region, autoscaling, and performance SLAs.' },
    { title: 'Permissions', text: 'Granular RBAC, least-privilege defaults, policy controls.' },
    { title: 'Automation', text: 'Powerful APIs and webhooks to integrate your workflows.' },
    { title: 'Analytics', text: 'Real-time insights with export and custom dashboards.' },
    { title: 'Support', text: 'Priority enterprise support with 99.9% uptime.' },
  ]

  return (
    <section className="section" aria-labelledby="features-title">
      <div className="container">
        <h2 id="features-title" style={{ fontSize: 'var(--fs-2xl)', margin: 0 }}>Features</h2>
        <p style={{ color: 'var(--color-text-muted)', marginTop: 6 }}>Everything you need to move fast and stay secure.</p>
        <div className="features-grid" role="list">
          {features.map((f, i) => (
            <article key={i} role="listitem" className="feature-card">
              <div className="feature-icon" aria-hidden="true">★</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-text">{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


