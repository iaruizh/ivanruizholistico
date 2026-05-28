# Iván Alejandro Ruiz — Sitio de Marca Personal

Sitio web profesional de Iván Alejandro Ruiz, Terapeuta Holointegrativo y fundador de ZANATTE Centro Holointegrativo. Construido con Next.js 15, Tailwind CSS 4 y Framer Motion.

🌐 **Live:** [ivanruizholistico.com](https://ivanruizholistico.com)

---

## Stack

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | 15.1 | Framework (App Router) |
| React | 19 | UI |
| TypeScript | 5.7 | Tipado estático |
| Tailwind CSS | 4.0 | Estilos |
| Framer Motion | 11 | Animaciones |
| next-intl | 3.22 | i18n (ES/EN) |

---

## Instalación local

```bash
# 1. Clonar
git clone https://github.com/TU_USUARIO/ivanruiz-marca-personal.git
cd ivanruiz-marca-personal

# 2. Instalar dependencias
npm install

# 3. Variables de entorno
cp .env.local.example .env.local
# Editar .env.local con tus valores

# 4. Correr en desarrollo
npm run dev
# → http://localhost:3000
```

---

## Variables de entorno

| Variable | Descripción | Requerida |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL del sitio en producción | ✅ |
| `RESEND_API_KEY` | API key de resend.com para emails | Opcional |

---

## Deploy en Vercel

### Paso 1 — Subir a GitHub
```bash
git init
git add .
git commit -m "feat: initial commit"
git remote add origin https://github.com/TU_USUARIO/ivanruiz-marca-personal.git
git push -u origin main
```

### Paso 2 — Conectar Vercel
1. Ir a [vercel.com](https://vercel.com) → **New Project**
2. Importar el repositorio de GitHub
3. Framework: **Next.js** (detectado automático)
4. Agregar variables de entorno:
   - `NEXT_PUBLIC_SITE_URL` = `https://ivanruizholistico.com`
   - `RESEND_API_KEY` = tu key de resend.com
5. Click **Deploy**

### Paso 3 — Conectar dominio ivanruizholistico.com
1. En Vercel: **Project Settings → Domains**
2. Agregar `ivanruizholistico.com` y `www.ivanruizholistico.com`
3. Vercel te dará los DNS records
4. En tu proveedor de dominio, agregar:
   ```
   Tipo: A     | Nombre: @   | Valor: 76.76.21.21
   Tipo: CNAME | Nombre: www | Valor: cname.vercel-dns.com
   ```
5. Esperar propagación (5–30 minutos)

### Deploy automático
Cada `git push` a `main` despliega automáticamente en Vercel ✅

---

## Estructura del proyecto

```
ivanruiz-marca-personal/
├── app/
│   ├── [locale]/           # Rutas con i18n
│   │   ├── layout.tsx      # Layout con JSON-LD
│   │   └── page.tsx        # Homepage
│   ├── api/contact/        # API formulario
│   ├── globals.css         # Estilos globales
│   ├── layout.tsx          # Root layout
│   ├── robots.ts           # robots.txt
│   └── sitemap.ts          # sitemap.xml
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── StatsBar.tsx
│       ├── SobreSection.tsx
│       ├── FilosofiaSection.tsx
│       ├── ZanatteSection.tsx
│       ├── RuahSection.tsx
│       ├── MensajesSection.tsx
│       ├── EcosistemaSection.tsx
│       ├── TestimoniosSection.tsx
│       └── ContactoSection.tsx
├── i18n/
│   ├── request.ts
│   └── routing.ts
├── messages/
│   ├── es.json             # Español
│   └── en.json             # English
├── lib/
│   └── utils.ts
├── middleware.ts            # i18n middleware
├── next.config.ts
├── package.json
├── tsconfig.json
├── postcss.config.mjs
├── vercel.json
└── .gitignore
```

---

## SEO

- ✅ Metadata dinámica por página e idioma
- ✅ Open Graph + Twitter Cards
- ✅ JSON-LD Schema.org (Person)
- ✅ sitemap.xml automático
- ✅ robots.txt con todos los AI crawlers permitidos
- ✅ hreflang ES/EN
- ✅ Canonical URLs
- ✅ i18n completo (ES por defecto, /en para inglés)

## AI Crawlers permitidos

GPTBot · ChatGPT-User · ClaudeBot · anthropic-ai · PerplexityBot · Google-Extended · Cohere-AI · YouBot

---

## Agregar fotos de Iván

1. Colocar imágenes en `/public/images/`
2. Nombres sugeridos: `ivan-ruiz.jpg`, `ivan-ruiz-terapia.jpg`, `ivan-ruiz-zanatte.jpg`, `og-image.jpg`
3. En `HeroSection.tsx` reemplazar el placeholder con `<Image>` de Next.js

---

## Contacto

**Iván Alejandro Ruiz** · iaruizh@gmail.com · [@ivanaleruizh](https://instagram.com/ivanaleruizh)

[zanatte.com.co](https://zanatte.com.co) · Bogotá, Colombia
