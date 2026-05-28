import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'
import { CartSidebar } from '@/components/shop/CartSidebar'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://fincadearandanos.com'),
  title: {
    default: 'Finca de Arándanos — Del cultivo a tu mesa',
    template: '%s | Finca de Arándanos',
  },
  description: 'Mermeladas artesanales, jugos naturales y conservas premium elaborados con fruta fresca de nuestra propia finca. Sin conservantes, sin colorantes, sin aditivos.',
  keywords: [
    'mermeladas artesanales', 'jugos naturales', 'arándanos', 'conservas', 
    'productos orgánicos', 'finca', 'sin conservantes', 'frutos rojos',
    'chutneys', 'pesto', 'miel natural', 'argentina', 'CABA'
  ],
  authors: [{ name: 'Finca de Arándanos', url: 'https://fincadearandanos.com' }],
  creator: 'Finca de Arándanos',
  publisher: 'Finca de Arándanos',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://fincadearandanos.com',
    siteName: 'Finca de Arándanos',
    title: 'Finca de Arándanos — Del cultivo a tu mesa',
    description: 'Mermeladas artesanales, jugos naturales y conservas premium. Directo desde nuestra finca a tu mesa.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Finca de Arándanos - Productos artesanales premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finca de Arándanos — Del cultivo a tu mesa',
    description: 'Mermeladas artesanales, jugos naturales y conservas premium desde nuestra finca.',
    images: ['/og-image.jpg'],
    creator: '@fincadearandanos',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: { canonical: '/' },
}

export const viewport: Viewport = {
  themeColor: '#5B2D8E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="font-body bg-warm-white text-gray-900 antialiased overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
        <CartSidebar />
        <WhatsAppButton />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              fontFamily: 'var(--font-body)',
              borderRadius: '12px',
              background: '#1a1a1a',
              color: '#fff',
              fontSize: '14px',
            },
            success: { iconTheme: { primary: '#2D6A4F', secondary: '#fff' } },
          }}
        />
      </body>
    </html>
  )
}
