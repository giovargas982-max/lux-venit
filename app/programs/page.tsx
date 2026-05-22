'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import { Music, Star, Mic2, Award, ChevronRight } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const programs = [
  {
    icon: Music,
    label: 'K – 2nd Grade',
    price: '$40',
    supplyFee: '$20 / semester',
    locations: 'NRH & Midlothian only',
    title: 'Lower Elementary',
    subtitle: 'General Music',
    description:
      'An engaging introduction to music for young singers. This foundational program develops the ear, the voice, and the heart for sacred music from the very beginning.',
    skills: [
      'Pitch matching and ear training',
      'Solfège with Curwen hand signs',
      'Basic music reading',
      'Folk songs, hymns, and sacred songs',
      'Singing in rounds',
      'Foundational vocal techniques',
      'Rhythm and beat',
      'Two parent demonstration days per semester',
    ],
    note: 'Parent or guardian must remain on campus during class.',
    color: 'rgba(200,169,107,0.06)',
  },
  {
    icon: Star,
    label: '3rd – 6th Grade',
    price: '$50',
    supplyFee: '$30 / semester',
    locations: 'All 8 locations',
    title: 'Upper Elementary',
    subtitle: 'Choir',
    description:
      'Building on foundational skills with advancing harmonic study and choral discipline. Students gain confidence through two formal concerts each semester.',
    skills: [
      'Two-part singing',
      'Absolute pitch names and solfège on the staff',
      'Music reading and rhythm',
      'Proper breathing technique',
      'Vowel formation and diction',
      'Dynamics and phrasing',
      'Two formal concerts per semester',
    ],
    note: 'Home practice requirement: 30 minutes per week.',
    featured: true,
    color: 'rgba(200,169,107,0.04)',
  },
  {
    icon: Mic2,
    label: '6th – 12th Grade',
    price: '$60',
    supplyFee: '$40 / semester',
    locations: 'All 8 locations',
    title: "Men's & Ladies' Choirs",
    subtitle: 'Advanced Training',
    description:
      "Men's and ladies' classes are taught separately then combined for rehearsals and performances. This ensemble develops a choral singer's full artistry.",
    skills: [
      "Men's and ladies' classes taught separately",
      'Three-part singing',
      'Dynamics, phrasing, and articulation',
      'Diction and vowel refinement',
      'Singing in multiple languages',
      'Sight-reading and music theory',
      'Solo and ensemble preparation',
      'Competition participation',
    ],
    note: 'Home practice requirement: 45 minutes per week.',
    color: 'rgba(200,169,107,0.06)',
  },
  {
    icon: Award,
    label: '9th – 12th Grade',
    price: '$70',
    supplyFee: '$40 / semester',
    locations: 'By Audition',
    title: 'Chorale',
    subtitle: 'Auditioned Ensemble',
    description:
      'Our only auditioned ensemble and most advanced group. Chorale represents Lux Venit at festivals, competitions, and prestigious venues across Texas.',
    skills: [
      'Auditioned placement required',
      'Most advanced choral repertoire',
      'Festival and competition performance',
      'Prestigious venue appearances',
      'Advanced sight-reading',
      'Leadership and musicianship',
    ],
    note: 'Home practice requirement: 60 minutes per week. Audition required.',
    color: 'rgba(200,169,107,0.04)',
  },
]

const meritAwards = [
  { points: '900', award: 'Certificate', level: 'Upper Elementary' },
  { points: '1,200', award: 'Certificate', level: 'MS / HS' },
  { points: '1,920', award: 'Bronze Medal', level: 'All levels' },
  { points: '2,520', award: 'Silver Medal', level: 'All levels' },
  { points: '3,120', award: 'Gold Medal', level: 'All levels' },
  { points: 'Highest', award: 'Merit Scholar Award', level: 'Engraved Gold Medal' },
]

