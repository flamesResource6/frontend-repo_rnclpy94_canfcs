import { motion } from 'framer-motion'

function Card({ title, tag, thumb, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-2xl bg-slate-800/40 border border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-fuchsia-500/10 transition"
    >
      <div className="aspect-video w-full overflow-hidden">
        <img src={thumb} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent opacity-80" />
      <div className="absolute bottom-0 p-4 flex flex-col">
        <span className="inline-flex w-fit rounded-full bg-white/10 px-2 py-1 text-xs text-white/80 backdrop-blur">{tag}</span>
        <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
      </div>
    </motion.div>
  )
}

export default function SectionGrid({ id, title, subtitle, items = [] }) {
  return (
    <section id={id} className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-white/70 max-w-2xl">{subtitle}</p>}
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Card key={i} title={it.title} tag={it.tag} thumb={it.thumb} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}
