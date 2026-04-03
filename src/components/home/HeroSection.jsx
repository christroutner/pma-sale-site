import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DEMO_URL = 'https://demo.thelocaltrade.app'

function HeroSection() {
  return (
    <section className="hero-spec-section hero-spec" aria-labelledby="hero-heading">
      <div className="hero-spec__container">
        <Row className="align-items-center g-5 gx-lg-5">
          <Col lg={6}>
            <p
              className="hero-spec__eyebrow hero-spec__anim-fade mb-0"
              style={animationDelayStyle('0.1s')}
            >
              Private Community Marketplace
            </p>
            <h1
              id="hero-heading"
              className="hero-spec__title hero-spec__anim-fade"
              style={animationDelayStyle('0.25s')}
            >
              A Private Trading Network Built for Your PMA.
            </h1>
            <p
              className="hero-spec__lead hero-spec__anim-fade"
              style={animationDelayStyle('0.4s')}
            >
              TheLocalTrade.app gives your PMA a private, member-only trading platform — no algorithms, no
              data harvesting, no deplatforming risk.
            </p>
            <div
              className="hero-spec__actions hero-spec__anim-fade"
              style={animationDelayStyle('0.55s')}
            >
              <Button
                href={DEMO_URL}
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-spec__btn-primary"
              >
                View Live Demo
              </Button>
              <Button as={Link} to="/contact" className="hero-spec__btn-outline">
                Schedule a Licensing Call
              </Button>
            </div>
          </Col>
          <Col lg={6}>
            <div className="hero-spec__demo-slide">
              <div className="hero-spec__demo-float w-100">
                <div className="demo-browser-frame">
                  <div className="demo-browser-chrome" aria-hidden="true">
                    <div className="demo-browser-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span>demo.thelocaltrade.app</span>
                  </div>
                  <a
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-placeholder text-decoration-none d-block"
                  >
                    <span className="small-caps-label d-block">Live Demo Preview</span>
                    <p className="mb-0 fw-semibold">Open the interactive demo in a new tab →</p>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

function animationDelayStyle(delay) {
  return { animationDelay: delay }
}

export default HeroSection
