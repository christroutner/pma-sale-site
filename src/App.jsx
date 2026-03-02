import { Container } from 'react-bootstrap'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import SiteNavbar from './components/SiteNavbar'
import SiteFooter from './components/SiteFooter'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import FaqPage from './pages/FaqPage'
import DocumentsPage from './pages/DocumentsPage'
import CaseStudyPage from './pages/CaseStudyPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="app-shell">
      <SiteNavbar />
      <main className="app-main">
        <Container className="py-4 py-md-5">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/case-study" element={<CaseStudyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Container>
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
