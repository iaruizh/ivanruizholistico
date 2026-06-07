'use client'
import { useTranslations } from 'next-intl'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function ProblemasSection() {
  const t = useTranslations('problemas')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const items = t.raw('items') as { icon: string; title: string; text: string }[]

  return (
    <section id="problemas" className="py-24 px-6 border-t border-[#0E9A4C]/10" style={{background:'#F5F0E8'}} ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4E932] border border-[#c8b800]" />
            <span className="text-[0.66rem] tracking-[0.2em] uppercase text-[#0E9A4C] font-semibold">{t('tag')}</span>
          </div>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] text-[#1A1F1A] leading-tight mb-4">
            {t('title')} <em className="text-[#0E9A4C]">{t('title_em')}</em>
          </h2>
          <p className="text-[1rem] text-[#7A7060] leading-[1.8] font-light">{t('intro')}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-[#0E9A4C]/10">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="p-8 relative overflow-hidden group transition-colors"
              style={{background:'#EDE6D8'}}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{background:'#fff'}} />
              <span className="text-[2rem] mb-4 block relative">{item.icon}</span>
              <h3 className="font-serif text-[1.2rem] text-[#1A1F1A] mb-3 relative font-bold">{item.title}</h3>
              <p className="text-[0.82rem] text-[#7A7060] leading-[1.8] font-light relative">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
