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

function PmaLegalBasisSummary({ summary }) {
  return (
    <div className="mt-4 pt-3 border-top">
      <h3 className="h5">Additional PMA Legal Basis Summary</h3>
      <p>{summary.intro}</p>

      <h4 className="h6">Key Features</h4>
      <ul>
        {summary.keyFeatures.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h4 className="h6">Potential Benefits</h4>
      <ul>
        {summary.potentialBenefits.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h4 className="h6">Challenges and Risks</h4>
      <ul>
        {summary.challengesAndRisks.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h4 className="h6">Common Use Cases</h4>
      <ul>
        {summary.commonUseCases.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h4 className="h6">Prohibition-Era Context</h4>
      <ul>
        {summary.prohibitionContext.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h4 className="h6">Examples In Regulated Contexts</h4>
      <ul>
        {summary.regulatedGoodsExamples.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h4 className="h6">Strict Privacy Rules</h4>
      <ul>
        {summary.strictPrivacyRules.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h4 className="h6">PMA vs Public Sale</h4>
      {summary.pmaVsPublicSale.map((row) => (
        <div className="mb-2" key={row.aspect}>
          <p className="mb-1">
            <strong>{row.aspect}:</strong>
          </p>
          <p className="mb-1">
            <strong>PMA:</strong> {row.pma}
          </p>
          <p className="mb-0">
            <strong>Public Sale:</strong> {row.publicSale}
          </p>
        </div>
      ))}

      <h4 className="h6 mt-3">Enforcement Boundaries</h4>
      <ul>
        {summary.enforcementBoundaries.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p className="mb-0">{summary.closingNote}</p>
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
                {item.pmaLegalBasisSummary && (
                  <PmaLegalBasisSummary summary={item.pmaLegalBasisSummary} />
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
