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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="relative w-full aspect-[3/4] overflow-hidden mb-10 border border-[#0E9A4C]/15 shadow-sm">
          <Image
            src="/images/ivan-ruiz-hipertermia.jpg"
            alt="Experiencia RUAH - Hipertermia terapéutica con Iván Alejandro Ruiz"
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#085A2C]/60 to-transparent flex items-center px-10">
