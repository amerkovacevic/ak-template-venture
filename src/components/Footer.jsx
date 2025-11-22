import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-yellow-accent rounded-lg flex items-center justify-center">
                <span className="text-neutral-900 font-bold text-xl">V</span>
              </div>
              <span className="text-xl font-bold text-white">Venture</span>
            </div>
            <p className="text-neutral-400 text-sm">
              Launch your product faster with the all-in-one platform built for modern startups.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('features')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="hover:text-yellow-accent transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('pricing')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="hover:text-yellow-accent transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToTop}
                  className="hover:text-yellow-accent transition-colors"
                >
                  Documentation
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={scrollToTop}
                  className="hover:text-yellow-accent transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('testimonials')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="hover:text-yellow-accent transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToTop}
                  className="hover:text-yellow-accent transition-colors"
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('faq')
                    el?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="hover:text-yellow-accent transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToTop}
                  className="hover:text-yellow-accent transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={scrollToTop}
                  className="hover:text-yellow-accent transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-neutral-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Venture Startup. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <button className="hover:text-yellow-accent transition-colors">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="hover:text-yellow-accent transition-colors">
              <Github className="w-5 h-5" />
            </button>
            <button className="hover:text-yellow-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </button>
            <button className="hover:text-yellow-accent transition-colors">
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

