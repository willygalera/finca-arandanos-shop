'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { Category } from '@/types'

const CATEGORY_ICONS: Record<string, string> = {
  jam: '🫙',
  juice: '🍶',
  organic: '🥫',
  gift: '🎁',
  basket: '🧺',
  seasonal: '🌸',
}

interface Props { categories: Category[] }

export function CategoriesSection({ categories }: Props) {
  return (
    <section className="section-padding bg-cream">
      <div className="container-premium">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-leaf-600 text-sm font-medium tracking-widest uppercase mb-4">
            Nuestra colección
          </span>
          <h2 className="heading-lg text-gray-900 mb-4">
            Todo lo que la finca<br />
            <em className="text-blueberry-600">tiene para ofrecerte</em>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Cada producto elaborado artesanalmente con fruta fresca de nuestra propia finca. 
            Sin intermediarios.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((category, i) => (
            <Link
              key={category.id}
              href={`/shop?category=${category.id}`}
              className="group relative overflow-hidden rounded-3xl aspect-[3/4] bg-gray-100"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-blueberry-900/0 group-hover:bg-blueberry-900/20 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-2xl mb-2 block">{CATEGORY_ICONS[category.id] || '🌿'}</span>
                    <h3 className="text-white font-display text-xl font-medium mb-1">
                      {category.name}
                    </h3>
                    <p className="text-white/60 text-xs">
                      {category.productCount} productos
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Featured badge */}
              {i === 0 && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-blueberry-600 text-white text-xs font-medium rounded-full">
                  Más vendido
                </div>
              )}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 border border-blueberry-200 text-blueberry-700 font-medium rounded-full hover:bg-blueberry-50 transition-all duration-300 hover:-translate-y-0.5"
          >
            Ver todos los productos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
