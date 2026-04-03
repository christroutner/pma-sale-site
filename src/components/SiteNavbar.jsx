import { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import ltaLogo from '../assets/lta-logo.png'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/faq', label: 'FAQ' },
  { to: '/documents', label: 'Documents' },
  { to: '/case-study', label: 'Case Study' },
  { to: '/contact', label: 'Contact' },
]

function BrandLogo() {
  return (
    <img
      src={ltaLogo}
      alt="TheLocalTrade.app Logo"
      width="74"
      height="74"
      className="site-navbar__logo-icon flex-shrink-0"
    />
  )
}

function SiteNavbar() {
  const [expanded, setExpanded] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 4)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => {
    setExpanded(false)
  }

  return (
    <Navbar
      className={`site-navbar site-navbar--spec navbar-dark ${scrolled ? 'site-navbar--scrolled' : ''}`}
      expand="lg"
      sticky="top"
      expanded={expanded}
      onToggle={(nextExpanded) => setExpanded(nextExpanded)}
      role="navigation"
      aria-label="Primary"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={closeMenu}
          className="d-flex align-items-center gap-2 fw-semibold"
        >
          <BrandLogo />
          <span>TheLocalTrade.app</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-1">
            {navItems.map((item) => (
              <Nav.Item key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    ['nav-link', 'site-nav-link', isActive ? 'site-nav-link--active' : '']
                      .filter(Boolean)
                      .join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </Nav.Item>
            ))}
            <Link
              to="/contact"
              className="navbar-nav-cta mt-2 mt-lg-0 ms-lg-2"
              onClick={closeMenu}
            >
              Schedule a Call
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default SiteNavbar
