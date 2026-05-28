import { Instagram, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <>
      <div className="h-20 bg-white" />
      <footer className="bg-[#0f0d2a] text-white py-16">
        <div className="container-premium">
          <div className="grid md:grid-cols-3 gap-12 mb-12">

            {/* Brand */}
            <div>
              <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-1">Finca de</p>
              <p
                className="text-white text-2xl font-light mb-1"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.01em', fontStyle: 'italic' }}
              >
                Arándanos
              </p>
              <p className="text-white/30 text-xs tracking-widest uppercase mb-5">Hecho con amor · Castelli</p>
              <p className="text-white/40 text-xs leading-relaxed max-w-xs font-light">
                Empresa familiar. Productos naturales, libres de químicos. Buenos Aires, Argentina.
              </p>
            </div>

            {/* Navegacion */}
            <div>
              <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-6">Navegación</p>
              <div className="space-y-3">
                {[
                  { href: '#finca', label: 'La Finca' },
                  { href: '#productos', label: 'Productos' },
                  { href: 'https://www.instagram.com/fincadearandanos', label: 'Instagram', external: true },
                  { href: 'https://share.google/b7Ecy0oj4QUrVRztP', label: 'Cómo llegar', external: true },
                  { href: 'https://www.tripadvisor.ie/Attraction_Review-g2056254-d19382931-Reviews-Finca_de_Arandanos-Castelli_Province_of_Buenos_Aires_Central_Argentina.html', label: 'TripAdvisor', external: true },
                ].map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="block text-white/50 hover:text-white text-xs tracking-wide font-light transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contacto */}
            <div>
              <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-6">Contacto</p>
              <div className="space-y-4">
                <a
                  href="https://wa.me/541155839131"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-white text-xs font-light transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-green-400 flex-shrink-0" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  +54 11 5583-9131
                </a>
                <a
                  href="https://www.instagram.com/fincadearandanos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-white text-xs font-light transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                  @fincadearandanos
                </a>
                <a
                  href="https://share.google/b7Ecy0oj4QUrVRztP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-white text-xs font-light transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                  Castelli, Buenos Aires
                </a>
              </div>
            </div>
          </div>

          {/* Bottom — solo copyright */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-white/20 text-xs font-light">
              © {new Date().getFullYear()} Finca de Arándanos. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
