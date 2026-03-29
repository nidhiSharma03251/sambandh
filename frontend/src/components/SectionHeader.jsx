import { motion } from 'framer-motion'

export default function SectionHeader({ tag, title, subtitle, light = false, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={center ? 'text-center' : ''}
    >
      {tag && (
        <p className={`label-tag mb-4 ${light ? 'text-gold-400' : 'text-gold-500'}`}>
          {tag}
        </p>
      )}
      <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight ${
        light ? 'text-cream' : 'text-charcoal'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`font-body text-base mt-5 leading-relaxed max-w-2xl ${
          light ? 'text-ink-300' : 'text-ink-500'
        } ${center ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`divider-gold ${center ? 'mx-auto' : ''} mt-6`} />
    </motion.div>
  )
}
