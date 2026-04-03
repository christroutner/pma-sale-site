import { lazy, Suspense } from 'react'
import { Container } from 'react-bootstrap'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import SiteFooter from './components/SiteFooter'
import SiteNavbar from './components/SiteNavbar'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProductPage = lazy(() => import('./pages/ProductPage'))
const FaqPage = lazy(() => import('./pages/FaqPage'))
const DocumentsPage = lazy(() => import('./pages/DocumentsPage'))
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

function PageFallback() {
  return (
    <div className="app-loading-fallback" role="status" aria-live="polite">
      Loading…
    </div>
  )
}

function App() {
  return (
    <div className="app-shell">
      <SiteNavbar />
      <main className="app-main">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/case-study" element={<CaseStudyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
