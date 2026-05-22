'use client'

import Image from 'next/image'

interface LuxVenitLogoProps {
  size?: number
  className?: string
}

export default function LuxVenitLogo({ size = 80, className = '' }: LuxVenitLogoProps) {
  return (
    <div
      className={`inline-flex items-center justify-center flex-shrink-0 ${className}`}
      style={{ width: size, height: size, flexShrink: 0 }}
    >
      <Image
        src="/logo.png"
        alt="Lux Venit Choral Academy"
        width={size}
        height={size}
        quality={95}
        priority
        style={{ objectFit: 'contain', width: '100%', height: '100%' }}
      />
    </div>
  )
}
