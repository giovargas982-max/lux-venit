'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Mission() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax
      ScrollTrigger.create({
        trigger: imageRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          gsap.set(imageRef.current, {
            backgroundPositionY: `${50 + self.progress * 15}%`,
          })
        },
      })

      // Content reveal — staggered
      const elements = contentRef.current?.querySelectorAll('.reveal-element')
      if (elements) {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.18,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 75%',
              once: true,
            },
          }
        )
      }

      // Vertical line draw animation
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: lineRef.current,
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
      id="mission"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: '#0D1321' }}
    >
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left: Cinematic image panel */}
        <div ref={imageRef} className="relative min-h-[50vh] lg:min-h-full overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, #060B16 0%, #0D1321 100%)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 70% 90% at 50% 110%, rgba(158,31,45,0.12) 0%, transparent 70%),
                radial-gradient(ellipse 50% 60% at 50% -10%, rgba(200,169,107,0.1) 0%, transparent 70%)
              `,
            }}
          />

          {/* Choir silhouette visual */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 400 500" className="w-full h-full max-w-sm mx-auto opacity-20" preserveAspectRatio="xMidYMid meet">
              {[60, 120, 180, 240, 300, 360].map((x, i) => (
                <g key={i}>
                  <ellipse cx={x} cy={200 + (i % 2) * 20} rx="18" ry="22" fill="rgba(246,242,234,0.6)" />
                  <path
                    d={`M${x - 22} ${220 + (i % 2) * 20} Q${x} ${240 + (i % 2) * 20} ${x + 22} ${220 + (i % 2) * 20} L${x + 32} 450 Q${x} 465 ${x - 32} 450 Z`}
                    fill="rgba(246,242,234,0.4)"
                  />
                </g>
              ))}
              <rect x="188" y="80" width="24" height="90" rx="4" fill="rgba(200,169,107,0.5)" />
              <rect x="162" y="106" width="76" height="22" rx="4" fill="rgba(200,169,107,0.5)" />
            </svg>
          </div>

          {/* Subtle text watermark */}
          <div className="absolute bottom-12 left-8 right-8">
            <p className="font-serif text-ivory/20" style={{ fontSize: 'clamp(4rem, 10vw, 7rem)', lineHeight: 1, fontWeight: 300 }}>
              Lux
            </p>
          </div>

          <div className="absolute inset-y-0 right-0 w-32 lg:block hidden" style={{ background: 'linear-gradient(to right, transparent, #0D1321)' }} />
          <div className="absolute inset-x-0 bottom-0 h-32 lg:hidden" style={{ background: 'linear-gradient(to top, #0D1321, transparent)' }} />
        </div>

        {/* Right: Mission content */}
        <div ref={contentRef} className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-24 lg:py-32">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-10 reveal-element">
            <div ref={lineRef} className="w-px h-12 bg-gradient-to-b from-accent-gold to-transparent" />
            <span className="eyebrow">Our Mission</span>
          </div>

          {/* Headline */}
          <h2
            className="font-serif text-ivory leading-tight mb-8 reveal-element"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 300, letterSpacing: '-0.01em' }}
          >
            Formed in Faith,
            <br />
            <em className="text-gradient-gold" style={{ fontStyle: 'italic', fontWeight: 400 }}>
              Perfected in Beauty
            </em>
          </h2>

          {/* Mission text */}
          <p
            className="leading-loose mb-8 reveal-element"
            style={{
              fontFamily: 'var(--font-inter), system-ui',
              fontSize: '1rem',
              color: 'rgba(246,242,234,0.65)',
              fontWeight: 300,
              maxWidth: '44ch',
            }}
          >
            The students of the Lux Venit Choral Academy strive to work in unity as a team — and individually — to pursue excellence that gives glory to our Lord Jesus Christ. We are a Christian choral program especially designed for North Texas homeschool families.
          </p>

          <p
            className="leading-loose mb-12 reveal-element"
            style={{
              fontFamily: 'var(--font-inter), system-ui',
              fontSize: '1rem',
              color: 'rgba(246,242,234,0.5)',
              fontWeight: 300,
              maxWidth: '44ch',
            }}
          >
            Our choral literature aims to glorify God in worship while exposing students to a wide variety of musical genres: Baroque, Classical, Renaissance, folk songs, hymns, and spirituals. No prior music experience is required to join — only a heart ready to sing.
          </p>

          {/* Scripture block */}
          <div className="reveal-element border-l-2 pl-8 py-4" style={{ borderColor: 'rgba(200,169,107,0.4)' }}>
            <p
              className="font-serif italic mb-3"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)', color: '#C8A96B', lineHeight: 1.6, fontWeight: 400 }}
            >
              &ldquo;Called you out of darkness into His
              <br />
              wonderful light.&rdquo;
            </p>
            <p className="eyebrow" style={{ color: 'rgba(200,169,107,0.6)', fontSize: '0.6rem' }}>
              — 1 Peter 2:9
            </p>
          </div>

          {/* Decorative ornament + Learn More */}
          <div className="flex items-center gap-4 mt-14 reveal-element">
            <div className="gold-line-wide" />
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
              <path d="M8 0 L9.5 6.5 L16 8 L9.5 9.5 L8 16 L6.5 9.5 L0 8 L6.5 6.5 Z" fill="#C8A96B" opacity="0.6" />
            </svg>
            <div className="gold-line-wide" />
          </div>

          <Link
            href="/about"
            className="reveal-element mt-8 self-start group flex items-center gap-2"
            style={{
              fontFamily: 'var(--font-inter), system-ui',
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(200,169,107,0.65)',
              transition: 'color 0.3s ease',
            }}
          >
            <span className="group-hover:text-accent-gold transition-colors duration-300">Learn more about our story</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
