'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ParticleCanvas from '@/components/ui/ParticleCanvas'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface PageHeroProps {
  eyebrow: string
  title: string
  titleGold?: string
  subtitle?: string
  size?: 'normal' | 'small'
}

export default function PageHero({ eyebrow, title, titleGold, subtitle, size = 'normal' }: PageHeroProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current?.querySelectorAll('.ph-reveal') ?? [],
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 1.3, stagger: 0.13, ease: 'power3.out', delay: 0.3 }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center text-center overflow-hidden"
      style={{
        paddingTop: size === 'small' ? '9rem' : '11rem',
        paddingBottom: size === 'small' ? '5rem' : '7rem',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(200,169,107,0.07) 0%, #060B16 60%)',
      }}
    >
      <div className="absolute inset-0 pointer-events-none cathedral-rays" style={{ opacity: 0.35 }} />
      <ParticleCanvas count={40} />
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #060B16, transparent)' }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-center gap-4 mb-8 ph-reveal">
          <span className="gold-line" />
          <span className="eyebrow">{eyebrow}</span>
          <span className="gold-line" />
        </div>
        <h1
          className="font-serif text-ivory leading-tight mb-6 ph-reveal"
          style={{ fontSize: 'clamp(2.6rem, 7vw, 4.8rem)', fontWeight: 300, letterSpacing: '-0.01em' }}
        >
          {title}
          {titleGold && (
            <>
              <br />
              <em className="text-gradient-gold not-italic" style={{ fontStyle: 'italic', fontWeight: 400 }}>
                {titleGold}
              </em>
            </>
          )}
        </h1>
        {subtitle && (
          <p
            className="ph-reveal mx-auto leading-relaxed"
            style={{
              fontFamily: 'var(--font-inter), system-ui',
              fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
              color: 'rgba(246,242,234,0.55)',
              fontWeight: 300,
              maxWidth: '52ch',
            }}
          >
            {subtitle}
          </p>
        )}
        <div className="gold-line-wide mx-auto mt-8 ph-reveal" />
      </div>
    </section>
  )
}
