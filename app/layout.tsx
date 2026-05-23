import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation/Navigation'
import Footer from '@/components/ui/Footer'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lux Venit Choral Academy — Where Sacred Music Becomes Excellence',
  description: 'Choral music education for North Texas homeschool students. Affordable Christian program for ages 5-18 in NRH, Keller, Plano, Irving, Midlothian, Weatherford, and Wylie.',
  keywords: 'homeschool choir, choral academy, North Texas choir, DFW homeschool music, Christian choir, sacred music',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'Lux Venit Choral Academy',
    description: 'Choral music education for North Texas homeschool students.',
    type: 'website',
    images: [{ url: '/icon-512.png' }],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-primary-bg text-ivory antialiased" suppressHydrationWarning>
        <SmoothScrollProvider>
          <div className="relative bg-primary-bg grain-overlay">
            <Navigation />
            <main>{children}</main>
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
