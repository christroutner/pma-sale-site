import { Col, Container, Row } from 'react-bootstrap'
import DocumentCard from '../components/DocumentCard'
import LegalDisclaimer from '../components/LegalDisclaimer'
import { documents } from '../content/documentsContent'

function DocumentsPage() {
  return (
    <article className="my-5 py-3">
      <Container>
        <section
          className="section-space page-header page-header--surface"
          aria-labelledby="documents-page-title"
        >
          <h1 id="documents-page-title" className="page-title h1">
            Example PMA Documents
          </h1>
          <p className="lead mb-4">
            Download sample templates inspired by DICE governance materials and
            adapt them for your community with legal review.
          </p>
          <LegalDisclaimer />
        </section>

        <section className="section-space documents-grid mt-5" aria-label="Downloadable document templates">
          <Row className="g-5">
            {documents.map((document) => (
              <Col md={6} lg={4} key={document.fileName}>
                <DocumentCard {...document} />
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </article>
  )
}

export default DocumentsPage
