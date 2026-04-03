import { Col, Row } from 'react-bootstrap'
import ScrollReveal from '../ScrollReveal'

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" style={{ width: '40px', height: '40px', color: 'var(--color-gold)' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Member-Only Access',
    body: 'Only approved members see listings. No public exposure, no search engine indexing.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" style={{ width: '40px', height: '40px', color: 'var(--color-gold)' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'Your Platform, Your Rules',
    body: 'Custom governance, custom categories, custom moderation. Tailored to YOUR PMA\'s structure.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" style={{ width: '40px', height: '40px', color: 'var(--color-gold)' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
    title: 'Peer-to-Peer Trade',
    body: 'Members post goods and services, browse locally, and coordinate exchange — no middleman fees.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" style={{ width: '40px', height: '40px', color: 'var(--color-gold)' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Self-Hosted Infrastructure',
    body: 'Your data lives on YOUR server. No Big Tech dependency. No deplatforming risk.',
  },
]

function FeaturesSection() {
  return (
    <ScrollReveal as="section" className="home-section py-5 my-5" aria-labelledby="features-heading">
      <div className="text-center mb-5 pb-3">
        <p className="small-caps-label text-gold mb-3">Why TheLocalTrade.app</p>
        <h2 id="features-heading" className="home-section-heading h1 mb-4 mx-auto" style={{ maxWidth: '28ch' }}>
          Built for communities that value privacy and sovereignty
        </h2>
      </div>
      
      <Row className="g-5">
        {features.map((f) => (
          <Col md={6} key={f.title}>
            <div className="luxury-card h-100 p-5 d-flex flex-column align-items-start text-start">
              <div className="mb-4 pb-2" aria-hidden="true" style={{ opacity: 0.9 }}>
                {f.icon}
              </div>
              <h3 className="h4 mb-3 text-bark" style={{ fontFamily: 'var(--font-display)' }}>
                {f.title}
              </h3>
              <p className="text-slate mb-0" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                {f.body}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </ScrollReveal>
  )
}

export default FeaturesSection
