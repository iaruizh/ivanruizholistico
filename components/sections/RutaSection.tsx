'use client'
import { useTranslations } from 'next-intl'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function RutaSection() {
  const t = useTranslations('ruta')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const steps = t.raw('steps') as { num: string; title: string; text: string }[]

  return (
    <section className="py-24 px-6 border-t border-[#0E9A4C]/10" style={{background:'#EDE6D8'}} ref={ref}>
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

        <div className="relative">
          {/* Línea conectora */}
          <div className="hidden md:block absolute top-[2.2rem] left-[10%] right-[10%] h-px bg-[#0E9A4C]/15" />

          <div className="grid md:grid-cols-5 gap-px bg-[#0E9A4C]/10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 text-center relative"
                style={{background:'#F5F0E8'}}
              >
                <div className="w-[4.4rem] h-[4.4rem] rounded-full border-2 border-[#0E9A4C] bg-white flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="font-serif text-[1.3rem] text-[#0E9A4C] font-bold">{step.num}</span>
                </div>
                <h3 className="font-serif text-[1.05rem] text-[#1A1F1A] mb-2 font-bold">{step.title}</h3>
                <p className="text-[0.78rem] text-[#7A7060] leading-[1.7] font-light">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
