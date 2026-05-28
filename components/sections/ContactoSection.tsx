'use client'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { Send } from 'lucide-react'

export function ContactoSection() {
  const t = useTranslations('contacto')
  const options = t.raw('form.options') as string[]
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')
  const [form, setForm] = useState({ name:'', email:'', phone:'', type:'', message:'' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
      if (res.ok) { setStatus('sent'); setForm({ name:'', email:'', phone:'', type:'', message:'' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section id="contacto" className="py-24 px-6 relative overflow-hidden" style={{background:'#085A2C'}}>
      <div className="pointer-events-none absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full" style={{background:'rgba(14,154,76,0.2)'}} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4E932] border border-[#c8b800]" />
              <span className="text-[0.66rem] tracking-[0.2em] uppercase text-[rgba(240,237,230,0.5)] font-semibold">{t('tag')}</span>
            </div>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] text-[#F5F0E8] leading-[1.1] mb-4">
              {t('title')} <em className="text-[#F4E932] not-italic">{t('title_em')}</em>
            </h2>
            <div className="w-12 h-0.5 bg-[#F4E932] mb-8" />
            <div className="flex flex-col gap-5">
              {[
                { label:'WhatsApp', value: t('whatsapp') },
                { label:'Email', value: t('email') },
                { label:'Ubicación', value: t('location') },
                { label:'Instagram', value: t('instagram') },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[0.62rem] tracking-[0.18em] uppercase text-[rgba(240,237,230,0.4)] font-medium mb-0.5">{label}</p>
                  <p className="font-serif text-[1.25rem] text-[#F5F0E8]">{value}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-8">
              {[['Instagram','https://instagram.com/ivanaleruizh'],['TikTok','https://tiktok.com/@ivanaleruizh'],['Zanatte','https://zanatte.com.co']].map(([s,href]) => (
                <a key={s} href={href} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-[rgba(240,237,230,0.2)] text-[0.65rem] tracking-wider uppercase text-[#F5F0E8] hover:bg-[rgba(240,237,230,0.1)] transition-colors font-medium">{s}</a>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {[{key:'name',placeholder:t('form.name'),type:'text'},{key:'email',placeholder:t('form.email'),type:'email'},{key:'phone',placeholder:t('form.phone'),type:'tel'}].map(({key,placeholder,type}) => (
              <input key={key} type={type} placeholder={placeholder} required={key!=='phone'} value={form[key as keyof typeof form]} onChange={(e) => setForm({...form,[key]:e.target.value})}
                className="bg-[rgba(0,0,0,0.25)] border border-[rgba(245,240,232,0.15)] text-[#F5F0E8] placeholder-[rgba(245,240,232,0.25)] px-5 py-3.5 text-[0.84rem] font-light outline-none focus:border-[rgba(245,240,232,0.35)] transition-colors w-full" />
            ))}
            <select value={form.type} onChange={(e) => setForm({...form,type:e.target.value})}
              className="bg-[rgba(0,0,0,0.35)] border border-[rgba(245,240,232,0.15)] text-[#F5F0E8] px-5 py-3.5 text-[0.84rem] font-light outline-none focus:border-[rgba(245,240,232,0.35)] transition-colors w-full appearance-none cursor-pointer">
              <option value="" style={{background:'#085A2C'}}>{t('form.type')}</option>
              {options.map((opt) => <option key={opt} value={opt} style={{background:'#085A2C'}}>{opt}</option>)}
            </select>
            <textarea placeholder={t('form.message')} rows={4} value={form.message} onChange={(e) => setForm({...form,message:e.target.value})}
              className="bg-[rgba(0,0,0,0.25)] border border-[rgba(245,240,232,0.15)] text-[#F5F0E8] placeholder-[rgba(245,240,232,0.25)] px-5 py-3.5 text-[0.84rem] font-light outline-none focus:border-[rgba(245,240,232,0.35)] transition-colors w-full resize-y min-h-[110px]" />
            <button type="submit" disabled={status==='sending'||status==='sent'}
              className="self-start inline-flex items-center gap-2 bg-[#F4E932] text-[#085A2C] px-7 py-3 text-[0.74rem] tracking-widest uppercase font-bold hover:opacity-90 transition-opacity disabled:opacity-60">
              {status==='sending'?'Enviando...':status==='sent'?'¡Enviado!':t('form.submit')}
              {status==='idle'&&<Send size={13}/>}
            </button>
            {status==='error'&&<p className="text-[0.75rem] text-red-300">Hubo un error. Escríbenos directamente al WhatsApp.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
