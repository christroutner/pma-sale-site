import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/product', label: 'Product' },
  { to: '/faq', label: 'FAQ' },
  { to: '/documents', label: 'Documents' },
  { to: '/case-study', label: 'Case Study' },
  { to: '/contact', label: 'Contact' },
]

function SiteNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          TheLocalTrade.app
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            {navItems.map((item) => (
              <Nav.Link as={NavLink} to={item.to} key={item.to} end={item.to === '/'}>
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default SiteNavbar
