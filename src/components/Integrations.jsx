import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const integrations = [
  'Slack', 'Notion', 'Dropbox', 'PayPal', 'Google Drive', 'Asana',
  'Google Docs', 'Jira', 'Trello', 'Salesforce', 'Mailchimp', 'Zendesk',
  'HubSpot', 'Microsoft Teams', 'Zoom', 'Stripe', 'QuickBooks', 'Xero',
]

export default function Integrations() {
  return (
    <section className="section-padding bg-accent-dark">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold text-accent-light uppercase tracking-wider mb-4">INTEGRATIONS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Don't replace. Integrate.
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Venture provides seamless, bidirectional integrations that allow you to make the most of your existing tools and data. No more manual data re-entry.
          </p>
          <motion.button
            className="bg-white text-accent-dark hover:bg-neutral-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore integrations
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Scrollable Integration Logos */}
        <div className="w-full overflow-hidden py-4">
          <div className="flex animate-scroll" style={{ width: 'max-content' }}>
            {/* First set */}
            {integrations.map((integration, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-shrink-0 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-lg mx-2 flex items-center justify-center min-w-[150px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                <span className="text-white font-semibold text-sm">{integration}</span>
              </motion.div>
            ))}
            {/* Duplicate set for seamless loop */}
            {integrations.map((integration, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex-shrink-0 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-lg mx-2 flex items-center justify-center min-w-[150px]"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                <span className="text-white font-semibold text-sm">{integration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

