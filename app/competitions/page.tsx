'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const contestTypes = [
  {
    title: 'Solo & Ensemble Contest',
    org: 'TPSMEA',
    description:
      'Upper Elementary, Men\'s, and Ladies\' Choir students are encouraged to prepare solos or ensemble pieces for adjudicated evaluation. Students receive a rating of Superior (I), Excellent (II), or Good (III) from a certified judge. Competition participation earns major merit points.',
    details: [
      'Open to Upper Elementary, Men\'s, and Ladies\' Choir',
      'Superior (I) is the highest rating',
      'Solo participation: +400 merit points',
      'Ensemble participation: +200 merit points',
      'Prepares students for lifelong performance confidence',
    ],
  },
  {
    title: 'Region Choir Auditions',
    org: 'TMEA',
    description:
      'Middle school and high school singers may audition for the competitive TMEA Region Choir — a prestigious honor that places Lux Venit students among the finest singers in their TMEA region, representing schools across North Texas.',
    details: [
      'Open to Men\'s, Ladies\', and Chorale members',
      'Audition earns +500 merit points',
      'Making Region Choir earns +150 merit points',
      'Competed against students from 28–35 area schools',
      'All-State selection earns +600 merit points',
    ],
  },
  {
    title: 'Choral Festival Competition',
    org: 'Various Festivals',
    description:
      'Lux Venit choirs compete at prestigious choral festivals across Texas — including Hurricane Harbor Choral Festival and Bluebonnet Festival. Choirs are evaluated by panels of judges and may earn Superior ratings or Best in Class honors.',
    details: [
      'Chorale and selected choirs represent Lux Venit',
      'Panel of certified judges',
      'Best in Class and Superior ratings available',
      'Prestigious venue appearances (e.g., Meyerson Symphony Center)',
      'Sweepstakes: Superior from every judge',
    ],
  },
]

