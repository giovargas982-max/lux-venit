'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import PageHero from '@/components/ui/PageHero'
import EnrollmentCTA from '@/components/sections/EnrollmentCTA'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const directors = [
  {
    name: 'Richard Carr',
    title: 'Founder & Director',
    location: 'North Richland Hills',
    bio: 'After growing up in San Antonio, Richard Carr graduated from Texas Christian University with a Bachelor\'s degree in all-level K-12 Vocal Music Education. He has completed over 20 hours toward a Vocal Performance Master\'s degree at the University of North Texas. With 33 years of experience in music education, 7 years performing with the Fort Worth Opera, and over 30 years teaching in Birdville ISD, Richard brings unparalleled expertise to every rehearsal. He and his wife Mary have been married over 28 years and have homeschooled their four children for 19 years.',
  },
  {
    name: 'Jonathan & Dana Cole',
    title: 'Midlothian Directors',
    location: 'Midlothian',
    bio: 'Jonathan was homeschooled K-12 before earning his degree in Music Education from UT Arlington, where he met Dana — who also holds a Music Education degree. Together they have taught choir, private voice, and piano lessons in the Arlington and Midlothian area for over 10 years. Jonathan serves as Youth Minister at Oak Crest Baptist Church in Midlothian, and they are joyfully homeschooling their own children.',
  },
  {
    name: 'Melanie Braucht',
    title: 'Plano / Wylie Director',
    location: 'Plano & Wylie',
    bio: 'Melanie holds a Master\'s degree in Choral Music Education from Baylor University. She taught high school and middle school choir in Waco ISD, has taught private voice lessons for fifteen years, and currently serves at McMillen and Plano East Senior High School. A homeschool mom of two teenage girls, Melanie is thrilled to direct choirs again.',
  },
]

