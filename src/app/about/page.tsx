export default function About() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold">About Bitcoin</h1>
      <p className="mt-4 text-white/80 max-w-3xl">Bitcoin is the first widely adopted cryptocurrency. It introduced a new model for digital scarcity and a decentralized monetary network. This page provides a concise history and further reading pointers.</p>

      <section className="mt-8 card">
        <h3 className="text-xl font-semibold">History</h3>
        <p className="mt-2 text-white/80">Introduced in 2008 via a paper by Satoshi Nakamoto, Bitcoin network launched in 2009. Over time it has become a global asset with many layers of tools and services built on top of it.</p>
      </section>
    </div>
  )
}
