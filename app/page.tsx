import Machine from '@/public//sewing-machine.svg'
import Shears from '@/public//shears.svg'
import Needle from '@/public//needle.svg'
import Iron from '@/public//iron.svg'
import Tape from '@/public//measuring-tape.svg'

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto py-16 text-center">
      <h1 className={`text-6xl text-6xl sm:text-8xl mb-1 text-red-500 dark:text-red-300`}>
        india<span className="font-bold makes">/makes</span>
      </h1>
      <p className="text-2xl mb-8 text-black dark:text-lime-100">
        A sewing and all things creative journal
      </p>
      <div className="space-y-4">
        <p className="text-lg bg-white dark:bg-stone-900 bg-opacity-50 dark:bg-opacity-50 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          Coming soon...
        </p>
      </div>
      <div className="mt-12 flex justify-center space-x-4 text-4xl">
        {[Tape, Shears, Machine, Needle, Iron].map((Icon, index) => (
          <span key={index} className="animate-bounce" style={{ animationDelay: `${index * 0.1}s` }}>
            <Icon width={40} height={40} />
          </span>
        ))}
      </div>
    </div>
  )
}

