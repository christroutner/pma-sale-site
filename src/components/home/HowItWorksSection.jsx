import ScrollReveal from '../ScrollReveal'

const steps = [
  {
    title: 'Set Up a Secure Physical Space',
    body: 'Find or build a secure, physical location with a lockable door. An unused shed works well as a practical meeting point and drop off location for members.',
    image: 'https://images.unsplash.com/photo-1627956853131-cfa751fddc9c?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'A homestead garden shed and growing area',
  },
  {
    title: 'Members Post Offers',
    body: 'Members share photos and clear descriptions of the products and services they want to offer inside your private marketplace app.',
    image: 'https://images.unsplash.com/photo-1632776350300-11016768b521?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Fresh vegetables displayed in wooden market crates',
  },
  {
    title: 'Browse, Negotiate, Exchange',
    body: 'Buyers browse listings, connect with sellers, and negotiate terms. The physical space can serve as a meetup point or a secure drop off location.',
    image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Two people completing a handshake deal',
  },
]

function HowItWorksSection() {
  return (
    <ScrollReveal as="section" className="home-section py-5 my-5" aria-labelledby="how-heading">
      <div className="text-center mb-5 pb-3">
        <p className="small-caps-label text-gold mb-3">How It Works</p>
        <h2 id="how-heading" className="home-section-heading h1 mb-4 mx-auto" style={{ maxWidth: '28ch' }}>
          Launch your private marketplace in 3 elegant steps
        </h2>
      </div>

      <div className="luxury-timeline">
        {steps.map((step, index) => (
          <div className="timeline-step" key={step.title}>
            <div className="timeline-image-wrap">
              <img
                src={step.image}
                alt={step.imageAlt}
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
              />
            </div>
            <div className="timeline-content">
              <div className="timeline-number">0{index + 1}</div>
              <h3 className="timeline-title">{step.title}</h3>
              <p className="timeline-text">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  )
}

export default HowItWorksSection
