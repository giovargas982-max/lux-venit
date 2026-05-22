'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { Music, Star, Award, Mic2, ChevronRight } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const programs = [
  {
    icon: Music,
    label: 'K – 2nd Grade',
    price: '$40 / month',
    locations: 'NRH & Midlothian only',
    title: 'Lower Elementary',
    subtitle: 'General Music',
    description:
      'An engaging introduction to music for young singers. Skills include pitch matching, solfège with Curwen hand signs, basic music reading, folk songs, sacred songs, singing in rounds, and foundational vocal techniques. Two parent demonstration days per semester.',
    highlights: ['Pitch Matching & Solfège', 'Basic Music Reading', 'Folk & Sacred Songs', 'Vocal Foundation'],
  },
  {
    icon: Star,
    label: '3rd – 6th Grade',
    price: '$50 / month',
    locations: 'All locations',
    title: 'Upper Elementary',
    subtitle: 'Choir',
    description:
      'Building on foundational skills with advancing harmonic study, two-part singing, absolute pitch names, solfège on the staff, rhythm reading, proper breathing techniques, vowel formation, and dynamics. Two formal concerts per semester.',
    highlights: ['Two-Part Singing', 'Music Reading & Theory', 'Breathing Technique', 'Formal Concerts'],
    featured: true,
  },
  {
    icon: Mic2,
    label: '6th – 12th Grade',
    price: '$60 / month',
    locations: 'All locations',
    title: "Men's & Ladies' Choirs",
    subtitle: 'Advanced Training',
    description:
      "Separate men's and ladies' classes that unite for rehearsals and concerts. Skills include three-part singing, dynamics, phrasing, articulation, diction, singing in multiple languages, sight-reading, and solo ensemble preparation.",
    highlights: ['Three-Part Singing', 'Competition Prep', 'Sight-Reading', 'Multiple Languages'],
  },
  {
    icon: Award,
    label: '9th – 12th Grade',
    price: '$70 / month',
    locations: 'By Audition',
    title: 'Chorale',
    subtitle: 'Auditioned Ensemble',
    description:
      'Our only auditioned ensemble and most advanced group, for 9th–12th graders demonstrating strong vocal and music-reading skills. Chorale represents Lux Venit at festivals, competitions, and prestigious venues across Texas.',
    highlights: ['Auditioned Placement', 'Festival & Competition', 'Advanced Repertoire', 'Performance Excellence'],
  },
]

export default function Programs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        headerRef.current?.querySelectorAll('.reveal-element') ?? [],
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 78%',
            once: true,
          },
        }
      )

      // Cards stagger
      gsap.fromTo(
        gridRef.current?.querySelectorAll('.program-card') ?? [],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="relative py-28 md:py-36 px-6"
      style={{ background: '#060B16' }}
    >
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(13,19,33,0.8) 0%, transparent 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6 reveal-element">
            <span className="gold-line" />
            <span className="eyebrow">Choral Programs</span>
            <span className="gold-line" />
          </div>

          <h2
            className="font-serif text-ivory mb-6 reveal-element"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.01em', lineHeight: 1.1 }}
          >
            Excellence at Every Stage
          </h2>

          <p
            className="reveal-element mx-auto leading-relaxed"
            style={{
              fontFamily: 'var(--font-inter), system-ui',
              fontSize: '1rem',
              color: 'rgba(246,242,234,0.55)',
              fontWeight: 300,
              maxWidth: '50ch',
            }}
          >
            Four carefully designed programs guiding students from their first
            notes to concert stages — all rooted in faith and musical discipline.
          </p>
        </div>

        {/* Program cards */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {programs.map((program) => {
            const Icon = program.icon
            return (
              <div
                key={program.title}
                className={`program-card glass-card hover-glow rounded-sm overflow-hidden opacity-0 group cursor-pointer ${
                  program.featured ? 'md:col-span-1 ring-1 ring-accent-gold/25' : ''
                }`}
                style={{ padding: '2.5rem' }}
              >
                {/* Featured badge */}
                {program.featured && (
                  <div className="flex items-center gap-2 mb-6">
                    <span
                      className="eyebrow px-3 py-1"
                      style={{
                        background: 'rgba(200,169,107,0.1)',
                        border: '1px solid rgba(200,169,107,0.25)',
                        borderRadius: '2px',
                        fontSize: '0.58rem',
                      }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon + Label */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-sm"
                    style={{ background: 'rgba(200,169,107,0.08)', border: '1px solid rgba(200,169,107,0.18)' }}
                  >
                    <Icon size={20} className="text-accent-gold" strokeWidth={1.2} />
                  </div>
                  <span className="eyebrow mt-1" style={{ color: 'rgba(200,169,107,0.55)', fontSize: '0.58rem' }}>
                    {program.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-ivory mb-1 leading-tight" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 400 }}>
                  {program.title}
                </h3>
                <p className="font-serif italic mb-3" style={{ fontSize: '1rem', color: '#C8A96B', fontWeight: 300 }}>
                  {program.subtitle}
                </p>

                {/* Price & Locations */}
                <div className="flex items-center gap-4 mb-5">
                  <span
                    style={{
                      fontFamily: 'var(--font-inter), system-ui',
                      fontSize: '0.8rem',
                      color: 'rgba(200,169,107,0.85)',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {program.price}
                  </span>
                  <span style={{ width: '1px', height: '12px', background: 'rgba(200,169,107,0.2)', display: 'inline-block' }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-inter), system-ui',
                      fontSize: '0.72rem',
                      color: 'rgba(246,242,234,0.4)',
                      fontWeight: 300,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {program.locations}
                  </span>
                </div>

                {/* Divider */}
                <div className="gold-line mb-6" />

                {/* Description */}
                <p
                  className="leading-loose mb-8"
                  style={{
                    fontFamily: 'var(--font-inter), system-ui',
                    fontSize: '0.92rem',
                    color: 'rgba(246,242,234,0.55)',
                    fontWeight: 300,
                  }}
                >
                  {program.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-8">
                  {program.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#C8A96B' }} />
                      <span
                        style={{
                          fontFamily: 'var(--font-inter), system-ui',
                          fontSize: '0.82rem',
                          color: 'rgba(246,242,234,0.5)',
                          fontWeight: 400,
                          letterSpacing: '0.03em',
                        }}
                      >
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/programs"
                  className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                  style={{
                    fontFamily: 'var(--font-inter), system-ui',
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#C8A96B',
                  }}
                >
                  Learn More
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            )
          })}
        </div>

        {/* Fee note */}
        <p
          className="text-center mt-10"
          style={{
            fontFamily: 'var(--font-inter), system-ui',
            fontSize: '0.78rem',
            color: 'rgba(246,242,234,0.35)',
            fontWeight: 300,
            letterSpacing: '0.04em',
          }}
        >
          Family maximum monthly tuition: $100. Supply and building fees apply.
        </p>
      </div>
    </section>
  )
}
