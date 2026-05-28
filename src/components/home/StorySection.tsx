import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf, Sun, Droplets } from 'lucide-react'

export function StorySection() {
  return (
    <section className="section-padding bg-blueberry-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-blueberry-800 opacity-50" />

      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
                  <Image
                    src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&q=80"
                    alt="Cultivos de arandanos"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative rounded-3xl overflow-hidden aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?w=600&q=80"
                    alt="Produccion artesanal"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative rounded-3xl overflow-hidden aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1596591607883-84cb9b136d85?w=600&q=80"
                    alt="Arandanos frescos"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
                  <Image
                    src="https://images.unsplash.com/photo-1597528380946-1f3e6a27e8ab?w=600&q=80"
                    alt="Mermeladas artesanales"
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-2xl p-5 max-w-[180px]">
              <div className="font-display text-4xl font-light text-blueberry-700 mb-1">10+</div>
              <div className="text-gray-600 text-sm leading-tight">anos cultivando con pasion y cuidado</div>
            </div>
          </div>

          <div className="text-white">
            <span className="inline-block text-blueberry-300 text-sm font-medium tracking-widest uppercase mb-6">
              Nuestra historia
            </span>
            <h2 className="heading-lg text-white mb-6">
              Una finca familiar<br />
              <em className="text-blueberry-300 font-normal">con alma propia</em>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Todo comenzó con la pasión por cultivar fruta de calidad y el sueño de llevarla
              directamente a las mesas de las familias argentinas. Hoy somos una finca que
              produce arandanos, frambuesas, zarzamoras y mucho mas.
            </p>
            <p className="text-white/70 leading-relaxed mb-10">
              Cada mermelada, cada jugo y cada conserva que elaboramos lleva en su interior
              el trabajo honesto de quienes cuidan dia a dia de nuestros cultivos.
              Sin quimicos, sin conservantes, sin mentiras. Solo fruta real.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { icon: Leaf, label: 'Cultivo natural', desc: 'Sin agroquimicos' },
                { icon: Sun, label: 'Temporada real', desc: 'Fruta de estacion' },
                { icon: Droplets, label: 'Agua propia', desc: 'Riego sustentable' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="text-center">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-blueberry-300" />
                  </div>
                  <p className="text-white font-medium text-sm">{label}</p>
                  <p className="text-white/50 text-xs mt-0.5">{desc}</p>
                </div>
              ))}
            </div>
            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 group"
            >
              Conocer mas sobre la finca
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
