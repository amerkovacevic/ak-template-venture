import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [customersOpen, setCustomersOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="text-2xl font-bold text-neutral-900">Venture</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-neutral-700 hover:text-accent transition-colors font-medium"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {solutionsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 py-2"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <a href="#" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-50 hover:text-accent">Procurement</a>
                  <a href="#" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-50 hover:text-accent">Sales</a>
                  <a href="#" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-50 hover:text-accent">Legal</a>
                </div>
              )}
            </div>
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-neutral-700 hover:text-accent transition-colors font-medium"
                onMouseEnter={() => setCustomersOpen(true)}
                onMouseLeave={() => setCustomersOpen(false)}
              >
                <span>Customers</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${customersOpen ? 'rotate-180' : ''}`} />
              </button>
              {customersOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-200 py-2"
                  onMouseEnter={() => setCustomersOpen(true)}
                  onMouseLeave={() => setCustomersOpen(false)}
                >
                  <a href="#" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-50 hover:text-accent">Case Studies</a>
                  <a href="#" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-50 hover:text-accent">Testimonials</a>
                </div>
              )}
            </div>
            <a href="#" className="text-neutral-700 hover:text-accent transition-colors font-medium">Pricing</a>
            <button className="text-accent hover:text-accent-dark transition-colors font-medium">Login</button>
            <button className="btn-primary">Start Now</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-neutral-900"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-slide-down">
            <a href="#" className="block text-neutral-700 hover:text-accent transition-colors py-2 font-medium">Solutions</a>
            <a href="#" className="block text-neutral-700 hover:text-accent transition-colors py-2 font-medium">Customers</a>
            <a href="#" className="block text-neutral-700 hover:text-accent transition-colors py-2 font-medium">Pricing</a>
            <button className="block w-full text-left text-accent hover:text-accent-dark transition-colors py-2 font-medium">Login</button>
            <button className="btn-primary w-full">Start Now</button>
          </div>
        )}
      </nav>
    </header>
  )
}

