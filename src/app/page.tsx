import Hero from '../components/Hero'
import Features from '../components/Features'

export default function Home() {
  return (
    <div className="container">
      <Hero />

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Why Bitcoin?</h2>
        <p className="text-white/80 max-w-3xl">Bitcoin is a decentralized store of value and payment network built on cryptography and peer-to-peer software. Here we cover the basics, history, and common use-cases.</p>
      </section>

      <Features />
    </div>
  )
}
