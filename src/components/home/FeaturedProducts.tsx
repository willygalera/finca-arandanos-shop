import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Product } from '@/types'
import { ProductCard } from '@/components/shop/ProductCard'

interface Props { products: Product[] }

export function FeaturedProducts({ products }: Props) {
  return (
    <section className="section-padding bg-warm-white">
      <div className="container-premium">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block text-leaf-600 text-sm font-medium tracking-widest uppercase mb-3">
              Productos destacados
            </span>
            <h2 className="heading-lg text-gray-900">
              Los favoritos de<br />
              <em className="text-blueberry-600">nuestra comunidad</em>
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-blueberry-600 font-medium hover:text-blueberry-800 transition-colors group"
          >
            Ver todos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Monto mínimo notice */}
        <div className="mt-10 p-5 bg-blueberry-50 rounded-2xl border border-blueberry-100 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blueberry-100 flex items-center justify-center flex-shrink-0">
            <span className="text-xl">🛒</span>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-blueberry-800 font-medium text-sm">
              Pedido mínimo: $40.000
            </p>
            <p className="text-blueberry-600 text-xs mt-0.5">
              Los envíos se realizan cada 10 días a puntos de entrega en CABA. 
              Coordina por WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/541155839131"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white text-sm font-medium rounded-full hover:bg-green-700 transition-colors"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
