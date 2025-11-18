import { useState, useRef, useEffect } from 'react'
import { Menu, ChevronDown } from 'lucide-react'

function useOutsideClick(ref, handler) {
  useEffect(() => {
    function listener(e) {
      if (!ref.current || ref.current.contains(e.target)) return
      handler()
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef(null)
  useOutsideClick(servicesRef, () => setServicesOpen(false))

  useEffect(() => {
    function onScroll() {
      setServicesOpen(false)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-3" />
      </div>
      <nav className="backdrop-blur-xl bg-white/60 border-b border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <a href="#" className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-800">
                Roamly <span className="text-slate-500">Travel</span>
              </a>
              <div className="hidden md:flex items-center gap-6">
                <div className="relative" ref={servicesRef}>
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    Our Services <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-screen max-w-5xl">
                      <div className="rounded-xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-2xl overflow-hidden">
                        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                          <div className="p-6">
                            <h4 className="text-sm font-semibold tracking-wide text-slate-700 mb-3">Consulting</h4>
                            <ul className="space-y-2 text-slate-600">
                              <li><a href="#consulting" className="hover:text-slate-900">Event consulting</a></li>
                              <li><a href="#consulting" className="hover:text-slate-900">Programme design</a></li>
                              <li><a href="#consulting" className="hover:text-slate-900">Risk & assurance</a></li>
                            </ul>
                          </div>
                          <div className="p-6 bg-slate-50/60">
                            <h4 className="text-sm font-semibold tracking-wide text-slate-700 mb-3">Event Management</h4>
                            <ul className="space-y-2 text-slate-600">
                              <li><a href="#event" className="hover:text-slate-900">Venue sourcing</a></li>
                              <li><a href="#event" className="hover:text-slate-900">Accommodation blocks</a></li>
                              <li><a href="#event" className="hover:text-slate-900">On-site support</a></li>
                            </ul>
                          </div>
                          <div className="p-6">
                            <h4 className="text-sm font-semibold tracking-wide text-slate-700 mb-3">Logistics</h4>
                            <ul className="space-y-2 text-slate-600">
                              <li><a href="#logistics" className="hover:text-slate-900">Ground transport</a></li>
                              <li><a href="#logistics" className="hover:text-slate-900">DMC services</a></li>
                              <li><a href="#logistics" className="hover:text-slate-900">Supplier vetting</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => alert('Support coming soon')}
                  className="text-slate-700 hover:text-slate-900 transition-colors"
                >
                  Support
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#book"
                className="hidden sm:inline-flex rounded-full bg-sage-600 text-white px-5 py-2 text-sm font-medium shadow hover:shadow-md transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: '#76A88A' }}
              >
                Book now
              </a>

              <button
                className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-white/70 hover:text-slate-900"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-slate-200/70 bg-white/70 backdrop-blur-xl">
            <div className="mx-auto max-w-7xl px-4 py-4 space-y-3">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none text-slate-700 py-2">
                  Our Services
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-2 grid grid-cols-1 gap-4">
                  <div>
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Consulting</h5>
                    <ul className="mt-2 space-y-1 text-slate-600">
                      <li>Event consulting</li>
                      <li>Programme design</li>
                      <li>Risk & assurance</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Event Management</h5>
                    <ul className="mt-2 space-y-1 text-slate-600">
                      <li>Venue sourcing</li>
                      <li>Accommodation blocks</li>
                      <li>On-site support</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Logistics</h5>
                    <ul className="mt-2 space-y-1 text-slate-600">
                      <li>Ground transport</li>
                      <li>DMC services</li>
                      <li>Supplier vetting</li>
                    </ul>
                  </div>
                </div>
              </details>
              <button className="block w-full text-left text-slate-700 py-2">Support</button>
              <a
                href="#book"
                className="inline-flex w-full justify-center rounded-full bg-slate-800 text-white px-5 py-2 text-sm font-medium shadow hover:shadow-md transition-all"
              >
                Book now
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
