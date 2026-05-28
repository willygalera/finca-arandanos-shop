export function MarqueeBar() {
  const items = [
    '🫐 Sin conservantes',
    '🌿 Sin colorantes',
    '✨ Sin aditivos',
    '🏡 Finca propia',
    '🤝 Directo del productor',
    '🌱 Cultivo natural',
    '🧑‍🍳 Elaboración artesanal',
    '🎁 Envíos a CABA cada 10 días',
    '⭐ GMO Free',
    '🫙 Fruta entera en cada frasco',
  ]

  return (
    <div className="bg-blueberry-700 py-3 overflow-hidden relative">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-blueberry-700 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-blueberry-700 to-transparent z-10" />
      
      <div className="marquee-wrapper">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-8 px-6 whitespace-nowrap">
            <span className="text-white/90 text-sm font-medium tracking-wide">{item}</span>
            <span className="text-white/30 text-lg">·</span>
          </div>
        ))}
      </div>
    </div>
  )
}
