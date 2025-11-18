import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Approach', href: '#approach' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-blue-200/40">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500 shadow-sm flex items-center justify-center text-white font-bold">E</div>
          <div className="leading-tight">
            <div className="font-semibold text-slate-800">Edfin Financial Services</div>
            <div className="text-[11px] tracking-wide text-slate-500">(Pty) Ltd</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-600 hover:text-slate-900 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="mailto:info@edfin.co.za" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
            <Mail className="h-4 w-4" />
            <span className="text-sm">info@edfin.co.za</span>
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-sm shadow-sm hover:bg-blue-700 transition-colors">
            <Phone className="h-4 w-4" />
            Book a Consultation
          </a>
        </div>

        <button aria-label="Toggle Menu" className="md:hidden p-2 rounded-md text-slate-700" onClick={() => setOpen((s) => !s)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-blue-200/40 bg-white/90">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-slate-700">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-sm shadow-sm">
              <Phone className="h-4 w-4" />Book a Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
