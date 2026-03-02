import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function DocumentCard({ title, description, fileName }) {
  return (
    <Card className="h-100">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-muted">{description}</Card.Text>
        <Button
          variant="outline-primary"
          href={`/docs/${fileName}`}
          className="mt-auto download-link"
          download
        >
          Download Template
        </Button>
      </Card.Body>
    </Card>
  )
}

export default DocumentCard
