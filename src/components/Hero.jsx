import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PartnerLogos from './PartnerLogos'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const avatarVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-white to-neutral-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-accent-light/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <motion.div
          className="max-w-4xl mx-auto space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Team Avatars */}
          <motion.div
            className="flex justify-center items-center space-x-4 mb-8 relative"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              variants={avatarVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white">
                AS
              </div>
              <motion.div
                className="absolute -top-1 -right-1 w-5 h-5 bg-accent-light rounded-full border-2 border-white"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>
            <motion.div
              className="w-0.5 h-12 bg-accent-light/30"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            />
            <motion.div
              className="relative"
              variants={avatarVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-light to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white">
                MJ
              </div>
            </motion.div>
            <motion.div
              className="w-0.5 h-12 bg-accent-light/30"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            />
            <motion.div
              className="relative"
              variants={avatarVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.7 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-dark to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white">
                RK
              </div>
            </motion.div>
            <motion.div
              className="w-0.5 h-12 bg-accent-light/30"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            />
            <motion.div
              className="relative"
              variants={avatarVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white">
                LS
              </div>
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-neutral-900 mb-6"
            variants={itemVariants}
          >
            One tool to{' '}
            <span className="relative inline-block">
              <span className="relative z-10">manage</span>
              <motion.span
                className="absolute bottom-2 left-0 right-0 h-3 bg-yellow-400/60 -z-0"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              />
            </span>{' '}
            contracts and your team
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Venture helps legal teams work faster, smarter and more efficiently, delivering the visibility and data-driven insights to mitigate risk and ensure compliance.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <motion.button
              className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a free trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              className="btn-secondary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a demo
            </motion.button>
          </motion.div>

          {/* Partner Logos */}
          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <PartnerLogos />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

