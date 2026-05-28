'use client'
import { useTranslations } from 'next-intl'

export function MensajesSection() {
  const t = useTranslations()
  const mensajes = t.raw('mensajes') as string[]
  return (
    <div className="border-t border-b border-[#0E9A4C]/15 py-16 px-6 text-center" style={{background:'#EDE6D8'}}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F4E932] border border-[#c8b800]" />
          <span className="text-[0.66rem] tracking-[0.2em] uppercase text-[#0E9A4C] font-semibold">Lo que nos mueve</span>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-[#0E9A4C]/10">
          {mensajes.map((msg, i) => (
            <div key={i} className="px-8 py-10" style={{background:'#EDE6D8'}}>
              <p className="font-serif text-[1.2rem] text-[#1A1F1A] italic leading-[1.5]">&ldquo;{msg}&rdquo;</p>
              <div className="w-1.5 h-1.5 rounded-full bg-[#F4E932] border border-[#c8b800] mx-auto mt-6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
