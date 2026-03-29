import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeader from '../components/SectionHeader'

const directors = [
  {
    name: 'Arnab Chakraborty',
    title: 'Founder & Managing Director',
    initials: 'AC',
    bio: 'With over 20 years in communications, Arnab has guided the brand narratives of some of India\'s most iconic companies. A former journalist turned strategist, he brings an editorial sharpness to every brief.',
    expertise: ['Brand Strategy', 'Media Relations', 'Crisis Communication'],
    email: 'arnab@sambandh.in',
    linkedin: '#',
  },
  {
    name: 'Priya Sengupta',
    title: 'Director – Creative & Advertising',
    initials: 'PS',
    bio: 'Priya leads the creative division with a philosophy that great ideas deserve flawless execution. Her work has won multiple ABBY Awards and she has been recognised in Campaign India\'s "40 under 40".',
    expertise: ['Creative Direction', 'Campaign Strategy', 'Digital Advertising'],
    email: 'priya@sambandh.in',
    linkedin: '#',
  },
  {
    name: 'Rahul Bose',
    title: 'Director – Operations & Events',
    initials: 'RB',
    bio: 'Rahul transforms vision into reality. As the operations backbone of Sambandh, he has orchestrated over 150 events — from intimate brand dinners to stadium-scale product launches.',
    expertise: ['Event Design', 'Project Management', 'Vendor Relations'],
    email: 'rahul@sambandh.in',
    linkedin: '#',
  },
  {
    name: 'Debolina Mukherjee',
    title: 'Director – Client Strategy',
    initials: 'DM',
    bio: 'Debolina is the keeper of relationships. With a background in brand management at Hindustan Unilever, she brings a client-first perspective that has driven Sambandh\'s exceptional retention record.',
    expertise: ['Account Management', 'Brand Consulting', 'Business Development'],
    email: 'debolina@sambandh.in',
    linkedin: '#',
  },
]

const accolades = [
  { label: 'PRCI Award', detail: 'Best PR Agency — Eastern India, 2017' },
  { label: 'ABBY Award', detail: 'Silver — Integrated Campaign, 2019' },
  { label: 'Campaign India', detail: '40 Under 40 — Priya Sengupta, 2021' },
  { label: 'EEMA Award', detail: 'Event Agency of the Year (Regional), 2022' },
]

export default function Directors() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-charcoal">
        <div className="container-xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="label-tag text-gold-400 mb-6"
          >
            Leadership
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-5xl md:text-7xl font-light text-cream leading-tight"
          >
            The minds<br />shaping <em>Sambandh.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-body text-ink-300 text-base mt-6 max-w-xl leading-relaxed"
          >
            Our leadership team brings together decades of combined expertise in communications,
            creative, and business strategy.
          </motion.p>
        </div>
      </section>

      {/* Directors grid */}
      <section className="section-pad">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          {directors.map(({ name, title, initials, bio, expertise, email, linkedin }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex gap-8 group"
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-ink-100 flex items-center justify-center group-hover:bg-charcoal transition-colors duration-500">
                  <span className="font-display text-2xl font-light text-ink-400 group-hover:text-cream transition-colors">
                    {initials}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-display text-2xl font-light text-charcoal">{name}</h3>
                <p className="font-mono text-xs text-gold-500 tracking-widest mt-1 mb-4">{title}</p>
                <div className="w-8 h-px bg-ink-200 mb-4" />
                <p className="font-body text-sm text-ink-500 leading-relaxed mb-5">{bio}</p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {expertise.map((e) => (
                    <span key={e} className="font-mono text-xs text-ink-400 border border-ink-200 px-3 py-1">
                      {e}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={`mailto:${email}`}
                    className="text-ink-400 hover:text-charcoal transition-colors"
                    title={`Email ${name}`}
                  >
                    <Mail size={16} />
                  </a>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-400 hover:text-charcoal transition-colors"
                    title={`${name} on LinkedIn`}
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Accolades */}
      <section className="section-pad bg-ink-50">
        <div className="container-xl">
          <SectionHeader
            tag="Recognition"
            title="Awards & accolades."
            subtitle="Industry recognition that reflects our team's collective commitment to excellence."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-200">
            {accolades.map(({ label, detail }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-ink-50 p-8"
              >
                <p className="label-tag text-gold-500 mb-3">{label}</p>
                <p className="font-body text-sm text-ink-500 leading-relaxed">{detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team culture */}
      <section className="section-pad bg-charcoal">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionHeader
            tag="Our Team"
            title={<>35+ professionals.<br /><em>One vision.</em></>}
            subtitle="Beyond the directors, Sambandh is powered by a diverse team of writers, designers, planners, and account managers — each an expert in their craft."
            light
          />
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="aspect-square bg-ink-800 flex items-center justify-center">
                <span className="font-display text-3xl text-ink-600 select-none">
                  {String.fromCharCode(65 + i)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
