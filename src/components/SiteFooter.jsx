import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ltaLogo from '../assets/lta-logo.png'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/product', label: 'Product' },
  { to: '/faq', label: 'FAQ' },
  { to: '/documents', label: 'Documents' },
  { to: '/case-study', label: 'Case Study' },
  { to: '/contact', label: 'Contact' },
]

function FooterLogo() {
  return (
    <img
      src={ltaLogo}
      alt="TheLocalTrade.app Logo"
      width="74"
      height="74"
      className="flex-shrink-0"
    />
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer text-white mt-auto">
      <Container className="py-5">
        <Row className="g-4">
          <Col md={4}>
            <div className="d-flex align-items-start gap-2 mb-2">
              <FooterLogo />
              <div>
                <strong className="d-block text-white">TheLocalTrade.app</strong>
                <p className="small text-white-50 mb-0 mt-1">
                  Private marketplace software for sovereign communities.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <h2 className="h6 text-uppercase text-white-50 mb-3">Quick Links</h2>
            <ul className="list-unstyled mb-0">
              {footerLinks.map((item) => (
                <li key={item.to} className="mb-2">
                  <Link to={item.to} className="text-white-50 text-decoration-none footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col md={4}>
            <h2 className="h6 text-uppercase text-white-50 mb-3">Contact</h2>
            <Button as={Link} to="/contact" className="btn-gold mb-3">
              Schedule a Licensing Call
            </Button>
            <p className="small text-white-50 mb-1">
              <a
                href="mailto:sales@thelocaltrade.app"
                className="text-white-50 footer-link"
              >
                sales@thelocaltrade.app
              </a>
            </p>
            <p className="small text-white-50 mb-0">
              Pricing: $500 setup + $50/month hosting + $50/hour customization
            </p>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright py-3">
        <Container>
          <p className="small text-white-50 text-center mb-0">
            © 2026 TheLocalTrade.app — Private marketplace software for sovereign communities
          </p>
        </Container>
      </div>
    </footer>
  )
}

export default SiteFooter
