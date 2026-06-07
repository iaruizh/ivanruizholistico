import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import type { Metadata } from 'next'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta.home' })
  const url = locale === 'es' ? 'https://ivanruizholistico.com' : `https://ivanruizholistico.com/en`
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: url,
      languages: {
        'es': 'https://ivanruizholistico.com',
        'en': 'https://ivanruizholistico.com/en',
      },
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Iván Alejandro Ruiz Hernández',
  alternateName: 'Iván Alejandro Ruiz',
  description: 'Ingeniero Mecatrónico y Terapeuta Holointegrativo. Fundador de ZANATTE Centro Holointegrativo. Creador de la experiencia RUAH.',
  url: 'https://ivanruizholistico.com',
  image: 'https://ivanruizholistico.com/images/ivan-ruiz.jpg',
  jobTitle: 'Terapeuta Holointegrativo',
  worksFor: {
    '@type': 'Organization',
    name: 'ZANATTE Centro Holointegrativo',
    url: 'https://zanatte.com.co',
  },
  knowsAbout: ['Terapias Holointegrativas', 'Hipertermia Terapéutica', 'Medicina Ancestral', 'Iridiología', 'Gemoterapia', 'Bienestar Integral'],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidad Nacional de Colombia' },
  nationality: { '@type': 'Country', name: 'Colombia' },
  address: { '@type': 'PostalAddress', addressLocality: 'Bogotá', addressCountry: 'CO' },
  sameAs: ['https://instagram.com/ivanaleruizh', 'https://tiktok.com/@ivanaleruizh', 'https://zanatte.com.co'],
  telephone: '+573144114302',
  email: 'iaruizh@gmail.com',
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'es' | 'en')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
