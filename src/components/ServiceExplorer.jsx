import { useState } from 'react'

const categories = [
  {
    title: 'Landing page de una sola página',
    text: 'Ideal para lanzar rápido con una sola vista enfocada en convertir.',
    items: [
      'Hero con llamada a la acción clara',
      'Hasta 5 secciones de contenido',
      'Formulario de contacto / WhatsApp',
      'Diseño 100% a la medida, sin plantillas',
      '1 ronda de ajustes incluida',
    ],
  },
  {
    title: 'Sitio multi-página',
    text: 'Para marcas que necesitan más que una sola vista: varias secciones conectadas.',
    items: [
      'Varias vistas (inicio, nosotros, servicios, contacto…)',
      'Navegación y estructura completas',
      'SEO básico en cada página',
      '2 rondas de ajustes incluidas',
    ],
  },
  {
    title: 'Marca y diseño',
    text: 'Para refrescar o construir la identidad visual detrás del sitio.',
    items: [
      'Diseño o actualización de logo',
      'Paleta de colores y tipografía',
      'Guía de estilo básica para redes y papelería',
    ],
  },
  {
    title: 'Velocidad y SEO técnico',
    text: 'Para que el sitio cargue rápido y se encuentre fácil en buscadores.',
    items: [
      'Sitio liviano y bien estructurado',
      'Buenas prácticas de SEO on-page',
      'Metadatos y vista previa optimizada para redes',
    ],
  },
  {
    title: 'Integraciones',
    text: 'Para conectar el sitio con las herramientas que tu negocio ya usa.',
    items: [
      'WhatsApp y formularios avanzados',
      'Mapas y redes sociales',
      'Pasarelas de pago',
      'Automatizaciones simples',
    ],
  },
  {
    title: 'Soporte continuo',
    text: 'Para después del lanzamiento, cuando el sitio ya está en producción.',
    items: [
      'Actualizaciones de contenido',
      'Ajustes y mejoras post-lanzamiento',
      'Acompañamiento mes a mes',
    ],
  },
]

export default function ServiceExplorer() {
  const [active, setActive] = useState(0)

  return (
    <section id="explora" className="relative bg-surface py-24">
      <div className="mx-auto max-w-page px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Explora los servicios</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Arma el sitio que tu marca necesita
          </h2>
          <p className="mt-4 font-sans text-white/60">
            Cada proyecto combina distintas piezas. Toca una categoría para ver qué incluye y
            arma la mezcla que tiene sentido para tu negocio.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Category list */}
          <div className="space-y-3">
            {categories.map((cat, i) => (
              <button
                key={cat.title}
                onClick={() => setActive(i)}
                className={`block w-full rounded-xl border px-6 py-4 text-left transition-colors ${
                  active === i
                    ? 'border-amber/60 bg-ink'
                    : 'border-white/10 bg-ink/40 hover:border-white/30'
                }`}
              >
                <span
                  className={`font-display text-lg font-semibold ${
                    active === i ? 'text-amber' : 'text-white'
                  }`}
                >
                  {cat.title}
                </span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="card lg:sticky lg:top-24">
            <h3 className="font-display text-2xl font-bold text-white">
              {categories[active].title}
            </h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-white/60">
              {categories[active].text}
            </p>
            <ul className="mt-6 space-y-3">
              {categories[active].items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-sans text-sm text-white/80"
                >
                  <span className="mt-0.5 text-amber">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contacto" className="btn-primary mt-8">
              Hablemos de tu proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