const achievements = [
  {
    year: '2012–13',
    label: 'Inaugural Season',
    title: 'Competition Debut',
    highlights: [
      '13 solos — 12 Superior, 1 Excellent',
      "Men's and Ladies' Choirs both earned Superior at Hurricane Harbor Choral Festival",
    ],
  },
  {
    year: '2013–14',
    label: 'Growing Excellence',
    title: 'Honor Choir Breakthrough',
    highlights: [
      '14 solos — 12 Superior, 2 Excellent',
      '3 students selected for TCDA Elementary Honor Choir (700 auditioned, 160 selected)',
      '2 students placed in the top 5 of all 700 statewide auditionees',
      '6 students named to MS Region Choir',
    ],
  },
  {
    year: '2014–15',
    label: 'Rising Standards',
    title: 'Region Choir Growth',
    highlights: [
      '25 solos — 22 Superior, 3 Excellent',
      '4 students HS Region Choir',
      '8 students MS Region Choir (4th most mixed, 3rd most men of 35 schools)',
      '4 students TCDA MS Honor Choir (800 auditioned, 200 selected)',
    ],
  },
  {
    year: '2015–16',
    label: 'Sweepstakes Season',
    title: 'Perfect Solo Record',
    highlights: [
      '28 solos — ALL 28 received Superior',
      "Men's and Ladies' Choirs earned SWEEPSTAKES at TPSMEA (Superior from every judge)",
      '2 students HS Region Choir',
      '7 students District Choir, 8 students MS Region Choir',
      '5 students TCDA Elementary Honor Choir (3rd most of all TX choirs)',
    ],
  },
  {
    year: '2016–17',
    label: 'Meyerson Milestone',
    title: 'Chorale at the Meyerson',
    highlights: [
      '55 solos — ALL 55 received Superior',
      '8 students HS Region Choir, 9 District Choir',
      '8 students MS Region Choir',
      'Chorale performed at the Meyerson Symphony Center — Superior rating',
      "Men's and Ladies' Choirs both Superior at Hurricane Harbor",
      '3 students TCDA MS Honor Choir',
    ],
  },
  {
    year: '2017–18',
    label: 'Best in Class',
    title: 'Bluebonnet Festival Champions',
    highlights: [
      '60+ solos — ALL Superior',
      '10 students HS Region Choir, 17 District Choir, 4 in 9th/10th Region',
      '3 students Treble Choir',
      '9 students MS Region Choir (5th most mixed of 28 schools)',
      'Chorale — Best in Class at Bluebonnet Festival',
      "Ladies' — Best in Class at Hurricane Harbor",
      '6 students TCDA Elementary Honor Choir (3rd most of all TX schools)',
    ],
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

export default function CompetitionsPage() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!timelineRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          duration: 2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: 1,
          },
        }
      )

      const items = timelineRef.current?.querySelectorAll('.milestone-item') ?? []
      items.forEach((item) => {
        gsap.fromTo(
          item.querySelectorAll('.milestone-content, .milestone-dot, .milestone-year'),
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 82%',
              once: true,
            },
          }
        )
      })
    }, timelineRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Competitions & Achievements"
        title="A Legacy of"
        titleGold="Excellence"
        subtitle="Member of TPSMEA and TMEA. Since 2012, Lux Venit students have earned Superior ratings, Honor Choir selections, and Best in Class honors across Texas."
      />

      {/* Contest Types */}
      <section className="relative py-24 md:py-32 px-6" style={{ background: '#0D1321' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,169,107,0.04) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-6xl mx-auto">
          <RevealSection>
            <div className="flex items-center justify-center gap-4 mb-16 reveal-item">
              <span className="gold-line" />
              <span className="eyebrow">Competition Types</span>
              <span className="gold-line" />
            </div>

            <h2
              className="font-serif text-ivory text-center mb-16 reveal-item"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, letterSpacing: '-0.01em' }}
            >
              How Lux Venit{' '}
              <em className="text-gradient-gold" style={{ fontStyle: 'italic', fontWeight: 400 }}>Competes</em>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {contestTypes.map((contest) => (
                <div
                  key={contest.title}
                  className="glass-card rounded-sm hover-glow reveal-item"
                  style={{ padding: '2.5rem' }}
                >
                  <p className="eyebrow mb-3" style={{ color: 'rgba(200,169,107,0.55)', fontSize: '0.58rem' }}>
                    {contest.org}
                  </p>
                  <h3 className="font-serif text-ivory mb-4 leading-tight" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', fontWeight: 400 }}>
                    {contest.title}
                  </h3>
                  <div className="gold-line mb-6" />
                  <p
                    className="leading-loose mb-6"
                    style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.88rem', color: 'rgba(246,242,234,0.55)', fontWeight: 300 }}
                  >
                    {contest.description}
                  </p>
                  <ul className="space-y-2">
                    {contest.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <span className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ background: '#C8A96B' }} />
                        <span style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.82rem', color: 'rgba(246,242,234,0.5)', fontWeight: 300 }}>
                          {d}
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

      {/* Achievement Timeline */}
      <section
        ref={timelineRef}
        className="relative py-28 md:py-36 px-6 overflow-hidden"
        style={{ background: '#060B16' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 20% 50%, rgba(200,169,107,0.04) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="gold-line" />
              <span className="eyebrow">Season by Season</span>
              <span className="gold-line" />
            </div>
            <h2
              className="font-serif text-ivory"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.01em' }}
            >
              Six Years of{' '}
              <em className="text-gradient-gold" style={{ fontStyle: 'italic' }}>
                Rising Excellence
              </em>
            </h2>
          </div>

          <div className="relative">
            <div
              ref={lineRef}
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px"
              style={{
                background: 'linear-gradient(to bottom, rgba(200,169,107,0.6), rgba(200,169,107,0.1))',
                transformOrigin: 'top center',
              }}
            />

            <div className="space-y-16 md:space-y-20">
              {achievements.map((a, i) => (
                <div
                  key={a.year}
                  className={`milestone-item relative flex gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div
                    className={`milestone-content flex-1 md:w-1/2 opacity-0 ${
                      i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left ml-12 md:ml-0'
                    }`}
                  >
                    <span
                      className="milestone-year eyebrow block mb-2"
                      style={{ color: 'rgba(200,169,107,0.55)', fontSize: '0.6rem' }}
                    >
                      {a.year} — {a.label}
                    </span>
                    <h3
                      className="font-serif text-ivory mb-4 leading-tight"
                      style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 400 }}
                    >
                      {a.title}
                    </h3>
                    <ul className={`space-y-2 ${i % 2 === 0 ? 'md:ml-auto' : ''}`} style={{ maxWidth: '38ch' }}>
                      {a.highlights.map((h) => (
                        <li key={h} className={`flex items-start gap-3 ${i % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                          <span className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ background: '#C8A96B' }} />
                          <span style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '0.85rem', color: 'rgba(246,242,234,0.55)', fontWeight: 300 }}>
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`milestone-dot absolute opacity-0 left-8 md:left-1/2 md:-translate-x-1/2 top-1`}
                    style={{ zIndex: 2 }}
                  >
                    <div
                      className="w-4 h-4 rounded-full border-2 border-accent-gold"
                      style={{ background: '#060B16' }}
                    />
                    <div
                      className="absolute -inset-2 rounded-full"
                      style={{ background: 'rgba(200,169,107,0.12)' }}
                    />
                  </div>

                  <div className="hidden md:block flex-1 md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 text-center" style={{ background: '#0D1321' }}>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="gold-line" />
            <span className="eyebrow">Write Your Chapter</span>
            <span className="gold-line" />
          </div>
          <h2 className="font-serif text-ivory mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 300 }}>
            Join a{' '}
            <em className="text-gradient-gold" style={{ fontStyle: 'italic', fontWeight: 400 }}>Legacy of Excellence</em>
          </h2>
          <p
            className="mb-10 mx-auto"
            style={{ fontFamily: 'var(--font-inter), system-ui', fontSize: '1rem', color: 'rgba(246,242,234,0.55)', fontWeight: 300, maxWidth: '44ch', lineHeight: 1.8 }}
          >
            Your student could be among the next generation of Lux Venit singers earning Superior ratings and representing North Texas on the state stage.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/enroll" className="btn-luxury bg-accent-gold text-primary-bg hover:bg-accent-gold/90" style={{ fontWeight: 600 }}>
              Begin Enrollment
            </Link>
            <Link href="/programs" className="btn-luxury border border-accent-gold/40 text-accent-gold hover:border-accent-gold">
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
