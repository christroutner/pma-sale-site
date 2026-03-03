import { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/faq', label: 'FAQ' },
  { to: '/documents', label: 'Documents' },
  { to: '/case-study', label: 'Case Study' },
  { to: '/contact', label: 'Contact' },
]

function SiteNavbar() {
  const [expanded, setExpanded] = useState(false)

  const closeMenu = () => {
    setExpanded(false)
  }

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      expanded={expanded}
      onToggle={(nextExpanded) => setExpanded(nextExpanded)}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" onClick={closeMenu}>
          TheLocalTrade.app
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            {navItems.map((item) => (
              <Nav.Link
                as={NavLink}
                to={item.to}
                key={item.to}
                end={item.to === '/'}
                onClick={closeMenu}
              >
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
