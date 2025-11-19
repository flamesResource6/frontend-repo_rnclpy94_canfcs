import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const sections = [
  { id: 'videos', label: 'Videos' },
  { id: 'animations', label: 'Animations' },
  { id: 'graphic-design', label: 'Graphic Design' },
  { id: 'commercials', label: 'Commercials' },
  { id: 'branding', label: 'Branding' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <button onClick={() => scrollTo('top')} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-fuchsia-500 to-blue-500 flex items-center justify-center shadow-md shadow-fuchsia-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-white/90 font-semibold tracking-tight group-hover:text-white">Creator Lab</span>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {s.label}
              </button>
            ))}
            <a href="#contact" className="ml-2 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 text-white transition">Contact</a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-left text-white/80 hover:text-white py-2"
              >
                {s.label}
              </button>
            ))}
            <a href="#contact" className="inline-flex w-fit items-center rounded-full px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 text-white transition">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
