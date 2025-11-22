import { Zap, Shield, TrendingUp, Brain, Headphones, Plug } from 'lucide-react'
import { features } from '../data'

const iconMap = {
  Zap,
  Shield,
  TrendingUp,
  Brain,
  Headphones,
  Plug,
}

function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-yellow-accent to-yellow-accent-hover bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-xl text-neutral-600">
            Powerful features designed to help you launch, grow, and scale your product
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon]
            return (
              <div
                key={feature.id}
                className="group p-8 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-yellow-accent/30 transition-all duration-300 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-yellow-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-yellow-accent" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features

