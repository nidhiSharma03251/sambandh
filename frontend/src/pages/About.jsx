import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeader from '../components/SectionHeader'

const timeline = [
  { year: '2008', event: 'Founded in Kolkata as a boutique PR consultancy.' },
  { year: '2011', event: 'Expanded into advertising and creative services.' },
  { year: '2014', event: 'Launched the Event Management vertical, serving 20+ brands in Year 1.' },
  { year: '2017', event: 'Recognised as Eastern India\'s Best PR Agency at PRCI Awards.' },
  { year: '2020', event: 'Pivoted to hybrid and digital event formats during the pandemic, without missing a single client milestone.' },
  { year: '2023', event: 'Crossed 200 campaigns delivered; expanded team to 35+ professionals.' },
]

const values = [
  { title: 'Integrity', desc: 'We say what we mean and deliver what we promise. Every single time.' },
  { title: 'Craft', desc: 'Details matter. We sweat the small stuff because that\'s where greatness lives.' },
  { title: 'Curiosity', desc: 'We ask better questions to find better answers. Complacency is not in our vocabulary.' },
  { title: 'Partnership', desc: 'Your success is our success. We embed ourselves in your story.' },
]

export default function About() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="pt-40 pb-24 bg-cream">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="label-tag mb-6"
            >
              Our Story
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-display text-5xl md:text-7xl font-light text-charcoal leading-tight"
            >
              Born in Kolkata.<br /><em>Built on trust.</em>
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="font-body text-ink-500 leading-relaxed mb-4">
              Sambandh — the Bengali word for "connection" — was founded in 2008 with one conviction:
              that meaningful communication changes the world. We started as a two-person PR consultancy
              with a handful of clients and an enormous amount of ambition.
            </p>
            <p className="font-body text-ink-500 leading-relaxed">
              Today, we are a full-service agency of 35+ professionals, serving some of the most
              respected brands in India. But our philosophy has never changed — listen first, then speak.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full-width divider image */}
      <div className="h-64 md:h-96 bg-ink-900 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-display text-6xl md:text-9xl font-light text-cream/5 select-none tracking-widest">
            SAMBANDH
          </p>
        </div>
        <div className="absolute bottom-8 left-0 right-0 container-xl">
          <p className="font-mono text-xs text-ink-500 tracking-widest">EST. 2008 — KOLKATA, INDIA</p>
        </div>
      </div>

      {/* Timeline */}
      <section className="section-pad">
        <div className="container-xl">
          <SectionHeader
            tag="Milestones"
            title="Fifteen years, one direction."
            subtitle="A chronicle of consistent growth and creative ambition."
          />
          <div className="mt-16 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-ink-200 hidden md:block" />
            <div className="space-y-10 md:pl-12">
              {timeline.map(({ year, event }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 relative"
                >
                  <div className="hidden md:block absolute -left-[49px] w-3 h-3 rounded-full bg-gold-400 border-2 border-cream ring-1 ring-gold-400" />
                  <span className="font-mono text-gold-500 text-sm flex-shrink-0">{year}</span>
                  <p className="font-body text-sm text-ink-500 leading-relaxed">{event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-ink-50">
        <div className="container-xl">
          <SectionHeader
            tag="Our Values"
            title="What we stand for."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-cream p-8 border border-ink-100 group hover:border-gold-400 transition-colors duration-300"
              >
                <h3 className="font-display text-2xl font-light text-charcoal mb-3 group-hover:text-gold-600 transition-colors">
                  {title}
                </h3>
                <p className="font-body text-sm text-ink-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-xl text-center">
          <h2 className="font-display text-5xl font-light text-charcoal mb-6">
            Meet the team behind the work.
          </h2>
          <Link to="/directors" className="btn-primary mx-auto">
            Our Directors <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageWrapper>
  )
}
