import { Send_Flowers } from "next/font/google";
import Machine from '@/public//sewing-machine.svg'
import Shears from '@/public//shears.svg'
import Needle from '@/public//needle.svg'
import Iron from '@/public//iron.svg'
import Tape from '@/public//measuring-tape.svg'
const sendflowers = Send_Flowers({ weight: "400", subsets: ['latin'] });

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className={`${sendflowers.className} text-8xl mb-1`}
        style={{ color: 'var(--cherry-blossom)' }}>
        india makes
      </h1>
      <p className="text-2xl mb-8 text-purple-700 dark:text-purple-400">
        A sewing and all things creative journal
      </p>
      <div className="space-y-4">
        <p className="text-lg bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-30 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
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

