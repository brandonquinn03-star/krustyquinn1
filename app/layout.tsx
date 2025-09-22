import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pizza Drop',
  description: 'Limited daily pizza reservations — drops at noon.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <header className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-semibold tracking-tight">Pizza Drop</h1>
            <nav className="text-sm opacity-80">
              <a href="/" className="mr-4 hover:opacity-100">Home</a>
              <a href="/order" className="mr-4 hover:opacity-100">Order</a>
              <a href="/admin" className="hover:opacity-100">Admin</a>
            </nav>
          </header>
          {children}
          <footer className="mt-16 text-xs opacity-60">
            © {new Date().getFullYear()} Pizza Drop — Orders open at 12:00 PM.
          </footer>
        </div>
      </body>
    </html>
  )
}
