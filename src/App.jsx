import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Integrations from './components/Integrations'
import Testimonials from './components/Testimonials'
import Statistics from './components/Statistics'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Integrations />
      <Testimonials />
      <Statistics />
      <CTA />
      <Footer />
    </div>
  )
}

export default App

