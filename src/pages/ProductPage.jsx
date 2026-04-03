import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DemoSection from '../components/home/DemoSection'
import '../components/home/home-sections.css'

const featureCards = [
  {
    emoji: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '40px', height: '40px', color: 'var(--color-gold)' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
    title: 'Post Offers Quickly',
    body:
      'Members open the app, snap a photo, and publish an offer in minutes. The interface feels like the social feeds people already use every day, so training is minimal and adoption stays high. Descriptions, photos, and categories help others find the right trade without exposing listings to the public web.',
    image: 'https://images.unsplash.com/photo-1645976442233-bcf005876613?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'People browsing items at a community fruit stand',
  },
  {
    emoji: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '40px', height: '40px', color: 'var(--color-gold)' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: 'Keep Trade Private',
    body:
      'Listings and conversations stay inside your membership. That means no public URLs for search engines, no algorithmic amplification, and a smaller surface area for outsiders who are not part of your association. Your community sets eligibility, moderation norms, and how member data is handled on infrastructure you control.',
    image: 'https://images.unsplash.com/photo-1654588831193-0285dab84d5a?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'A padlock resting on a keyboard symbolizing digital privacy',
  },
  {
    emoji: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '40px', height: '40px', color: 'var(--color-gold)' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Build Local Resilience',
    body:
      'Peer-to-peer exchange strengthens relationships and keeps value circulating locally. Members coordinate pickup, delivery, or meetups—including through a physical space you designate—so trade reinforces real-world trust. The software supports ongoing listings and repeat exchange without renting audience access from a third-party platform.',
    image: 'https://images.unsplash.com/photo-1650914419621-8ff76b7ca455?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Community members standing together in a circle',
  },
]

const techItems = [
  { icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '32px', height: '32px', color: 'var(--color-gold)' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ), label: 'React front-end for a fast, responsive member experience' },
  { icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '32px', height: '32px', color: 'var(--color-gold)' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ), label: 'REST API back-end for listings, profiles, and coordination' },
  { icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '32px', height: '32px', color: 'var(--color-gold)' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ), label: 'Member authentication so only approved accounts can participate' },
  { icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '32px', height: '32px', color: 'var(--color-gold)' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ), label: 'Self-hosted deployment — your server, your data, your rules' },
]

function ProductPage() {
  return (
    <>
      <section
        className="product-hero py-5 my-5 section-space"
        aria-labelledby="product-hero-title"
      >
        <Container>
          <div className="content-with-image align-items-center">
            <div className="content-side text-center text-lg-start">
              <p className="small-caps-label text-gold mb-3">Product Overview</p>
              <h1 id="product-hero-title" className="hero-title mb-4">
                How the DICE App Works
              </h1>
              <p className="lead text-secondary mb-0" style={{ maxWidth: '44ch' }}>
                Members take a photo of an item, publish it to a private social feed, and pin it to their
                profile for easy discovery and exchange.
              </p>
            </div>
            <div className="image-side mt-5 mt-lg-0">
              <img
                src="https://images.unsplash.com/photo-1628338243893-056573e389ea?auto=format&fit=crop&w=800&q=80"
                alt="Craftsman working in a local workshop"
                loading="lazy"
                decoding="async"
                width="800"
                height="534"
                className="img-showcase shadow-lg"
                style={{ borderRadius: 'var(--radius-xl)' }}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space py-5 my-5" aria-labelledby="feature-detail-heading">
        <Container>
          <div className="text-center mb-5 pb-3">
            <h2 id="feature-detail-heading" className="home-section-heading h1 mb-4 mx-auto">
              What members experience
            </h2>
          </div>
          <Row className="g-5">
            {featureCards.map((card) => (
              <Col md={4} key={card.title}>
                <div className="luxury-card h-100 overflow-hidden d-flex flex-column">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="534"
                    style={{ height: '240px', objectFit: 'cover', width: '100%' }}
                  />
                  <div className="p-5 d-flex flex-column flex-grow-1">
                    <div className="mb-4" aria-hidden="true" style={{ opacity: 0.9 }}>
                      {card.emoji}
                    </div>
                    <h3 className="h4 mb-3 text-bark" style={{ fontFamily: 'var(--font-display)' }}>
                      {card.title}
                    </h3>
                    <p className="text-slate mb-0" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
                      {card.body}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section-space py-5 my-5" aria-labelledby="tech-heading">
        <Container>
          <div className="text-center mb-5 pb-3">
            <h2 id="tech-heading" className="home-section-heading h1 mb-4 mx-auto">
              Tech stack
            </h2>
            <p className="text-slate mb-4 mx-auto" style={{ maxWidth: '54ch', fontSize: '1.15rem', lineHeight: 1.7 }}>
              A modern member app backed by an API you host — built for private associations that want
              sovereignty over infrastructure and data.
            </p>
          </div>
          <Row className="g-4">
            {techItems.map((item, i) => (
              <Col md={6} key={i}>
                <div className="luxury-card h-100 p-4 d-flex gap-4 align-items-center">
                  <div aria-hidden="true" className="d-flex align-items-center justify-content-center" style={{ minWidth: '48px', height: '48px', background: 'color-mix(in srgb, var(--color-linen) 50%, #fff)', borderRadius: 'var(--radius-full)' }}>
                    {item.icon}
                  </div>
                  <span className="mb-0 text-bark fw-medium" style={{ fontSize: '1.05rem' }}>{item.label}</span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Container>
        <DemoSection />
      </Container>

      <section className="section-space py-5 my-5" aria-labelledby="product-pricing-title">
        <Container>
          <div className="pricing-lux-card text-center p-5 mx-auto" style={{ maxWidth: '800px' }}>
            <p className="small-caps-label text-gold mb-3">Investment</p>
            <h3 className="h1 mb-5" id="product-pricing-title" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-cream)' }}>
              Pricing
            </h3>
            <div className="mb-5 d-flex flex-column gap-3">
              <p className="mb-0 text-cream" style={{ fontSize: '1.25rem' }}>
                <span className="text-gold fw-bold me-2">$500</span> one-time setup fee
              </p>
              <p className="mb-0 text-cream" style={{ fontSize: '1.25rem' }}>
                <span className="text-gold fw-bold me-2">$50</span> per month hosting fee
              </p>
              <p className="mb-0 text-cream" style={{ fontSize: '1.25rem' }}>
                <span className="text-gold fw-bold me-2">$50</span> per hour for customization and maintenance
              </p>
            </div>
            <div className="mt-4">
              <Button as={Link} to="/contact" className="btn-gold px-5 py-3" style={{ fontSize: '1.1rem', borderRadius: 'var(--radius-full)' }}>
                Contact Sales
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ProductPage
