import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Megaphone, Users, Star, BarChart2, Globe, Mic } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import SectionHeader from '../components/SectionHeader'

const services = [
  {
    icon: <Globe size={28} />,
    tag: '01',
    title: 'Public Relations',
    tagline: 'Your story, amplified.',
    description:
      'In a world of relentless noise, we help your brand speak clearly and credibly. Our PR practice builds relationships with journalists, analysts, and influencers to secure the coverage that matters — earned, not bought.',
    offerings: [
      'Media Relations & Press Outreach',
      'Crisis Communication & Reputation Management',
      'Corporate Communications',
      'CSR Communication',
      'Digital PR & Influencer Partnerships',
      'Spokesperson Training',
    ],
  },
  {
    icon: <Megaphone size={28} />,
    tag: '02',
    title: 'Advertising',
    tagline: 'Ideas that earn attention.',
    description:
      'We create advertising that doesn\'t just look good — it works. From strategic brand campaigns to performance-driven digital ads, our creative team crafts messaging that connects with the right audience at the right moment.',
    offerings: [
      'Brand Strategy & Positioning',
      'Creative Concept Development',
      'Print, Outdoor & Digital Campaigns',
      'Social Media Advertising',
      'Media Planning & Buying',
      'Video Production & Direction',
    ],
  },
  {
    icon: <Star size={28} />,
    tag: '03',
    title: 'Event Management',
    tagline: 'Experiences that endure.',
    description:
      'We transform briefs into moments. Whether it\'s an intimate brand launch or a large-scale conference, our event team handles every detail — from concept and design to execution and post-event amplification.',
    offerings: [
      'Corporate Events & Conferences',
      'Product Launches & Brand Activations',
      'Award Ceremonies & Galas',
      'Press Conferences & Media Briefings',
      'Trade Shows & Exhibitions',
      'Virtual & Hybrid Events',
    ],
  },
]

const addons = [
  { icon: <BarChart2 size={20} />, title: 'Research & Insights', desc: 'Data-led decisions that de-risk your campaigns.' },
  { icon: <Users size={20} />, title: 'Stakeholder Engagement', desc: 'Building meaningful dialogue with your key audiences.' },
  { icon: <Mic size={20} />, title: 'Media Training', desc: 'Preparing your leadership to own every interview.' },
]

export default function Services() {
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
            Our Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-5xl md:text-7xl font-light text-cream leading-tight"
          >
            Full-spectrum<br /><em>communication</em><br />services.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-body text-ink-300 text-base mt-6 max-w-xl leading-relaxed"
          >
            Three core disciplines. One seamless team. Infinite possibilities.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad">
        <div className="container-xl space-y-28">
          {services.map(({ icon, tag, title, tagline, description, offerings }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Info */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-gold-500">{icon}</span>
                  <span className="font-mono text-xs text-ink-400 tracking-widest">{tag}</span>
                </div>
                <h2 className="font-display text-4xl md:text-5xl font-light text-charcoal mb-2">
                  {title}
                </h2>
                <p className="font-display text-lg italic text-gold-500 mb-4">{tagline}</p>
                <div className="divider-gold" />
                <p className="font-body text-ink-500 text-sm leading-relaxed mt-4">
                  {description}
                </p>
                <Link to="/contact" className="mt-8 btn-primary inline-flex">
                  Discuss a Project <ArrowRight size={16} />
                </Link>
              </div>

              {/* Offerings list */}
              <div className="bg-ink-50 p-10">
                <p className="label-tag text-ink-400 mb-6">What's included</p>
                <ul className="space-y-4">
                  {offerings.map((item) => (
                    <li key={item} className="flex items-start gap-4 group">
                      <span className="w-5 h-px bg-gold-400 mt-2.5 flex-shrink-0 group-hover:w-8 transition-all duration-300" />
                      <span className="font-body text-sm text-charcoal leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-pad bg-ink-950">
        <div className="container-xl">
          <SectionHeader
            tag="Also Available"
            title="Complementary capabilities."
            light
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-700">
            {addons.map(({ icon, title, desc }) => (
              <div key={title} className="bg-ink-950 p-10">
                <span className="text-gold-400 mb-4 block">{icon}</span>
                <h3 className="font-display text-xl text-cream mb-2">{title}</h3>
                <p className="font-body text-sm text-ink-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
