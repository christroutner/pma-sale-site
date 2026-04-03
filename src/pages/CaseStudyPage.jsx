import { Col, Container, Row } from 'react-bootstrap'
import { caseStudySections } from '../content/caseStudyContent'
import diceShedImage from '../assets/dice-shed.png'

function renderSectionBody(section) {
  if (!section.link?.text || !section.link?.href) {
    return section.body
  }

  const [before, after] = section.body.split(section.link.text)
  if (after === undefined) {
    return section.body
  }

  return (
    <>
      {before}
      <a href={section.link.href} target="_blank" rel="noopener noreferrer">
        {section.link.text}
      </a>
      {after}
    </>
  )
}

function CaseStudyPage() {
  return (
    <article className="case-study-page my-5 py-3">
      <Container>
        <section className="section-space case-study-intro mb-5">
          <header className="page-header page-header--surface case-study-hero">
            <p className="small-caps-label text-gold mb-3">Case Study</p>
            <h1 className="page-title h1">Decatur Island Community Exchange</h1>
            <p className="lead mb-0 case-study-dek mt-3">
              DICE demonstrates a practical approach for member-to-member trade in
              a private association setting.
            </p>
          </header>

          <figure className="case-study-figure mt-5">
            <img
              src={diceShedImage}
              alt="Decatur Island Community Exchange shed"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="case-study-prose mt-4">
            <p>
              The Decatur Island Community Exchange (DICE) is a private member
              community focused on resilience and local trade among members.
              It is located on the small island of Decatur, in the Puget Sound
              of Washington State.
              Members use a private web app for posting products and services,
              while physical pickup and community interaction takes place in
              the small shed pictured above.
            </p>
            <p>
              By providing a physical space to help coordinate trade, DICE helps
              island residents unlock increased economic activity. Members trade
              basic services such as house cleaning, painting, and excavation work.
              Gardeners advertise crops, craftsmen advertise their wares, artists
              advertise their art, and
              island residents are better able to meet their basic needs, while
              reducing costs associated with importing goods and services from
              the mainland, and while reducing dependency on legacy institutions.
            </p>
          </div>
        </section>

        <section className="section-space mt-5 pt-4">
          <div className="text-center mb-5 pb-3">
            <p className="small-caps-label text-gold mb-3">Implementation</p>
            <h2 className="home-section-heading h1 mx-auto" style={{ maxWidth: '28ch' }}>
              Platform Details
            </h2>
          </div>
          <Row className="g-5">
            {caseStudySections.map((section) => (
              <Col md={6} key={section.heading}>
                <div
                  className="luxury-card h-100 p-5 d-flex flex-column text-start"
                  style={{ borderTop: '4px solid var(--color-gold)' }}
                >
                  <h3 className="h4 mb-3 text-bark" style={{ fontFamily: 'var(--font-display)' }}>
                    {section.heading}
                  </h3>
                  <div
                    className="text-slate flex-grow-1"
                    style={{ fontSize: '1.05rem', lineHeight: 1.7 }}
                  >
                    {renderSectionBody(section)}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </article>
  )
}

export default CaseStudyPage
