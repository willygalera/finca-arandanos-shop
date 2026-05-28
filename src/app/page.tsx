import { HeroSection } from '@/components/home/HeroSection'
import { FincaSection } from '@/components/home/FincaSection'
import { CatalogoSection } from '@/components/home/CatalogoSection'
import { InstagramSection } from '@/components/home/InstagramSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Finca de Arandanos — Hecho con amor, Castelli Bs.As.',
  description: 'Mermeladas artesanales, jugos naturales y conservas elaboradas con fruta fresca de nuestra propia finca. Sin conservantes, sin colorantes, sin aditivos. Castelli, Buenos Aires.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FincaSection />
      <CatalogoSection />
      <InstagramSection />
    </>
  )
}
