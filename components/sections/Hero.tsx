'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import LuxVenitLogo from '@/components/logo/LuxVenitLogo'
import ParticleCanvas from '@/components/ui/ParticleCanvas'
import { ChevronRight } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const raysRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      // Ambient rays fade in
      tl.fromTo(
        raysRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 3, ease: 'power2.inOut' },
        0
      )

      // Logo entrance — floats up and glows in
      tl.fromTo(
        logoRef.current,
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.8, ease: 'power3.out' },
        0.4
      )

      // Eyebrow
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 16, letterSpacing: '0.5em' },
        { opacity: 1, y: 0, letterSpacing: '0.3em', duration: 1.2, ease: 'power3.out' },
        1.0
      )

      // Headline
      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.4, ease: 'power3.out' },
        1.2
      )

      // Sub
      tl.fromTo(
        subRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
        1.5
      )

      // Buttons
      tl.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        1.8
      )

      // Parallax on scroll
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        onUpdate: (self) => {
          gsap.set(logoRef.current, { y: self.progress * 80 })
          gsap.set(headlineRef.current, { y: self.progress * 60 })
          gsap.set(subRef.current, { y: self.progress * 40 })
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(200,169,107,0.08) 0%, #060B16 55%)' }}
    >
      {/* Layered background depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(158,31,45,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 50% 50%, rgba(6,11,22,0) 0%, #060B16 100%)
          `,
        }}
      />

      {/* Cathedral light rays */}
      <div ref={raysRef} className="absolute inset-0 pointer-events-none cathedral-rays opacity-0" />

      {/* Additional cinematic rays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(162deg, transparent 38%, rgba(200,169,107,0.04) 52%, transparent 58%),
            linear-gradient(178deg, transparent 42%, rgba(200,169,107,0.025) 56%, transparent 64%)
          `,
        }}
      />

      {/* Floating particles */}
      <ParticleCanvas count={90} />

      {/* Bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #060B16, transparent)' }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto" style={{ paddingTop: '80px' }}>
        {/* Logo */}
        <div ref={logoRef} className="mb-10 opacity-0 relative">
          <div
            className="absolute inset-0 -m-6 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(200,169,107,0.15) 0%, transparent 70%)',
              filter: 'blur(16px)',
            }}
          />
          <LuxVenitLogo size={140} />
        </div>

        {/* Eyebrow */}
        <div ref={eyebrowRef} className="flex items-center gap-4 mb-8 opacity-0">
          <span className="gold-line" />
          <span className="eyebrow" style={{ letterSpacing: '0.3em' }}>
            Lux Venit Choral Academy
          </span>
          <span className="gold-line" />
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-serif text-ivory opacity-0 leading-[1.05]"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 300, letterSpacing: '-0.01em' }}
        >
          Where Sacred Music
          <br />
          <em className="text-gradient-gold not-italic" style={{ fontStyle: 'italic', fontWeight: 400 }}>
            Becomes Excellence
          </em>
        </h1>

        {/* Divider */}
        <div className="gold-line-wide my-8" />

        {/* Subheadline */}
        <p
          ref={subRef}
          className="opacity-0 leading-relaxed max-w-xl"
          style={{
            fontFamily: 'var(--font-inter), system-ui',
            fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
            color: 'rgba(246,242,234,0.65)',
            fontWeight: 300,
            letterSpacing: '0.02em',
          }}
        >
          Choral music education for North Texas homeschool students, rooted in
          faith, discipline, and the joy of sacred song.
        </p>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex flex-wrap items-center justify-center gap-4 mt-12 opacity-0">
          <Link
            href="/programs"
            className="btn-luxury group border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary-bg"
          >
            Explore Programs
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link
            href="/enroll"
            className="btn-luxury group bg-accent-gold/10 border border-accent-gold/20 text-ivory hover:border-accent-gold/60 hover:bg-accent-gold/15"
          >
            Begin Enrollment
          </Link>
        </div>
      </div>
    </section>
  )
}
