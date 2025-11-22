import { Check } from 'lucide-react'
import { pricingTiers } from '../data'

function Pricing() {
  const scrollToHero = () => {
    const element = document.getElementById('hero')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-yellow-accent to-yellow-accent-hover bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-neutral-600">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.id}
              className={`relative p-8 rounded-2xl transition-all duration-300 hover:shadow-xl animate-scale-in ${
                tier.popular
                  ? 'bg-white border-2 border-yellow-accent shadow-lg scale-105'
                  : 'bg-white border border-neutral-200'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-accent text-neutral-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  {tier.name}
                </h3>
                <p className="text-neutral-600 mb-6">{tier.description}</p>
                <div className="flex items-baseline justify-center">
                  {typeof tier.price === 'number' ? (
                    <>
                      <span className="text-5xl font-bold text-neutral-900">
                        ${tier.price}
                      </span>
                      <span className="text-neutral-600 ml-2">
                        /{tier.period}
                      </span>
                    </>
                  ) : (
                    <span className="text-5xl font-bold text-neutral-900">
                      {tier.price}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-yellow-accent flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToHero}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="mt-16 text-center">
          <p className="text-neutral-600 mb-4">
            Need something custom? We've got you covered.
          </p>
          <button
            onClick={scrollToHero}
            className="btn-secondary"
          >
            Contact for Custom Solutions
          </button>
        </div>
      </div>
    </section>
  )
}

export default Pricing

