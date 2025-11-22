import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="section-padding bg-accent-dark">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover the full scale of{' '}
            <span className="text-accent-light">Venture</span> capabilities
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="bg-white text-accent-dark hover:bg-neutral-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a demo
            </motion.button>
            <motion.button
              className="bg-accent-light text-white hover:bg-accent font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start for free
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

