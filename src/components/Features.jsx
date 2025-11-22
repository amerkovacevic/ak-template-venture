import { motion } from 'framer-motion'
import { ArrowRight, Bell, CheckCircle, BarChart3, Calendar } from 'lucide-react'

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">FEATURES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Latest advanced technologies to ensure everything you need
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Maximize your team's productivity and save time with our affordable, user-friendly contract management system.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Dynamic Dashboard */}
          <motion.div
            className="card-elevated"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Dynamic dashboard</h3>
            <p className="text-neutral-600 mb-6">
              Venture helps legal teams work faster, smarter and more efficiently, delivering the visibility and data-driven insights to mitigate risk and ensure compliance.
            </p>
            <motion.button
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore all
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Dashboard Visualization */}
          <motion.div
            className="card-elevated"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-neutral-900">Active P.O.</h3>
              <div className="flex items-center gap-2 text-neutral-500 text-sm">
                <Calendar className="w-4 h-4" />
                <span>2023</span>
              </div>
            </div>
            <div className="space-y-3">
              {[80, 60, 45, 30, 20].map((height, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex-1 bg-neutral-100 rounded-full h-8 relative overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${
                        index === 0 ? 'bg-accent' : 'bg-accent-light'
                      }`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                    />
                  </div>
                  <span className="text-sm font-medium text-neutral-700 w-12">{height}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Smart Notifications */}
          <motion.div
            className="card-elevated"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Bell className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold text-neutral-900">Smart notifications</h3>
            </div>
            <p className="text-neutral-600 mb-6">
              Automate contract workflows and get real-time updates. Collaborate seamlessly with the relevant parties.
            </p>
            <div className="space-y-4">
              {[
                'New messages, comments, or replies',
                'Tasks at risk',
                'Upcoming renewals and expiries',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-neutral-700 font-medium">{item}</span>
                  <motion.div
                    className="w-12 h-6 bg-accent rounded-full p-1 flex items-center justify-end"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  >
                    <motion.div
                      className="w-4 h-4 bg-white rounded-full"
                      layout
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Task Management */}
          <motion.div
            className="card-elevated"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">Task management</h3>
            <p className="text-neutral-600 mb-6">
              Easily create or link tasks, manage deadlines, and track necessary work progress in one centralized place.
            </p>
            <div className="space-y-4">
              <motion.div
                className="p-4 bg-neutral-50 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center text-white font-bold">
                    BS
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Bill Sanders</p>
                    <p className="text-sm text-neutral-500">Just now</p>
                  </div>
                </div>
                <p className="text-neutral-700">
                  I've just uploaded the latest contract for MYT. Thank you for your patience 😊
                </p>
              </motion.div>
              <motion.div
                className="p-4 bg-neutral-50 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-light to-accent flex items-center justify-center text-white font-bold">
                    JF
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Jack Fisher</p>
                    <p className="text-sm text-neutral-500">5 minutes ago</p>
                  </div>
                </div>
                <p className="text-neutral-700">
                  Signature on the contract is pending
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

