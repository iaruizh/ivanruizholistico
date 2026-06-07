'use client'
import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#sobre', label: t('sobre') },
    { href: '#zanatte', label: t('zanatte') },
    { href: '#ruah', label: t('ruah') },
    { href: '#ecosistema', label: t('vision') },
    { href: '#contacto', label: t('contacto') },
  ]

  const switchLocale = () => {
    if (locale === 'es') {
      router.push('/en')
    } else {
      router.push('/')
    }
  }

  const altLocale = locale === 'es' ? 'EN' : 'ES'

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#F5F0E8]/95 backdrop-blur-xl border-b border-[#0E9A4C]/15 py-3 shadow-sm'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href={locale === 'en' ? '/en' : '/'} className="flex items-center gap-1">
          <span className="font-serif text-[1.8rem] leading-none text-[#0E9A4C]">
            <span className="text-[#F4E932]" style={{textShadow:'0 0 0 #c8b800', WebkitTextStroke:'0.5px #c8b800'}}>·</span> Iván Alejandro Ruiz
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            
              key={link.href}
              href={link.href}
              className="text-[0.72rem] tracking-widest uppercase text-[#7A7060] hover:text-[#0E9A4C] transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={switchLocale}
            className="text-[0.68rem] tracking-widest uppercase border border-[#0E9A4C]/30 px-3 py-1.5 text-[#0E9A4C] hover:bg-[#0E9A4C]/10 transition-colors cursor-pointer"
          >
            {altLocale}
          </button>
        </nav>
        <button
          className="md:hidden text-[#1A1F1A]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-[#F5F0E8]/98 border-t border-[#0E9A4C]/15 px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[0.8rem] tracking-widest uppercase text-[#7A7060] hover:text-[#0E9A4C] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={switchLocale}
            className="text-[0.72rem] tracking-widest uppercase text-[#0E9A4C] mt-2 text-left"
          >
            {altLocale} version
          </button>
        </div>
      )}
    </header>
  )
}
