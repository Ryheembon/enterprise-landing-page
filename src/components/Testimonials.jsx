export default function Testimonials() {
    const testimonials = [
        {
        quote: 'This platform transformed how our engineering team collaborates. The security features give our compliance team peace of mind.',
      author: 'Sarah Chen',
      role: 'CTO, TechCorp',
      avatar: 'SC',
    },
    {
      quote: 'We scaled from 50 to 500 users without missing a beat. The performance and reliability have been outstanding.',
      author: 'Michael Rodriguez',
      role: 'VP Engineering, ScaleUp Inc',
      avatar: 'MR',
    },
    {
      quote: 'The integration capabilities saved us months of custom development. Highly recommend for enterprise teams.',
      author: 'Emily Watson',
      role: 'Head of Operations, Global Systems',
      avatar: 'EW',
    },
    {
      quote: 'Best ROI we\'ve seen on a platform investment. Support is responsive and the documentation is top-notch.',
      author: 'David Park',
      role: 'Director of Technology, Innovate Labs',
      avatar: 'DP',
    },
  ]

  return (
    <section className="section" aria-labelledby="testimonials-title">
      <div className="container">
        <h2 id="testimonials-title" style={{ fontSize: 'var(--fs-2xl)', margin: 0 }}>
          Trusted by leading teams
        </h2>
        <p style={{ color: 'var(--color-text-muted)', marginTop: 6 }}>
          See what customers are saying about us.
        </p>

        <div className="testimonials-grid" role="list">
          {testimonials.map((testimonial, i) => (
            <figure key={i} role="listitem" className="testimonial-card">
              <blockquote className="testimonial-quote">
                {testimonial.quote}
              </blockquote>
              <figcaption className="testimonial-author">
                <div className="testimonial-avatar" aria-hidden="true">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="testimonial-name">{testimonial.author}</div>
                  <div className="testimonial-role">{testimonial.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}