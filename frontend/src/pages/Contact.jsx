import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { MapPin, Phone, Mail, Clock, ArrowRight, ChevronDown } from 'lucide-react'
import PageWrapper from '../components/PageWrapper'
import { submitContactForm } from '../utils/api'

const services = ['Public Relations', 'Advertising', 'Event Management', 'Other']

const contactInfo = [
  {
    icon: <MapPin size={18} />,
    label: 'Office',
    value: '12 Park Street, 3rd Floor\nKolkata – 700 016, West Bengal',
  },
  {
    icon: <Phone size={18} />,
    label: 'Phone',
    value: '+91 33 1234 5678',
    href: 'tel:+913312345678',
  },
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'hello@sambandh.in',
    href: 'mailto:hello@sambandh.in',
  },
  {
    icon: <Clock size={18} />,
    label: 'Hours',
    value: 'Mon–Fri: 9:30am – 6:30pm\nSat: 10:00am – 2:00pm',
  },
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      await submitContactForm(data)
      toast.success('Message sent! We\'ll be in touch soon.')
      reset()
      setSubmitted(true)
    } catch (error) {
      toast.error(error.message || 'Failed to send. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-cream border-b border-ink-100">
        <div className="container-xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="label-tag mb-6"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display text-5xl md:text-7xl font-light text-charcoal leading-tight"
          >
            We'd love to<br />hear from <em>you.</em>
          </motion.h1>
        </div>
      </section>

      {/* Main content */}
      <section className="section-pad">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-5 gap-20">
          {/* Form — wider column */}
          <div className="lg:col-span-3">
            <p className="label-tag mb-8 text-ink-400">Send us a message</p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-ink-50 border border-ink-200 p-12 text-center"
              >
                <div className="w-12 h-12 bg-charcoal flex items-center justify-center mx-auto mb-6">
                  <ArrowRight className="text-gold-400" size={20} />
                </div>
                <h3 className="font-display text-3xl font-light text-charcoal mb-3">
                  Message received.
                </h3>
                <p className="font-body text-sm text-ink-400 leading-relaxed mb-6">
                  Thank you for reaching out. One of our team members will respond within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-body text-xs text-ink-400 underline hover:text-charcoal transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                  {/* Name */}
                  <div>
                    <label className="label-tag text-[10px] text-ink-400 block mb-2">
                      Full Name <span className="text-gold-500">*</span>
                    </label>
                    <input
                      className="input-field"
                      placeholder="Your full name"
                      {...register('name', {
                        required: 'Name is required',
                        minLength: { value: 2, message: 'At least 2 characters' },
                      })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="label-tag text-[10px] text-ink-400 block mb-2">
                      Email Address <span className="text-gold-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="input-field"
                      placeholder="you@company.com"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: 'Enter a valid email address',
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="label-tag text-[10px] text-ink-400 block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="input-field"
                      placeholder="+91 98765 43210"
                      {...register('phone')}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="label-tag text-[10px] text-ink-400 block mb-2">
                      Company / Organisation
                    </label>
                    <input
                      className="input-field"
                      placeholder="Your company name"
                      {...register('company')}
                    />
                  </div>

                  {/* Service */}
                  <div className="sm:col-span-2">
                    <label className="label-tag text-[10px] text-ink-400 block mb-2">
                      Service of Interest
                    </label>
                    <div className="relative">
                      <select
                        className="select-field"
                        defaultValue=""
                        {...register('service')}
                      >
                        <option value="" disabled>Select a service…</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <ChevronDown
                        size={14}
                        className="absolute right-0 bottom-3.5 text-ink-400 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label className="label-tag text-[10px] text-ink-400 block mb-2">
                      Message <span className="text-gold-500">*</span>
                    </label>
                    <textarea
                      className="textarea-field"
                      rows={5}
                      placeholder="Tell us about your project, goals, or what you're looking for…"
                      {...register('message', {
                        required: 'Message is required',
                        minLength: { value: 10, message: 'At least 10 characters' },
                      })}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>
                </div>

                <div className="mt-10">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>Send Message <ArrowRight size={16} /></>
                    )}
                  </button>
                  <p className="font-body text-xs text-ink-400 mt-4">
                    We respond within one business day.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Contact info — narrower column */}
          <div className="lg:col-span-2">
            <p className="label-tag mb-8 text-ink-400">Contact Details</p>
            <div className="space-y-8">
              {contactInfo.map(({ icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <span className="text-gold-500 mt-0.5 flex-shrink-0">{icon}</span>
                  <div>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-ink-400 mb-1">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="font-body text-sm text-charcoal hover:text-gold-500 transition-colors link-underline whitespace-pre-line leading-relaxed"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-body text-sm text-charcoal whitespace-pre-line leading-relaxed">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-10 bg-ink-100 h-52 flex items-center justify-center border border-ink-200">
              <div className="text-center">
                <MapPin size={24} className="text-ink-400 mx-auto mb-2" />
                <p className="font-body text-xs text-ink-400">12 Park Street, Kolkata</p>
                <a
                  href="https://maps.google.com/?q=Park+Street+Kolkata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-gold-500 underline mt-1 inline-block hover:text-gold-600 transition-colors"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
