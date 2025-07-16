# 🚀 NeonBytes

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2.30-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.2.2-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-3.4.2-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel" alt="Vercel" />
</div>

<div align="center">
  <h3>🌟 La newsletter tecnológica que te conecta con las últimas tendencias</h3>
  <p>Construida con Next.js, TypeScript y Tailwind CSS para una experiencia de lectura moderna y atractiva</p>
</div>

---
> **Gestor de paquetes:** Este proyecto usa [pnpm](https://pnpm.io) de forma predeterminada. Puedes usar `npm` si lo prefieres.

## 📰 Última Edición

### 📅 Edición 1 - Julio 2025
**🔗 [Leer en línea](https://neon-bytes.vercel.app/newsletters/edicion-1)**

**✨ Contenido destacado:**
- 🟢 **Node.js 24**: Nueva versión Current con V8 v13.6 y npm 11 integrado
- 🆕 **ECMAScript 2025**: Estándar aprobado con 9 nuevas funcionalidades
- ⚡ **Next.js 15.4**: Lanzamiento con Turbopack y mejoras de estabilidad
- 🤖 **GitHub Copilot Agent Mode**: Disponible para todos los usuarios
- 🐍 **Django 5.2 LTS**: Importación automática de modelos
- 🅰️ **Angular v20**: Mejoras en IA generativa y modo zoneless
- 📚 **Tutoriales técnicos**: CSS, JavaScript y casos de estudio
- 🛠️ **Herramientas recomendadas**: Vercel CLI y recursos CSS

## 🛠️ Stack Tecnológico

- **Frontend**: Next.js 14.2.30 con App Router
- **Lenguaje**: TypeScript 5.2.2
- **Estilos**: Tailwind CSS 3.4.2 + @tailwindcss/typography
- **Contenido**: MDX para newsletters dinámicas
- **Animaciones**: Framer Motion
- **Validación**: Zod para formularios
- **Deploy**: Vercel con CI/CD automático
- **Gestión de paquetes**: pnpm

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+ 
- pnpm (recomendado) o npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/YerayAR/neon-bytes.git
cd neon-bytes

# Instalar dependencias
pnpm install
# o
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
pnpm dev
# o
npm run dev
```

🌐 **Abre [http://localhost:3000](http://localhost:3000) en tu navegador**

### Build de producción

```bash
# Construir para producción
pnpm build
pnpm start

# o
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
neon-bytes/
├── 📁 app/                    # App Router de Next.js
│   ├── 📁 api/                # API Routes
│   ├── 📁 newsletters/        # Páginas de newsletters
│   ├── globals.css           # Estilos globales
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página de inicio
├── 📁 components/            # Componentes reutilizables
│   ├── Hero.tsx             # Sección hero
│   ├── Features.tsx         # Características
│   ├── ArchiveList.tsx      # Lista de newsletters
│   ├── NewsletterPage.tsx   # Página de newsletter
│   └── ...
├── 📁 lib/                  # Utilidades y configuración
│   ├── newsletters.ts       # Gestión de newsletters
│   ├── subscribers.ts       # Gestión de suscriptores
│   └── editions.ts          # Metadatos de ediciones
├── 📁 newsletters/          # Contenido MDX
│   └── edicion-1.mdx       # Primera edición
└── 📁 public/              # Archivos estáticos
```

## 📝 Crear Nueva Newsletter

### 1. Crear archivo MDX

```bash
# Crear nueva edición
touch newsletters/edicion-2.mdx
```

### 2. Estructura del MDX

```mdx
---
id: edicion-2
title: "Edición 2"
date: "2025-08-01"
excerpt: "Descripción de la edición"
authors: ["Equipo NeonBytes"]
---

## Editorial

Contenido de la editorial...

## Noticias destacadas

- [Artículo 1](https://ejemplo.com)
- [Artículo 2](https://ejemplo.com)

## Mini-tutorial

```javascript
console.log('Hola NeonBytes!');
```

## Herramientas recomendadas

Descripción de herramientas...
```

### 3. Actualizar metadatos

```typescript
// app/newsletters/[edition]/page.tsx
const editionMeta = {
  'edicion-2': {
    id: 'edicion-2',
    title: 'Edición 2',
    date: '2025-08-01',
    excerpt: 'Descripción de la edición',
    authors: ['Equipo NeonBytes']
  }
};
```

### 4. Actualizar archivo principal

```typescript
// app/page.tsx
const archive: ArchiveItem[] = [
  {
    id: 'edicion-2',
    date: '2025-08-01',
    title: 'Edición 2',
    excerpt: 'Descripción de la edición',
  },
  // ... otras ediciones
];
```

## 🎨 Características

### ✨ Interfaz Moderna
- 🌙 Tema oscuro con gradientes
- 📱 Diseño completamente responsivo
- 🎭 Animaciones suaves con Framer Motion
- 🎯 Tipografía optimizada para lectura

### 📊 Funcionalidades
- 📰 Sistema de newsletters dinámicas
- 🔍 Archivo de ediciones anteriores
- 💌 Formulario de suscripción
- 📱 Optimización para móviles
- ⚡ Carga rápida y SEO optimizado

### 🔧 Configuración
- 🚀 Deploy automático en Vercel
- 📝 Soporte completo para MDX
- 🎨 Tailwind CSS con plugin de typography
- 📊 Analytics integrado
- 🔒 Formularios con validación Zod

## 🚀 Despliegue

### Vercel (Recomendado)

1. **Fork el repositorio**
2. **Conecta con Vercel**
3. **Deploy automático** en cada push a main

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YerayAR/neon-bytes)

### Configuración Manual

```bash
# Variables de entorno (opcional)
NEXT_PUBLIC_VERCEL_URL=tu-dominio.com
VERCEL_URL=tu-dominio.com
```

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Aquí te explicamos cómo contribuir:

### 📋 Pasos para contribuir

1. **Fork** el proyecto
2. **Crea** una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. **Commit** tus cambios (`git commit -m 'Añadir nueva característica'`)
4. **Push** a la rama (`git push origin feature/nueva-caracteristica`)
5. **Abre** un Pull Request

### 🐛 Reportar Issues

- Usa el [template de issues](https://github.com/YerayAR/neon-bytes/issues/new)
- Incluye pasos para reproducir el error
- Especifica tu entorno (OS, Node.js version, etc.)

### 💡 Ideas para contribuir

- 📝 Añadir nuevas newsletters
- 🎨 Mejorar el diseño
- 🔧 Optimizar el rendimiento
- 📱 Mejorar la experiencia móvil
- 🧪 Añadir tests
- 📚 Mejorar documentación

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👥 Autores

- **YerayAR** - *Desarrollo inicial* - [@YerayAR](https://github.com/YerayAR)

## 🙏 Agradecimientos

- Comunidad de Next.js
- Equipo de Vercel
- Contribuidores de código abierto
- Lectores de NeonBytes

---

<div align="center">
  <p>Hecho con ❤️ para la comunidad tech</p>
  <p>🌟 <a href="https://github.com/YerayAR/neon-bytes">Dale una estrella si te gusta el proyecto</a> 🌟</p>
</div>

<!-- v1.0.1 - Complete README update -->
