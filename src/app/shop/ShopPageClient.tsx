'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { SlidersHorizontal, Grid3X3, Grid2X2, X } from 'lucide-react'
import { ProductCard } from '@/components/shop/ProductCard'
import type { Product, Category, ProductCategory } from '@/types'
import { cn } from '@/lib/utils'

interface Props {
  products: Product[]
  categories: Category[]
}

type SortOption = 'popular' | 'newest' | 'price_asc' | 'price_desc' | 'rating'

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'popular', label: 'Más populares' },
  { value: 'newest', label: 'Más nuevos' },
  { value: 'price_asc', label: 'Precio: menor a mayor' },
  { value: 'price_desc', label: 'Precio: mayor a menor' },
  { value: 'rating', label: 'Mejor valorados' },
]

const CATEGORY_LABELS: Record<string, string> = {
  jam: 'Mermeladas',
  juice: 'Jugos',
  organic: 'Conservas',
  gift: 'Regalos',
  basket: 'Cestas',
  seasonal: 'Temporada',
  fresh: 'Frescos',
  frozen: 'Congelados',
  snacks: 'Snacks',
  tea: 'Tés',
  pack: 'Packs',
}

export function ShopPageClient({ products, categories }: Props) {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>(
    (searchParams.get('category') as ProductCategory) || 'all'
  )
  const [sortBy, setSortBy] = useState<SortOption>('popular')
  const [showFilters, setShowFilters] = useState(false)
  const [gridCols, setGridCols] = useState<3 | 4>(4)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000])
  const [onlyOrganic, setOnlyOrganic] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory)
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

    // Organic filter
    if (onlyOrganic) {
      result = result.filter(p => p.tags.includes('organic'))
    }

    // Sort
    switch (sortBy) {
      case 'price_asc': result.sort((a, b) => a.price - b.price); break
      case 'price_desc': result.sort((a, b) => b.price - a.price); break
      case 'rating': result.sort((a, b) => b.rating - a.rating); break
      case 'newest': result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()); break
      default: result.sort((a, b) => b.reviewCount - a.reviewCount)
    }

    return result
  }, [products, selectedCategory, sortBy, priceRange, onlyOrganic])

  const activeFiltersCount = [
    selectedCategory !== 'all',
    onlyOrganic,
    priceRange[0] > 0 || priceRange[1] < 50000,
  ].filter(Boolean).length

  const resetFilters = () => {
    setSelectedCategory('all')
    setOnlyOrganic(false)
    setPriceRange([0, 50000])
  }

  return (
    <div className="min-h-screen bg-warm-white pt-24">
      <div className="container-premium py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="heading-lg text-gray-900 mb-2">
            Nuestra <em className="text-blueberry-600">tienda</em>
          </h1>
          <p className="text-gray-500">
            {filteredProducts.length} productos · Directo desde la finca
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          <button
            onClick={() => setSelectedCategory('all')}
            className={cn(
              'flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200',
              selectedCategory === 'all'
                ? 'bg-blueberry-600 text-white shadow-sm'
                : 'bg-white border border-gray-200 text-gray-600 hover:border-blueberry-200 hover:text-blueberry-600'
            )}
          >
            Todos
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as ProductCategory)}
              className={cn(
                'flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200',
                selectedCategory === cat.id
                  ? 'bg-blueberry-600 text-white shadow-sm'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-blueberry-200 hover:text-blueberry-600'
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            {/* Filters toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={cn(
                'flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium border transition-all',
                showFilters
                  ? 'bg-blueberry-600 text-white border-blueberry-600'
                  : 'bg-white border-gray-200 text-gray-600 hover:border-blueberry-200'
              )}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filtros
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-white text-blueberry-700 text-xs font-bold rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Active filters */}
            {activeFiltersCount > 0 && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1.5 text-sm text-red-500 hover:text-red-700 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                Limpiar filtros
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as SortOption)}
              className="input-premium py-2.5 pr-8 pl-4 w-auto text-sm cursor-pointer"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>

            {/* Grid toggle */}
            <div className="hidden md:flex gap-1 bg-white border border-gray-200 rounded-xl p-1">
              <button
                onClick={() => setGridCols(4)}
                className={cn('p-1.5 rounded-lg transition-colors', gridCols === 4 ? 'bg-gray-100' : 'hover:bg-gray-50')}
              >
                <Grid3X3 className="w-4 h-4 text-gray-500" />
              </button>
              <button
                onClick={() => setGridCols(3)}
                className={cn('p-1.5 rounded-lg transition-colors', gridCols === 3 ? 'bg-gray-100' : 'hover:bg-gray-50')}
              >
                <Grid2X2 className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fade-down">
            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Precio máximo: <span className="text-blueberry-600">${priceRange[1].toLocaleString('es-AR')}</span>
              </label>
              <input
                type="range"
                min={0}
                max={50000}
                step={1000}
                value={priceRange[1]}
                onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full accent-blueberry-600"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>$0</span>
                <span>$50.000</span>
              </div>
            </div>

            {/* Tags */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Características</p>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={onlyOrganic}
                    onChange={e => setOnlyOrganic(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 rounded border-2 border-gray-300 peer-checked:bg-leaf-600 peer-checked:border-leaf-600 transition-all flex items-center justify-center">
                    {onlyOrganic && (
                      <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                  🌿 Solo productos naturales/orgánicos
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className={cn(
            'grid gap-5',
            gridCols === 4
              ? 'grid-cols-2 md:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-2 md:grid-cols-3'
          )}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🫙</div>
            <h3 className="font-display text-2xl text-gray-900 mb-2">No hay productos</h3>
            <p className="text-gray-500 mb-6">Probá cambiando los filtros de búsqueda</p>
            <button onClick={resetFilters} className="btn-primary">
              Ver todos los productos
            </button>
          </div>
        )}

        {/* WhatsApp CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-blueberry-700 to-blueberry-900 rounded-3xl text-white text-center">
          <h3 className="font-display text-2xl mb-3">¿No encontrás lo que buscás?</h3>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            Escribinos por WhatsApp y te ayudamos a encontrar el producto perfecto para vos.
          </p>
          <a
            href="https://wa.me/541155839131"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
