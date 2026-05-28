'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const MERMELADAS = [
  { nombre: 'Arándano', precio: '$7.500', unidad: '360 cc', img: '/images/products/mermelada-arandano.jpg' },
  { nombre: 'Arándano Sin Azúcar', precio: '$7.500', unidad: '360 cc', img: '/images/products/mermelada-sin-azucar.jpg' },
  { nombre: 'Arándano con Frambuesa', precio: '$7.500', unidad: '360 cc', img: '/images/products/mermelada-frambuesa.jpg' },
  { nombre: 'Arándano con Frutilla', precio: '$7.500', unidad: '360 cc', img: '/images/products/mermelada-arandano.jpg' },
  { nombre: 'Arándano con Zarzamora', precio: '$7.500', unidad: '360 cc', img: '/images/products/mermelada-zarzamora.jpg' },
  { nombre: 'Ciruela', precio: '$7.500', unidad: '360 cc', img: '/images/products/mermelada-ciruela.jpg' },
  { nombre: 'Frutos Rojos', precio: '$7.500', unidad: '360 cc', img: '/images/products/mermelada-frambuesa.jpg' },
  { nombre: 'Limón', precio: '$7.500', unidad: '360 cc', img: '/images/products/mermelada-limon.jpg' },
  { nombre: 'Naranja', precio: '$7.500', unidad: '360 cc', img: '/images/products/mermelada-limon.jpg' },
  { nombre: 'Durazno', precio: '$7.500', unidad: '360 cc', img: '/images/products/mermelada-arandano.jpg' },
  { nombre: 'Higo', precio: '$7.500', unidad: '360 cc', img: '/images/products/mermelada-zarzamora.jpg' },
  { nombre: 'Zarzamora', precio: '$7.500', unidad: '360 cc', img: '/images/products/mermelada-zarzamora.jpg' },
  { nombre: 'Frambuesa', precio: '$8.000', unidad: '360 cc', img: '/images/products/mermelada-frambuesa.jpg' },
]

const JUGOS = [
  { nombre: 'Jugo de Arándano', precio: '$3.000', unidad: '500 ml', img: '/images/products/jugo-arandano.jpg' },
  { nombre: 'Jugo de Arándano Sin Azúcar', precio: '$3.000', unidad: '500 ml', img: '/images/products/jugo-arandano.jpg' },
  { nombre: 'Jugo de Frambuesa', precio: '$3.500', unidad: '500 ml', img: '/images/products/jugo-frambuesa.jpg' },
  { nombre: 'Jugo de Frutos Rojos', precio: '$3.000', unidad: '500 ml', img: '/images/products/jugo-frutos-rojos.jpg' },
  { nombre: 'Jugo de Durazno', precio: '$3.000', unidad: '500 ml', img: '/images/products/jugo-frambuesa.jpg' },
  { nombre: 'Jugo de Ciruela', precio: '$3.000', unidad: '500 ml', img: '/images/products/jugo-arandano.jpg' },
]

type Tab = 'mermeladas' | 'jugos'

function ProductCard({ nombre, precio, unidad, img }: { nombre: string, precio: string, unidad: string, img: string }) {
  return (
    <div className="group flex flex-col">
      <div className="relative overflow-hidden bg-[#f5f4f0]" style={{ aspectRatio: '3/4' }}>
        <Image
          src={img}
          alt={nombre}
          fill
          className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
          quality={90}
        />
      </div>
      <div className="pt-4 pb-6 border-b border-gray-100">
        <h3 className="text-gray-900 text-sm tracking-wide mb-1">{nombre}</h3>
        <p className="text-gray-400 text-xs mb-2">{unidad}</p>
        <span className="text-gray-900 text-sm font-light">{precio}</span>
      </div>
    </div>
  )
}

export function CatalogoSection() {
  const [activeTab, setActiveTab] = useState<Tab>('mermeladas')

  return (
    <section id="productos" className="py-32 bg-white">
      <div className="container-premium">

        {/* Header — título izquierda, descripción derecha */}
        <div className="grid md:grid-cols-3 gap-12 mb-20 items-end">
          <div className="md:col-span-2">
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-5">Catálogo 2026</p>
            <h2
              className="text-gray-900 leading-none"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 6vw, 6rem)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
              }}
            >
              Productos
            </h2>
          </div>
          <div className="pb-2">
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Elaborados artesanalmente con fruta fresca de estación. Sin conservantes, sin colorantes, sin aditivos de ningún tipo.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 mb-16 border-b border-gray-100">
          {([['mermeladas', 'Mermeladas', '13'], ['jugos', 'Jugos', '6']] as const).map(([id, label, count]) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={cn(
                'pb-4 text-sm tracking-widest uppercase font-light transition-all duration-200 border-b-2 -mb-px',
                activeTab === id
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              )}
            >
              {label} <span className="text-xs ml-1 opacity-50">({count})</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {(activeTab === 'mermeladas' ? MERMELADAS : JUGOS).map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>

        {/* CTA — sin espacio extra */}
        <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-gray-900 text-sm tracking-wide mb-1">Pedido mínimo $40.000</p>
            <p className="text-gray-400 text-xs font-light">Envíos a CABA cada 10 días · Transferencia · MercadoPago</p>
          </div>
          <a
            href="https://wa.me/541155839131?text=Hola!%20Quiero%20hacer%20un%20pedido%20de%20Finca%20de%20Arandanos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-3.5 bg-[#1e1b4b] text-white text-xs tracking-widest uppercase font-light rounded-full hover:bg-[#2d2a6b] transition-all duration-300"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Hacer pedido
          </a>
        </div>
      </div>
    </section>
  )
}
