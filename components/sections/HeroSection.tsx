'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export function HeroSection() {
  const t = useTranslations('hero')
  const pills = t.raw('pills') as string[]

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden" style={{background:'#F5F0E8'}}>
      <div className="pointer-events-none absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full" style={{background:'radial-gradient(circle, rgba(14,154,76,0.07) 0%, transparent 70%)'}} />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full" style={{background:'radial-gradient(circle, rgba(244,233,50,0.12) 0%, transparent 70%)'}} />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <motion.div custom={0} initial="hidden" animate="show" variants={fadeUp} className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#F4E932] border border-[#c8b800] flex-shrink-0" />
            <span className="text-[0.7rem] tracking-[0.2em] uppercase text-[#0E9A4C] font-medium">{t('eyebrow')}</span>
          </motion.div>

          <motion.h1 custom={1} initial="hidden" animate="show" variants={fadeUp} className="font-serif text-[clamp(4rem,7vw,6rem)] leading-none text-[#1A1F1A] mb-1">
            {t('name')}
          </motion.h1>
          <motion.h1 custom={2} initial="hidden" animate="show" variants={fadeUp} className="font-serif text-[clamp(2.5rem,4vw,3.8rem)] leading-none text-[#0E9A4C] mb-6">
            {t('surname')}
          </motion.h1>

          <motion.p custom={3} initial="hidden" animate="show" variants={fadeUp} className="text-[1.1rem] text-[#7A7060] leading-[1.9] max-w-[460px] mb-6 font-light">
            {t('tagline')}
          </motion.p>

          <motion.div custom={4} initial="hidden" animate="show" variants={fadeUp} className="flex flex-wrap gap-2 mb-8">
            {pills.map((pill) => (
              <span key={pill} className="px-3 py-1.5 border border-[#0E9A4C]/25 text-[0.7rem] tracking-wider uppercase text-[#0E9A4C] font-medium bg-white/50">
                {pill}
              </span>
            ))}
          </motion.div>

          <motion.div custom={5} initial="hidden" animate="show" variants={fadeUp} className="flex flex-wrap gap-3">
            <a href="#ruah" className="inline-flex items-center gap-2 bg-[#0E9A4C] text-white px-6 py-3 text-[0.76rem] tracking-widest uppercase font-semibold hover:bg-[#0C7A3C] transition-colors">
              {t('cta_primary')} <ArrowRight size={14} />
            </a>
            <a href="#contacto" className="inline-flex items-center gap-2 border border-[#1A1F1A]/20 text-[#7A7060] px-6 py-3 text-[0.76rem] tracking-widest uppercase font-medium hover:text-[#1A1F1A] hover:border-[#1A1F1A]/40 transition-colors">
              {t('cta_secondary')}
            </a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
          <div className="bg-white border border-[#0E9A4C]/15 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0E9A4C] to-[#F4E932]" />

            <div className="w-full aspect-[3/4] relative overflow-hidden border-b border-[#0E9A4C]/10">
              <Image
                src="/images/ivan-ruiz-hero.jpg"
                alt="Iván Alejandro Ruiz - Terapeuta Holointegrativo"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="p-5">
              <p className="font-serif text-[1.6rem] text-[#1A1F1A] leading-none mb-1">Iván Alejandro Ruiz</p>
              <p className="text-[0.7rem] tracking-wider uppercase text-[#0E9A4C] font-medium mb-4">Terapeuta Holointegrativo · ZANATTE</p>
              <div className="flex flex-col gap-2 border-t border-[#0E9A4C]/10 pt-4">
                {[
                  { label: 'WA', value: '314 411 43 02' },
                  { label: '@', value: 'iaruizh@gmail.com' },
                  { label: 'IG', value: '@ivanaleruizh' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center gap-3 text-[0.78rem] text-[#7A7060]">
                    <span className="w-6 h-6 bg-[#0E9A4C]/10 border border-[#0E9A4C]/20 flex items-center justify-center text-[0.58rem] font-semibold text-[#0E9A4C] flex-shrink-0">{label}</span>
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
