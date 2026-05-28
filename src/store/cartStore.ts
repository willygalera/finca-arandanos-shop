'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { CartItem, Product } from '@/types'

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  
  // Actions
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  
  // Computed
  getItemCount: () => number
  getSubtotal: () => number
  getTotal: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product: Product, quantity = 1) => {
        set((state) => {
          const existing = state.items.find(i => i.product.id === product.id)
          if (existing) {
            return {
              items: state.items.map(i =>
                i.product.id === product.id
                  ? { ...i, quantity: Math.min(i.quantity + quantity, product.stock) }
                  : i
              ),
              isOpen: true,
            }
          }
          return {
            items: [...state.items, { product, quantity: Math.min(quantity, product.stock) }],
            isOpen: true,
          }
        })
      },

      removeItem: (productId: string) => {
        set((state) => ({
          items: state.items.filter(i => i.product.id !== productId),
        }))
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }
        set((state) => ({
          items: state.items.map(i =>
            i.product.id === productId
              ? { ...i, quantity: Math.min(quantity, i.product.stock) }
              : i
          ),
        }))
      },

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),

      getItemCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

      getSubtotal: () =>
        get().items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),

      getTotal: () => {
        const subtotal = get().getSubtotal()
        const shipping = subtotal >= 40000 ? 0 : 3500
        return subtotal + shipping
      },
    }),
    {
      name: 'finca-cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

// ── Wishlist Store ─────────────────────────────────────────────
interface WishlistStore {
  items: string[] // product IDs
  toggle: (productId: string) => void
  has: (productId: string) => boolean
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      toggle: (productId: string) => {
        set((state) => ({
          items: state.items.includes(productId)
            ? state.items.filter(id => id !== productId)
            : [...state.items, productId],
        }))
      },
      has: (productId: string) => get().items.includes(productId),
    }),
    { name: 'finca-wishlist', storage: createJSONStorage(() => localStorage) }
  )
)
