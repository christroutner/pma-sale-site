import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ScrollReveal from '../ScrollReveal'

const tiers = [
  {
    price: '$500',
    label: 'One-time setup fee',
    detail: 'Onboarding, configuration, and launch support.',
  },
  {
    price: '$50/mo',
    label: 'Ongoing hosting',
    detail: 'Hosting for your private member marketplace.',
  },
  {
    price: '$50/hr',
    label: 'Custom work',
    detail: 'Customization and maintenance tailored to your association.',
  },
]

function PricingSection() {
  return (
    <ScrollReveal
      as="section"
      className="home-section py-5 my-5"
      aria-labelledby="pricing-heading"
    >
      <div className="text-center mb-5 pb-3">
        <p className="small-caps-label text-gold mb-3">Transparent Pricing</p>
        <h2 id="pricing-heading" className="home-section-heading h1 mb-4 mx-auto" style={{ maxWidth: '24ch' }}>
          Simple, honest pricing — no hidden fees
        </h2>
      </div>
      
      <Row className="g-4 mb-5">
        {tiers.map((tier) => (
          <Col md={4} key={tier.label}>
            <div className="pricing-lux-card text-center">
              <div className="pricing-display">{tier.price}</div>
              <h3 className="card-title">{tier.label}</h3>
              <p className="card-text">{tier.detail}</p>
            </div>
          </Col>
        ))}
      </Row>
      
      <p className="text-center text-slate mb-5 mx-auto" style={{ maxWidth: '50ch', fontSize: '1.05rem', lineHeight: 1.7 }}>
        Includes the &apos;front end&apos; member app and a &apos;back end&apos; REST API server,
        hosted and customized for your community.
      </p>
      
      <div className="text-center">
        <Button as={Link} to="/contact" size="lg" className="btn-gold px-5 py-3" style={{ borderRadius: 'var(--radius-full)' }}>
          Schedule a Licensing Call
        </Button>
      </div>
    </ScrollReveal>
  )
}

export default PricingSection
