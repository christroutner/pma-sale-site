import Alert from 'react-bootstrap/Alert'

function LegalDisclaimer({ compact = false }) {
  return (
    <Alert variant="warning">
      <strong>Legal Disclaimer:</strong>{' '}
      {compact
        ? 'Educational content only. This is not legal advice.'
        : 'This website and its template documents are provided for informational and educational purposes only. They are not legal advice and do not create an attorney-client relationship. Consult a qualified attorney in your jurisdiction before forming or operating a private membership association.'}
    </Alert>
  )
}

export default LegalDisclaimer
