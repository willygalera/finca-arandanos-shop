'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import { formatARS } from '@/lib/utils'
import { cn } from '@/lib/utils'

export function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getSubtotal, getTotal } = useCartStore()
  const subtotal = getSubtotal()
  const total = getTotal()
  const shipping = total - subtotal
  const freeShippingThreshold = 40000
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal)

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const whatsappOrder = () => {
    const itemsText = items
      .map(i => `• ${i.product.name} (${i.product.unit}) x${i.quantity} = ${formatARS(i.product.price * i.quantity)}`)
      .join('\n')
    const msg = encodeURIComponent(
      `¡Hola! Quiero hacer el siguiente pedido 🫐\n\n${itemsText}\n\nTotal: ${formatARS(total)}\n\n¿Está disponible?`
    )
    window.open(`https://wa.me/541155839131?text=${msg}`, '_blank')
  }

  if (!isOpen && items.length === 0) return null

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div
        className={cn(
          'fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-2xl transition-transform duration-400',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        role="dialog"
        aria-label="Carrito de compras"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-blueberry-600" />
            <h2 className="font-display text-xl font-medium text-gray-900">Tu carrito</h2>
            {items.length > 0 && (
              <span className="w-6 h-6 flex items-center justify-center bg-blueberry-600 text-white text-xs font-medium rounded-full">
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free shipping progress */}
        {remainingForFreeShipping > 0 && items.length > 0 && (
          <div className="px-5 py-3 bg-blueberry-50 border-b border-blueberry-100">
            <div className="flex justify-between text-xs mb-2">
              <span className="text-blueberry-700 font-medium">
                Te faltan {formatARS(remainingForFreeShipping)} para el pedido mínimo
              </span>
              <span className="text-blueberry-500">{formatARS(freeShippingThreshold)}</span>
            </div>
            <div className="h-1.5 bg-blueberry-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-blueberry-600 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
              />
            </div>
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 px-8 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">🫙</span>
              </div>
              <div>
                <h3 className="font-display text-xl text-gray-900 mb-2">Tu carrito está vacío</h3>
                <p className="text-gray-500 text-sm">
                  Explorá nuestra tienda y encontrá los productos que más te gusten.
                </p>
              </div>
              <Link
                href="/shop"
                onClick={closeCart}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blueberry-600 text-white text-sm font-medium rounded-full hover:bg-blueberry-700 transition-colors"
              >
                Ver tienda
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-gray-100 px-5">
              {items.map((item) => (
                <li key={item.product.id} className="py-4 flex gap-4">
                  {/* Image */}
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                    <Image
                      src={item.product.images[0]?.url}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/shop/${item.product.slug}`}
                      onClick={closeCart}
                      className="text-sm font-medium text-gray-900 hover:text-blueberry-700 transition-colors line-clamp-2"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-xs text-gray-400 mt-0.5">{item.product.unit}</p>
                    
                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center gap-1 border border-gray-200 rounded-full px-2 py-1">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          disabled={item.quantity >= item.product.stock}
                          className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors disabled:opacity-40"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price + Remove */}
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-blueberry-700 text-sm">
                          {formatARS(item.product.price * item.quantity)}
                        </span>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                          aria-label="Eliminar producto"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer - only if has items */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 p-5 space-y-4">
            {/* Totals */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>{formatARS(subtotal)}</span>
              </div>
              {shipping > 0 ? (
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Envío (estimado)</span>
                  <span>{formatARS(shipping)}</span>
                </div>
              ) : (
                <div className="flex justify-between text-sm text-leaf-600">
                  <span>🎉 Pedido mínimo alcanzado</span>
                  <span>—</span>
                </div>
              )}
              <div className="flex justify-between text-base font-medium text-gray-900 pt-2 border-t border-gray-100">
                <span>Total estimado</span>
                <span className="text-blueberry-700">{formatARS(total)}</span>
              </div>
            </div>

            {/* CTA - WhatsApp order */}
            <button
              onClick={whatsappOrder}
              className="w-full flex items-center justify-center gap-3 py-4 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Confirmar pedido por WhatsApp
            </button>

            <p className="text-center text-xs text-gray-400">
              El pedido se confirma por WhatsApp al +54 11 5583-9131
            </p>
          </div>
        )}
      </div>
    </>
  )
}
