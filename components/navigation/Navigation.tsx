'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LuxVenitLogo from '@/components/logo/LuxVenitLogo'
import { X, Menu } from 'lucide-react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Locations', href: '/locations' },
  { label: 'Achievements', href: '/competitions' },
  { label: 'Enroll', href: '/enroll' },
]

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!navRef.current) return
    gsap.fromTo(navRef.current, { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.4, ease: 'power3.out', delay: 0.6 })
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 opacity-0 ${
          scrolled ? 'py-2 bg-primary-bg/85 backdrop-blur-xl border-b border-accent-gold/10' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group" aria-label="Lux Venit Choral Academy">
            <div
              className="transition-all duration-500 group-hover:scale-105"
              style={{ filter: 'drop-shadow(0 0 8px rgba(200,169,107,0.2))' }}
            >
              <LuxVenitLogo size={scrolled ? 42 : 50} />
            </div>
            <div
              className="overflow-hidden transition-all duration-500"
              style={{ maxWidth: scrolled ? '140px' : '0px', opacity: scrolled ? 1 : 0 }}
            >
              <p className="font-serif text-ivory whitespace-nowrap leading-none" style={{ fontSize: '1rem', fontWeight: 300, letterSpacing: '0.02em' }}>Lux Venit</p>
              <p className="eyebrow whitespace-nowrap" style={{ fontSize: '0.52rem', letterSpacing: '0.22em', marginTop: '2px', color: 'rgba(200,169,107,0.65)' }}>Choral Academy</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative eyebrow hover:text-ivory transition-colors duration-400"
                  style={{ fontSize: '0.62rem', color: active ? 'rgba(246,242,234,0.95)' : 'rgba(246,242,234,0.55)' }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px bg-accent-gold transition-all duration-500"
                    style={{ width: active ? '100%' : '0%' }}
                  />
                  {!active && (
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-gold group-hover:w-full transition-all duration-500" />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/enroll"
              className="hidden md:flex btn-luxury border border-accent-gold/40 text-accent-gold hover:border-accent-gold hover:text-ivory"
              style={{ padding: '0.6rem 1.5rem', fontSize: '0.62rem' }}
            >
              Enroll Now
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-ivory/70 hover:text-ivory transition-colors p-1"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] transition-all duration-700 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(0,0,0,0.97)', backdropFilter: 'blur(20px)' }}
      >
        <div className="absolute inset-0 cathedral-rays" />
        <div className="relative h-full flex flex-col items-center justify-center gap-10 px-8">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-7 right-7 text-ivory/60 hover:text-ivory transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <div style={{ filter: 'drop-shadow(0 0 24px rgba(200,169,107,0.3))' }}>
            <LuxVenitLogo size={120} />
          </div>
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-serif text-3xl text-ivory/80 hover:text-ivory transition-all duration-300"
                style={{
                  transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms',
                  transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: mobileOpen ? 1 : 0,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="gold-line" />
          <Link href="/enroll" className="btn-luxury border border-accent-gold/50 text-accent-gold">
            Begin Enrollment
          </Link>
        </div>
      </div>
    </>
  )
}
