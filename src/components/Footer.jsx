import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-accent-dark text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Contact */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-accent-dark font-bold text-xl">V</span>
              </div>
              <span className="text-2xl font-bold">Venture</span>
            </div>
            <p className="text-white/80 mb-2">info@venture.com</p>
            <p className="text-white/80">+1 123 456 789</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Why Venture</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Vision</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Technology</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Procurement</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Sales</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Legal</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Mid-Market</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Enterprise</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact Sales</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Company</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm mb-4 md:mb-0">
            © Copyright {currentYear} Venture. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

