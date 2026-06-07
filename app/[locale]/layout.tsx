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
