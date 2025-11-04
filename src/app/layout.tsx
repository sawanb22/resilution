import './globals.css'
import Link from 'next/link'
import EdenChatWidget from '@/components/EdenChatWidget'

export const metadata = {
  title: 'Bitcoin Info — Landing',
  description: 'Informational Bitcoin landing built with Next.js and TailwindCSS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-white/5">
          <div className="container flex items-center justify-between py-6">
            <Link href="/" className="text-xl font-bold accent">BitcoinInfo</Link>
            <nav className="space-x-6">
              <Link href="/" className="text-sm text-white/80 hover:text-white">Home</Link>
              <Link href="/about" className="text-sm text-white/80 hover:text-white">About</Link>
              <Link href="/learn" className="text-sm text-white/80 hover:text-white">Learn</Link>
            </nav>
          </div>
        </header>

        <main className="py-12">{children}</main>

        <footer className="border-t border-white/5 py-8">
          <div className="container text-center text-sm text-white/70"> {new Date().getFullYear()} BitcoinInfo — informational only</div>
        </footer>

        {/* EDEN Chat Widget - Shows on ALL pages */}
        <EdenChatWidget />
      </body>
    </html>
  )
}
