'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function EnrollmentCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const crossRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cross glow pulse
      gsap.to(crossRef.current, {
        opacity: 0.4,
        scale: 1.05,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })

      // Content reveal
      gsap.fromTo(
        contentRef.current?.querySelectorAll('.cta-element') ?? [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="enrollment"
      ref={sectionRef}
      className="relative py-36 md:py-48 px-6 overflow-hidden flex items-center justify-center"
      style={{
        background: `
          radial-gradient(ellipse 80% 80% at 50% 50%, rgba(158,31,45,0.1) 0%, transparent 60%),
          radial-gradient(ellipse 50% 60% at 50% 100%, rgba(200,169,107,0.07) 0%, transparent 70%),
          #060B16
        `,
      }}
    >
      {/* Cathedral cross backdrop */}
      <div
        ref={crossRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-25"
        aria-hidden="true"
      >
        <div
          style={{
            width: '2px',
            height: '320px',
            background: 'linear-gradient(to bottom, transparent, rgba(200,169,107,0.6), transparent)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          style={{
            width: '180px',
            height: '2px',
            background: 'linear-gradient(to right, transparent, rgba(200,169,107,0.6), transparent)',
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(200,169,107,0.3) 0%, transparent 70%)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(12px)',
          }}
        />
      </div>

      {/* Light rays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(170deg, transparent 35%, rgba(200,169,107,0.03) 52%, transparent 58%),
            linear-gradient(190deg, transparent 35%, rgba(200,169,107,0.025) 52%, transparent 58%)
          `,
        }}
      />

      {/* Top divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: '1px',
          height: '80px',
          background: 'linear-gradient(to bottom, transparent, rgba(200,169,107,0.4))',
        }}
      />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-10 cta-element">
          <span className="gold-line" />
          <span className="eyebrow">Begin Your Journey</span>
          <span className="gold-line" />
        </div>

        {/* Headline */}
        <h2
          className="font-serif text-ivory cta-element mb-8 leading-tight"
          style={{ fontSize: 'clamp(2.6rem, 7vw, 5rem)', fontWeight: 300, letterSpacing: '-0.02em' }}
        >
          Raise Voices That
          <br />
          <em className="text-gradient-gold" style={{ fontStyle: 'italic', fontWeight: 400 }}>
            Glorify God
          </em>
        </h2>

        {/* Divider */}
        <div className="gold-line-wide mx-auto mb-10 cta-element" />

        {/* Body */}
        <p
          className="cta-element mb-14 mx-auto leading-loose"
          style={{
            fontFamily: 'var(--font-inter), system-ui',
            fontSize: '1rem',
            color: 'rgba(246,242,234,0.6)',
            fontWeight: 300,
            maxWidth: '46ch',
            letterSpacing: '0.01em',
          }}
        >
          Enrollment for the 2025–2026 season is now open. We serve 8 locations across the DFW Metroplex — from NRH and Keller to Plano, Irving, Midlothian, Weatherford, and Wylie. No prior music experience required. No audition necessary except for Chorale.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-5 cta-element">
          <Link
            href="/enroll"
            className="btn-luxury group bg-accent-gold text-primary-bg font-semibold hover:bg-accent-gold/90"
            style={{ fontWeight: 600 }}
          >
            Begin Enrollment
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            href="/programs"
            className="btn-luxury border border-ivory/20 text-ivory/60 hover:text-ivory hover:border-ivory/50"
          >
            View All Programs
          </Link>
        </div>

        {/* Fine print */}
        <p
          className="cta-element mt-12"
          style={{
            fontFamily: 'var(--font-inter), system-ui',
            fontSize: '0.72rem',
            color: 'rgba(246,242,234,0.3)',
            letterSpacing: '0.08em',
            fontWeight: 400,
          }}
        >
          Attend a free parent information meeting before registering — contact us for the Zoom link and your nearest location.
        </p>
      </div>
    </section>
  )
}
