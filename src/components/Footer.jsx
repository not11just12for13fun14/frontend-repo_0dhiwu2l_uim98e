export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} Roamly Travel. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#consulting" className="text-slate-600 hover:text-slate-900">Services</a>
            <a href="#approach" className="text-slate-600 hover:text-slate-900">Our Approach</a>
            <a href="#book" className="text-slate-600 hover:text-slate-900">Book</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
