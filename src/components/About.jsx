export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50/60 to-white">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Trusted guidance, measurable impact</h2>
          <p className="mt-4 text-slate-600">With deep experience in finance and operations, we bring structured thinking and real-world execution to every engagement. Our clients range from scaling SMEs to established enterprises across sectors.</p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl bg-white p-5 ring-1 ring-slate-100 shadow-sm">
              <div className="text-3xl font-bold text-blue-700">15+</div>
              <div className="text-sm text-slate-600">Years experience</div>
            </div>
            <div className="rounded-xl bg-white p-5 ring-1 ring-slate-100 shadow-sm">
              <div className="text-3xl font-bold text-blue-700">120+</div>
              <div className="text-sm text-slate-600">Projects delivered</div>
            </div>
            <div className="rounded-xl bg-white p-5 ring-1 ring-slate-100 shadow-sm">
              <div className="text-3xl font-bold text-blue-700">R500m+</div>
              <div className="text-sm text-slate-600">Capital supported</div>
            </div>
          </div>
        </div>
        <div className="md:col-span-1">
          <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-100 shadow-sm">
            <h3 className="font-semibold text-slate-900">Core principles</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Outcome-oriented</li>
              <li>Integrity and transparency</li>
              <li>Data before opinion</li>
              <li>Practical, not theoretical</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
