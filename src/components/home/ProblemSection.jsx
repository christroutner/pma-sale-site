import { Col, Row } from 'react-bootstrap'
import ScrollReveal from '../ScrollReveal'

const pains = [
  {
    title: 'Deplatforming Risk',
    body: 'Facebook groups get shut down overnight. Your member network disappears.',
  },
  {
    title: 'Zero Privacy',
    body: 'Big Tech tracks every interaction, sells your data, and feeds your members ads.',
  },
  {
    title: 'No Sovereignty',
    body: 'You follow THEIR rules, THEIR algorithms, THEIR timeline. Not yours.',
  },
]

function ProblemSection() {
  return (
    <ScrollReveal as="section" className="home-section" aria-labelledby="problem-heading">
      <div className="text-center mb-5">
        <p className="small-caps-label text-gold mb-3">The Problem</p>
        <h2 id="problem-heading" className="home-section-heading h1 mb-4 mx-auto" style={{ maxWidth: '24ch' }}>
          Your community deserves better than Big Tech
        </h2>
      </div>
      
      <Row className="g-5 mb-5 mt-2">
        {pains.map((item) => (
          <Col md={4} key={item.title}>
            <div className="luxury-card h-100 p-5 d-flex flex-column text-center">
              <h3 className="h4 mb-3 text-bark" style={{ fontFamily: 'var(--font-display)' }}>
                {item.title}
              </h3>
              <div className="mx-auto mb-3" style={{ width: '40px', height: '2px', background: 'var(--color-gold)', opacity: 0.5 }}></div>
              <p className="text-slate mb-0" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                {item.body}
              </p>
            </div>
          </Col>
        ))}
      </Row>
      
      <p className="lead text-center mb-0 fw-medium problem-transition mt-5" style={{ fontSize: '1.25rem', color: 'var(--color-forest)' }}>
        There&apos;s a better way. <br className="d-md-none" />Own your marketplace infrastructure.
      </p>
    </ScrollReveal>
  )
}

export default ProblemSection
