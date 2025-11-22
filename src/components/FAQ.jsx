import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-yellow-accent to-yellow-accent-hover bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-neutral-600">
              Everything you need to know about our platform
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="border border-neutral-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-yellow-accent/30"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between bg-neutral-50 hover:bg-white transition-colors"
                >
                  <span className="text-lg font-semibold text-neutral-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-5 bg-white text-neutral-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Help CTA */}
          <div className="mt-12 text-center p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
            <h3 className="text-xl font-bold text-neutral-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-neutral-600 mb-6">
              Our support team is here to help you 24/7
            </p>
            <button className="btn-primary">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ

