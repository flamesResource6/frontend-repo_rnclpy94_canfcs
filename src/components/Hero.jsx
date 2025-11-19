import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Interactive 3D • Portfolio
          </div>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Digital Creator — Motion, Design, and Brand Stories
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            A playful, modern portfolio showcasing videos, animations, graphics, commercials and branding work.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#videos" className="inline-flex items-center rounded-full px-5 py-3 bg-white text-slate-900 font-semibold hover:bg-white/90 transition">Explore Work</a>
            <a href="#contact" className="inline-flex items-center rounded-full px-5 py-3 bg-white/10 text-white hover:bg-white/20 transition">Get in Touch</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
