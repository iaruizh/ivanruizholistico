import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-[#0E9A4C]/15 px-6 py-8" style={{background:'#EDE6D8'}}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[0.72rem] text-[#7A7060]">© {year} Iván Alejandro Ruiz · ivanruizholistico.com · {t('rights')}</p>
        <span className="font-serif text-[1.6rem] text-[#0E9A4C]">Żanatte</span>
        <p className="text-[0.72rem] text-[#7A7060] text-right">{t('tagline')}</p>
      </div>
    </footer>
  )
}
