export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-16 sm:pt-24">
      <div className="blob blob-violet -right-40 -top-40 h-[560px] w-[560px]" />
      <div className="blob blob-amber -left-32 top-64 h-[420px] w-[420px]" />

      <div className="relative mx-auto grid max-w-page items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Copy */}
        <div>
          <p className="eyebrow">Diseño &amp; desarrollo web a la medida</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Sitios web que hacen{' '}
            <span className="bg-gradient-to-r from-violet-300 to-amber bg-clip-text text-transparent">
              crecer tu negocio
            </span>
          </h1>
          <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-white/70">
            Soy Nicolás, desarrollador web independiente. En Nexora diseño y construyo
            páginas rápidas, modernas y hechas a la medida de cada marca — desde la
            primera idea hasta el sitio publicado y funcionando.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contacto" className="btn-primary">
              Solicitar propuesta
            </a>
            <a href="#proyectos" className="btn-ghost">
              Ver proyectos
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-sans text-sm text-white/50">
            <span>Entrega en 2–4 semanas</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>100% a la medida, sin plantillas genéricas</span>
          </div>
        </div>

        {/* Visual — abstract browser-window mockup, no external assets needed */}
        <div className="relative mx-auto w-full max-w-md animate-float">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl shadow-violet-900/40">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-surface2 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-3 h-5 flex-1 rounded-md bg-white/5" />
            </div>
            <div className="space-y-4 p-6">
              <div className="h-24 rounded-xl bg-gradient-to-br from-violet-500/40 to-amber/30" />
              <div className="h-3 w-3/4 rounded-full bg-white/15" />
              <div className="h-3 w-1/2 rounded-full bg-white/10" />
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="h-14 rounded-lg bg-white/5" />
                <div className="h-14 rounded-lg bg-white/5" />
                <div className="h-14 rounded-lg bg-white/5" />
              </div>
              <div className="h-9 w-32 rounded-full bg-amber/80" />
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 rounded-xl border border-white/10 bg-surface2 px-5 py-3 shadow-xl">
            <p className="font-display text-2xl font-bold text-white">100%</p>
            <p className="font-sans text-xs text-white/60">responsive</p>
          </div>
        </div>
      </div>
    </section>
  )
}
