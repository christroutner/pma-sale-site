import { Accordion, Col, Row } from 'react-bootstrap'
import LegalDisclaimer from '../components/LegalDisclaimer'
import { donts, dos, faqItems } from '../content/faqContent'

function LegalReferencesContent({ legalReferences }) {
  return (
    <div>
      <p>{legalReferences.intro}</p>

      {legalReferences.cases.map((caseItem) => (
        <div className="mb-3" key={caseItem.title}>
          <h3 className="h6 mb-1">{caseItem.title}</h3>
          <p className="mb-1">
            <strong>Citation:</strong> {caseItem.citation}
          </p>
          <p className="mb-1">
            <strong>Key Holding:</strong> {caseItem.holding}
          </p>
          <p className="mb-0">
            <strong>Importance for PMAs:</strong> {caseItem.importance}
          </p>
        </div>
      ))}

      <h3 className="h6">Key Takeaways</h3>
      <ul>
        {legalReferences.takeaways.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 className="h6">Practical Caveat</h3>
      <p className="mb-0">{legalReferences.caveat}</p>
    </div>
  )
}

function FaqPage() {
  return (
    <>
      <section className="section-space">
        <h1 className="page-title">FAQ: PMA Background and Legal Context</h1>
        <p className="lead">
          This FAQ summarizes commonly referenced PMA concepts in the United
          States. Use it as educational context, not legal counsel.
        </p>
        <LegalDisclaimer />
      </section>

      <section className="section-space">
        <Accordion alwaysOpen>
          {faqItems.map((item, index) => (
            <Accordion.Item eventKey={String(index)} key={item.question}>
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body>
                <p>{item.answer}</p>
                {item.legalReferences && (
                  <LegalReferencesContent legalReferences={item.legalReferences} />
                )}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </section>

      <section className="section-space">
        <Row className="g-4">
          <Col md={6}>
            <h2 className="h4">PMA Do&apos;s</h2>
            <ul>
              {dos.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Col>
          <Col md={6}>
            <h2 className="h4">PMA Don&apos;ts</h2>
            <ul>
              {donts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default FaqPage
