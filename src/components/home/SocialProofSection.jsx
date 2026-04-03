import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ScrollReveal from '../ScrollReveal'

function SocialProofSection() {
  return (
    <ScrollReveal as="section" className="home-section py-5 my-5" aria-labelledby="social-heading">
      <div className="text-center mb-5 pb-3">
        <p className="small-caps-label text-gold mb-3">Trusted By Communities</p>
        <h2 id="social-heading" className="home-section-heading h1 mb-4 mx-auto" style={{ maxWidth: '28ch' }}>
          Real-world resilience, member-first trade
        </h2>
      </div>
      
      <div className="social-quote p-5 mb-5 mx-auto" style={{ maxWidth: '800px', marginTop: '64px' }}>
        <figure className="mb-0 text-center">
          <blockquote className="blockquote mb-4">
            <p>
              DICE demonstrates how communities can coordinate peer-to-peer exchange in a
              members-only environment.
            </p>
          </blockquote>
          <figcaption className="blockquote-footer mb-4" style={{ fontSize: '1.05rem' }}>
            Decatur Island Community Exchange
          </figcaption>
        </figure>
        <div className="text-center">
          <Link to="/case-study" className="fw-semibold text-forest" style={{ textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationColor: 'var(--color-gold)' }}>
            Read the full case study
          </Link>
        </div>
      </div>
      
      <Row className="g-5 text-center mt-4">
        <Col md={4}>
          <div className="stat-pill">Member-Only</div>
          <div className="stat-value">No public access</div>
        </Col>
        <Col md={4}>
          <div className="stat-pill">Self-Hosted</div>
          <div className="stat-value">Your server, your data</div>
        </Col>
        <Col md={4}>
          <div className="stat-pill">Setup</div>
          <div className="stat-value">$500</div>
          <div className="small text-slate mt-2 fw-medium">One-time setup</div>
        </Col>
      </Row>
    </ScrollReveal>
  )
}

export default SocialProofSection;
