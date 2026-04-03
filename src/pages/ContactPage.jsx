import { useMemo, useState } from 'react'
import { Alert, Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap'

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
    <article className="contact-page my-5 py-3">
      <Container>
        <section className="section-space contact-page-intro mb-5">
          <header className="page-header page-header--surface text-center">
            <h1 className="page-title h1">Contact TheLocalTrade.app</h1>
            <p className="lead mb-4 contact-page-lead">
              Tell us about your community and we will help you launch a private
              member trading platform.
            </p>
            <div className="contact-pricing-note mb-0 text-start">
              Pricing: <strong>$500 setup</strong>, <strong>$50/month hosting</strong>, and{' '}
              <strong>$50/hour customization or maintenance</strong>.
            </div>
          </header>
        </section>

        <section className="section-space contact-page-form-section" aria-label="Contact form">
          <div className="contact-page-form-inner">
            <Card className="contact-form-card">
              <Card.Body>
                {status === 'success' && (
                  <Alert variant="success" className="contact-alert">
                    Thanks. Your inquiry was sent successfully.
                  </Alert>
                )}
                {status === 'error' && (
                  <Alert variant="danger" className="contact-alert">
                    {errorMessage}
                  </Alert>
                )}

                <Form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <Row className="g-4">
                    <Col md={6}>
                      <Form.Group controlId="contact-name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          autoComplete="name"
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
                          autoComplete="email"
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
                          autoComplete="organization"
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
                    <Col xs={12} className="d-none" aria-hidden="true">
                      <Form.Group controlId="contact-website">
                        <Form.Label>Website</Form.Label>
                        <Form.Control
                          type="text"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          autoComplete="off"
                          tabIndex={-1}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} className="text-center mt-5">
                      <Button
                        type="submit"
                        className="btn-gold"
                        disabled={status === 'submitting'}
                      >
                        {status === 'submitting' && (
                          <Spinner size="sm" className="me-2" aria-hidden="true" />
                        )}
                        Send Inquiry
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </section>
      </Container>
    </article>
  )
}

export default ContactPage
