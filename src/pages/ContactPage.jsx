import { useMemo, useState } from 'react'
import { Alert, Button, Card, Col, Form, Row, Spinner } from 'react-bootstrap'

const initialState = {
  name: '',
  email: '',
  organization: '',
  message: '',
  website: '',
}

function ContactPage() {
  const [formData, setFormData] = useState(initialState)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT

  const isFormValid = useMemo(() => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      formData.organization.trim() &&
      formData.message.trim()
    )
  }, [formData])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!isFormValid) {
      setStatus('error')
      setErrorMessage('Please complete all required fields.')
      return
    }

    // Honeypot field: bots often fill hidden fields.
    if (formData.website.trim()) {
      setStatus('error')
      setErrorMessage('Unable to send message. Please try again.')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            organization: formData.organization,
            message: formData.message,
          }),
        })

        if (!response.ok) {
          throw new Error('Endpoint rejected the request.')
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 700))
      }

      setStatus('success')
      setFormData(initialState)
    } catch {
      setStatus('error')
      setErrorMessage(
        'Message failed to send. Please email your inquiry directly to sales@dice.example.'
      )
    }
  }

  return (
    <>
      <section className="section-space">
        <h1 className="page-title">Contact TheLocalTrade.app</h1>
        <p className="lead mb-2">
          Tell us about your community and we will help you launch a private
          member trading platform.
        </p>
        <p className="mb-0">
          Pricing: <strong>$500 setup</strong>, <strong>$50/month hosting</strong>, and{' '}
          <strong>$50/hour customization or maintenance</strong>.
        </p>
      </section>

      <section className="section-space">
        <Row>
          <Col lg={8}>
            <Card>
              <Card.Body>
                {status === 'success' && (
                  <Alert variant="success">
                    Thanks. Your inquiry was sent successfully.
                  </Alert>
                )}
                {status === 'error' && (
                  <Alert variant="danger">{errorMessage}</Alert>
                )}

                <Form onSubmit={handleSubmit} noValidate>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group controlId="contact-name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="contact-email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group controlId="contact-organization">
                        <Form.Label>Organization / Community</Form.Label>
                        <Form.Control
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group controlId="contact-message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} className="d-none">
                      <Form.Group controlId="contact-website">
                        <Form.Label>Website</Form.Label>
                        <Form.Control
                          type="text"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          autoComplete="off"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Button type="submit" disabled={status === 'submitting'}>
                        {status === 'submitting' && (
                          <Spinner size="sm" className="me-2" />
                        )}
                        Send Inquiry
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default ContactPage
