'use client'

import { ShieldCheck, Leaf, Truck, ChefHat, Recycle, MapPin } from 'lucide-react'

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: '100% Natural',
    description: 'Sin conservantes, sin colorantes, sin aditivos de ningún tipo. Prometido.',
    color: 'text-leaf-600',
    bg: 'bg-leaf-50',
  },
  {
    icon: Leaf,
    title: 'Cultivo responsable',
    description: 'Producción agrícola sostenible. Respetamos la naturaleza en cada paso.',
    color: 'text-blueberry-600',
    bg: 'bg-blueberry-50',
  },
  {
    icon: Truck,
    title: 'Envío fresco',
    description: 'Enviamos cada 10 días a puntos de entrega en CABA. Pedido mínimo $40.000.',
    color: 'text-earth-600',
    bg: 'bg-earth-50',
  },
  {
    icon: ChefHat,
    title: 'Elaboración artesanal',
    description: 'Cocemos a fuego lento para preservar el sabor auténtico de cada fruta.',
    color: 'text-leaf-700',
    bg: 'bg-leaf-50',
  },
  {
    icon: Recycle,
    title: 'GMO Free',
    description: 'Libres de organismos genéticamente modificados. Sin gluten en muchas líneas.',
    color: 'text-blueberry-500',
    bg: 'bg-blueberry-50',
  },
  {
    icon: MapPin,
    title: 'Producción local',
    description: 'De nuestra finca argentina directamente a tu mesa. Sin intermediarios.',
    color: 'text-earth-700',
    bg: 'bg-earth-50',
  },
]

export function BenefitsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-premium">
        <div className="text-center mb-16">
          <span className="inline-block text-leaf-600 text-sm font-medium tracking-widest uppercase mb-4">
            Por qué elegirnos
          </span>
          <h2 className="heading-lg text-gray-900 mb-4">
            Naturales de verdad,<br />
            <em className="text-blueberry-600">no de marketing</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div key={benefit.title} className="group text-center p-6 rounded-3xl hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className={`w-14 h-14 ${benefit.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${benefit.color}`} />
                </div>
                <h3 className="font-display text-lg font-medium text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
