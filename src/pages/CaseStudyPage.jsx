import { Card } from 'react-bootstrap'
import { caseStudySections } from '../content/caseStudyContent'

function CaseStudyPage() {
  return (
    <>
      <section className="section-space">
        <h1 className="page-title">Case Study: Decatur Island Community Exchange</h1>
        <p className="lead">
          DICE demonstrates a practical approach for member-to-member trade in
          a private association setting.
        </p>
      </section>

      <section className="section-space">
        {caseStudySections.map((section) => (
          <Card className="mb-3" key={section.heading}>
            <Card.Body>
              <Card.Title>{section.heading}</Card.Title>
              <Card.Text>{section.body}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </section>
    </>
  )
}

export default CaseStudyPage
