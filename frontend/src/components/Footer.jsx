import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/directors', label: 'Directors' },
  { to: '/contact', label: 'Contact' },
]

const services = [
  'Public Relations',
  'Advertising',
  'Event Management',
  'Brand Strategy',
  'Media Planning',
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      {/* Top CTA strip */}
      <div className="border-b border-ink-700">
        <div className="container-xl py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="label-tag text-gold-400 mb-3">Ready to grow?</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-cream">
              Let's build something <em>remarkable.</em>
            </h2>
          </div>
          <Link to="/contact" className="btn-outline border-cream text-cream hover:bg-cream hover:text-charcoal flex-shrink-0">
            Start a Project <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex flex-col leading-none mb-6">
              <span className="font-display text-2xl font-semibold text-cream">Sambandh</span>
              <span className="label-tag text-gold-400 text-[10px] mt-1">Advertising & PR</span>
            </Link>
            <p className="font-body text-ink-300 text-sm leading-relaxed max-w-xs">
              Crafting meaningful connections between brands and people since 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="label-tag text-ink-400 mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="font-body text-sm text-ink-300 hover:text-cream transition-colors duration-200 link-underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="label-tag text-ink-400 mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="font-body text-sm text-ink-300 hover:text-cream transition-colors duration-200 link-underline">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label-tag text-ink-400 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-ink-300 leading-relaxed">
                  12 Park Street, 3rd Floor<br />
                  Kolkata – 700 016, WB
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-gold-400 flex-shrink-0" />
                <a href="tel:+913312345678" className="font-body text-sm text-ink-300 hover:text-cream transition-colors link-underline">
                  +91 33 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-gold-400 flex-shrink-0" />
                <a href="mailto:hello@sambandh.in" className="font-body text-sm text-ink-300 hover:text-cream transition-colors link-underline">
                  hello@sambandh.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink-700">
        <div className="container-xl py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-ink-500">
            © {new Date().getFullYear()} Sambandh Advertising & PR. All rights reserved.
          </p>
          <p className="font-body text-xs text-ink-600">
            Crafted with precision in Kolkata.
          </p>
        </div>
      </div>
    </footer>
  )
}
