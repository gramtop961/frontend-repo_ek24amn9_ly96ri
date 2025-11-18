export default function Approach() {
  return (
    <section id="approach" className="py-20">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">A collaborative, data-first approach</h2>
          <p className="mt-4 text-slate-600">We partner closely with leadership to align on measurable outcomes, then design and execute a plan that combines strategic insight with operational rigor.</p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>Discovery workshops to clarify goals and constraints</li>
            <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>Rapid diagnostics across finances, operations, and market</li>
            <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>Prioritized roadmap with clear owners, timelines, and KPIs</li>
            <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>Weekly execution cycles with transparent reporting</li>
          </ul>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-white ring-1 ring-blue-100 overflow-hidden">
            <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_20%,#93c5fd_0%,transparent_35%),radial-gradient(circle_at_80%_30%,#bfdbfe_0%,transparent_35%),radial-gradient(circle_at_50%_80%,#e0f2fe_0%,transparent_35%)]" />
            <div className="absolute inset-6 rounded-xl border border-blue-200/60"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
