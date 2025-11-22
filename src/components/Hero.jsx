import { ArrowRight, Play } from 'lucide-react'

function Hero() {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-accent/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-yellow-accent/20 text-neutral-800 px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-yellow-accent rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">Now Available - Launch Your Product Today</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 animate-slide-up">
            Build. Launch.{' '}
            <span className="bg-gradient-to-r from-yellow-accent to-yellow-accent-hover bg-clip-text text-transparent">
              Scale.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-neutral-600 mb-10 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            The all-in-one platform that helps SaaS startups launch faster, 
            grow smarter, and scale effortlessly. Join thousands of successful products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up animation-delay-400">
            <button
              onClick={scrollToPricing}
              className="btn-primary flex items-center space-x-2 group"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary flex items-center space-x-2 group">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-neutral-500 animate-fade-in animation-delay-600">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* Hero Image/Visual */}
        <div className="mt-16 max-w-5xl mx-auto animate-scale-in animation-delay-800">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200">
            <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-accent rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
                <p className="text-neutral-600 font-medium">Product Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