const parentTestimonials = [
  {
    quote: "The quality of training is phenomenal — on a level with expensive private professional lessons! My girls run out the door with anticipation to go to choir practice!",
    name: "Ruth O.",
    location: "Keller, TX",
  },
  {
    quote: "The caliber of musical performance is on par with excellent public school programs — which is especially impressive with just one hour of rehearsal each week.",
    name: "Laine Keller",
    location: "Plano, TX",
  },
  {
    quote: "Mr. Carr relays his knowledge skillfully in a short time and prepares students for competition with great success. Lux Venit has truly been a blessing to our family.",
    name: "La'Tonia S.",
    location: "Fort Worth, TX",
  },
  {
    quote: "My children now sing more enthusiastically in Sunday worship. The concerts have been superb, and Mr. Carr makes the whole experience enjoyable.",
    name: "Kim R.",
    location: "Irving, TX",
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

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Formed in Faith,"
        titleGold="Rooted in Community"
        subtitle="For over a decade, Lux Venit Choral Academy has brought professional-quality choral education to North Texas homeschool families."
      />

      {/* Mission & Goals */}
      <section className="relative py-24 md:py-32 px-6" style={{ background: '#0D1321' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,169,107,0.04) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-4xl mx-auto">
          <RevealSection>
            <div className="flex items-center justify-center gap-4 mb-12 reveal-item">
              <span className="gold-line" />
              <span className="eyebrow">Mission & Goals</span>
              <span className="gold-line" />
            </div>

            <div className="glass-card rounded-sm reveal-item" style={{ padding: '3rem' }}>
              <h2
                className="font-serif text-ivory mb-8 leading-tight reveal-item"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.01em' }}
              >
                Our Mission Statement
              </h2>
              <p
                className="font-serif italic mb-10 reveal-item"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#C8A96B', lineHeight: 1.7, fontWeight: 400 }}
              >
                &ldquo;The students of the Lux Venit Choral Academy will strive to work in unity as a team and individually to pursue excellence that gives glory to our Lord, Jesus Christ.&rdquo;
              </p>

              <div className="gold-line-wide mb-10 reveal-item" />

              <h3
                className="font-serif text-ivory mb-6 reveal-item"
                style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 400 }}
              >
                Our Goals
              </h3>
              <p
                className="leading-loose mb-6 reveal-item"
                style={{
                  fontFamily: 'var(--font-inter), system-ui',
                  fontSize: '1rem',
                  color: 'rgba(246,242,234,0.65)',
                  fontWeight: 300,
                }}
              >
                Our older ensembles require a higher level of musical skill and discipline — study at home and preparedness for each rehearsal are essential. Our choral literature aims to glorify God in worship while exposing students to a variety of genres: Baroque, Classical, Renaissance, folk songs, spirituals, and hymns. All choral groups function as a team; the smaller the team, the more demanded from each individual.
              </p>
              <p
                className="leading-loose reveal-item"
                style={{
                  fontFamily: 'var(--font-inter), system-ui',
                  fontSize: '1rem',
                  color: 'rgba(246,242,234,0.5)',
                  fontWeight: 300,
                }}
              >
                No prior music experience is required to join our Lower or Upper Elementary programs, or Men&apos;s &amp; Ladies&apos; Choirs. Only Chorale — our most advanced ensemble for 9th–12th graders — requires an audition. Every student is welcome to begin their journey with us.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Why Richard Started */}
      <section className="relative py-24 md:py-32 px-6" style={{ background: '#060B16' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 60% at 30% 50%, rgba(200,169,107,0.03) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-4xl mx-auto">
          <RevealSection>
            <div className="flex items-center justify-center gap-4 mb-16 reveal-item">
              <span className="gold-line" />
              <span className="eyebrow">Why Lux Venit</span>
              <span className="gold-line" />
            </div>

            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3 reveal-item">
                <h2
                  className="font-serif text-ivory mb-8 leading-tight"
                  style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 300, letterSpacing: '-0.01em' }}
                >
                  Why I Started
                  <br />
                  <em className="text-gradient-gold" style={{ fontStyle: 'italic', fontWeight: 400 }}>Lux Venit</em>
                </h2>
                <blockquote
                  className="border-l-2 pl-8 py-4 mb-8"
                  style={{ borderColor: 'rgba(200,169,107,0.4)' }}
                >
                  <p
                    className="font-serif italic leading-relaxed mb-4"
                    style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)', color: 'rgba(246,242,234,0.85)', lineHeight: 1.7, fontWeight: 300 }}
                  >
                    &ldquo;Ever since I was in middle school, I have wanted to be a choir director. My music degree at TCU primarily prepared me to teach middle school and high school choirs. I enjoy teaching children, young men, and young women how to sing and introducing them to great choral literature from a Christian homeschool Dad&apos;s perspective.&rdquo;
                  </p>
                  <p className="eyebrow" style={{ color: 'rgba(200,169,107,0.6)', fontSize: '0.6rem' }}>
                    — Richard H. Carr, Founder
                  </p>
                </blockquote>
              </div>

              <div className="lg:col-span-2 reveal-item">
                <div className="glass-card rounded-sm" style={{ padding: '2rem' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="gold-line" />
                    <span className="eyebrow" style={{ fontSize: '0.58rem' }}>At a Glance</span>
                  </div>
                  {[
                    { label: 'Years of Experience', value: '33+' },
                    { label: 'Years with Fort Worth Opera', value: '7' },
                    { label: 'Years in Birdville ISD', value: '30+' },
                    { label: 'Years Homeschooling', value: '19' },
                    { label: 'Locations Served', value: '8' },
                  ].map((stat) => (
                    <div key={stat.label} className="py-3" style={{ borderBottom: '1px solid rgba(200,169,107,0.08)' }}>
                      <p
                        className="font-serif"
                        style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', color: '#C8A96B', fontWeight: 400 }}
                      >
                        {stat.value}
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-inter), system-ui',
                          fontSize: '0.75rem',
                          color: 'rgba(246,242,234,0.45)',
                          fontWeight: 300,
                          letterSpacing: '0.05em',
                        }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Directors */}
      <section className="relative py-24 md:py-32 px-6" style={{ background: '#0D1321' }}>
        <div className="relative max-w-6xl mx-auto">
          <RevealSection>
            <div className="flex items-center justify-center gap-4 mb-16 reveal-item">
              <span className="gold-line" />
              <span className="eyebrow">Our Directors</span>
              <span className="gold-line" />
            </div>

            <h2
              className="font-serif text-ivory text-center mb-16 reveal-item"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, letterSpacing: '-0.01em' }}
            >
              Meet the Team Behind
              <br />
              <em className="text-gradient-gold" style={{ fontStyle: 'italic', fontWeight: 400 }}>Lux Venit</em>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {directors.map((director) => (
                <div
                  key={director.name}
                  className="glass-card hover-glow rounded-sm reveal-item"
                  style={{ padding: '2.5rem' }}
                >
                  {/* Avatar placeholder */}
                  <div
                    className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                    style={{ background: 'rgba(200,169,107,0.08)', border: '1px solid rgba(200,169,107,0.2)' }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(200,169,107,0.6)" strokeWidth="1.2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>

                  <h3
                    className="font-serif text-ivory mb-1"
                    style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', fontWeight: 400 }}
                  >
                    {director.name}
                  </h3>
                  <p className="font-serif italic mb-1" style={{ fontSize: '0.95rem', color: '#C8A96B', fontWeight: 300 }}>
                    {director.title}
                  </p>
                  <p className="eyebrow mb-5" style={{ color: 'rgba(200,169,107,0.45)', fontSize: '0.55rem' }}>
                    {director.location}
                  </p>

                  <div className="gold-line mb-5" />

                  <p
                    className="leading-loose"
                    style={{
                      fontFamily: 'var(--font-inter), system-ui',
                      fontSize: '0.88rem',
                      color: 'rgba(246,242,234,0.55)',
                      fontWeight: 300,
                    }}
                  >
                    {director.bio}
                  </p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="relative py-24 md:py-32 px-6" style={{ background: '#060B16' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(200,169,107,0.03) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-6xl mx-auto">
          <RevealSection>
            <div className="flex items-center justify-center gap-4 mb-16 reveal-item">
              <span className="gold-line" />
              <span className="eyebrow">Parent Voices</span>
              <span className="gold-line" />
            </div>

            <h2
              className="font-serif text-ivory text-center mb-16 reveal-item"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, letterSpacing: '-0.01em' }}
            >
              What Families Are{' '}
              <em className="text-gradient-gold" style={{ fontStyle: 'italic', fontWeight: 400 }}>Saying</em>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {parentTestimonials.map((t) => (
                <div
                  key={t.name}
                  className="glass-card rounded-sm hover-glow reveal-item"
                  style={{ padding: '2.5rem' }}
                >
                  <p
                    className="font-serif italic leading-relaxed mb-8"
                    style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(246,242,234,0.8)', fontWeight: 300, lineHeight: 1.8 }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="gold-line" />
                    <div>
                      <p className="font-serif text-accent-gold" style={{ fontSize: '0.95rem', fontWeight: 500 }}>
                        {t.name}
                      </p>
                      <p className="eyebrow" style={{ color: 'rgba(200,169,107,0.4)', fontSize: '0.55rem' }}>
                        {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 text-center" style={{ background: '#0D1321' }}>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="gold-line" />
            <span className="eyebrow">Join Our Family</span>
            <span className="gold-line" />
          </div>
          <h2
            className="font-serif text-ivory mb-6"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 300 }}
          >
            Ready to Begin Your Journey?
          </h2>
          <p
            className="mb-10 mx-auto"
            style={{
              fontFamily: 'var(--font-inter), system-ui',
              fontSize: '1rem',
              color: 'rgba(246,242,234,0.55)',
              fontWeight: 300,
              maxWidth: '44ch',
              lineHeight: 1.8,
            }}
          >
            Lux Venit is open to Christian homeschool families across 8 DFW locations. No prior experience required.
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
