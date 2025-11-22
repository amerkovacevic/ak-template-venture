import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-yellow-accent rounded-lg flex items-center justify-center">
              <span className="text-neutral-900 font-bold text-xl">V</span>
            </div>
            <span className="text-xl font-bold text-neutral-900">Venture</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-neutral-700 hover:text-neutral-900 transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-neutral-700 hover:text-neutral-900 transition-colors font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-neutral-700 hover:text-neutral-900 transition-colors font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-neutral-700 hover:text-neutral-900 transition-colors font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('hero')}
              className="btn-primary"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-slide-down">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-neutral-700 hover:text-neutral-900 transition-colors font-medium py-2"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left text-neutral-700 hover:text-neutral-900 transition-colors font-medium py-2"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-neutral-700 hover:text-neutral-900 transition-colors font-medium py-2"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left text-neutral-700 hover:text-neutral-900 transition-colors font-medium py-2"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('hero')}
              className="btn-primary w-full"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

