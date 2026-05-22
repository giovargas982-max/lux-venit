'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Play } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const performances = [
  {
    category: 'Sacred Concerts',
    title: 'Christmas Candlelight Vespers',
    size: 'large',
    bg: 'linear-gradient(135deg, #0D1321 0%, #1a1f33 100%)',
    accent: 'rgba(200,169,107,0.15)',
    hasVideo: true,
  },
  {
    category: 'Cathedral Performances',
    title: 'Ave Maria — Basilica Performance',
    size: 'small',
    bg: 'linear-gradient(135deg, #12101e 0%, #1c1428 100%)',
    accent: 'rgba(158,31,45,0.12)',
    hasVideo: false,
  },
  {
    category: 'Competitions',
    title: 'Regional Sacred Music Festival',
    size: 'small',
    bg: 'linear-gradient(135deg, #0a1520 0%, #0D1321 100%)',
    accent: 'rgba(200,169,107,0.1)',
    hasVideo: false,
  },
  {
    category: 'Rehearsals',
    title: 'Behind the Score',
    size: 'medium',
    bg: 'linear-gradient(135deg, #111827 0%, #0D1321 100%)',
    accent: 'rgba(200,169,107,0.08)',
    hasVideo: true,
  },
  {
    category: 'Sacred Concerts',
    title: 'Easter Vigil — Full Choir',
    size: 'medium',
    bg: 'linear-gradient(135deg, #1a0f18 0%, #120d1e 100%)',
    accent: 'rgba(158,31,45,0.15)',
    hasVideo: false,
  },
  {
    category: 'Cathedral Performances',
    title: 'Polyphony in the Cathedral',
    size: 'large',
    bg: 'linear-gradient(135deg, #0D1321 0%, #151a2e 100%)',
    accent: 'rgba(200,169,107,0.12)',
    hasVideo: true,
  },
]

const sizeMap: Record<string, string> = {
  small: 'h-52 md:h-60',
  medium: 'h-64 md:h-72',
  large: 'h-72 md:h-96',
}

export default function PerformanceShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        headerRef.current?.querySelectorAll('.reveal-element') ?? [],
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 78%',
            once: true,
          },
        }
      )

      // Gallery items
      const items = sectionRef.current?.querySelectorAll('.gallery-item') ?? []
      gsap.fromTo(
        items,
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current?.querySelector('.gallery-grid'),
            start: 'top 82%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="performances"
      ref={sectionRef}
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: '#0D1321' }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 60% at 50% 50%, rgba(200,169,107,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6 reveal-element">
            <span className="gold-line" />
            <span className="eyebrow">Performance Showcase</span>
            <span className="gold-line" />
          </div>

          <h2
            className="font-serif text-ivory mb-6 reveal-element"
            style={{
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 300,
              letterSpacing: '-0.01em',
            }}
          >
            Voices Raised,{' '}
            <em className="text-gradient-gold" style={{ fontStyle: 'italic' }}>
              Heaven Moved
            </em>
          </h2>

          <p
            className="reveal-element mx-auto"
            style={{
              fontFamily: 'var(--font-inter), system-ui',
              fontSize: '1rem',
              color: 'rgba(246,242,234,0.5)',
              fontWeight: 300,
              maxWidth: '48ch',
            }}
          >
            From intimate rehearsal halls to grand cathedral naves — moments
            that capture the sacred power of our students.
          </p>
        </div>

        {/* Masonry gallery */}
        <div
          className="gallery-grid columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5"
          style={{ columnGap: '1.25rem' }}
        >
          {performances.map((perf, i) => (
            <div
              key={i}
              className={`gallery-item break-inside-avoid opacity-0 ${sizeMap[perf.size]} relative overflow-hidden group cursor-pointer`}
              style={{
                background: perf.bg,
                borderRadius: '2px',
                border: '1px solid rgba(200,169,107,0.08)',
                marginBottom: '1.25rem',
                display: 'inline-block',
                width: '100%',
              }}
            >
              {/* Accent glow */}
              <div
                className="absolute inset-0"
                style={{ background: perf.accent }}
              />

              {/* Cathedral arch decoration */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4"
                style={{
                  height: '60%',
                  background: 'radial-gradient(ellipse at top, rgba(200,169,107,0.06) 0%, transparent 70%)',
                  borderRadius: '0 0 50% 50%',
                }}
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
                style={{
                  background: 'linear-gradient(to top, rgba(6,11,22,0.9) 0%, rgba(6,11,22,0.4) 60%, transparent 100%)',
                }}
              />

              {/* Content — always visible at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span
                  className="eyebrow block mb-2 opacity-70"
                  style={{ fontSize: '0.58rem' }}
                >
                  {perf.category}
                </span>
                <h3
                  className="font-serif text-ivory leading-tight transform group-hover:-translate-y-1 transition-transform duration-500"
                  style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', fontWeight: 400 }}
                >
                  {perf.title}
                </h3>
              </div>

              {/* Video play button */}
              {perf.hasVideo && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div
                    className="flex items-center justify-center w-14 h-14 rounded-full border border-accent-gold/40 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500"
                    style={{ background: 'rgba(6,11,22,0.5)' }}
                  >
                    <Play size={18} className="text-accent-gold ml-1" fill="currentColor" />
                  </div>
                </div>
              )}

              {/* Corner ornament */}
              <div
                className="absolute top-4 right-4 opacity-30"
                style={{
                  width: '24px',
                  height: '24px',
                  border: '1px solid #C8A96B',
                  borderRadius: '1px',
                  transform: 'rotate(45deg)',
                }}
              />
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="btn-luxury border border-accent-gold/30 text-accent-gold/70 hover:text-accent-gold hover:border-accent-gold"
          >
            View Full Archive
          </a>
        </div>
      </div>
    </section>
  )
}
