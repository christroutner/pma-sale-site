import { Button } from 'react-bootstrap'
import ScrollReveal from '../ScrollReveal'

const DEMO_URL = 'https://demo.thelocaltrade.app'

function DemoSection() {
  return (
    <ScrollReveal as="section" className="home-section py-5 my-5" aria-labelledby="demo-heading">
      <div className="text-center mb-5 pb-2">
        <p className="small-caps-label text-gold mb-3">See It In Action</p>
        <h2 id="demo-heading" className="home-section-heading h1 mb-4 mx-auto" style={{ maxWidth: '24ch' }}>
          A familiar social interface your members already know
        </h2>
      </div>
      <div className="demo-iframe-wrap mx-auto mb-5">
        <iframe
          src={DEMO_URL}
          title="TheLocalTrade live demo application"
          loading="lazy"
        />
      </div>
      <div className="text-center">
        <Button
          href={DEMO_URL}
          as="a"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold px-5 py-3"
          style={{ fontSize: '1.1rem', borderRadius: 'var(--radius-full)' }}
        >
          Try the Live Demo
        </Button>
      </div>
    </ScrollReveal>
  )
}

export default DemoSection
