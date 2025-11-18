import { Briefcase, BarChart3, LayoutDashboard, LineChart } from 'lucide-react'

const services = [
  {
    icon: Briefcase,
    title: 'Business Strategy',
    desc: 'Market analysis, go-to-market design, pricing, and growth roadmaps aligned to your goals.'
  },
  {
    icon: BarChart3,
    title: 'Financial Advisory',
    desc: 'Forecasting, budgeting, cash flow optimization, and fundraising support for sustainable growth.'
  },
  {
    icon: LayoutDashboard,
    title: 'Operational Excellence',
    desc: 'Process improvement, performance dashboards, and KPI frameworks that drive accountability.'
  },
  {
    icon: LineChart,
    title: 'Data & Analytics',
    desc: 'Data architecture, reporting automation, and insight generation to power decisions.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-white to-blue-50/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Advisory services built for outcomes</h2>
          <p className="mt-3 text-slate-600">Practical, data-led consulting tailored to your stage and sector.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 hover:shadow-md transition-shadow p-6">
              <div className="h-11 w-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
