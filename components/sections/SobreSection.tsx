'use client'
import { useTranslations } from 'next-intl'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
export function SobreSection() {
  const t = useTranslations('sobre')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const creds = t.raw('creds') as { badge: string; title: string; sub: string }[]
  return (
    <section id="sobre" className="py-24 px-6" style={{background:'#F5F0E8'}} ref={ref}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4E932] border border-[#c8b800]" />
            <span className="text-[0.66rem] tracking-[0.2em] uppercase text-[#0E9A4C] font-semibold">{t('tag')}</span>
          </div>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] text-[#1A1F1A] leading-[1.1] mb-4">
            {t('title')} <em className="text-[#0E9A4C] not-italic">{t('title_em')}</em>
          </h2>
          <div className="w-12 h-0.5 bg-[#0E9A4C] mb-6" />
          <div className="space-y-4 text-[1rem] text-[#7A7060] leading-[1.9] font-light">
            <p>{t('p1')}</p><p>{t('p2')}</p><p>{t('p3')}</p>
          </div>
          <blockquote className="font-serif text-[1.8rem] text-[#0E9A4C] leading-[1.3] mt-8 pl-5 border-l-2 border-[#0E9A4C] italic">
            &ldquo;{t('quote')}&rdquo;
          </blockquote>
          <div className="mt-8 relative w-full aspect-[3/4] overflow-hidden border border-[#0E9A4C]/15 shadow-sm">
            <Image
              src="/images/ivan-ruiz-consultorio.jpg"
              alt="Iván Alejandro Ruiz en su consultorio"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }} className="flex flex-col gap-3">
          {creds.map((cred) => (
            <div key={cred.badge} className="grid grid-cols-[40px_1fr] gap-4 p-4 border border-[#0E9A4C]/15 bg-white/60 hover:border-[#0E9A4C]/35 hover:bg-white/80 transition-all">
              <div className="w-10 h-10 bg-[#0E9A4C]/08 border border-[#0E9A4C]/20 flex items-center justify-center text-[0.58rem] font-bold text-[#0E9A4C] text-center leading-tight flex-shrink-0">{cred.badge}</div>
              <div>
                <p className="text-[0.84rem] text-[#1A1F1A] font-medium leading-tight mb-0.5">{cred.title}</p>
                <p className="text-[0.72rem] text-[#7A7060] font-light">{cred.sub}</p>
              </div>
            </div>
          ))}
          <div className="mt-2 relative w-full aspect-[3/4] overflow-hidden border border-[#0E9A4C]/15 shadow-sm">
            <Image
              src="/images/ivan-ruiz-cristal.jpg"
              alt="Iván Alejandro Ruiz con herramientas terapéuticas"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
