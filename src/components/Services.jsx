const services = [
  {
    title: 'Landing pages',
    text: 'Páginas de una sola vista, pensadas para convertir: producto, servicio o campaña, listas para lanzar en días.',
    icon: '◆',
  },
  {
    title: 'Sitios corporativos',
    text: 'Presencia completa para tu empresa: quiénes somos, servicios, blog, contacto — todo conectado y fácil de mantener.',
    icon: '▣',
  },
  {
    title: 'Rediseño de marca',
    text: 'Si ya tienes un sitio pero se ve anticuado, lo renuevo por completo sin perder lo que ya funciona.',
    icon: '✦',
  },
  {
    title: 'Velocidad y SEO técnico',
    text: 'Sitios livianos y bien estructurados para cargar rápido y posicionar mejor en buscadores.',
    icon: '▲',
  },
  {
    title: 'Integraciones',
    text: 'Formularios, WhatsApp, mapas, pasarelas de pago y las herramientas que tu negocio ya usa.',
    icon: '◈',
  },
  {
    title: 'Soporte y mantenimiento',
    text: 'Una vez publicado, te acompaño con ajustes, actualizaciones de contenido y soporte continuo.',
    icon: '●',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="relative py-24">
      <div className="mx-auto max-w-page px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Qué hago</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Todo lo que tu sitio necesita, en un solo lugar
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card">
              <span className="font-display text-2xl text-amber">{s.icon}</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-white/60">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
