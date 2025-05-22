import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Advanced admin dashboard with Tailwind and dark mode',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100`}>
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <aside className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 hidden md:block">
            <div className="p-6 text-2xl font-bold border-b dark:border-gray-700">
              Admin Panel
            </div>
            <nav className="flex flex-col gap-2 p-4">
              {[
                { href: '/', label: 'Dashboard' },
                { href: '/users', label: 'Users' },
                { href: '/bookings', label: 'Bookings' },
                { href: '/services', label: 'Services' },
                { href: '/reviews', label: 'Reviews' },
                { href: '/analytics', label: 'Analytics' },
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Main content area */}
          <div className="flex-1 flex flex-col">
            <header className="bg-white dark:bg-gray-800 shadow px-6 py-4 sticky top-0 z-10 flex justify-between items-center border-b dark:border-gray-700">
              <h1 className="text-xl font-semibold">Admin Dashboard</h1>
              <span className="text-sm">Hello, Admin</span>
            </header>

            <main className="flex-1 overflow-y-auto p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
