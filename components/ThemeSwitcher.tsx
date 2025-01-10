'use client'

import { useTheme } from '@/contexts/ThemeContext'
import CherryBlossom from '@/public//cherry-blossom.svg'

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-20 h-10 rounded-full p-1 transition-colors duration-300 ${
        theme === 'light'
          ? 'bg-gradient-to-r from-purple-100 to-blue-300'
          : 'bg-gradient-to-r from-purple-800 to-purple-900'
      }`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className="sr-only">{theme === 'light' ? 'Dark' : 'Light'} mode</span>
      
      {/* Labels */}
      <span className={`absolute left-2 top-1/2 -translate-y-1/2 text-xs font-medium transition-colors ${
        theme === 'light' ? 'text-pink-900/50' : 'text-transparent'
      }`}>
        DARK
      </span>
      <span className={`absolute right-2 top-1/2 -translate-y-1/2 text-xs font-medium transition-colors ${
        theme === 'light' ? 'text-transparent' : 'text-purple-200/50'
      }`}>
        LIGHT
      </span>

      {/* Sliding cherry blossom */}
      <div
        className={`absolute top-1 w-8 h-8 rounded-full flex items-center justify-center transform transition-all duration-300 ease-spring ${
          theme === 'light'
            ? 'translate-x-10 text-pink-600'
            : 'translate-x-0 text-purple-200'
        }`}
      >
        <CherryBlossom
        style={{ 'color': 'var(--cherry-blossom)' }}
          width={24}
          height={24}
        />
      </div>
    </button>
  )
}

