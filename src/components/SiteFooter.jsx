import { Container } from 'react-bootstrap'

function SiteFooter() {
  return (
    <footer className="bg-white border-top py-4">
      <Container className="d-flex flex-column flex-md-row justify-content-between gap-2">
        <small className="text-muted">
          Decatur Island Community Exchange Software
        </small>
        <small className="text-muted">
          Pricing: $500 setup + $100/month hosting + $50/hour customization
        </small>
      </Container>
    </footer>
  )
}

export default SiteFooter
