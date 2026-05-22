import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export { gsap, ScrollTrigger }

export const luxuryEase = 'cubic-bezier(0.19, 1, 0.22, 1)'

export function revealFromBelow(targets: gsap.TweenTarget, options?: gsap.TweenVars) {
  return gsap.fromTo(
    targets,
    { opacity: 0, y: 48 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: luxuryEase,
      ...options,
    }
  )
}

export function staggerReveal(targets: gsap.TweenTarget, options?: gsap.TweenVars) {
  return gsap.fromTo(
    targets,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.15,
      ease: luxuryEase,
      ...options,
    }
  )
}
