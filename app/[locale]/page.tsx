import { HeroSection } from '@/components/sections/HeroSection'
import { StatsBar } from '@/components/sections/StatsBar'
import { ProblemasSection } from '@/components/sections/ProblemasSection'
import { TransformacionSection } from '@/components/sections/TransformacionSection'
import { RutaSection } from '@/components/sections/RutaSection'
import { SobreSection } from '@/components/sections/SobreSection'
import { FilosofiaSection } from '@/components/sections/FilosofiaSection'
import { ZanatteSection } from '@/components/sections/ZanatteSection'
import { RuahSection } from '@/components/sections/RuahSection'
import { MensajesSection } from '@/components/sections/MensajesSection'
import { EcosistemaSection } from '@/components/sections/EcosistemaSection'
import { TestimoniosSection } from '@/components/sections/TestimoniosSection'
import { ContactoSection } from '@/components/sections/ContactoSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ProblemasSection />
      <TransformacionSection />
      <RutaSection />
      <SobreSection />
      <FilosofiaSection />
      <ZanatteSection />
      <RuahSection />
      <MensajesSection />
      <EcosistemaSection />
      <TestimoniosSection />
      <ContactoSection />
    </>
  )
}
