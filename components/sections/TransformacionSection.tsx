'use client'
import { useTranslations } from 'next-intl'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function TransformacionSection() {
  const t = useTranslations('transformacion')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const antes = t.raw('antes') as string[]
  const despues = t.raw('despues') as string[]

  return (
    <section className="py-24 px-6" style={{background:'#1A1F1A'}} ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4E932] border border-[#c8b800]" />
            <span className="text-[0.66rem] tracking-[0.2em] uppercase text-[#0E9A4C] font-semibold">{t('tag')}</span>
          </div>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] text-white leading-tight">
            {t('title')} <em className="text-[#0E9A4C]">{t('title_em')}</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_48px_1fr] gap-4 items-center">
          {/* ANTES */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="text-[0.66rem] tracking-[0.2em] uppercase text-[rgba(255,255,255,0.35)] font-semibold mb-4 text-center">Hoy</p>
            <div className="flex flex-col gap-2">
              {antes.map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-sm text-[0.88rem]" style={{background:'rgba(255,255,255,0.04)', color:'rgba(247,243,238,0.5)'}}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{background:'rgba(255,255,255,0.2)'}} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* FLECHA */}
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="hidden md:flex items-center justify-center">
            <span className="text-[#A06840] text-[2rem]">→</span>
          </motion.div>

          {/* DESPUÉS */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <p className="text-[0.66rem] tracking-[0.2em] uppercase font-semibold mb-4 text-center" style={{color:'#6DD894'}}>Después</p>
            <div className="flex flex-col gap-2">
              {despues.map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-sm text-[0.88rem]" style={{background:'rgba(14,154,76,0.18)', color:'rgba(247,243,238,0.9)'}}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{background:'#6DD894'}} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
