import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-8"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Quote className="w-16 h-16 text-accent mx-auto" />
          </motion.div>
          <motion.p
            className="text-3xl md:text-4xl font-bold text-accent-dark mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Venture is helping our company to decrease operational expenses and turnaround time, while increasing the compliance, resource allocation and effectiveness of our contract management.
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white font-bold text-lg">
              DR
            </div>
            <div className="text-left">
              <p className="font-bold text-neutral-900 text-lg">Darlene Robertson</p>
              <p className="text-neutral-600">Head of Legal Ops, PrimeOne</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

