import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function Counter({ end, suffix = '', duration = 2, label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(end.replace(/\D/g, '')) || 0
      const startTime = Date.now()
      
      const updateCount = () => {
        const elapsed = (Date.now() - startTime) / 1000
        const progress = Math.min(elapsed / duration, 1)
        const current = Math.floor(progress * numericValue)
        setCount(current)
        
        if (progress < 1) {
          requestAnimationFrame(updateCount)
        } else {
          setCount(numericValue)
        }
      }
      
      updateCount()
    }
  }, [isInView, end, duration])
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="text-5xl md:text-6xl font-bold text-accent-dark mb-2">
        {suffix === '' ? end : `${count}${suffix}`}
      </div>
      <p className="text-xl text-neutral-600 font-medium">{label}</p>
    </motion.div>
  )
}

export default function Statistics() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <motion.div
          className="grid md:grid-cols-3 gap-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Counter end="2021" label="Venture Founded" />
          <Counter end="50" suffix="K+" label="Active Users" />
          <Counter end="1" suffix="k+" label="Company Partners" />
        </motion.div>
      </div>
    </section>
  )
}

