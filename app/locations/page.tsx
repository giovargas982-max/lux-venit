'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import { MapPin, Clock } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const locations = [
  {
    name: 'Richland Hills Baptist Church',
    address: '6852 Baker Blvd, Richland Hills TX 76118',
    day: 'Thursdays',
    schedule: [
      { time: '12:00 PM', choir: 'Lower Elementary', grades: 'K–2nd' },
      { time: '12:30 PM', choir: 'Upper Elementary / Select Ladies', grades: '3rd–6th / 6th–12th' },
      { time: '1:00 PM', choir: "Men's Tenors", grades: '6th–12th' },
      { time: '1:30 PM', choir: 'A Cappella Ladies', grades: '6th–12th' },
      { time: '2:00 PM', choir: 'Chorale', grades: '9th–12th' },
    ],
    note: 'Main campus — most programs available including Lower Elementary and Chorale.',
    featured: true,
  },
  {
    name: 'Trinity Prep (Keller)',
    address: '12657 N Caylor Rd, Keller TX 76248',
    day: 'Fridays',
    schedule: [
      { time: '9:00 AM', choir: 'Upper Elementary', grades: '3rd–6th' },
      { time: '10:00 AM', choir: "Ladies' Choir", grades: '6th–12th' },
      { time: '11:00 AM', choir: "Men's Choir", grades: '6th–12th' },
    ],
    note: '',
  },
  {
    name: 'Faith Lutheran (Wylie)',
    address: '615 Parker Rd, Wylie TX 75098',
    day: 'Mondays',
    schedule: [
      { time: '12:00 PM', choir: "Ladies' Choir", grades: '6th–12th' },
      { time: '1:00 PM', choir: 'Upper Elementary', grades: '3rd–6th' },
      { time: '2:00 PM', choir: "Men's Choir", grades: '6th–12th' },
    ],
    note: '',
  },
  {
    name: 'Trinity Lutheran (Weatherford)',
    address: '1500 W Ball St, Weatherford TX 76086',
    day: 'Tuesdays',
    schedule: [
      { time: '9:00 AM', choir: 'Upper Elementary', grades: '3rd–6th' },
      { time: '10:00 AM', choir: "Ladies' Choir", grades: '6th–12th' },
      { time: '11:00 AM', choir: "Men's Choir", grades: '6th–12th' },
    ],
    note: '',
  },
  {
    name: 'Altamesa Church of Christ (SW Fort Worth)',
    address: '4600 Altamesa Blvd #A, Fort Worth TX 76133',
    day: 'Tuesdays',
    schedule: [
      { time: '2:00 PM', choir: 'Upper Elementary', grades: '3rd–6th' },
      { time: '3:00 PM', choir: "Ladies' Choir", grades: '6th–12th' },
      { time: '4:00 PM', choir: "Men's Choir", grades: '6th–12th' },
    ],
    note: '',
  },
  {
    name: 'Lord of Life Lutheran (Plano)',
    address: '3601 W 15th St, Plano TX 75075',
    day: 'Fridays',
    schedule: [
      { time: '1:30 PM', choir: "Ladies' Choir", grades: '6th–12th' },
      { time: '2:30 PM', choir: 'Upper Elementary', grades: '3rd–6th' },
      { time: '3:30 PM', choir: "Men's Choir", grades: '6th–12th' },
    ],
    note: '',
  },
  {
    name: 'Community Bible Church (Irving)',
    address: '2301 Texas Dr, Irving TX 75062',
    day: 'Mondays',
    schedule: [
      { time: '5:00 PM', choir: 'Upper Elementary', grades: '3rd–6th' },
      { time: '6:00 PM', choir: "Ladies' Choir", grades: '6th–12th' },
      { time: '7:00 PM', choir: "Men's Choir", grades: '6th–12th' },
    ],
    note: 'Evening schedule — great for families with daytime commitments.',
  },
  {
    name: 'Midlothian Bible Church',
    address: '4250 FM 663, Midlothian TX 76065',
    day: 'Fridays',
    schedule: [
      { time: '11:30 AM', choir: "Men's / Ladies'", grades: '6th–12th' },
      { time: '12:30 PM', choir: 'Lower Elementary', grades: 'K–2nd' },
      { time: '1:00 PM', choir: 'Upper Elementary', grades: '3rd–6th' },
    ],
    note: 'Directed by Jonathan & Dana Cole.',
  },
]

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
          stagger: 0.12,
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

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Find Us"
        title="8 Locations Across"
        titleGold="North Texas"
        subtitle="Choose from 8 locations across NRH, Keller, SW Fort Worth, Plano, Irving, Midlothian, Weatherford, and Wylie."
      />

      {/* Parent Meeting Callout */}
      <section className="relative py-16 px-6" style={{ background: '#0D1321' }}>
        <RevealSection>
          <div className="max-w-4xl mx-auto">
            <div
              className="glass-card rounded-sm reveal-item text-center"
              style={{ padding: '3rem', background: 'rgba(200,169,107,0.04)', border: '1px solid rgba(200,169,107,0.2)' }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="gold-line" />
                <span className="eyebrow">Before You Register</span>
                <span className="gold-line" />
              </div>
              <h2 className="font-serif text-ivory mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 300 }}>
                Parent Information Meeting Required
              </h2>
              <p
                className="mx-auto mb-8"
                style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '1rem', color: 'rgba(246,242,234,0.6)', fontWeight: 300, maxWidth: '50ch', lineHeight: 1.8 }}
              >
                A parent information meeting is <strong style={{ color: 'rgba(200,169,107,0.9)' }}>mandatory</strong> before you can register. Zoom attendance is available if you cannot come in person.
              </p>
              <p
                className="mx-auto mb-8"
                style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.9rem', color: 'rgba(246,242,234,0.45)', fontWeight: 300, maxWidth: '48ch', lineHeight: 1.8 }}
              >
                Email us to request a meeting link. Include your nearest location of interest and the age/gender of your singer(s).
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/enroll" className="btn-luxury bg-accent-gold text-primary-bg hover:bg-accent-gold/90" style={{ fontWeight: 600 }}>
                  Contact Us to Register
                </Link>
                <a
                  href="mailto:richardandmarycarr@sbcglobal.net"
                  className="btn-luxury border border-accent-gold/40 text-accent-gold hover:border-accent-gold"
                >
                  Email for Zoom Link
                </a>
              </div>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* Locations Grid */}
      <section className="relative py-24 md:py-32 px-6" style={{ background: '#060B16' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(13,19,33,0.8) 0%, transparent 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((loc, i) => (
              <RevealSection key={loc.name}>
                <div
                  className={`glass-card rounded-sm reveal-item ${loc.featured ? 'ring-1 ring-accent-gold/30' : ''}`}
                  style={{ padding: '2.5rem' }}
                >
                  {loc.featured && (
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className="eyebrow px-3 py-1"
                        style={{ background: 'rgba(200,169,107,0.1)', border: '1px solid rgba(200,169,107,0.25)', borderRadius: '2px', fontSize: '0.55rem' }}
                      >
                        Main Campus
                      </span>
                    </div>
                  )}

                  <div className="flex items-start gap-3 mb-2">
                    <MapPin size={16} className="flex-shrink-0 mt-1" style={{ color: 'rgba(200,169,107,0.6)' }} strokeWidth={1.5} />
                    <h3 className="font-serif text-ivory leading-tight" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 400 }}>
                      {loc.name}
                    </h3>
                  </div>

                  <p
                    className="mb-1 ml-7"
                    style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.82rem', color: 'rgba(246,242,234,0.4)', fontWeight: 300 }}
                  >
                    {loc.address}
                  </p>

                  <div className="flex items-center gap-2 ml-7 mb-6">
                    <Clock size={12} style={{ color: 'rgba(200,169,107,0.5)' }} strokeWidth={1.5} />
                    <span className="eyebrow" style={{ color: 'rgba(200,169,107,0.6)', fontSize: '0.58rem' }}>
                      {loc.day}
                    </span>
                  </div>

                  <div className="gold-line mb-6" />

                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <p className="eyebrow" style={{ color: 'rgba(200,169,107,0.4)', fontSize: '0.54rem' }}>Time</p>
                      <p className="eyebrow col-span-2" style={{ color: 'rgba(200,169,107,0.4)', fontSize: '0.54rem' }}>Ensemble</p>
                    </div>
                    {loc.schedule.map(({ time, choir, grades }) => (
                      <div
                        key={time + choir}
                        className="grid grid-cols-3 gap-2 py-2"
                        style={{ borderBottom: '1px solid rgba(200,169,107,0.06)' }}
                      >
                        <span style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.8rem', color: '#C8A96B', fontWeight: 500 }}>{time}</span>
                        <div className="col-span-2">
                          <p style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.85rem', color: 'rgba(246,242,234,0.7)', fontWeight: 400 }}>{choir}</p>
                          <p style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.72rem', color: 'rgba(246,242,234,0.35)', fontWeight: 300 }}>{grades}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {loc.note && (
                    <p
                      className="mt-6 px-3 py-2 rounded-sm"
                      style={{
                        fontFamily: 'var(--font-inter), system-ui',
                        fontSize: '0.78rem',
                        color: 'rgba(200,169,107,0.65)',
                        fontWeight: 300,
                        background: 'rgba(200,169,107,0.05)',
                        border: '1px solid rgba(200,169,107,0.1)',
                        lineHeight: 1.6,
                      }}
                    >
                      {loc.note}
                    </p>
                  )}
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 text-center" style={{ background: '#0D1321' }}>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="gold-line" />
            <span className="eyebrow">Questions?</span>
            <span className="gold-line" />
          </div>
          <h2 className="font-serif text-ivory mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 300 }}>
            Ready to Find Your{' '}
            <em className="text-gradient-gold" style={{ fontStyle: 'italic', fontWeight: 400 }}>Location?</em>
          </h2>
          <p
            className="mb-10 mx-auto"
            style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '1rem', color: 'rgba(246,242,234,0.55)', fontWeight: 300, maxWidth: '44ch', lineHeight: 1.8 }}
          >
            Contact us at (817) 627-9301 or email richardandmarycarr@sbcglobal.net to find the best location and time for your family.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/enroll" className="btn-luxury bg-accent-gold text-primary-bg hover:bg-accent-gold/90" style={{ fontWeight: 600 }}>
              Begin Enrollment
            </Link>
            <a href="tel:8176279301" className="btn-luxury border border-accent-gold/40 text-accent-gold hover:border-accent-gold">
              Call (817) 627-9301
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
