'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingBag, Star, Plus, Minus } from 'lucide-react'
import { useCartStore, useWishlistStore } from '@/store/cartStore'
import { formatARS, calculateDiscount, cn } from '@/lib/utils'
import type { Product } from '@/types'
import toast from 'react-hot-toast'

const TAG_CONFIG = {
  bestseller: { label: 'Más vendido', className: 'badge-bestseller' },
  new: { label: 'Nuevo', className: 'badge-new' },
  organic: { label: 'Natural', className: 'badge-organic' },
  sale: { label: 'Oferta', className: 'badge-sale' },
  seasonal: { label: 'Temporada', className: 'badge-new' },
  limited: { label: 'Edición limitada', className: 'badge-sale' },
}

interface Props {
  product: Product
  variant?: 'default' | 'compact' | 'featured'
}

export function ProductCard({ product, variant = 'default' }: Props) {
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const { addItem } = useCartStore()
  const { toggle, has } = useWishlistStore()
  const isWishlisted = has(product.id)
  const discount = calculateDiscount(product.price, product.compareAtPrice)
  const primaryTag = product.tags[0]

  const handleAddToCart = async () => {
    setIsAdding(true)
    addItem(product, quantity)
    toast.success(`${product.name} agregado al carrito`, {
      icon: '🫙',
    })
    setTimeout(() => setIsAdding(false), 600)
  }

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `¡Hola! Me interesa: *${product.name}* (${product.unit}) — $${product.price.toLocaleString('es-AR')}. ¿Está disponible?`
    )
    window.open(`https://wa.me/541155839131?text=${msg}`, '_blank')
  }

  return (
    <article className="card-product group flex flex-col">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-3xl aspect-square bg-gray-50">
        <Link href={`/shop/${product.slug}`}>
          <Image
            src={product.images[0]?.url}
            alt={product.images[0]?.alt || product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-108"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {primaryTag && TAG_CONFIG[primaryTag] && (
            <span className={TAG_CONFIG[primaryTag].className}>
              {TAG_CONFIG[primaryTag].label}
            </span>
          )}
          {discount > 0 && (
            <span className="badge badge-sale">−{discount}%</span>
          )}
          {product.stock <= 5 && product.stock > 0 && (
            <span className="badge bg-orange-100 text-orange-700">¡Últimas unidades!</span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={() => toggle(product.id)}
          className={cn(
            'absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-200',
            isWishlisted
              ? 'bg-red-500 text-white'
              : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
          )}
          aria-label={isWishlisted ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        >
          <Heart className={cn('w-4 h-4', isWishlisted && 'fill-current')} />
        </button>

        {/* Quick Add overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <div className="flex gap-2">
            {/* Quantity */}
            <div className="flex items-center gap-1 bg-white rounded-full px-2 py-1.5 shadow-sm">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-5 text-center text-sm font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              disabled={isAdding || product.stock === 0}
              className={cn(
                'flex-1 flex items-center justify-center gap-2 py-2 rounded-full text-white text-sm font-medium transition-all duration-200',
                isAdding ? 'bg-leaf-600 scale-95' : 'bg-blueberry-600 hover:bg-blueberry-700'
              )}
            >
              <ShoppingBag className="w-4 h-4" />
              {isAdding ? '¡Agregado!' : 'Al carrito'}
            </button>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        {/* Category */}
        <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1.5">
          {product.unit}
        </span>

        {/* Name */}
        <Link href={`/shop/${product.slug}`} className="group/link">
          <h3 className="font-display text-lg text-gray-900 group-hover/link:text-blueberry-700 transition-colors leading-tight mb-2">
            {product.name}
          </h3>
        </Link>

        {/* Short description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-3 flex-1 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
              <Star
                key={i}
                className={cn(
                  'w-3.5 h-3.5',
                  i <= Math.round(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-200 text-gray-200'
                )}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-gray-100">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-medium text-blueberry-700">
              {formatARS(product.price)}
            </span>
            {product.compareAtPrice && (
              <span className="text-sm text-gray-400 line-through">
                {formatARS(product.compareAtPrice)}
              </span>
            )}
          </div>
          
          {/* WhatsApp quick order */}
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-1.5 px-3 py-2 bg-green-50 text-green-700 text-xs font-medium rounded-full hover:bg-green-100 transition-colors"
            title="Pedir por WhatsApp"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pedir
          </button>
        </div>
      </div>
    </article>
  )
}
