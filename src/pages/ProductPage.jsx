import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProductPage() {
  return (
    <>
      <section className="section-space">
        <h1 className="page-title">How the DICE App Works</h1>
        <p className="lead">
          Members take a photo of an item, publish it to a private social feed,
          and pin it to their profile for easy discovery and exchange.
        </p>
      </section>

      <section className="section-space">
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>1) Post Offers Quickly</Card.Title>
                <Card.Text>
                  A familiar social interface helps members list goods and
                  services in minutes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>2) Keep Trade Private</Card.Title>
                <Card.Text>
                  Content remains inside your membership, not visible to the
                  public internet.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>3) Build Local Resilience</Card.Title>
                <Card.Text>
                  Encourage local exchange and relationship-based commerce.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="section-space">
        <Card className="pricing-highlight">
          <Card.Body>
            <Card.Title>Pricing</Card.Title>
            <Card.Text className="mb-1">$500 one-time setup fee</Card.Text>
            <Card.Text className="mb-1">$50 per month hosting fee</Card.Text>
            <Card.Text className="mb-3">
              $50 per hour for customization and maintenance
            </Card.Text>
            <Button as={Link} to="/contact">
              Contact Sales
            </Button>
          </Card.Body>
        </Card>
      </section>
    </>
  )
}

export default ProductPage
