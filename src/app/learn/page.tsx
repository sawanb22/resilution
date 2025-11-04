export default function Learn() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold">Learn Bitcoin</h1>
      <p className="mt-4 text-white/80 max-w-3xl">Beginner-friendly guides and explanations about wallets, keys, transactions, and how the Bitcoin network works.</p>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <h4 className="font-semibold">Wallets</h4>
          <p className="text-white/80 mt-2">Different wallet types (custodial, non-custodial, hardware) and how to choose one safely.</p>
        </div>

        <div className="card">
          <h4 className="font-semibold">Transactions</h4>
          <p className="text-white/80 mt-2">How transactions are formed, broadcast, and confirmed on-chain.</p>
        </div>

        <div className="card">
          <h4 className="font-semibold">Security</h4>
          <p className="text-white/80 mt-2">Key management, backups, and best practices to protect funds and privacy.</p>
        </div>
      </section>
    </div>
  )
}
