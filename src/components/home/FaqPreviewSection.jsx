import { Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ScrollReveal from '../ScrollReveal'
import { faqItems } from '../../content/faqContent'

const previewItems = faqItems.slice(0, 3)

function FaqPreviewSection() {
  return (
    <ScrollReveal as="section" className="home-section py-5 my-5" aria-labelledby="faq-preview-heading">
      <div className="text-center mb-5 pb-2">
        <p className="small-caps-label text-gold mb-3">Common Questions</p>
        <h2 id="faq-preview-heading" className="home-section-heading h1 mb-4 mx-auto">
          Answers before you book a call
        </h2>
      </div>
      
      <div className="mx-auto" style={{ maxWidth: '800px' }}>
        <Accordion alwaysOpen className="mb-5 shadow-sm" style={{ borderRadius: 'var(--radius-lg)' }}>
          {previewItems.map((item, index) => (
            <Accordion.Item eventKey={String(index)} key={item.question}>
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body>
                <p className="mb-0" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>{item.answer}</p>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <div className="text-center">
          <Link to="/faq" className="faq-preview-link">
            See all FAQs →
          </Link>
        </div>
      </div>
    </ScrollReveal>
  )
}

export default FaqPreviewSection
