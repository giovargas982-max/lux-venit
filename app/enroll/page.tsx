'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import { Mail, Phone, ChevronDown, ChevronRight } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const faqs = [
  {
    q: 'Is the parent information meeting really required?',
    a: 'Yes — a parent information meeting is mandatory before you can register. Zoom attendance is available if you cannot come in person. Email us with your nearest location of interest and the age/gender of your singer(s) to receive the link.',
  },
  {
    q: 'How do I pay tuition?',
    a: 'You may pay by cash in an envelope, personal check payable to "Lux Venit Choral Academy," PayPal, Venmo, or Zelle. Tuition is due monthly.',
  },
  {
    q: 'Is there a limit on tuition for large families?',
    a: 'Yes! The family tuition cap is $100 per month regardless of how many children are enrolled. Supply fees and the building/insurance fee ($60 per family per semester) are separate.',
  },
  {
    q: 'Do I need a referral code or discount?',
    a: 'If a friend refers you and enrolls, you receive $40 off one month\'s tuition. Likewise, if you refer a family who enrolls, you receive $40 off.',
  },
  {
    q: 'What if we need to drop out?',
    a: 'Please notify the director as soon as possible. A prorated refund may be available depending on the circumstances.',
  },
  {
    q: 'Is an audition required?',
    a: 'No audition is required for Lower Elementary, Upper Elementary, or Men\'s & Ladies\' Choirs. Only Chorale (9th–12th grade) requires an audition.',
  },
  {
    q: 'What kind of music will my child sing?',
    a: 'Baroque, Classical, Renaissance, folk songs, hymns, spirituals, and sacred and secular pieces in a variety of languages. The repertoire is chosen to glorify God while exposing students to diverse musical traditions.',
  },
  {
    q: 'What is the dress code for class?',
    a: 'Skirts and dresses must be below the knee. Shorts should be just above the knee or below. No spaghetti straps, tank tops, low-cut shirts, or inappropriate words/pictures on shirts.',
  },
  {
    q: 'How many absences are allowed?',
    a: 'A maximum of 2 absences per semester from regular class. Please notify the director in advance if your child will be absent.',
  },
  {
    q: 'Can we join mid-year?',
    a: 'Yes — students may join after each concert (approximately end of semester). Contact the director for the next available enrollment date.',
  },
  {
    q: 'Do parents need to stay during class?',
    a: 'Parents of K–2nd grade students must remain on campus. For 3rd–12th grade, it is at the parent\'s discretion.',
  },
  {
    q: 'Which homeschool co-ops are you affiliated with?',
    a: 'Lux Venit is open to students from all co-ops and homeschool associations, including CC, Classical Conversations, DE, Dominion Equippers, MGA, Morning Glory Academy, Kingdom Kids, NICHE, WACHE, Center for Home Education, Sonlight, MC2, Legacy, and Venture.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!bodyRef.current) return
    if (open) {
      gsap.fromTo(bodyRef.current, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.45, ease: 'power2.out' })
    } else {
      gsap.to(bodyRef.current, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in' })
    }
  }, [open])

  return (
    <div
      className="border-b cursor-pointer"
      style={{ borderColor: 'rgba(200,169,107,0.1)' }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-5 gap-4">
        <p
          style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.95rem', color: open ? '#C8A96B' : 'rgba(246,242,234,0.8)', fontWeight: 400, lineHeight: 1.5, transition: 'color 0.3s ease' }}
        >
          {q}
        </p>
        <ChevronDown
          size={16}
          style={{
            color: 'rgba(200,169,107,0.6)',
            flexShrink: 0,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
      </div>
      <div ref={bodyRef} style={{ overflow: 'hidden', height: 0, opacity: 0 }}>
        <p
          className="pb-5"
          style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.9rem', color: 'rgba(246,242,234,0.55)', fontWeight: 300, lineHeight: 1.8 }}
        >
          {a}
        </p>
      </div>
    </div>
  )
}

function RevealSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current?.querySelectorAll('.reveal-item') ?? [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 78%',
            once: true,
          },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default function EnrollPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    singerAge: '',
    singerGrade: '',
    singerGender: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('Lux Venit Enrollment Inquiry')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Location: ${formData.location}\nSinger Age: ${formData.singerAge}\nSinger Grade: ${formData.singerGrade}\nSinger Gender: ${formData.singerGender}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:richardandmarycarr@sbcglobal.net?subject=${subject}&body=${body}`
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(200,169,107,0.2)',
    borderRadius: '2px',
    padding: '0.85rem 1rem',
    fontFamily: 'var(--font-inter), system-ui',
    fontSize: '0.9rem',
    color: 'rgba(246,242,234,0.85)',
    fontWeight: 300,
    outline: 'none',
    transition: 'border-color 0.3s ease',
  }

  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-inter), system-ui',
    fontSize: '0.68rem',
    fontWeight: 500,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: 'rgba(200,169,107,0.6)',
    marginBottom: '0.5rem',
  }

  return (
    <>
      <PageHero
        eyebrow="Begin Your Journey"
        title="Join Lux Venit"
        titleGold="Choral Academy"
        subtitle="We'd love to welcome your family. Start by attending a parent information meeting — then registration is easy."
      />

      {/* Info Meeting Callout */}
      <section className="relative py-16 px-6" style={{ background: '#0D1321' }}>
        <RevealSection>
          <div className="max-w-4xl mx-auto">
            <div
              className="glass-card rounded-sm reveal-item"
              style={{ padding: '3rem', background: 'rgba(200,169,107,0.04)', border: '1px solid rgba(200,169,107,0.25)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="gold-line" />
                <span className="eyebrow">Step One</span>
              </div>
              <h2 className="font-serif text-ivory mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 300 }}>
                Attend a Parent Information Meeting
              </h2>
              <p
                className="mb-6"
                style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '1rem', color: 'rgba(246,242,234,0.6)', fontWeight: 300, maxWidth: '52ch', lineHeight: 1.8 }}
              >
                A parent information meeting is <strong style={{ color: 'rgba(200,169,107,0.9)' }}>mandatory</strong> before registration. This is where you'll learn about expectations, policies, and how the program works. Zoom attendance is available.
              </p>
              <p
                className="mb-8"
                style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.9rem', color: 'rgba(246,242,234,0.45)', fontWeight: 300, maxWidth: '50ch', lineHeight: 1.8 }}
              >
                To request a meeting, email us at{' '}
                <a href="mailto:richardandmarycarr@sbcglobal.net" style={{ color: '#C8A96B' }}>richardandmarycarr@sbcglobal.net</a>.
                Include: (1) your preferred location, (2) the age and gender of your singer(s).
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:richardandmarycarr@sbcglobal.net?subject=Parent%20Information%20Meeting%20Request"
                  className="btn-luxury bg-accent-gold text-primary-bg hover:bg-accent-gold/90"
                  style={{ fontWeight: 600 }}
                >
                  Email for Meeting Link
                  <ChevronRight size={14} />
                </a>
                <a href="tel:8176279301" className="btn-luxury border border-accent-gold/40 text-accent-gold hover:border-accent-gold">
                  Call (817) 627-9301
                </a>
              </div>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* Contact + Form */}
      <section className="relative py-24 md:py-32 px-6" style={{ background: '#060B16' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,169,107,0.03) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Contact Info */}
          <RevealSection>
            <div className="flex items-center gap-4 mb-10 reveal-item">
              <span className="gold-line" />
              <span className="eyebrow">Contact Us</span>
            </div>
            <h2 className="font-serif text-ivory mb-6 reveal-item" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 300 }}>
              We're Here to{' '}
              <em className="text-gradient-gold" style={{ fontStyle: 'italic', fontWeight: 400 }}>Help</em>
            </h2>
            <p
              className="mb-10 reveal-item"
              style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '1rem', color: 'rgba(246,242,234,0.55)', fontWeight: 300, maxWidth: '40ch', lineHeight: 1.8 }}
            >
              Have questions before you attend a meeting? Reach out anytime. We serve 8 DFW locations and are happy to help you find the right fit.
            </p>

            <div className="space-y-6 reveal-item">
              <a
                href="tel:8176279301"
                className="flex items-center gap-4 group"
              >
                <div
                  className="flex items-center justify-center w-11 h-11 flex-shrink-0"
                  style={{ background: 'rgba(200,169,107,0.08)', border: '1px solid rgba(200,169,107,0.18)' }}
                >
                  <Phone size={16} style={{ color: '#C8A96B' }} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="eyebrow mb-1" style={{ color: 'rgba(200,169,107,0.5)', fontSize: '0.55rem' }}>Phone</p>
                  <p
                    className="group-hover:text-accent-gold transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '1rem', color: 'rgba(246,242,234,0.8)', fontWeight: 400 }}
                  >
                    (817) 627-9301
                  </p>
                </div>
              </a>

              <a
                href="mailto:richardandmarycarr@sbcglobal.net"
                className="flex items-center gap-4 group"
              >
                <div
                  className="flex items-center justify-center w-11 h-11 flex-shrink-0"
                  style={{ background: 'rgba(200,169,107,0.08)', border: '1px solid rgba(200,169,107,0.18)' }}
                >
                  <Mail size={16} style={{ color: '#C8A96B' }} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="eyebrow mb-1" style={{ color: 'rgba(200,169,107,0.5)', fontSize: '0.55rem' }}>Email</p>
                  <p
                    className="group-hover:text-accent-gold transition-colors duration-300 break-all"
                    style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.9rem', color: 'rgba(246,242,234,0.8)', fontWeight: 400 }}
                  >
                    richardandmarycarr@sbcglobal.net
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-12 p-6 rounded-sm reveal-item" style={{ background: 'rgba(200,169,107,0.04)', border: '1px solid rgba(200,169,107,0.15)' }}>
              <p className="eyebrow mb-4" style={{ color: 'rgba(200,169,107,0.5)', fontSize: '0.58rem' }}>Payment Methods</p>
              <ul className="space-y-2">
                {[
                  'Cash in envelope',
                  'Personal check — payable to "Lux Venit Choral Academy"',
                  'PayPal',
                  'Venmo',
                  'Zelle',
                ].map((method) => (
                  <li key={method} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#C8A96B' }} />
                    <span style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.85rem', color: 'rgba(246,242,234,0.55)', fontWeight: 300 }}>
                      {method}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 p-6 rounded-sm reveal-item" style={{ background: 'rgba(200,169,107,0.04)', border: '1px solid rgba(200,169,107,0.15)' }}>
              <p className="eyebrow mb-3" style={{ color: 'rgba(200,169,107,0.5)', fontSize: '0.58rem' }}>Referral Discount</p>
              <p style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.88rem', color: 'rgba(246,242,234,0.55)', fontWeight: 300, lineHeight: 1.7 }}>
                Refer a family who enrolls and receive <strong style={{ color: 'rgba(200,169,107,0.8)' }}>$40 off one month's tuition</strong>. Your friend also receives $40 off when they enroll using your name.
              </p>
            </div>
          </RevealSection>

          {/* Contact Form */}
          <RevealSection>
            <div className="flex items-center gap-4 mb-10 reveal-item">
              <span className="gold-line" />
              <span className="eyebrow">Send a Message</span>
            </div>
            <div className="glass-card rounded-sm reveal-item" style={{ padding: '2.5rem' }}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle} htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      style={inputStyle}
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      style={inputStyle}
                      placeholder="(817) 555-0100"
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle} htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label style={labelStyle} htmlFor="location">Preferred Location</label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    style={{ ...inputStyle, appearance: 'none' as const }}
                  >
                    <option value="">Select a location...</option>
                    <option value="Richland Hills Baptist (Thu)">Richland Hills Baptist — Thursdays</option>
                    <option value="Trinity Prep Keller (Fri)">Trinity Prep Keller — Fridays</option>
                    <option value="Faith Lutheran Wylie (Mon)">Faith Lutheran Wylie — Mondays</option>
                    <option value="Trinity Lutheran Weatherford (Tue)">Trinity Lutheran Weatherford — Tuesdays</option>
                    <option value="Altamesa CoC Fort Worth (Tue)">Altamesa Church of Christ Fort Worth — Tuesdays</option>
                    <option value="Lord of Life Lutheran Plano (Fri)">Lord of Life Lutheran Plano — Fridays</option>
                    <option value="Community Bible Church Irving (Mon)">Community Bible Church Irving — Mondays</option>
                    <option value="Midlothian Bible Church (Fri)">Midlothian Bible Church — Fridays</option>
                  </select>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label style={labelStyle} htmlFor="singerAge">Singer Age</label>
                    <input
                      id="singerAge"
                      name="singerAge"
                      type="text"
                      value={formData.singerAge}
                      onChange={handleChange}
                      style={inputStyle}
                      placeholder="e.g. 10"
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="singerGrade">Grade</label>
                    <input
                      id="singerGrade"
                      name="singerGrade"
                      type="text"
                      value={formData.singerGrade}
                      onChange={handleChange}
                      style={inputStyle}
                      placeholder="e.g. 4th"
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="singerGender">Gender</label>
                    <select
                      id="singerGender"
                      name="singerGender"
                      value={formData.singerGender}
                      onChange={handleChange}
                      style={{ ...inputStyle, appearance: 'none' as const }}
                    >
                      <option value="">Select...</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle} htmlFor="message">Message / Questions</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    placeholder="Tell us anything else we should know, or ask your questions here..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-luxury w-full bg-accent-gold text-primary-bg hover:bg-accent-gold/90"
                  style={{ fontWeight: 600, justifyContent: 'center' }}
                >
                  Send Message
                  <ChevronRight size={14} />
                </button>

                <p style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.75rem', color: 'rgba(246,242,234,0.3)', fontWeight: 300, textAlign: 'center', lineHeight: 1.6 }}>
                  This will open your email client with your message pre-filled.
                </p>
              </form>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 md:py-32 px-6" style={{ background: '#0D1321' }}>
        <div className="relative max-w-4xl mx-auto">
          <RevealSection>
            <div className="flex items-center justify-center gap-4 mb-16 reveal-item">
              <span className="gold-line" />
              <span className="eyebrow">Frequently Asked Questions</span>
              <span className="gold-line" />
            </div>

            <h2
              className="font-serif text-ivory text-center mb-16 reveal-item"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, letterSpacing: '-0.01em' }}
            >
              Everything You{' '}
              <em className="text-gradient-gold" style={{ fontStyle: 'italic', fontWeight: 400 }}>Need to Know</em>
            </h2>

            <div className="glass-card rounded-sm reveal-item" style={{ padding: '2.5rem' }}>
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Policies Summary */}
      <section className="relative py-24 px-6" style={{ background: '#060B16' }}>
        <div className="relative max-w-6xl mx-auto">
          <RevealSection>
            <div className="flex items-center justify-center gap-4 mb-16 reveal-item">
              <span className="gold-line" />
              <span className="eyebrow">Policies</span>
              <span className="gold-line" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Attendance',
                  items: [
                    'Maximum 2 absences per semester',
                    'Notify director before any absence',
                    'Students may join mid-year after each concert',
                  ],
                },
                {
                  title: 'Behavior',
                  items: [
                    'Respectful conduct required at all times',
                    'All choirs function as a team',
                    'Students are expected to come prepared',
                    'Preparedness for each rehearsal is essential',
                  ],
                },
                {
                  title: 'Dress Code',
                  items: [
                    'Skirts/dresses below the knee',
                    'Shorts just above or below the knee',
                    'No spaghetti straps or tank tops',
                    'No low-cut or inappropriate shirts',
                    'Concert uniform: white Lux Venit polo + black bottoms',
                  ],
                },
              ].map(({ title, items }) => (
                <div key={title} className="glass-card rounded-sm reveal-item" style={{ padding: '2.5rem' }}>
                  <h3 className="font-serif text-ivory mb-6" style={{ fontSize: '1.4rem', fontWeight: 400 }}>{title}</h3>
                  <div className="gold-line mb-5" />
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ background: '#C8A96B' }} />
                        <span style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.88rem', color: 'rgba(246,242,234,0.55)', fontWeight: 300 }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-6 text-center" style={{ background: '#0D1321' }}>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="gold-line" />
            <span className="eyebrow">One Step Away</span>
            <span className="gold-line" />
          </div>
          <h2 className="font-serif text-ivory mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 300 }}>
            Your Singer's{' '}
            <em className="text-gradient-gold" style={{ fontStyle: 'italic', fontWeight: 400 }}>Journey Awaits</em>
          </h2>
          <p
            className="mb-10 mx-auto"
            style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '1rem', color: 'rgba(246,242,234,0.55)', fontWeight: 300, maxWidth: '44ch', lineHeight: 1.8 }}
          >
            Email us today to request the parent information meeting link and take the first step toward joining the Lux Venit family.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:richardandmarycarr@sbcglobal.net?subject=Parent%20Information%20Meeting%20Request"
              className="btn-luxury bg-accent-gold text-primary-bg hover:bg-accent-gold/90"
              style={{ fontWeight: 600 }}
            >
              Email Us Today
              <ChevronRight size={14} />
            </a>
            <Link href="/locations" className="btn-luxury border border-accent-gold/40 text-accent-gold hover:border-accent-gold">
              Find Your Location
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
