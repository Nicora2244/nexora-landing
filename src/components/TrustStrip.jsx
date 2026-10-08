const brands = ['ATHLETAIN', 'ACADEMIA INTERNACIONAL FC', 'TU MARCA AQUÍ']

export default function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-surface py-6">
      <div className="mx-auto max-w-page px-6">
        <p className="mb-4 text-center font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
          Marcas para las que he construido experiencias web
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {brands.map((name) => (
            <span
              key={name}
              className="font-display text-sm font-semibold tracking-wide text-white/35"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
