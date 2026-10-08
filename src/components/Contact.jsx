export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden py-24">
      <div className="blob blob-amber -right-32 top-0 h-[480px] w-[480px]" />

      <div className="relative mx-auto max-w-page px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-surface2 to-ink p-10 text-center sm:p-16">
          <p className="eyebrow">Hablemos</p>
          <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-bold text-white sm:text-4xl">
            ¿Listo para tener un sitio que represente bien a tu marca?
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-sans text-white/60">
            Cuéntame sobre tu proyecto y en menos de 24 horas te respondo con una propuesta
            clara y sin letra pequeña.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:hola@nexora.studio" className="btn-primary">
              Escríbeme un correo
            </a>
            <a
              href="https://wa.me/573023205852"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Escríbeme por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
