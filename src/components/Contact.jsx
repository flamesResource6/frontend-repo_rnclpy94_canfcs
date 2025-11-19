import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-1/4 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let’s create something amazing</h2>
          <p className="mt-3 text-white/70">Available for freelance projects, collaborations, and commissions.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="mailto:hello@creatorlab.com" className="rounded-2xl border border-white/10 bg-slate-800/40 p-6 text-white/90 hover:bg-slate-800/60 transition">
            <h3 className="font-semibold text-white">Email</h3>
            <p className="mt-1 text-white/70">hello@creatorlab.com</p>
          </a>
          <a href="https://instagram.com" target="_blank" className="rounded-2xl border border-white/10 bg-slate-800/40 p-6 text-white/90 hover:bg-slate-800/60 transition">
            <h3 className="font-semibold text-white">Instagram</h3>
            <p className="mt-1 text-white/70">@creatorlab</p>
          </a>
          <a href="https://vimeo.com" target="_blank" className="rounded-2xl border border-white/10 bg-slate-800/40 p-6 text-white/90 hover:bg-slate-800/60 transition">
            <h3 className="font-semibold text-white">Vimeo</h3>
            <p className="mt-1 text-white/70">/creatorlab</p>
          </a>
        </div>
      </div>
    </section>
  )
}
