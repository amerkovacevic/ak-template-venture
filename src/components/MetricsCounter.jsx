import { useState, useEffect, useRef } from 'react'
import { metrics } from '../data'

function MetricCard({ metric, isLarge = false }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const target = metric.value
    const duration = metric.duration
    const increment = target / (duration / 16) // 60fps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, metric.value, metric.duration])

  // Determine if we should show decimals (only for percentages like 99.9%, not for integers or ratios like 24/7)
  const shouldShowDecimal = typeof metric.value === 'number' && 
    metric.value < 100 && 
    metric.value % 1 !== 0 && 
    !metric.suffix.includes('/')

  return (
    <div
      ref={cardRef}
      className={`text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white to-neutral-50 border border-neutral-200 hover:border-yellow-accent/30 transition-all duration-300 hover:shadow-lg min-w-0 ${
        isLarge ? 'md:col-span-2' : ''
      }`}
    >
      <div className={`font-bold text-neutral-900 mb-3 leading-tight whitespace-nowrap ${
        isLarge 
          ? 'text-3xl sm:text-4xl md:text-5xl lg:text-7xl' 
          : 'text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl'
      }`}>
        <span className="inline-block">
          {shouldShowDecimal
            ? count.toFixed(1)
            : Math.floor(count).toLocaleString()}
          {metric.suffix}
        </span>
      </div>
      <div className="text-base md:text-lg text-neutral-600 font-medium">{metric.label}</div>
    </div>
  )
}

function MetricsCounter() {
  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-yellow-accent to-yellow-accent-hover bg-clip-text text-transparent">
              Growing Teams
            </span>
          </h2>
          <p className="text-xl text-neutral-600">
            Join thousands of companies already using our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {metrics.map((metric) => (
            <MetricCard 
              key={metric.id} 
              metric={metric} 
              isLarge={metric.label === 'Active Users'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MetricsCounter

