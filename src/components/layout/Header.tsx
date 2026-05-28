'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled ? 'bg-white border-b border-gray-100' : 'bg-transparent'
    )}>
      <div className="container-premium">
        <div className="flex items-center h-20">

          {/* Logo izquierda */}
          <a href="/" className="flex-shrink-0 mr-auto">
            <Image
              src="/images/logo-full.jpeg"
              alt="Finca de Arandanos - Hecho con Amor - Castelli Bs As"
              width={90}
              height={65}
              className="object-contain h-22 w-auto"
              priority
            />
          </a>

          {/* Nav centrado */}
          <nav className="hidden md:flex items-center gap-10 mx-auto">
            {[
              { href: '#finca', label: 'La Finca' },
              { href: '#productos', label: 'Productos' },
              { href: '#ubicacion', label: 'Ubicación' },
              { href: 'https://www.instagram.com/fincadearandanos', label: 'Instagram', external: true },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className={cn(
                  'text-sm tracking-widest uppercase font-light transition-colors duration-200',
                  isScrolled ? 'text-gray-500 hover:text-gray-900' : 'text-white/70 hover:text-white'
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Spacer derecha para centrar nav */}
          <div className="ml-auto hidden md:block w-[90px]" />

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={cn(
              'md:hidden ml-auto p-2',
              isScrolled ? 'text-gray-600' : 'text-white'
            )}
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        'md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300',
        isMobileOpen ? 'max-h-72' : 'max-h-0'
      )}>
        <nav className="container-premium py-4 flex flex-col gap-1">
          {[
            { href: '#finca', label: 'La Finca' },
            { href: '#productos', label: 'Productos' },
            { href: '#ubicacion', label: 'Ubicación' },
            { href: 'https://www.instagram.com/fincadearandanos', label: 'Instagram' },
          ].map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="px-4 py-3 text-gray-600 text-sm tracking-wide rounded-xl hover:bg-gray-50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/541155839131"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-3 bg-[#1e1b4b] text-white text-sm text-center rounded-xl"
          >
            Pedir por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
