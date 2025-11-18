import { Briefcase, CalendarDays, Route } from 'lucide-react'

const items = [
  {
    icon: Briefcase,
    title: 'Consulting',
    desc: 'Event consulting, programme design, and risk & assurance to de-risk complex travel.'
  },
  {
    icon: CalendarDays,
    title: 'Event Management',
    desc: 'Venue sourcing, accommodation blocks, and on-site support for seamless delivery.'
  },
  {
    icon: Route,
    title: 'Logistics',
    desc: 'Ground transport, DMC services, and supplier vetting with verified partners.'
  }
]

export default function ValueGrid() {
  return (
    <section id="consulting" className="py-20 bg-gradient-to-b from-white to-slate-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 tracking-tight">What we do</h2>
          <p className="mt-3 text-slate-600">Three pillars that shape every engagement.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E9F2EE' }}>
                <Icon className="h-5 w-5" color="#2F4F45" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-800">{title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
