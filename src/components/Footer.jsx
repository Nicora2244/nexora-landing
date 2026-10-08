export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-page flex-col items-center justify-between gap-4 px-6 font-sans text-sm text-white/40 sm:flex-row">
        <span className="font-display text-base font-bold text-white/70">
          Nexora<span className="text-amber">.</span>
        </span>
        <p>© {new Date().getFullYear()} Nexora — Diseño y desarrollo web. Hecho por Nicolás.</p>
      </div>
    </footer>
  )
}
