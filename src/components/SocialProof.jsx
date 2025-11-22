import { Star, Quote } from 'lucide-react'
import { testimonials, companyLogos } from '../data'

function SocialProof() {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        {/* Company Logos */}
        <div className="mb-20">
          <p className="text-center text-neutral-500 text-sm uppercase tracking-wider mb-8">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 hover:opacity-100 transition-opacity">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="h-12 flex items-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Loved by{' '}
              <span className="bg-gradient-to-r from-yellow-accent to-yellow-accent-hover bg-clip-text text-transparent">
                Thousands
              </span>
            </h2>
            <p className="text-xl text-neutral-600">
              See what our customers have to say about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-yellow-accent/30 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-accent text-yellow-accent"
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-yellow-accent/30 mb-4" />
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-neutral-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof

