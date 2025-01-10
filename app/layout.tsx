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
      <body className={`${quicksand.className} text-gray-800 dark:text-gray-100 min-h-screen flex flex-col transition-colors duration-300`}>
        <ThemeProvider>
          <CherryBlossomBackground />
          <div className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400"></div>
          <header className="py-6 mb-8">
            <nav className="container mx-auto px-4 flex justify-between items-center">
              <ul className="flex space-x-6 text-lg">
                <li><Link href="/" className="text-pink-600 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-300 transition-colors">Home</Link></li>
                <li><Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">Journal</Link></li>
                <li><Link href="/about" className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors">About</Link></li>
              </ul>
              <ThemeSwitcher />
            </nav>
          </header>
          <main className="container mx-auto px-4 flex-grow">
            {children}
          </main>
          <footer className="py-6 mt-8 text-center text-sm bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 dark:from-blue-900 dark:via-purple-900 dark:to-blue-900 text-purple-700/50 dark:text-purple-300">
            © {new Date().getFullYear()} India Makes. All rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}

