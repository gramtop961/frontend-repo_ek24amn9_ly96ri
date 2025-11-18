import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Approach from './components/Approach'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <Approach />
        <About />
        <Contact />

        <footer className="border-t border-blue-100/60 bg-gradient-to-b from-white to-blue-50/40">
          <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-600">
              © {new Date().getFullYear()} Edfin Financial Services (Pty) Ltd. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <a href="#services" className="hover:text-slate-900">Services</a>
              <a href="#about" className="hover:text-slate-900">About</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
