'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const testimonials = [
  {
    quote:
      "Mr. Carr has done a wonderful job bringing his musical expertise to the homeschool community. My daughter has grown so much as a musician because of the fundamental singing skills taught in Lux Venit — and she has fun at the same time! What a privilege to be part of the rich Texas choral tradition.",
    name: 'Sarah A.',
    role: 'Lux Venit Parent',
    location: 'North Richland Hills, TX',
  },
  {
    quote:
      "Lux Venit is an advanced choir experience for homeschooled kids. The quality of training is phenomenal — on a level with expensive private professional lessons! Mr. Carr has a way with children to keep their attention and interest well. My girls run out the door with anticipation to go to choir practice!",
    name: 'Ruth O.',
    role: 'Parent of Two Students',
    location: 'Keller, TX',
  },
  {
    quote:
      "As a fellow professional choral music educator, I am so grateful for my children to have this opportunity. The caliber of musical performance is on par with excellent public school programs — which is especially impressive with just one hour of rehearsal each week. Our community is incredibly blessed by Lux Venit.",
    name: 'Laine Keller',
    role: 'Music Educator & Parent',
    location: 'Plano, TX',
  },
  {
    quote:
      "Lux Venit came at the right time for our family. The price is gracious to large families. All of my children have learned so much. Mr. Carr relays his knowledge skillfully in a short time and prepares students for competition with great success. Lux Venit has truly been a blessing to our family.",
    name: "La'Tonia S.",
    role: 'Lux Venit Parent',
    location: 'Fort Worth, TX',
  },
  {
    quote:
      "My son, who wasn't overly enthusiastic about choir, has done very well — and was even courageous enough to sing a solo at the competition. Mr. Carr makes the whole experience enjoyable. The concerts have been superb, and best of all, my children now sing more enthusiastically in Sunday worship.",
    name: 'Kim R.',
    role: 'Lux Venit Parent',
    location: 'Irving, TX',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const quoteRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll('.t-reveal') ?? [],
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const transition = (next: number) => {
    if (animating || next === active) return
    setAnimating(true)

    gsap.to(quoteRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        setActive(next)
        gsap.fromTo(
          quoteRef.current,
          { opacity: 0, y: -20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            onComplete: () => setAnimating(false),
          }
        )
      },
    })
  }

  const prev = () => transition(active === 0 ? testimonials.length - 1 : active - 1)
  const next = () => transition(active === testimonials.length - 1 ? 0 : active + 1)

  const t = testimonials[active]

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-28 md:py-40 px-6 overflow-hidden"
      style={{ background: '#0D1321' }}
    >
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,169,107,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-16 t-reveal">
          <span className="gold-line" />
          <span className="eyebrow">Testimonials</span>
          <span className="gold-line" />
        </div>

        {/* Quote */}
        <div ref={quoteRef} className="mb-16">
          <p
            className="font-serif italic text-ivory leading-relaxed mb-10"
            style={{
              fontSize: 'clamp(1.35rem, 3vw, 2.1rem)',
              fontWeight: 300,
              letterSpacing: '-0.01em',
              color: 'rgba(246,242,234,0.88)',
            }}
          >
            &ldquo;{t.quote}&rdquo;
          </p>

          <div className="flex flex-col items-center gap-2">
            <div className="gold-line mb-4" />
            <p className="font-serif text-accent-gold" style={{ fontSize: '1.05rem', fontWeight: 500 }}>
              {t.name}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-inter), system-ui',
                fontSize: '0.75rem',
                color: 'rgba(246,242,234,0.45)',
                letterSpacing: '0.1em',
                fontWeight: 400,
              }}
            >
              {t.role}
            </p>
            <p className="eyebrow" style={{ color: 'rgba(200,169,107,0.4)', fontSize: '0.6rem' }}>
              {t.location}
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-8 t-reveal">
          <button
            onClick={prev}
            className="group flex items-center justify-center w-10 h-10 border border-accent-gold/20 hover:border-accent-gold/60 transition-colors duration-400 rounded-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={16} className="text-accent-gold/50 group-hover:text-accent-gold transition-colors" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => transition(i)}
                className="transition-all duration-400"
                aria-label={`Testimonial ${i + 1}`}
                style={{
                  width: i === active ? '24px' : '6px',
                  height: '1px',
                  background: i === active ? '#C8A96B' : 'rgba(200,169,107,0.3)',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="group flex items-center justify-center w-10 h-10 border border-accent-gold/20 hover:border-accent-gold/60 transition-colors duration-400 rounded-none"
            aria-label="Next testimonial"
          >
            <ChevronRight size={16} className="text-accent-gold/50 group-hover:text-accent-gold transition-colors" />
          </button>
        </div>

        {/* Read more link */}
        <div className="mt-12 t-reveal">
          <Link
            href="/about"
            style={{
              fontFamily: 'var(--font-inter), system-ui',
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(200,169,107,0.55)',
              transition: 'color 0.3s ease',
            }}
            className="hover:text-accent-gold transition-colors duration-300"
          >
            Read more stories →
          </Link>
        </div>
      </div>
    </section>
  )
}
