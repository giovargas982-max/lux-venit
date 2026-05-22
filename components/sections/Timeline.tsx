'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const milestones = [
  {
    year: '2012–2013',
    label: 'Inaugural Season',
    title: 'Competition Debut',
    description:
      "Thirteen students performed solos at the TPSMEA Solo & Ensemble Competition — twelve earned a Superior (I) rating. Both the Men's and Ladies' Choirs competed at the Hurricane Harbor Choral Festival and each earned a Superior (I) rating.",
  },
  {
    year: '2013–2014',
    label: 'Growing Excellence',
    title: 'Honor Choir Breakthrough',
    description:
      'Three Lux Venit students were selected for the Texas Choral Directors Association Elementary Honor Choir out of 700 who auditioned. Two placed in the top 5 of their section — out of all 700 auditionees statewide.',
  },
  {
    year: '2015–2016',
    label: 'Sweepstakes Season',
    title: 'Perfect Solo Record',
    description:
      "Twenty-eight students competed in the TPSMEA Solo & Ensemble Contest — all 28 received a Superior (I) rating. The Men's and Ladies' Choirs each earned a Sweepstakes award, receiving a Superior rating from every judge.",
  },
  {
    year: '2016–2017',
    label: 'Meyerson Milestone',
    title: 'Chorale at the Meyerson',
    description:
      'Fifty-five students performed solos — all 55 received a Superior (I) rating. Chorale performed at the Meyerson Symphony Center and earned a Superior (I). Lux Venit sent students to the TCDA Middle School Honor Choir out of 800 statewide auditionees.',
  },
  {
    year: '2017–2018',
    label: 'Best in Class',
    title: 'Bluebonnet Festival Champions',
    description:
      "Over 60 students performed solos at Superior level. Chorale earned Best in Class at the Bluebonnet Festival. The Ladies' Choir won Best in Class at Hurricane Harbor. Ten students placed in the TMEA Region Choir at the high school level.",
  },
]

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the vertical line growing downward
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          duration: 2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: 1,
          },
        }
      )

      // Each milestone
      const items = sectionRef.current?.querySelectorAll('.milestone-item') ?? []
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative py-28 md:py-36 px-6 overflow-hidden"
      style={{ background: '#060B16' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 20% 50%, rgba(200,169,107,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="gold-line" />
            <span className="eyebrow">Our Achievements</span>
            <span className="gold-line" />
          </div>
          <h2
            className="font-serif text-ivory"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '-0.01em' }}
          >
            A Decade of{' '}
            <em className="text-gradient-gold" style={{ fontStyle: 'italic' }}>
              Excellence
            </em>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            ref={lineRef}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px"
            style={{
              background: 'linear-gradient(to bottom, rgba(200,169,107,0.6), rgba(200,169,107,0.1))',
              transformOrigin: 'top center',
            }}
          />

          {/* Milestones */}
          <div className="space-y-16 md:space-y-20">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`milestone-item relative flex gap-8 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content — alternates left/right on desktop */}
                <div
                  className={`milestone-content flex-1 md:w-1/2 opacity-0 ${
                    i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left ml-12 md:ml-0'
                  }`}
                >
                  <span
                    className="milestone-year eyebrow block mb-2"
                    style={{ color: 'rgba(200,169,107,0.55)', fontSize: '0.6rem' }}
                  >
                    {m.year} — {m.label}
                  </span>
                  <h3
                    className="font-serif text-ivory mb-3 leading-tight"
                    style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 400 }}
                  >
                    {m.title}
                  </h3>
                  <p
                    className="leading-loose"
                    style={{
                      fontFamily: 'var(--font-inter), system-ui',
                      fontSize: '0.9rem',
                      color: 'rgba(246,242,234,0.5)',
                      fontWeight: 300,
                    }}
                  >
                    {m.description}
                  </p>
                </div>

                {/* Center dot */}
                <div
                  className={`milestone-dot absolute opacity-0 ${'left-8 md:left-1/2 md:-translate-x-1/2'} top-1`}
                  style={{ zIndex: 2 }}
                >
                  <div
                    className="w-4 h-4 rounded-full border-2 border-accent-gold"
                    style={{ background: '#060B16' }}
                  />
                  <div
                    className="absolute -inset-2 rounded-full animate-pulse-glow"
                    style={{ background: 'rgba(200,169,107,0.12)' }}
                  />
                </div>

                {/* Empty spacer on desktop */}
                <div className="hidden md:block flex-1 md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
