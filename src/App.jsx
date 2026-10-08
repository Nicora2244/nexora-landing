import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import TrustStrip from './components/TrustStrip.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import Process from './components/Process.jsx'
import ServiceExplorer from './components/ServiceExplorer.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Portfolio />
        <Process />
        <ServiceExplorer />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
