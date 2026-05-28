'use client'
import { useTranslations } from 'next-intl'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export function RuahSection() {
  const t = useTranslations('ruah')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const phases = t.raw('phases') as { tag: string; title: string; text: string }[]

  return (
    <section id="ruah" className="py-24 px-6 border-t border-b border-[#0E9A4C]/10" style={{background:'#EDE6D8'}} ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4E932] border border-[#c8b800]" />
            <span className="text-[0.66rem] tracking-[0.2em] uppercase text-[#0E9A4C] font-semibold">{t('tag')}</span>
          </div>
          <h2 className="font-serif text-[clamp(4rem,8vw,6.5rem)] text-[#0E9A4C] leading-none font-bold mb-2 tracking-wide">{t('title')}</h2>
          <p className="font-serif text-[1.3rem] text-[#1A1F1A] italic mb-4">{t('subtitle')}</p>
          <p className="text-[1rem] text-[#7A7060] leading-[1.8] font-light">{t('desc')}</p>
        </motion.div>

        {/* Foto hipertermia destacada */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="relative w-full aspect-[16/9] overflow-hidden mb-10 border border-[#0E9A4C]/15 shadow-sm">
          <Image
            src="/images/ivan-ruiz-hipertermia.jpg"
            alt="Experiencia RUAH - Hipertermia terapéutica con Iván Alejandro Ruiz"
            fill
            className="object-cover object-[center_10%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#085A2C]/60 to-transparent flex items-center px-10">
            <div>
              <p className="font-serif text-[3rem] text-white leading-none font-bold">RUAH</p>
              <p className="font-serif text-[1.2rem] text-[#F4E932] italic mt-1">Restauración y Reconexión Integral</p>
            </div>
          </div>
        </motion.div>

        {/* Phases grid */}
        <div className="grid md:grid-cols-3 gap-px bg-[#0E9A4C]/10 mb-10">
          {phases.map((phase, i) => (
            <motion.div key={phase.tag} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.08 }} className="p-7 relative overflow-hidden" style={{background:'#F5F0E8'}}>
              <span className="absolute top-[-8px] right-3 font-serif text-[4.5rem] leading-none font-bold select-none pointer-events-none" style={{color:'rgba(14,154,76,0.08)'}}>{i+1}</span>
              <p className="text-[0.62rem] tracking-[0.15em] uppercase text-[#0E9A4C] font-semibold mb-2 relative">{phase.tag}</p>
              <h3 className="font-serif text-[1.25rem] text-[#1A1F1A] mb-3 relative font-bold">{phase.title}</h3>
              <p className="text-[0.76rem] text-[#7A7060] leading-[1.8] font-light relative">{phase.text}</p>
            </motion.div>
          ))}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 }} className="p-7 flex flex-col items-center justify-center text-center" style={{background:'#F5F0E8'}}>
            <p className="font-serif text-[1.2rem] text-[#0E9A4C] italic leading-[1.5]">&ldquo;{t('quote')}&rdquo;</p>
            <span className="text-[0.6rem] tracking-[0.12em] uppercase text-[#7A7060] mt-4 font-medium">{t('duration')}</span>
          </motion.div>
        </div>

        {/* Foto terapia + pricing */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full aspect-[3/4] overflow-hidden border border-[#0E9A4C]/15 shadow-sm">
            <Image
              src="/images/ivan-ruiz-terapia.jpg"
              alt="Iván Alejandro Ruiz realizando terapia holointegrativa"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col gap-4">
            {[
              { type: t('individual'), price: t('price_ind'), currency: t('currency') },
              { type: t('pareja'), price: t('price_par'), currency: t('currency'), featured: true },
            ].map((card) => (
              <div key={card.type} className={`border p-8 text-center bg-white shadow-sm transition-all ${card.featured ? 'border-[#0E9A4C]' : 'border-[#0E9A4C]/20 hover:border-[#0E9A4C]/40'}`}>
                <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#7A7060] font-medium mb-3">{card.type}</p>
                <p className="font-serif text-[2rem] text-[#0E9A4C] font-bold leading-none">{card.price}</p>
                <p className="text-[0.7rem] text-[#7A7060] mt-1">{card.currency}</p>
                <a href="#contacto" className="block mt-5 py-2.5 bg-[#0E9A4C] text-white text-[0.68rem] tracking-widest uppercase font-semibold hover:bg-[#0C7A3C] transition-colors">{t('reservar')}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
