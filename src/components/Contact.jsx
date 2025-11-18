import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thanks — we will get back to you shortly!')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Let’s talk about your goals</h2>
          <p className="mt-3 text-slate-600">Tell us a bit about your business and we’ll arrange a free 30-minute consultation.</p>
          <div className="mt-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white ring-1 ring-blue-100 p-6">
            <div className="text-sm text-slate-700">Email</div>
            <a href="mailto:info@edfin.co.za" className="text-blue-700 font-medium">info@edfin.co.za</a>
            <div className="mt-4 text-sm text-slate-700">Phone</div>
            <a href="tel:+270000000" className="text-blue-700 font-medium">+27 00 000 0000</a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 ring-1 ring-slate-100 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-700 mb-1">First name</label>
              <input required name="firstName" className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div>
              <label className="block text-sm text-slate-700 mb-1">Last name</label>
              <input required name="lastName" className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-700 mb-1">Email</label>
              <input required type="email" name="email" className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-700 mb-1">How can we help?</label>
              <textarea required name="message" rows="4" className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
          </div>
          <button className="mt-4 inline-flex items-center rounded-full bg-blue-600 text-white px-6 py-3 shadow-sm hover:bg-blue-700 transition-colors">
            Send message
          </button>
          {status && <p className="mt-3 text-sm text-green-700">{status}</p>}
        </form>
      </div>
    </section>
  )
}
