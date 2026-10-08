const tiers = [
  {
    name: 'Esencial',
    price: '$1.000.000',
    period: 'COP · proyecto único',
    text: 'Para quienes necesitan una presencia web profesional y simple, lista en poco tiempo.',
    features: [
      'Landing page de una sola página',
      'Diseño a la medida (no plantillas)',
      'Hasta 5 secciones de contenido',
      'Formulario de contacto / WhatsApp',
      '100% responsive (móvil y escritorio)',
      '1 ronda de ajustes incluida',
    ],
    cta: 'Elegir Esencial',
    highlight: false,
  },
  {
    name: 'Profesional',
    price: '$2.000.000',
    period: 'COP · proyecto único',
    text: 'Para marcas que quieren un sitio completo, con más secciones y mejor posicionamiento.',
    features: [
      'Todo lo del plan Esencial',
      'Sitio multi-página (varias vistas)',
      'Diseño o actualización de logo',
      'Optimización SEO básica',
      'Integraciones (mapas, redes, formularios avanzados)',
      '2 rondas de ajustes incluidas',
      '30 días de soporte post-lanzamiento',
    ],
    cta: 'Elegir Profesional',
    highlight: true,
  },
]

export default function Pricing() {
  return (
    <section id="precios" className="relative bg-surface py-24">
      <div className="mx-auto max-w-page px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Precios</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Dos formas de empezar
          </h2>
          <p className="mt-4 font-sans text-white/60">
            Cada proyecto es distinto — estos planes son un punto de partida. Siempre ajusto
            el alcance a lo que tu negocio realmente necesita.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border p-8 ${
                t.highlight
                  ? 'border-amber/60 bg-gradient-to-b from-violet-900/40 to-surface2'
                  : 'border-white/10 bg-ink'
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 right-8 rounded-full bg-amber px-3 py-1 font-sans text-xs font-bold uppercase text-ink">
                  Más completo
                </span>
              )}
              <h3 className="font-display text-2xl font-bold text-white">{t.name}</h3>
              <p className="mt-4 font-display text-4xl font-bold text-white">
                {t.price}
                <span className="ml-2 font-sans text-sm font-normal text-white/50">
                  {t.period}
                </span>
              </p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-white/60">{t.text}</p>

              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-sans text-sm text-white/80">
                    <span className="mt-0.5 text-amber">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={t.highlight ? 'btn-primary mt-8 w-full' : 'btn-ghost mt-8 w-full'}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
