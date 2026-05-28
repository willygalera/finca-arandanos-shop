export function InstagramSection() {
  return (
    <section id="instagram" className="py-24 bg-white">
      <div className="container-premium">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Instagram */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-5">Redes sociales</p>
            <h2
              className="text-gray-900 mb-6 leading-none"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
              }}
            >
              @fincadearandanos
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light max-w-sm">
              Seguinos en Instagram para ver el dia a dia de la finca, nuestros productos y las novedades de temporada.
            </p>
            <a
              href="https://www.instagram.com/fincadearandanos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase font-light text-gray-900 border-b border-gray-300 pb-1 hover:border-gray-900 transition-colors duration-200"
            >
              Seguir en Instagram
            </a>
          </div>

          {/* TripAdvisor */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-5">Opiniones</p>
            <h2
              className="text-gray-900 mb-6 leading-none"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
              }}
            >
              TripAdvisor
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light max-w-sm">
              Lee lo que dicen nuestros visitantes o deja tu comentario sobre tu experiencia en Finca de Arandanos.
            </p>
            <a
              href="https://www.tripadvisor.ie/Attraction_Review-g2056254-d19382931-Reviews-Finca_de_Arandanos-Castelli_Province_of_Buenos_Aires_Central_Argentina.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase font-light text-gray-900 border-b border-gray-300 pb-1 hover:border-gray-900 transition-colors duration-200"
            >
              Ver en TripAdvisor
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
