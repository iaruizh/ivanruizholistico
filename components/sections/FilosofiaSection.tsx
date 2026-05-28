'use client'
import { useTranslations } from 'next-intl'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function FilosofiaSection() {
  const t = useTranslations('filosofia')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const pilares = t.raw('pilares') as { num: string; title: string; text: string }[]
  const vision = t.raw('vision') as { icon: string; label: string; text: string }[]

  return (
    <section id="filosofia" className="py-24 px-6 border-t border-b border-[#0E9A4C]/10" style={{background:'#EDE6D8'}} ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4E932] border border-[#c8b800]" />
            <span className="text-[0.66rem] tracking-[0.2em] uppercase text-[#0E9A4C] font-semibold">{t('tag')}</span>
          </div>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] text-[#1A1F1A] leading-[1.1] mb-4">
            {t('title')} <em className="text-[#0E9A4C] not-italic">{t('title_em')}</em>
          </h2>
          <p className="text-[0.88rem] text-[#7A7060] leading-[1.9] max-w-2xl font-light mb-12">{t('intro')}</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-px bg-[#0E9A4C]/10 mb-12">
          {pilares.map((p, i) => (
            <motion.div key={p.num} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }} className="p-10" style={{background:'#F5F0E8'}}>
              <div className="font-serif text-[3.5rem] leading-none mb-4 font-bold select-none" style={{color:'rgba(14,154,76,0.15)'}}>{p.num}</div>
              <h3 className="font-serif text-[1.5rem] text-[#0E9A4C] mb-3">{p.title}</h3>
              <p className="text-[0.8rem] text-[#7A7060] leading-[1.8] font-light">{p.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {vision.map((v, i) => (
            <motion.div key={v.label} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }} className="text-center p-6">
              <div className="w-12 h-12 bg-white/80 border border-[#0E9A4C]/20 flex items-center justify-center mx-auto mb-4 text-2xl">{v.icon}</div>
              <p className="text-[0.68rem] tracking-[0.15em] uppercase text-[#0E9A4C] font-semibold mb-2">{v.label}</p>
              <p className="text-[0.8rem] text-[#7A7060] leading-[1.7] font-light">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
