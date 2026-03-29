import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeader from '../components/SectionHeader'

const stats = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '200+', label: 'Campaigns Delivered' },
  { value: '80+', label: 'Brands Served' },
  { value: '12', label: 'Industry Awards' },
]

const services = [
  {
    number: '01',
    title: 'Public Relations',
    desc: 'Shaping narratives that build lasting trust. We position your brand at the centre of every important conversation.',
    link: '/services',
  },
  {
    number: '02',
    title: 'Advertising',
    desc: 'Ideas that cut through noise and leave impressions. From concept to execution — across every medium.',
    link: '/services',
  },
  {
    number: '03',
    title: 'Event Management',
    desc: 'Experiences that resonate. We craft events that align with your brand story and captivate every audience.',
    link: '/services',
  },
]

const clients = ['Tata Group', 'ITC Limited', 'Emami', 'RPG Enterprises', 'CESC', 'Haldia Petrochemicals']

export default function Home() {
  return (
    <PageWrapper>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-28 overflow-hidden">
        {/* Background graphic */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[55%] h-full bg-ink-950" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[1px] bg-ink-200" />
        </div>

        {/* Decorative circle */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute top-24 right-[8%] w-72 h-72 md:w-96 md:h-96 rounded-full border border-gold-400/20 z-0"
        />
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: 'easeOut' }}
          className="absolute top-36 right-[13%] w-48 h-48 md:w-64 md:h-64 rounded-full border border-gold-400/10 z-0"
        />

        <div className="container-xl relative z-10">
          {/* Tag */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="label-tag mb-6"
          >
            Advertising & Public Relations — Kolkata
          </motion.p>

          {/* Headline */}
          <div className="overflow-hidden">
  <motion.h1
    initial={{ y: '100%' }}
    animate={{ y: 0 }}
    transition={{ duration: 0.8, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
    className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.92] text-[rgb(196,154,53)]"
  >
    We create
  </motion.h1>
</div>
<div className="overflow-hidden">
  <motion.h1
    initial={{ y: '100%' }}
    animate={{ y: 0 }}
    transition={{ duration: 0.8, delay: 0.45, ease: [0.32, 0.72, 0, 1] }}
    className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.92] text-[rgb(196,154,53)]"
  >
    <em>connections</em>
  </motion.h1>
</div>
<div className="overflow-hidden">
  <motion.h1
    initial={{ y: '100%' }}
    animate={{ y: 0 }}
    transition={{ duration: 0.8, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
    className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.92] text-[rgb(196,154,53)]"
  >
    that matter.
  </motion.h1>
</div>   

          {/* Sub & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <Link to="/services" className="btn-primary">
              Explore Services <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="font-body text-sm text-ink-500 hover:text-charcoal transition-colors link-underline">
              Our story
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-ink-200"
          >
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="font-display text-4xl md:text-5xl font-light text-charcoal">{value}</p>
                <p className="font-body text-xs text-ink-400 mt-1 tracking-wide">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ─── */}
      <section className="section-pad bg-cream">
        <div className="container-xl">
          <SectionHeader
            tag="What We Do"
            title={<>Strategic work.<br />Tangible results.</>}
            subtitle="Every brief we take on becomes a mission. We combine insight, creativity, and precision to deliver outcomes that move the needle."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-200">
            {services.map(({ number, title, desc, link }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-cream p-10 group hover:bg-charcoal transition-colors duration-500"
              >
                <p className="font-mono text-xs text-gold-500 group-hover:text-gold-400 mb-6 transition-colors">{number}</p>
                <h3 className="font-display text-2xl font-light text-charcoal group-hover:text-cream transition-colors mb-4">
                  {title}
                </h3>
                <p className="font-body text-sm text-ink-400 group-hover:text-ink-300 transition-colors leading-relaxed mb-8">
                  {desc}
                </p>
                <Link
                  to={link}
                  className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-gold-500 group-hover:text-gold-400 transition-colors"
                >
                  Learn More <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT STRIP ─── */}
      <section className="section-pad bg-ink-950">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionHeader
            tag="Who We Are"
            title={<>Fifteen years of <em>purposeful</em> communication.</>}
            subtitle="Founded in Kolkata, Sambandh Advertising & PR has grown from a boutique consultancy into one of Eastern India's most trusted communication agencies."
            light
          />
          <div>
            <p className="font-body text-ink-300 leading-relaxed mb-6">
              We believe great communication is never accidental. It is the product of deep listening,
              strategic thinking, and creative courage. Our team brings together journalists, marketers,
              designers, and strategists united by a single ambition — to make your brand impossible to ignore.
            </p>
            <p className="font-body text-ink-300 leading-relaxed mb-10">
              From high-stakes press briefings to city-wide activations, we treat every mandate
              with the same rigour and craft.
            </p>
            <Link to="/about" className="btn-outline border-cream text-cream hover:bg-cream hover:text-charcoal">
              About Sambandh <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CLIENT LOGOS ─── */}
      <section className="py-16 border-y border-ink-100 overflow-hidden">
        <div className="container-xl">
          <p className="label-tag text-center mb-10 text-ink-400">Brands that trust us</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {clients.map((client) => (
              <motion.span
                key={client}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-display text-xl md:text-2xl text-ink-300 hover:text-charcoal transition-colors duration-300 cursor-default"
              >
                {client}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-pad">
        <div className="container-xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="label-tag mb-4">Ready?</p>
            <h2 className="font-display text-5xl md:text-7xl font-light text-charcoal mb-8">
              Let's start a conversation.
            </h2>
            <Link to="/contact" className="btn-primary mx-auto">
              Contact Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
