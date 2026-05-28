# 🫐 Finca de Arándanos — Tienda Premium

Plataforma de e-commerce premium para **Finca de Arándanos** (@fincadearandanos).

Mermeladas artesanales · Jugos naturales · Conservas gourmet · Packs regalo

---

## ⚡ Setup Rápido

```bash
# 1. Clonar / descomprimir el proyecto
cd finca-arandanos

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# → Editar .env.local con tus credenciales

# 4. Iniciar en desarrollo
npm run dev

# → Abrir http://localhost:3000
```

---

## 🛠 Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 14 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Base de datos | Supabase (PostgreSQL) |
| Auth | Supabase Auth |
| Pagos | Stripe |
| Estado global | Zustand |
| Animaciones | Framer Motion |
| Hosting | Vercel |
| Imágenes | Next/Image + Unsplash |

---

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx            # Página principal (Home)
│   ├── layout.tsx          # Layout raíz con SEO
│   ├── shop/               # Tienda
│   │   ├── page.tsx        # Listado de productos
│   │   ├── ShopPageClient.tsx  # Filtros y grid
│   │   └── [slug]/         # Detalle de producto
│   ├── admin/              # Panel administrador
│   └── api/                # API Routes
├── components/
│   ├── home/               # Secciones de la home
│   ├── layout/             # Header y Footer
│   ├── shop/               # ProductCard, CartSidebar
│   └── ui/                 # WhatsAppButton, etc.
├── lib/
│   ├── products.ts         # Datos reales de productos
│   ├── supabase.ts         # Cliente Supabase
│   ├── stripe.ts           # Configuración Stripe
│   └── utils.ts            # Helpers
├── store/
│   └── cartStore.ts        # Zustand (carrito + wishlist)
├── types/
│   └── index.ts            # TypeScript types
└── styles/
    └── globals.css         # CSS global con design tokens
```

---

## 🗃 Configurar Supabase

1. Crear proyecto en [supabase.com](https://supabase.com)
2. Ir a **SQL Editor**
3. Ejecutar `supabase-schema.sql` 
4. Copiar las credenciales a `.env.local`

---

## 💳 Configurar Stripe

1. Crear cuenta en [stripe.com](https://stripe.com)
2. Obtener las keys en Dashboard → Developers
3. Para webhooks en local: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`

---

## 🚀 Deploy en Vercel

```bash
# Con Vercel CLI
npm i -g vercel
vercel

# O conectar el repo en vercel.com
# → Import Project → Add env variables → Deploy
```

### Variables de entorno en Vercel:
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_APP_URL=https://tu-dominio.vercel.app
```

---

## 📦 Productos incluidos (datos reales del catálogo)

### Mermeladas (360cc)
| Producto | Precio |
|---------|--------|
| Arándano | $7.500 |
| Arándano Sin Azúcar | $7.500 |
| Arándano con Frambuesa | $7.500 |
| Arándano con Frutilla | $7.500 |
| Frambuesa | $8.000 |
| Frutos Rojos | $7.500 |
| Zarzamora | $7.500 |
| Durazno | $7.500 |
| Limón | $7.500 |
| Naranja | $7.500 |
| Higo | $7.500 |
| Ciruela | $7.500 |

### Jugos (500ml)
| Producto | Precio |
|---------|--------|
| Arándano | $3.000 |
| Arándano Sin Azúcar | $3.000 |
| Frambuesa | $3.500 |
| Frutos Rojos | $3.000 |
| Ciruela | $3.000 |

### Conservas
| Producto | Precio |
|---------|--------|
| Pesto 250cc | $10.000 |
| Chutney de Arándano 360cc | $6.000 |
| Chutney de Durazno 360cc | $6.000 |
| Miel 360cc | $5.500 |
| Aceitunas Rellenas 360cc | $7.000 |
| Berenjenas a La Italiana 360cc | $5.000 |

---

## 📱 Info de contacto (real)

- **WhatsApp pedidos:** +54 11 5583-9131
- **Instagram:** @fincadearandanos
- **Pedido mínimo:** $40.000
- **Envíos:** Cada 10 días a puntos en CABA
- **Pago:** Transferencia · Depósito · MercadoPago

---

## ✅ Funcionalidades incluidas

- [x] Hero section con parallax
- [x] Categorías con hover animations
- [x] Grilla de productos con filtros
- [x] Carrito lateral persistente (Zustand + localStorage)
- [x] Botón WhatsApp flotante con mensajes rápidos
- [x] Wishlist persistente
- [x] Sección "Cómo pedir" con los 5 pasos reales
- [x] Testimonios de clientes
- [x] Sección Instagram (@fincadearandanos)
- [x] Newsletter
- [x] Footer completo con contacto
- [x] SEO optimizado (metadata, OG, Twitter Cards)
- [x] Responsive mobile-first
- [x] Schema SQL para Supabase
- [x] Configuración Vercel lista para deploy
- [x] Variables de entorno documentadas

---

## 🔮 Próximos pasos

- [ ] Integración Supabase Auth (login/registro)
- [ ] Panel admin completo
- [ ] Integración Stripe payments
- [ ] Checkout con dirección de envío
- [ ] Sistema de órdenes
- [ ] Instagram API integration
- [ ] Dashboard de ventas

---

*Hecho con ❤️ para Finca de Arándanos — @fincadearandanos*
