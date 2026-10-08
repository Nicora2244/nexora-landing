const projects = [
  {
    name: 'Athletain',
    tag: 'Sitio deportivo',
    text: 'Plataforma para un club/academia de alto rendimiento, con identidad visual propia y secciones para planes, equipo y contacto.',
    url: 'https://athletain.com/',
    gradient: 'from-violet-500/50 to-violet-900/40',
  },
  {
    name: 'Academia Internacional FC',
    tag: 'Campamentos de fútbol',
    text: 'Landing page internacional para una academia de fútbol en Colombia: narrativa visual fuerte, pilares del programa y planes de precio.',
    url: 'https://nicora2244.github.io/academia-internacional-fc-landing/#camp',
    gradient: 'from-amber/60 to-violet-700/40',
  },
]

export default function Portfolio() {
  return (
    <section id="proyectos" className="relative bg-surface py-24">
      <div className="mx-auto max-w-page px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Proyectos</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Algunos sitios que he construido
          </h2>
          <p className="mt-4 font-sans text-white/60">
            Dos ejemplos reales, en producción, que muestran el nivel de detalle y calidad
            con el que trabajo cada proyecto.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-2xl border border-white/10 bg-ink transition-colors hover:border-amber/50"
            >
              <div className={`h-48 bg-gradient-to-br ${p.gradient} relative`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-3xl font-bold uppercase tracking-wide text-white/90">
                    {p.name}
                  </span>
                </div>
              </div>
              <div className="p-7">
                <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-amber">
                  {p.tag}
                </p>
                <p className="mt-3 font-sans text-sm leading-relaxed text-white/60">{p.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-semibold text-white group-hover:text-amber">
                  Ver sitio en vivo
                  <span aria-hidden>→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
