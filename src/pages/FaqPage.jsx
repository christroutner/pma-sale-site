import { Accordion, Col, Container, Row } from 'react-bootstrap'
import LegalDisclaimer from '../components/LegalDisclaimer'
import { donts, dos, faqItems } from '../content/faqContent'

function LegalReferencesContent({ legalReferences }) {
  return (
    <div className="faq-nested">
      <p>{legalReferences.intro}</p>

      {legalReferences.cases.map((caseItem) => (
        <div className="mb-4" key={caseItem.title}>
          <h3 className="h6 mb-2">{caseItem.title}</h3>
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

      <h3 className="h6 mt-4">Key Takeaways</h3>
      <ul className="mb-4">
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
    <div className="faq-nested mt-4 pt-0 border-0">
      <h3 className="h5 mb-3">Additional PMA Legal Basis Summary</h3>
      <p className="mb-4">{summary.intro}</p>

      <h4 className="h6">Key Features</h4>
      <ul className="mb-4">
        {summary.keyFeatures.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h4 className="h6">Potential Benefits</h4>
      <ul className="mb-4">
        {summary.potentialBenefits.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h4 className="h6">Challenges and Risks</h4>
      <ul className="mb-4">
        {summary.challengesAndRisks.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h4 className="h6">Common Use Cases</h4>
      <ul className="mb-4">
        {summary.commonUseCases.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h4 className="h6">Prohibition-Era Context</h4>
      <ul className="mb-4">
        {summary.prohibitionContext.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h4 className="h6">Examples In Regulated Contexts</h4>
      <ul className="mb-4">
        {summary.regulatedGoodsExamples.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h4 className="h6">Strict Privacy Rules</h4>
      <ul className="mb-4">
        {summary.strictPrivacyRules.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h4 className="h6">PMA vs Public Sale</h4>
      {summary.pmaVsPublicSale.map((row) => (
        <div className="mb-3" key={row.aspect}>
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

      <h4 className="h6 mt-4">Enforcement Boundaries</h4>
      <ul className="mb-4">
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
    <article className="my-5 py-3">
      <Container>
        <section
          className="section-space page-header page-header--surface mb-5"
          aria-labelledby="faq-page-title"
        >
          <div className="content-with-image reversed align-items-center">
            <div className="content-side text-start">
              <p className="small-caps-label text-gold mb-3">Education</p>
              <h1 id="faq-page-title" className="page-title h1 text-start">
                FAQ: PMA Background and Legal Context
              </h1>
              <p className="lead mb-4 text-start ms-0" style={{ maxWidth: '44ch' }}>
                This FAQ summarizes commonly referenced PMA concepts in the United
                States. Use it as educational context, not legal counsel.
              </p>
              <LegalDisclaimer />
            </div>
            <div className="image-side">
              <img
                src="https://images.unsplash.com/photo-1595666944516-bbb485958fb5?auto=format&fit=crop&w=800&q=80"
                alt="A privacy sign — your data stays within your community"
                loading="lazy"
                decoding="async"
                width="800"
                height="534"
                className="img-showcase shadow-lg"
                style={{ borderRadius: 'var(--radius-xl)' }}
              />
            </div>
          </div>
        </section>

        <section className="section-space page-faq-accordion mt-5" aria-label="Frequently asked questions">
          <Accordion alwaysOpen className="shadow-sm" style={{ borderRadius: 'var(--radius-xl)' }}>
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

        <section className="section-space page-guidelines mt-5 pt-4" aria-label="PMA guidelines and cautions">
          <Row className="g-5">
            <Col md={6}>
              <div className="guideline-panel guideline-panel--dos">
                <h2 className="h4">PMA Do&apos;s</h2>
                <ul>
                  {dos.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="guideline-panel guideline-panel--donts">
                <h2 className="h4">PMA Don&apos;ts</h2>
                <ul>
                  {donts.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </article>
  )
}

export default FaqPage
