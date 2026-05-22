'use client'

import Link from 'next/link'
import LuxVenitLogo from '@/components/logo/LuxVenitLogo'
import { Mail, Phone, MapPin } from 'lucide-react'

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function YoutubeIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.34 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  )
}

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Locations', href: '/locations' },
  { label: 'Achievements', href: '/competitions' },
  { label: 'Enroll', href: '/enroll' },
]

const socialLinks = [
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: YoutubeIcon, label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden"
      style={{ background: '#060B16', borderTop: '1px solid rgba(200,169,107,0.1)' }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(200,169,107,0.4) 30%, rgba(200,169,107,0.4) 70%, transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-4 mb-6 w-fit group">
              <div className="transition-transform duration-500 group-hover:scale-105">
                <LuxVenitLogo size={80} />
              </div>
            </Link>

            <p
              className="mb-8 leading-loose"
              style={{
                fontFamily: 'var(--font-inter), system-ui',
                fontSize: '0.88rem',
                color: 'rgba(246,242,234,0.45)',
                fontWeight: 300,
                maxWidth: '38ch',
              }}
            >
              Choral music education for North Texas homeschool families — rooted in
              faith, discipline, and the beauty of sacred music.
            </p>

            {/* Scripture */}
            <div
              className="border-l pl-5 py-2"
              style={{ borderColor: 'rgba(200,169,107,0.25)' }}
            >
              <p
                className="font-serif italic mb-1"
                style={{ fontSize: '0.9rem', color: 'rgba(200,169,107,0.7)', lineHeight: 1.6 }}
              >
                &ldquo;Lux Venit — Our Light Has Come&rdquo;
              </p>
              <p
                className="eyebrow"
                style={{ fontSize: '0.55rem', color: 'rgba(200,169,107,0.4)' }}
              >
                Isaiah 60:1
              </p>
            </div>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-3 md:col-start-7">
            <p
              className="eyebrow mb-6"
              style={{ color: 'rgba(200,169,107,0.5)', fontSize: '0.6rem' }}
            >
              Navigate
            </p>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2"
                  style={{
                    fontFamily: 'var(--font-inter), system-ui',
                    fontSize: '0.85rem',
                    color: 'rgba(246,242,234,0.45)',
                    fontWeight: 400,
                    transition: 'color 0.3s ease',
                  }}
                >
                  <span
                    className="w-0 group-hover:w-4 h-px bg-accent-gold transition-all duration-400"
                    style={{ flexShrink: 0 }}
                  />
                  <span className="group-hover:text-ivory transition-colors duration-300">
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div className="md:col-span-4 md:col-start-10">
            <p
              className="eyebrow mb-6"
              style={{ color: 'rgba(200,169,107,0.5)', fontSize: '0.6rem' }}
            >
              Contact
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, text: 'richardandmarycarr@sbcglobal.net' },
                { icon: Phone, text: '(817) 627-9301' },
                { icon: MapPin, text: 'North Richland Hills, Texas' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon
                    size={14}
                    className="flex-shrink-0"
                    style={{ color: 'rgba(200,169,107,0.5)' }}
                    strokeWidth={1.5}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-inter), system-ui',
                      fontSize: '0.83rem',
                      color: 'rgba(246,242,234,0.45)',
                      fontWeight: 300,
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group flex items-center justify-center w-9 h-9 border border-accent-gold/15 hover:border-accent-gold/40 transition-colors duration-400 rounded-none"
                >
                  <span className="text-accent-gold/40 group-hover:text-accent-gold transition-colors duration-300">
                    <Icon size={14} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(200,169,107,0.08)' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-inter), system-ui',
              fontSize: '0.72rem',
              color: 'rgba(246,242,234,0.25)',
              fontWeight: 300,
              letterSpacing: '0.05em',
            }}
          >
            © {new Date().getFullYear()} Lux Venit Choral Academy. All rights reserved.
          </p>
          <div className="gold-line" />
          <p
            className="eyebrow"
            style={{ color: 'rgba(200,169,107,0.25)', fontSize: '0.58rem' }}
          >
            Ad Majorem Dei Gloriam
          </p>
        </div>
      </div>
    </footer>
  )
}
