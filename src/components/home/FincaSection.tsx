import Image from 'next/image'
import { MapPin } from 'lucide-react'

export function FincaSection() {
  return (
    <section id="finca" className="py-32 bg-[#f7f5f0]">
      <div className="container-premium">

        {/* Header editorial */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-5">Nuestra historia</p>
          <div className="w-8 h-px bg-gray-900" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image — full bleed editorial */}
          <div className="relative">
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/images/finca/casita-finca.webp"
                alt="Finca de Arandanos - Castelli Buenos Aires"
                fill
                className="object-cover"
                sizes="50vw"
                quality={95}
              />
            </div>
            {/* Caption style tag */}
            <p className="mt-3 text-xs text-gray-400 tracking-widest uppercase">
              Castelli, Buenos Aires — Argentina
            </p>
          </div>

          {/* Text — editorial */}
          <div>
            <h2
              className="text-gray-900 mb-10 leading-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
              }}
            >
              Empresa familiar.<br />
              <em style={{ fontStyle: 'italic' }}>Hecho con amor.</em>
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-5 font-light">
              Somos una empresa familiar que trabaja para entregarle a nuestros clientes productos de primera calidad a un precio justo.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-12 font-light">
              Producimos arándanos, frambuesas, moras, frutas de estación, verduras y hortalizas, jugos, miel, huevos y mermeladas, entre otros. Nuestros productos son saludables y libres de químicos. Cosechamos en cada estación obteniendo sabores frescos y nutritivos.
            </p>

            {/* Google Maps CTA */}
            <a
              href="https://share.google/b7Ecy0oj4QUrVRztP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase font-light text-gray-900 border-b border-gray-300 pb-1 hover:border-gray-900 transition-colors duration-200"
            >
              <MapPin className="w-3.5 h-3.5" />
              Ver en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
