import Stripe from 'stripe'
import { loadStripe } from '@stripe/stripe-js'
import type { CartItem } from '@/types'

// ── Server-side Stripe ─────────────────────────────────────────
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
  typescript: true,
})

// ── Client-side Stripe ─────────────────────────────────────────
let stripePromise: ReturnType<typeof loadStripe>
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
  }
  return stripePromise
}

// ── Create Payment Intent ──────────────────────────────────────
export async function createPaymentIntent(
  amount: number,
  currency: string = 'eur',
  metadata?: Record<string, string>
) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amount * 100), // Convert to cents
    currency,
    automatic_payment_methods: { enabled: true },
    metadata,
  })

  return paymentIntent
}

// ── Create Checkout Session ────────────────────────────────────
export async function createCheckoutSession(
  items: CartItem[],
  successUrl: string,
  cancelUrl: string,
  customerEmail?: string
) {
  const lineItems = items.map((item) => ({
    price_data: {
      currency: 'eur',
      product_data: {
        name: item.product.name,
        images: [item.product.images[0]?.url].filter(Boolean),
        description: item.product.shortDescription,
        metadata: { productId: item.product.id },
      },
      unit_amount: Math.round(item.product.price * 100),
    },
    quantity: item.quantity,
  }))

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: successUrl,
    cancel_url: cancelUrl,
    customer_email: customerEmail,
    shipping_address_collection: {
      allowed_countries: ['ES', 'FR', 'IT', 'PT', 'DE', 'US', 'GB'],
    },
    metadata: { source: 'finca-arandanos-web' },
  })

  return session
}

// ── Format Price ──────────────────────────────────────────────
export function formatPrice(
  amount: number,
  currency: string = 'EUR',
  locale: string = 'es-ES'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(amount)
}

// ── Calculate Discount ────────────────────────────────────────
export function calculateDiscount(
  price: number,
  compareAtPrice?: number
): number {
  if (!compareAtPrice || compareAtPrice <= price) return 0
  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
}
