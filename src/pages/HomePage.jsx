import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <section className="section-space">
        <p className="small-caps-label mb-2">Private Community Marketplace</p>
        <h1 className="hero-title mb-3">
          Launch a members-only trading network for your community.
        </h1>
        <p className="lead mb-4">
          DICE SaaS provides a social-style web app where members post items,
          discover local offers, and coordinate peer-to-peer trade in a private
          environment.
        </p>
        <Button as={Link} to="/contact" size="lg">
          Schedule a Licensing Call
        </Button>
      </section>

      <section className="section-space">
        <p className="small-caps-label mb-2">How It Works</p>
        <h2 className="mb-3">Simple steps to launch your local PMA network</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Step 1: Set Up a Secure Physical Space</Card.Title>
                <Card.Text>
                  Find or build a secure, physical location with a lockable door.
                  An unused shed works well as a practical meeting point and drop
                  off location for members.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Step 2: Members Post Offers</Card.Title>
                <Card.Text>
                  Members share photos and clear descriptions of the products and
                  services they want to offer inside your private marketplace app.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Step 3: Browse, Negotiate, and Exchange</Card.Title>
                <Card.Text>
                  Buyers browse listings, connect with sellers, and negotiate
                  terms. The physical space can serve as a meetup point or a
                  secure drop off location.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="section-space">
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 pricing-highlight">
              <Card.Body>
                <Card.Title>$500 Setup Fee</Card.Title>
                <Card.Text>
                  One-time onboarding, configuration, and launch support.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 pricing-highlight">
              <Card.Body>
                <Card.Title>$50 / month for hosting</Card.Title>
                <Card.Text>
                  Ongoing hosting for your private member marketplace.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 pricing-highlight">
              <Card.Body>
                <Card.Title>$50 / Hour Custom Work</Card.Title>
                <Card.Text>
                  Customization and maintenance tailored to your association.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <p className="muted-note mt-3 mb-0">
          Includes the `dice-fe` member app and `pma-sm` REST API deployment
          foundation.
        </p>
      </section>
    </>
  )
}

export default HomePage
