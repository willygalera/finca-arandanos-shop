// ═══════════════════════════════════════════
// FINCA DE ARÁNDANOS - Type Definitions
// ═══════════════════════════════════════════

// ── PRODUCTS ──────────────────────────────────
export type ProductCategory =
  | 'fresh'
  | 'jam'
  | 'juice'
  | 'frozen'
  | 'snacks'
  | 'tea'
  | 'organic'
  | 'gift'
  | 'basket'
  | 'seasonal'
  | 'pack'

export type ProductTag =
  | 'bestseller'
  | 'new'
  | 'organic'
  | 'sale'
  | 'seasonal'
  | 'limited'

export interface Product {
  id: string
  slug: string
  name: string
  description: string
  shortDescription: string
  price: number
  compareAtPrice?: number
  images: ProductImage[]
  category: ProductCategory
  tags: ProductTag[]
  stock: number
  sku: string
  weight?: number
  unit?: string
  rating: number
  reviewCount: number
  isFeatured: boolean
  isActive: boolean
  createdAt: string
  updatedAt: string
  nutritionFacts?: NutritionFacts
  ingredients?: string[]
  origin?: string
  certifications?: string[]
}

export interface ProductImage {
  url: string
  alt: string
  isPrimary: boolean
  width?: number
  height?: number
}

export interface NutritionFacts {
  calories: number
  fat: number
  carbs: number
  protein: number
  fiber: number
  sugar: number
  vitamin_c?: number
  antioxidants?: string
}

// ── CART ──────────────────────────────────────
export interface CartItem {
  product: Product
  quantity: number
  selectedVariant?: string
}

export interface Cart {
  items: CartItem[]
  subtotal: number
  discount: number
  shipping: number
  total: number
  couponCode?: string
}

// ── ORDERS ────────────────────────────────────
export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded'

export interface Order {
  id: string
  orderNumber: string
  userId: string
  status: OrderStatus
  items: OrderItem[]
  shippingAddress: Address
  billingAddress: Address
  subtotal: number
  discount: number
  shipping: number
  tax: number
  total: number
  paymentMethod: string
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded'
  stripePaymentIntentId?: string
  notes?: string
  trackingNumber?: string
  createdAt: string
  updatedAt: string
}

export interface OrderItem {
  productId: string
  productName: string
  productImage: string
  quantity: number
  price: number
  total: number
}

// ── USERS ─────────────────────────────────────
export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  phone?: string
  role: 'customer' | 'admin'
  addresses: Address[]
  wishlist: string[]
  createdAt: string
}

export interface Address {
  id?: string
  name: string
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  phone?: string
  isDefault?: boolean
}

// ── REVIEWS ───────────────────────────────────
export interface Review {
  id: string
  productId: string
  userId: string
  userName: string
  userAvatar?: string
  rating: number
  title: string
  body: string
  isVerified: boolean
  helpful: number
  images?: string[]
  createdAt: string
}

// ── CATEGORIES ────────────────────────────────
export interface Category {
  id: ProductCategory
  name: string
  description: string
  image: string
  slug: string
  productCount: number
  featured: boolean
}

// ── INSTAGRAM ─────────────────────────────────
export interface InstagramPost {
  id: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url: string
  thumbnail_url?: string
  permalink: string
  caption?: string
  timestamp: string
  like_count?: number
}

// ── API RESPONSES ─────────────────────────────
export interface ApiResponse<T> {
  data: T | null
  error: string | null
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  hasMore: boolean
}

// ── FILTERS ───────────────────────────────────
export interface ProductFilters {
  category?: ProductCategory[]
  minPrice?: number
  maxPrice?: number
  tags?: ProductTag[]
  sortBy?: 'price_asc' | 'price_desc' | 'newest' | 'popular' | 'rating'
  inStock?: boolean
  search?: string
  page?: number
  pageSize?: number
}

// ── ADMIN ─────────────────────────────────────
export interface DashboardStats {
  totalRevenue: number
  totalOrders: number
  totalCustomers: number
  totalProducts: number
  revenueChange: number
  ordersChange: number
  customersChange: number
  recentOrders: Order[]
  topProducts: { product: Product; sales: number }[]
  monthlySales: { month: string; revenue: number; orders: number }[]
}

// ── CHECKOUT ──────────────────────────────────
export interface CheckoutSession {
  cartItems: CartItem[]
  shippingAddress: Address
  shippingMethod: ShippingMethod
  couponCode?: string
  paymentIntentId?: string
}

export interface ShippingMethod {
  id: string
  name: string
  description: string
  price: number
  estimatedDays: string
}

// ── NOTIFICATIONS ─────────────────────────────
export interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  duration?: number
}
