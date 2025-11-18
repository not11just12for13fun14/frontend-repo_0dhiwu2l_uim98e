import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-800 leading-tight">
            Expert Travel Solutions for Complex Groups.
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Mitigating risk and maximizing outcomes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white shadow transition-all hover:shadow-md hover:-translate-y-0.5"
              style={{ backgroundColor: '#76A88A' }}
            >
              Book a Free 15-Minute Consultation
            </a>
            <a href="#approach" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-slate-700 bg-white/80 backdrop-blur border border-slate-200 hover:bg-white">
              Our Approach
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
