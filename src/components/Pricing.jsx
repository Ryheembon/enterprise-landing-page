import { useState } from 'react'

export default function Pricing() {
    const  [annual, setAnnual] = useState(true)

    const plans = [
        {
            name: 'Starter',
            monthly: 99,
            annual: 990,
            features: [
                'Up to 50 users',
                '5 projects',
                'Basic analytics',
                'Email support',
                '99% uptime SLA',
            ]
        },
        { 
            name: 'Pro',
            monthly: 299,
            annual: 2990,
            features: [
                'Up to 500 users',
                'Unlimited projects',
                'Advanced analytics',
                'Priority support',
                '99.9% uptime SLA',
                'SSO & SAML',
                'Custom integrations',
      ],
        },
        {
            name: 'Enterprise',
            monthly: 999,
            annual: 9990,
            features: [
              'Unlimited users',
              'Unlimited projects',
              'Custom analytics',
              'Dedicated support',
              '99.99% uptime SLA',
              'All SSO options',
              'Custom integrations',
              'On-premise option',
              'Compliance reports',
            ],
          },
    ]
    const formatPrice = (amount) => {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
        }).format(amount)
      }
    
      return (
        <section className="section" aria-labelledby="pricing-title">
          <div className="container">
            <h2 id="pricing-title" style={{ fontSize: 'var(--fs-2xl)', margin: 0 }}>Pricing</h2>
            <p style={{ color: 'var(--color-text-muted)', marginTop: 6 }}>
              Flexible plans for teams of all sizes.
            </p>
    
            <div className="pricing-toggle-wrapper">
              <span className={!annual ? 'active' : ''}>Monthly</span>
              <button
                className="pricing-switch"
                role="switch"
                aria-checked={annual}
                aria-label="Toggle between monthly and annual billing"
                onClick={() => setAnnual(v => !v)}
              >
                <span className={`pricing-switch-slider ${annual ? 'annual' : ''}`} />
              </button>
              <span className={annual ? 'active' : ''}>Annual</span>
              {annual && <span className="pricing-savings">Save 20%</span>}
            </div>
    
            <div className="pricing-grid" role="list">
              {plans.map((plan, i) => (
                <article
                  key={i}
                  role="listitem"
                  className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
                >
                  {plan.recommended && (
                    <span className="pricing-badge" aria-label="Recommended plan">Popular</span>
                  )}
                  <h3 className="pricing-plan-name">{plan.name}</h3>
                  <div className="pricing-amount">
                    <span className="pricing-currency">$</span>
                    <span className="pricing-number">
                    {annual ? Math.round(plan.annual / 12) : plan.monthly}                    </span>
                    <span className="pricing-period">/mo</span>
                  </div>
                  {annual && (
                    <p className="pricing-annual-note" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--fs-sm)', margin: '4px 0 0' }}>
                      Billed ${formatPrice(plan.annual)}/year
                    </p>
                  )}
                  <ul className="pricing-features" role="list">
                    {plan.features.map((feature, j) => (
                      <li key={j} role="listitem">
                        <span className="pricing-check" aria-hidden="true">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a className="btn" href="#contact" style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}>
                    Get started
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      )
    }