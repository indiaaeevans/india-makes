import './globals.css'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import Link from 'next/link'
import { ThemeProvider } from '@/contexts/ThemeContext'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import CherryBlossomBackground from '@/components/CherryBlossomBackground'
const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'India Makes',
  description: 'A creative, colorful, and whimsical minimalist website with a blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-stone-300 dark:bg-stone-800 text-gray-800 dark:text-gray-100 min-h-screen flex flex-col transition-colors duration-300 min-h-screen`}>
        <ThemeProvider>
          <CherryBlossomBackground />
          <div className="fixed top-0 left-0 w-full h-2 bg-stone-600"></div>
          <header className="py-6 mb-8">
            <nav className="container mx-auto px-4 flex justify-between items-center">
              <ul className="flex space-x-6 text-lg">
                <li><Link href="/" className="text-black dark:text-stone-200 hover:text-red-500 dark:hover:text-red-300 transition-colors">Home</Link></li>
                <li><Link href="/blog" className="text-black dark:text-stone-200 hover:text-red-500 dark:hover:text-red-300 transition-colors">Journal</Link></li>
                <li><Link href="/about" className="text-black dark:text-stone-200 hover:text-red-500 dark:hover:text-red-300 transition-colors">About</Link></li>
              </ul>
              <ThemeSwitcher />
            </nav>
          </header>
          <main className="container mx-auto px-4 flex-grow">
            {children}
          </main>
          <div className="w-full h-2 bg-red-500 mt-12 ribbon-pattern"></div>
          <footer className="font-mono py-6 mt-0 text-center text-sm text-black dark:text-red-200 bg-stone-600 dark:bg-stone-900 bg-opacity-50">
            © {new Date().getFullYear()} India Makes. All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}

