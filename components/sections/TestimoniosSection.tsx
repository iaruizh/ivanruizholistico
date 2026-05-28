'use client'
import { useTranslations } from 'next-intl'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function TestimoniosSection() {
  const t = useTranslations('testimonios')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const items = t.raw('items') as { text: string; author: string }[]

  return (
    <section id="testimonios" className="py-24 px-6 border-t border-[#0E9A4C]/10" style={{background:'#EDE6D8'}} ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4E932] border border-[#c8b800]" />
            <span className="text-[0.66rem] tracking-[0.2em] uppercase text-[#0E9A4C] font-semibold">{t('tag')}</span>
          </div>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] text-[#1A1F1A] leading-[1.1] mb-10">
            {t('title')} <em className="text-[#0E9A4C] not-italic">{t('title_em')}</em>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-px bg-[#0E9A4C]/10">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.12 }} className="p-7 flex flex-col gap-4 bg-white shadow-sm">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <div key={j} className="w-2 h-2 bg-[#F4E932] border border-[#c8b800] rounded-[1px]" />
                ))}
              </div>
              <p className="font-serif text-[1.05rem] italic text-[#1A1F1A] leading-[1.7] flex-1">&ldquo;{item.text}&rdquo;</p>
              <p className="text-[0.7rem] text-[#7A7060] tracking-wider">{item.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
