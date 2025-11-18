export default function CTA() {
  return (
    <section id="book" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-8 sm:p-12 border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-sm text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-slate-800">Book a Free 15-Minute Consultation</h3>
          <p className="mt-3 text-slate-600">Speak with a specialist about your next programme.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white shadow transition-all hover:shadow-md hover:-translate-y-0.5"
              style={{ backgroundColor: '#76A88A' }}
            >
              Book now
            </a>
            <a href="mailto:hello@roamly.travel" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50">
              Email us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
