'use client'

import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="mt-8 grid md:grid-cols-2 gap-8 items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity:1, y:0 }} transition={{duration:0.6}} viewport={{once:true}}>
        <h1 className="text-4xl md:text-5xl font-extrabold">Bitcoin — digital gold</h1>
        <p className="mt-4 text-white/80 max-w-2xl">A concise informational hub about Bitcoin: what it is, why it matters, and how you can learn more. This site is educational only and not financial advice.</p>
        <div className="mt-6 flex gap-4">
          <a href="#learn" className="px-4 py-2 rounded-md bg-[var(--accent)] text-black font-medium">Start learning</a>
          <a href="/about" className="px-4 py-2 rounded-md border border-white/10 text-white/90">About Bitcoin</a>
        </div>
      </motion.div>

      <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale:1, opacity:1 }} transition={{duration:0.7}} viewport={{once:true}}>
        <div className="card">
          <h4 className="font-semibold">Quick stats</h4>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-white/70">Market cap</div>
              <div className="text-lg font-bold">$</div>
            </div>
            <div>
              <div className="text-sm text-white/70">Block time</div>
              <div className="text-lg font-bold">~10 min</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
