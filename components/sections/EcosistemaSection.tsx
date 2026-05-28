'use client'
import { useTranslations } from 'next-intl'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function EcosistemaSection() {
  const t = useTranslations('ecosistema')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const steps = t.raw('steps') as { badge?: string; num: string; title: string; text: string }[]

  return (
    <section id="ecosistema" className="py-24 px-6" style={{background:'#F5F0E8'}} ref={ref}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4E932] border border-[#c8b800]" />
            <span className="text-[0.66rem] tracking-[0.2em] uppercase text-[#0E9A4C] font-semibold">{t('tag')}</span>
          </div>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] text-[#1A1F1A] leading-[1.1] mb-4">
            {t('title')} <em className="text-[#0E9A4C] not-italic">{t('title_em')}</em>
          </h2>
          <div className="w-12 h-0.5 bg-[#0E9A4C] mb-6" />
          <p className="text-[0.86rem] text-[#7A7060] leading-[1.9] font-light">{t('desc')}</p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-[15px] top-5 bottom-5 w-px bg-[#0E9A4C]/20" />
          {steps.map((step, i) => (
            <motion.div key={step.num} initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }} className="grid grid-cols-[32px_1fr] gap-5 pb-8 relative">
              <div className="w-8 h-8 bg-white border border-[#0E9A4C]/25 flex items-center justify-center flex-shrink-0 relative z-10 shadow-sm">
                <div className="w-2 h-2 rounded-full" style={{background: i === 0 ? '#0E9A4C' : `rgba(14,154,76,${0.5 - i * 0.08})`}} />
              </div>
              <div>
                {step.badge && <span className="inline-block bg-[#0E9A4C]/08 border border-[#0E9A4C]/20 text-[#0E9A4C] text-[0.58rem] tracking-widest uppercase px-2 py-0.5 font-semibold mb-2">{step.badge}</span>}
                <p className="text-[0.62rem] tracking-[0.15em] uppercase text-[#0E9A4C] font-semibold mb-1">{step.num}</p>
                <p className="font-serif text-[1.2rem] text-[#1A1F1A] mb-1 font-bold">{step.title}</p>
                <p className="text-[0.76rem] text-[#7A7060] leading-[1.7] font-light">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
