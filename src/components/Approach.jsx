export default function Approach() {
  const cases = [
    {
      title: 'UK University Field Trip — Logistics Solved',
      problem: 'Multiple cohorts traveling across three regions with limited local partners.',
      solution: 'Centralized route planning, vetted DMCs, and contingency protocols cut delays by 72%.'
    },
    {
      title: 'Global Pharma Summit — Accommodation at Scale',
      problem: '2,000 attendees with complex rooming and compliance requirements.',
      solution: 'Block contracting with dynamic allocation and audit trails ensured full compliance.'
    },
    {
      title: 'Research Institute — Risk & Assurance',
      problem: 'Travel to remote sites with evolving safety posture.',
      solution: 'Risk matrix, supplier assurance programme, and live escalation playbooks.'
    }
  ]

  return (
    <section id="approach" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800 tracking-tight">Our Approach</h2>
          <p className="mt-3 text-slate-600">Anonymous case studies highlighting problem → solution.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <div key={c.title} className="rounded-xl border border-slate-200 bg-slate-50/60 p-6">
              <h3 className="text-base font-semibold text-slate-800">{c.title}</h3>
              <div className="mt-3 text-sm text-slate-600">
                <p><span className="font-medium text-slate-700">Problem:</span> {c.problem}</p>
                <p className="mt-2"><span className="font-medium text-slate-700">Solution:</span> {c.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
