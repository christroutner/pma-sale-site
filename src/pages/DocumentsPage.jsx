import { Col, Row } from 'react-bootstrap'
import DocumentCard from '../components/DocumentCard'
import LegalDisclaimer from '../components/LegalDisclaimer'
import { documents } from '../content/documentsContent'

function DocumentsPage() {
  return (
    <>
      <section className="section-space">
        <h1 className="page-title">Example PMA Documents</h1>
        <p className="lead">
          Download sample templates inspired by DICE governance materials and
          adapt them for your community with legal review.
        </p>
        <LegalDisclaimer />
      </section>

      <section className="section-space">
        <Row className="g-4">
          {documents.map((document) => (
            <Col md={6} lg={4} key={document.fileName}>
              <DocumentCard {...document} />
            </Col>
          ))}
        </Row>
      </section>
    </>
  )
}

export default DocumentsPage
