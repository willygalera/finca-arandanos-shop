import { ArrowRight } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    title: 'Enviá tu pedido por WhatsApp',
    description: 'Escribinos al +54 11 5583-9131. El monto mínimo es de $40.000. Te ayudamos a armar tu pedido.',
    emoji: '📱',
  },
  {
    number: '02',
    title: 'Confirmación del pedido',
    description: 'Esperá a que te confirmemos disponibilidad y fecha de entrega por WhatsApp. Los pedidos viajan cada 10 días.',
    emoji: '✅',
  },
  {
    number: '03',
    title: 'Realizá el pago',
    description: 'Transferencia bancaria, depósito o MercadoPago. Todos los precios incluyen impuestos.',
    emoji: '💳',
  },
  {
    number: '04',
    title: 'Retirá en tu punto de entrega',
    description: 'Retirá en tu punto de entrega ya establecido en CABA. ¡Y disfrutá de todos nuestros productos!',
    emoji: '🧺',
  },
]

export function HowToOrderSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-leaf-600 text-sm font-medium tracking-widest uppercase mb-4">
              ¿Cómo comprar?
            </span>
            <h2 className="heading-lg text-gray-900 mb-4">
              Hacer tu pedido<br />
              <em className="text-blueberry-600">es muy fácil</em>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Trabajamos de forma directa con nuestros clientes a través de WhatsApp. 
              Sin complicaciones, sin intermediarios.
            </p>

            <a
              href={`https://wa.me/541155839131?text=${encodeURIComponent('¡Hola! Quiero hacer un pedido de Finca de Arándanos 🫐')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Iniciar pedido: +54 11 5583-9131
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-blueberry-200 hover:shadow-card transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blueberry-600 text-white rounded-2xl flex items-center justify-center font-display text-lg font-light">
                  {step.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{step.emoji}</span>
                    <h3 className="font-medium text-gray-900 text-sm">{step.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
