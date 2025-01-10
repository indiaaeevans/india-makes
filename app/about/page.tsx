import Chococat from '@/public//chococat.svg'

export default function About() {
  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-50 rounded-lg p-8 shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 dark:from-pink-400 dark:to-purple-400">
        About
      </h1>
      <div className="prose dark:prose-invert prose-lg mx-auto">
        <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">
          I'm a software engineer by trade, but a creative at heart. I'm currently exploring ideas around the intersection of UX and sewing pattern design to make patterns more adaptable, enjoyable to use, and accessible to a variety of home sewers.
        </p>
        <p className="text-xl text-gray-700 dark:text-gray-200 mb-8">
          I hope you enjoy my little corner of the internet 😊.
        </p>
        <div className="flex justify-center space-x-4 text-4xl">
          <Chococat width="300" height="300"/>
        </div>
      </div>
    </div>
  )
}