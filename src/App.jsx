import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValueGrid from './components/ValueGrid'
import Approach from './components/Approach'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ValueGrid />
        <Approach />
        <CTA />
      </main>
      <Footer />
      {/* Repeat CTA at bottom in distinct section */}
      <div className="bg-slate-50/60">
        <CTA />
      </div>
    </div>
  )
}

export default App
