import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ScrollReveal from '../ScrollReveal'

const DEMO_URL = 'https://demo.thelocaltrade.app'

function FinalCtaSection() {
  return (
    <ScrollReveal as="section" className="final-cta-section mt-5" aria-labelledby="final-cta-heading">
      <Container>
        <div className="text-center px-3 py-4">
          <h2 id="final-cta-heading" className="hero-title text-cream mb-4">
            Ready to launch your private marketplace?
          </h2>
          <p className="lead text-cream-50 mb-5" style={{ opacity: 0.85 }}>
            Join communities like DICE who are building resilient local trade networks.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-4 justify-content-center">
            <Button as={Link} to="/contact" className="btn-gold px-5 py-3" style={{ fontSize: '1.1rem', borderRadius: 'var(--radius-full)' }}>
              Schedule a Licensing Call
            </Button>
            <Button
              href={DEMO_URL}
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-light"
              className="btn-outline-light-cta px-5 py-3"
              style={{ fontSize: '1.1rem', borderRadius: 'var(--radius-full)' }}
            >
              View Live Demo
            </Button>
          </div>
        </div>
      </Container>
    </ScrollReveal>
  )
}

export default FinalCtaSection
