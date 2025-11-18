import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs text-slate-700 ring-1 ring-blue-200/60 mb-4 pointer-events-none">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            Business Management Consulting
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-slate-900">
            Edfin Financial Services (Pty) Ltd
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-2xl">
            We help ambitious businesses unlock growth, strengthen operations, and make confident financial decisions through data-driven strategy and hands-on execution.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-full bg-blue-600 text-white px-6 py-3 shadow-sm hover:bg-blue-700 transition-colors">
              Book a Strategy Call
            </a>
            <a href="#services" className="inline-flex items-center rounded-full bg-white/80 backdrop-blur px-6 py-3 ring-1 ring-blue-200/60 text-slate-800 hover:bg-white">
              Explore Services
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/60 to-white pointer-events-none"></div>
    </section>
  )
}
