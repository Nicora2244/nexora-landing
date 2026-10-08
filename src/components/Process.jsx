const steps = [
  {
    n: '01',
    title: 'Descubrimiento',
    text: 'Hablamos de tu negocio, objetivos y referencias visuales que te gustan.',
  },
  {
    n: '02',
    title: 'Propuesta y diseño',
    text: 'Defino estructura, contenido y una dirección visual antes de escribir código.',
  },
  {
    n: '03',
    title: 'Desarrollo',
    text: 'Construyo el sitio con tecnología moderna: rápido, responsive y fácil de mantener.',
  },
  {
    n: '04',
    title: 'Lanzamiento',
    text: 'Publicamos el sitio, verificamos todo y queda listo para recibir visitas.',
  },
  {
    n: '05',
    title: 'Acompañamiento',
    text: 'Después del lanzamiento sigo disponible para ajustes y nuevas necesidades.',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="relative py-24">
      <div className="blob blob-violet left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-40" />

      <div className="relative mx-auto max-w-page px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Cómo trabajo</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            De la idea al sitio publicado
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-5">
          {steps.map((s) => (
            <div key={s.n} className="card">
              <span className="font-display text-3xl font-bold text-white/15">{s.n}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-white/60">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
