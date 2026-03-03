import { Card } from 'react-bootstrap'
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
    <>
      <section className="section-space">
        <h1 className="page-title">Case Study: Decatur Island Community Exchange</h1>
        <p className="lead">
          DICE demonstrates a practical approach for member-to-member trade in
          a private association setting.
        </p>
        <div className="d-flex justify-content-center mt-4">
          <img
            src={diceShedImage}
            alt="Decatur Island Community Exchange shed"
            className="img-fluid"
          />
        </div>

        <br />
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
      </section>

      <section className="section-space">
        {caseStudySections.map((section) => (
          <Card className="mb-3" key={section.heading}>
            <Card.Body>
              <Card.Title>{section.heading}</Card.Title>
              <Card.Text>{renderSectionBody(section)}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </section>
    </>
  )
}

export default CaseStudyPage
