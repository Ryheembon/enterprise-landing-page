import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import FeatureGrid from './components/FeatureGrid.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import CTA from './components/CTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <a className="skip-to-content" href="#main">Skip to main content</a>
      <NavBar />

      <Hero />

      <main id="main">
        <div id="features">
          <FeatureGrid />
        </div>

        <div id="pricing">
          <Pricing />
        </div>

        <div id="testimonials">
          <Testimonials />
        </div>

        <CTA />

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App