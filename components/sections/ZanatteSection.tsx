'use client'
import { useTranslations } from 'next-intl'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'

export function ZanatteSection() {
  const t = useTranslations('zanatte')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const terapias = t.raw('terapias') as { name: string; desc: string }[]

  return (
    <section id="zanatte" className="py-24 px-6" style={{background:'#F5F0E8'}} ref={ref}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-14 items-start">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
          <div className="bg-white border border-[#0E9A4C]/20 p-8 text-center shadow-sm">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#F4E932] border border-[#c8b800] mb-1" />
            <p className="font-serif text-[3rem] text-[#0E9A4C] leading-none font-bold">Zanatte</p>
            <p className="text-[0.66rem] tracking-[0.15em] uppercase text-[#7A7060] mt-1">Sanación Integral</p>
            <div className="flex justify-center gap-8 mt-5 pt-5 border-t border-[#0E9A4C]/12">
              {[{icon:'👤',label:'cuerpo'},{icon:'🏠',label:'casa'},{icon:'🌍',label:'planeta'}].map((p) => (
                <div key={p.label} className="text-center">
                  <div className="text-xl mb-1">{p.icon}</div>
                  <span className="text-[0.62rem] tracking-widest uppercase text-[#0E9A4C] font-medium">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 p-5 border border-[#0E9A4C]/12 bg-white/50">
            <p className="text-[0.62rem] tracking-[0.15em] uppercase text-[#0E9A4C] font-semibold mb-3">Contacto directo</p>
            <div className="flex flex-col gap-2">
              {[{icon:'📱',text:'314 411 43 02'},{icon:'✉️',text:'iaruizh@gmail.com'},{icon:'📍',text:'Calle 1f #18-19, Bogotá'},{icon:'🌐',text:'zanatte.com.co'}].map(({icon,text}) => (
                <p key={text} className="text-[0.76rem] text-[#7A7060] font-light">{icon} {text}</p>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }}>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4E932] border border-[#c8b800]" />
            <span className="text-[0.66rem] tracking-[0.2em] uppercase text-[#0E9A4C] font-semibold">{t('tag')}</span>
          </div>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] text-[#1A1F1A] leading-[1.1] mb-4">
            {t('title')} <em className="text-[#0E9A4C] not-italic">{t('title_em')}</em>
          </h2>
          <div className="w-12 h-0.5 bg-[#0E9A4C] mb-6" />
          <div className="space-y-3 text-[0.86rem] text-[#7A7060] leading-[1.9] font-light mb-8">
            <p>{t('p1')}</p><p>{t('p2')}</p>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {terapias.map((ter) => (
              <div key={ter.name} className="p-3.5 border border-[#0E9A4C]/12 bg-white/50 hover:border-[#0E9A4C]/30 hover:bg-white/80 transition-all">
                <p className="text-[0.8rem] text-[#1A1F1A] font-medium mb-1">{ter.name}</p>
                <p className="text-[0.7rem] text-[#7A7060] leading-[1.6] font-light">{ter.desc}</p>
              </div>
            ))}
          </div>
          <a href="https://zanatte.com.co" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#0E9A4C] text-white px-5 py-2.5 text-[0.72rem] tracking-widest uppercase font-semibold hover:bg-[#0C7A3C] transition-colors">
            {t('cta')} <ExternalLink size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
