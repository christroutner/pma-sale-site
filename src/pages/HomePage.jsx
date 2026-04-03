import { Container } from 'react-bootstrap'
import DemoSection from '../components/home/DemoSection'
import FaqPreviewSection from '../components/home/FaqPreviewSection'
import FeaturesSection from '../components/home/FeaturesSection'
import FinalCtaSection from '../components/home/FinalCtaSection'
import HeroSection from '../components/home/HeroSection'
import HowItWorksSection from '../components/home/HowItWorksSection'
import PricingSection from '../components/home/PricingSection'
import ProblemSection from '../components/home/ProblemSection'
import SocialProofSection from '../components/home/SocialProofSection'
import '../components/home/home-sections.css'
import '../styles/scroll-reveal.css'

function HomePage() {
  return (
    <article>
      <HeroSection />
      <Container className="py-4 py-md-5">
        <ProblemSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DemoSection />
        <SocialProofSection />
        <PricingSection />
        <FaqPreviewSection />
      </Container>
      <FinalCtaSection />
    </article>
  )
}

export default HomePage
