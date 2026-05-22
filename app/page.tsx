import Hero from '@/components/sections/Hero'
import Mission from '@/components/sections/Mission'
import Programs from '@/components/sections/Programs'
import PerformanceShowcase from '@/components/sections/PerformanceShowcase'
import Timeline from '@/components/sections/Timeline'
import Testimonials from '@/components/sections/Testimonials'
import EnrollmentCTA from '@/components/sections/EnrollmentCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Programs />
      <PerformanceShowcase />
      <Timeline />
      <Testimonials />
      <EnrollmentCTA />
    </>
  )
}
