'use client'

import { motion } from 'framer-motion'

export default function Features(){
  return (
    <section className="mt-10">
      <h3 className="text-2xl font-semibold mb-6">Core concepts</h3>

      <div className="grid md:grid-cols-3 gap-6">
        <motion.div className="card" initial={{y:10, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5}} viewport={{once:true}}>
          <h4 className="font-semibold">Decentralization</h4>
          <p className="text-white/80 mt-2">No central authority; consensus is reached by distributed nodes.</p>
        </motion.div>

        <motion.div className="card" initial={{y:10, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.6}} viewport={{once:true}}>
          <h4 className="font-semibold">Scarcity</h4>
          <p className="text-white/80 mt-2">The supply is capped at 21 million coins which supports value through scarcity.</p>
        </motion.div>

        <motion.div className="card" initial={{y:10, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.7}} viewport={{once:true}}>
          <h4 className="font-semibold">Security</h4>
          <p className="text-white/80 mt-2">Cryptographic primitives secure transactions and ownership of funds.</p>
        </motion.div>
      </div>
    </section>
  )
}
