import type { Metadata } from 'next'
import { Tangerine, Raleway } from 'next/font/google'
import './globals.css'

const tangerine = Tangerine({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-tangerine',
  display: 'swap',
})

const raleway = Raleway({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ivanruizholistico.com'),
  title: {
    default: 'Iván Alejandro Ruiz | Terapeuta Holointegrativo · Bogotá',
    template: '%s | Iván Alejandro Ruiz',
  },
  description: 'Ingeniero Mecatrónico y Terapeuta Holointegrativo. Fundador de ZANATTE. Experiencia RUAH de restauración y reconexión integral en Bogotá, Colombia.',
  keywords: ['terapeuta holointegrativo bogota', 'RUAH experiencia terapeutica', 'zanatte sanacion integral', 'bienestar integral colombia', 'hipertermia terapeutica', 'Iván Alejandro Ruiz'],
  authors: [{ name: 'Iván Alejandro Ruiz', url: 'https://ivanruizholistico.com' }],
  creator: 'Iván Alejandro Ruiz',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    alternateLocale: 'en_US',
    url: 'https://ivanruizholistico.com',
    siteName: 'Iván Alejandro Ruiz',
    title: 'Iván Alejandro Ruiz | Terapeuta Holointegrativo · Bogotá',
    description: 'Ingeniero Mecatrónico y Terapeuta Holointegrativo. Fundador de ZANATTE Centro Holointegrativo. Experiencia RUAH en Bogotá, Colombia.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Iván Alejandro Ruiz - Terapeuta Holointegrativo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iván Alejandro Ruiz | Terapeuta Holointegrativo',
    description: 'Fundador de ZANATTE. Experiencia RUAH de restauración integral en Bogotá.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params?: { locale?: string }
}) {
  const locale = params?.locale ?? 'es'
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://ivanruizholistico.com" />
      </head>
      <body className={`${tangerine.variable} ${raleway.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}