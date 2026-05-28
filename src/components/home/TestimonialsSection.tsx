import { Star, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    id: 1,
    name: 'María Fernanda G.',
    location: 'Palermo, CABA',
    rating: 5,
    text: 'La mermelada de arándano es increíble. Se nota que es casera, con trozos de fruta de verdad. Ya llevo 3 pedidos y siempre perfecta. Mi desayuno favorito ahora.',
    product: 'Mermelada de Arándano',
    avatar: 'MF',
    color: 'bg-blueberry-100 text-blueberry-700',
  },
  {
    id: 2,
    name: 'Roberto Sánchez',
    location: 'Belgrano, CABA',
    rating: 5,
    text: 'Excelente calidad. Los jugos son deliciosos y se nota que son naturales, no tienen ese sabor artificial. El jugo de frambuesa es mi favorito. Super recomendable.',
    product: 'Jugo de Frambuesa',
    avatar: 'RS',
    color: 'bg-earth-100 text-earth-700',
  },
  {
    id: 3,
    name: 'Claudia Moreno',
    location: 'Recoleta, CABA',
    rating: 5,
    text: 'Compré la cesta gourmet para regalar y quedaron encantados. La presentación es hermosa y los productos de primera calidad. Volví a comprar para mí también.',
    product: 'Cesta Gourmet',
    avatar: 'CM',
    color: 'bg-leaf-100 text-leaf-700',
  },
  {
    id: 4,
    name: 'Alejandro Torres',
    location: 'Villa Urquiza, CABA',
    rating: 5,
    text: 'El chutney de arándano con queso brie es una combinación increíble. También el pesto, muy sabroso y fresco. Son productos que claramente hacen con amor.',
    product: 'Chutney de Arándano',
    avatar: 'AT',
    color: 'bg-blueberry-100 text-blueberry-700',
  },
  {
    id: 5,
    name: 'Laura Vizcaíno',
    location: 'San Telmo, CABA',
    rating: 5,
    text: 'La línea sin azúcar es perfecta para mi diabetes. Finalmente una mermelada rica y natural sin azúcar añadida. El sabor es auténtico. Muchas gracias Finca de Arándanos.',
    product: 'Mermelada Sin Azúcar',
    avatar: 'LV',
    color: 'bg-leaf-100 text-leaf-700',
  },
  {
    id: 6,
    name: 'Martín Eguía',
    location: 'Caballito, CABA',
    rating: 5,
    text: 'Pedido rápido, muy bien coordinado por WhatsApp. Llegó todo en perfecto estado. Las mermeladas de frutos rojos y zarzamora son las mejores que probé.',
    product: 'Pack Mermeladas',
    avatar: 'ME',
    color: 'bg-earth-100 text-earth-700',
  },
]

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-premium">
        <div className="text-center mb-16">
          <span className="inline-block text-leaf-600 text-sm font-medium tracking-widest uppercase mb-4">
            Lo que dicen nuestros clientes
          </span>
          <h2 className="heading-lg text-gray-900 mb-4">
            +500 familias ya<br />
            <em className="text-blueberry-600">disfrutan nuestra finca</em>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-600 font-medium">4.9/5 · Calificación promedio</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-3xl border border-gray-100 hover:border-blueberry-200 hover:shadow-card transition-all duration-300 hover:-translate-y-1 relative"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-blueberry-100" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-700 text-sm leading-relaxed mb-5 relative z-10">
                "{t.text}"
              </p>

              {/* Product tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blueberry-50 text-blueberry-600 rounded-full text-xs font-medium mb-4">
                🫙 {t.product}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-sm font-semibold`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