const meritExtra = [
  { label: 'Memory verse', points: '+30' },
  { label: 'Audition for solo', points: '+60' },
  { label: 'Selected for solo', points: '+60' },
  { label: 'Composer report', points: '+45' },
  { label: 'Attend classical concert', points: '+45' },
  { label: 'Sight-sing in class', points: '+15' },
  { label: 'Audition All-Region (MS/HS)', points: '+500' },
  { label: 'Make Region Choir', points: '+150' },
  { label: 'All-State selection', points: '+600' },
  { label: 'Solo/Ensemble Contest — Solo', points: '+400' },
  { label: 'Solo/Ensemble Contest — Ensemble', points: '+200' },
  { label: 'Summer Camp', points: '+500' },
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

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Training Young Voices"
        titleGold="For God's Glory"
        subtitle="Four carefully designed programs guiding students from their first notes to concert stages — all rooted in faith and musical discipline."
      />

      {/* Programs Detail */}
      <section className="relative py-24 md:py-32 px-6" style={{ background: '#060B16' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(13,19,33,0.8) 0%, transparent 100%)' }}
        />
        <div className="relative max-w-6xl mx-auto space-y-12">
          {programs.map((program, i) => {
            const Icon = program.icon
            return (
              <RevealSection key={program.title}>
                <div
                  className={`glass-card rounded-sm reveal-item ${program.featured ? 'ring-1 ring-accent-gold/25' : ''}`}
                  style={{ padding: '0' }}
                >
                  {/* Header bar */}
                  <div
                    className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 md:p-10"
                    style={{ background: program.color, borderBottom: '1px solid rgba(200,169,107,0.1)' }}
                  >
                    <div className="flex items-center gap-5">
                      <div
                        className="flex items-center justify-center w-14 h-14 rounded-sm flex-shrink-0"
                        style={{ background: 'rgba(200,169,107,0.08)', border: '1px solid rgba(200,169,107,0.18)' }}
                      >
                        <Icon size={22} className="text-accent-gold" strokeWidth={1.2} />
                      </div>
                      <div>
                        <p className="eyebrow mb-1" style={{ color: 'rgba(200,169,107,0.6)', fontSize: '0.58rem' }}>
                          {program.label} — {program.locations}
                        </p>
                        <h2 className="font-serif text-ivory leading-tight" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 400 }}>
                          {program.title}
                        </h2>
                        <p className="font-serif italic" style={{ fontSize: '1rem', color: '#C8A96B', fontWeight: 300 }}>
                          {program.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 flex-shrink-0">
                      <p
                        className="font-serif"
                        style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', color: '#C8A96B', fontWeight: 400, lineHeight: 1 }}
                      >
                        {program.price}
                        <span style={{ fontSize: '1rem', fontWeight: 300, color: 'rgba(200,169,107,0.6)' }}>/month</span>
                      </p>
                      <p style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.75rem', color: 'rgba(246,242,234,0.4)', fontWeight: 300 }}>
                        Supply fee: {program.supplyFee}
                      </p>
                      {program.featured && (
                        <span
                          className="eyebrow px-3 py-1 mt-1"
                          style={{ background: 'rgba(200,169,107,0.1)', border: '1px solid rgba(200,169,107,0.25)', borderRadius: '2px', fontSize: '0.55rem' }}
                        >
                          Most Popular
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8 md:p-10 grid md:grid-cols-2 gap-10">
                    <div>
                      <p
                        className="leading-loose mb-6"
                        style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.95rem', color: 'rgba(246,242,234,0.6)', fontWeight: 300 }}
                      >
                        {program.description}
                      </p>
                      <p
                        className="px-4 py-3 rounded-sm"
                        style={{
                          fontFamily: 'var(--font-inter), system-ui',
                          fontSize: '0.8rem',
                          color: 'rgba(200,169,107,0.75)',
                          fontWeight: 300,
                          background: 'rgba(200,169,107,0.05)',
                          border: '1px solid rgba(200,169,107,0.15)',
                        }}
                      >
                        {program.note}
                      </p>
                    </div>
                    <div>
                      <p className="eyebrow mb-4" style={{ color: 'rgba(200,169,107,0.5)', fontSize: '0.58rem' }}>
                        What You'll Learn
                      </p>
                      <ul className="space-y-3">
                        {program.skills.map((skill) => (
                          <li key={skill} className="flex items-start gap-3">
                            <span className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ background: '#C8A96B' }} />
                            <span
                              style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.88rem', color: 'rgba(246,242,234,0.55)', fontWeight: 300 }}
                            >
                              {skill}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </RevealSection>
            )
          })}
        </div>
      </section>

      {/* Family Cap Callout */}
      <section className="relative py-16 px-6" style={{ background: '#0D1321' }}>
        <RevealSection>
          <div className="max-w-4xl mx-auto">
            <div
              className="glass-card rounded-sm reveal-item text-center"
              style={{ padding: '3rem', background: 'rgba(200,169,107,0.04)', border: '1px solid rgba(200,169,107,0.2)' }}
            >
              <p className="eyebrow mb-4" style={{ color: 'rgba(200,169,107,0.6)', fontSize: '0.6rem' }}>
                Family Tuition Cap
              </p>
              <p className="font-serif text-ivory mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 300 }}>
                $100 <span style={{ fontSize: '1.2rem', color: 'rgba(200,169,107,0.7)' }}>/ month maximum</span>
              </p>
              <p style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '1rem', color: 'rgba(246,242,234,0.55)', fontWeight: 300, maxWidth: '48ch', margin: '0 auto', lineHeight: 1.8 }}>
                No matter how many children you enroll, your family will never pay more than $100 per month in tuition. Supply fees and the building/insurance fee ($60 per family per semester) apply separately.
              </p>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* Merit System */}
      <section className="relative py-24 md:py-32 px-6" style={{ background: '#060B16' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,169,107,0.03) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-6xl mx-auto">
          <RevealSection>
            <div className="flex items-center justify-center gap-4 mb-16 reveal-item">
              <span className="gold-line" />
              <span className="eyebrow">Merit System</span>
              <span className="gold-line" />
            </div>

            <h2
              className="font-serif text-ivory text-center mb-6 reveal-item"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, letterSpacing: '-0.01em' }}
            >
              Earn Points.{' '}
              <em className="text-gradient-gold" style={{ fontStyle: 'italic', fontWeight: 400 }}>Win Awards.</em>
            </h2>

            <p
              className="text-center mx-auto mb-16 reveal-item"
              style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '1rem', color: 'rgba(246,242,234,0.5)', fontWeight: 300, maxWidth: '52ch', lineHeight: 1.8 }}
            >
              Every student earns points for practicing at home and participating in special activities. Points accumulate toward prestigious awards and medals.
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Practice points */}
              <div className="reveal-item">
                <div className="glass-card rounded-sm" style={{ padding: '2.5rem' }}>
                  <p className="eyebrow mb-6" style={{ color: 'rgba(200,169,107,0.5)', fontSize: '0.6rem' }}>Weekly Practice Points</p>
                  <div className="space-y-3">
                    {[
                      { time: '15 minutes', pts: '15 pts' },
                      { time: '30 minutes', pts: '30 pts' },
                      { time: '45 minutes', pts: '45 pts' },
                      { time: '60 minutes', pts: '60 pts' },
                    ].map(({ time, pts }) => (
                      <div key={time} className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid rgba(200,169,107,0.08)' }}>
                        <span style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.9rem', color: 'rgba(246,242,234,0.6)', fontWeight: 300 }}>{time}</span>
                        <span style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.88rem', color: '#C8A96B', fontWeight: 500 }}>{pts}</span>
                      </div>
                    ))}
                    <p style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.8rem', color: 'rgba(246,242,234,0.35)', fontWeight: 300, marginTop: '1rem' }}>
                      Maximum 180 points per week
                    </p>
                  </div>
                  <div className="gold-line-wide mt-8 mb-6" />
                  <p className="eyebrow mb-4" style={{ color: 'rgba(200,169,107,0.5)', fontSize: '0.6rem' }}>Bonus Point Opportunities</p>
                  <div className="space-y-2">
                    {meritExtra.map(({ label, points }) => (
                      <div key={label} className="flex items-center justify-between">
                        <span style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.82rem', color: 'rgba(246,242,234,0.5)', fontWeight: 300 }}>{label}</span>
                        <span style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.8rem', color: 'rgba(200,169,107,0.7)', fontWeight: 500 }}>{points}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Award tiers */}
              <div className="reveal-item">
                <div className="glass-card rounded-sm" style={{ padding: '2.5rem' }}>
                  <p className="eyebrow mb-6" style={{ color: 'rgba(200,169,107,0.5)', fontSize: '0.6rem' }}>Award Tiers</p>
                  <div className="space-y-4">
                    {meritAwards.map(({ points, award, level }) => (
                      <div
                        key={award + level}
                        className="flex items-center gap-4 py-3"
                        style={{ borderBottom: '1px solid rgba(200,169,107,0.08)' }}
                      >
                        <div className="flex-shrink-0 w-16 text-right">
                          <span style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.85rem', color: '#C8A96B', fontWeight: 600 }}>{points}</span>
                        </div>
                        <div className="w-px h-8 flex-shrink-0" style={{ background: 'rgba(200,169,107,0.2)' }} />
                        <div>
                          <p className="font-serif text-ivory" style={{ fontSize: '1rem', fontWeight: 400 }}>{award}</p>
                          <p style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.72rem', color: 'rgba(246,242,234,0.4)', fontWeight: 300 }}>{level}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 rounded-sm" style={{ background: 'rgba(200,169,107,0.05)', border: '1px solid rgba(200,169,107,0.15)' }}>
                    <p style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.82rem', color: 'rgba(200,169,107,0.75)', fontWeight: 300, lineHeight: 1.7 }}>
                      The Merit Scholar Award — an engraved Gold Medal — is presented to the student with the highest point total in their class each year.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Supplies & Uniform */}
      <section className="relative py-24 px-6" style={{ background: '#0D1321' }}>
        <div className="relative max-w-6xl mx-auto">
          <RevealSection>
            <div className="flex items-center justify-center gap-4 mb-16 reveal-item">
              <span className="gold-line" />
              <span className="eyebrow">Supplies & Uniform</span>
              <span className="gold-line" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card rounded-sm reveal-item" style={{ padding: '2.5rem' }}>
                <h3 className="font-serif text-ivory mb-6" style={{ fontSize: '1.5rem', fontWeight: 400 }}>
                  Required Supplies
                </h3>
                <ul className="space-y-3">
                  {[
                    '1-inch black 3-ring binder',
                    'Pencil pouch',
                    '2 mechanical pencils',
                    'Red colored pencil',
                    'Highlighter',
                    'Copy of handbook (kept in back of folder)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ background: '#C8A96B' }} />
                      <span style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.9rem', color: 'rgba(246,242,234,0.6)', fontWeight: 300 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card rounded-sm reveal-item" style={{ padding: '2.5rem' }}>
                <h3 className="font-serif text-ivory mb-6" style={{ fontSize: '1.5rem', fontWeight: 400 }}>
                  Concert Uniform
                </h3>
                <ul className="space-y-3">
                  {[
                    'White Lux Venit polo shirt (provided)',
                    'Black pants or skirts (below knee)',
                    'Black flats for ladies',
                    'Black loafers for gentlemen',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ background: '#C8A96B' }} />
                      <span style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.9rem', color: 'rgba(246,242,234,0.6)', fontWeight: 300 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 rounded-sm" style={{ background: 'rgba(200,169,107,0.05)', border: '1px solid rgba(200,169,107,0.15)' }}>
                  <p style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.8rem', color: 'rgba(246,242,234,0.45)', fontWeight: 300, lineHeight: 1.7 }}>
                    Class dress code: Skirts/dresses below knee, no spaghetti straps or tank tops, no low-cut shirts.
                  </p>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 text-center" style={{ background: '#060B16' }}>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="gold-line" />
            <span className="eyebrow">Ready to Begin?</span>
            <span className="gold-line" />
          </div>
          <h2 className="font-serif text-ivory mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 300 }}>
            Join Lux Venit Today
          </h2>
          <p
            className="mb-10 mx-auto"
            style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '1rem', color: 'rgba(246,242,234,0.55)', fontWeight: 300, maxWidth: '44ch', lineHeight: 1.8 }}
          >
            Attend a mandatory parent information meeting (Zoom available) before registering. No prior music experience required for most programs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/enroll" className="btn-luxury bg-accent-gold text-primary-bg hover:bg-accent-gold/90" style={{ fontWeight: 600 }}>
              Begin Enrollment
              <ChevronRight size={14} />
            </Link>
            <Link href="/locations" className="btn-luxury border border-accent-gold/40 text-accent-gold hover:border-accent-gold">
              Find a Location
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
