'use client'

import { useState } from 'react'
import { Mail, ArrowRight, Check } from 'lucide-react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    await new Promise(r => setTimeout(r, 1000)) // Simulated
    setStatus('success')
  }

  return (
    <section className="section-padding bg-blueberry-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }}
      />
      
      <div className="container-premium relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7 text-white" />
          </div>
          <h2 className="heading-lg text-white mb-4">
            Enteráte primero de<br />
            <em className="text-blueberry-200 font-normal">todo lo nuevo</em>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Recibí recetas, novedades de temporada, ofertas especiales y los 
            productos nuevos antes que nadie. Sin spam, prometido.
          </p>

          {status === 'success' ? (
            <div className="flex items-center justify-center gap-3 py-5 px-8 bg-white/10 rounded-2xl border border-white/20">
              <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-medium">¡Perfecto! Ya estás suscripto 🎉</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="flex-1 px-5 py-4 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-full backdrop-blur-sm focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blueberry-700 font-medium rounded-full hover:bg-blueberry-50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Suscribiendo...' : 'Suscribirme'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <p className="text-white/40 text-xs mt-4">
            Al suscribirte aceptás recibir emails de Finca de Arándanos. Podés darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  )
}
