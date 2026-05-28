import type { Metadata } from 'next'
import { ShopPageClient } from './ShopPageClient'
import { PRODUCTS, CATEGORIES } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Tienda — Mermeladas, Jugos y Conservas Artesanales',
  description: 'Comprá mermeladas artesanales, jugos naturales, conservas gourmet y packs regalo de Finca de Arándanos. Directamente desde nuestra finca a tu mesa.',
}

export default function ShopPage() {
  return <ShopPageClient products={PRODUCTS} categories={CATEGORIES} />
}
