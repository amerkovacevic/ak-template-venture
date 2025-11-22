import { motion } from 'framer-motion'

const partners = [
  'Accenture',
  'HubSpot',
  'DocuSign',
  'SAP Ariba',
  'Salesforce',
  'Gremmetry',
]

export default function PartnerLogos() {
  return (
    <div className="w-full overflow-hidden py-4">
      <div className="flex animate-scroll" style={{ width: 'max-content' }}>
        {/* First set */}
        {partners.map((partner, index) => (
          <motion.div
            key={`first-${index}`}
            className="flex-shrink-0 px-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="text-neutral-400 font-semibold text-lg whitespace-nowrap hover:text-accent transition-colors">
              {partner}
            </div>
          </motion.div>
        ))}
        {/* Duplicate set for seamless loop */}
        {partners.map((partner, index) => (
          <motion.div
            key={`second-${index}`}
            className="flex-shrink-0 px-8"
          >
            <div className="text-neutral-400 font-semibold text-lg whitespace-nowrap hover:text-accent transition-colors">
              {partner}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

