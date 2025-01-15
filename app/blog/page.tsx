import Link from 'next/link'
import { posts, getAllTags } from '../data/posts'
import Pagination from '@/components/Pagination'
import TagFilter from '@/components/TagFilter'
import Needle from '@/public//needle.svg'
import { Send_Flowers } from 'next/font/google';

const sendflowers = Send_Flowers({ weight: "400", subsets: ['latin'] });

const POSTS_PER_PAGE = 6

export default async function Blog(props: { searchParams: Promise<{ page?: string, tags?: string }> }) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams.page) || 1
  const selectedTags = searchParams.tags ? searchParams.tags.split(',') : []

  const filteredPosts = selectedTags.length > 0
    ? posts.filter(post => post.tags.some(tag => selectedTags.includes(tag)))
    : posts

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  const allTags = getAllTags()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className={`${sendflowers.className} text-6xl font-bold mb-8 text-center`}>
        Journal
      </h1>
      <TagFilter tags={allTags} />
      <div className="space-y-12 mb-12">
        {currentPosts.map((post, index) => (
          <article key={post.id} className="bg-white dark:bg-stone-900 bg-opacity-70 dark:bg-opacity-50 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center mb-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-stone-200 dark:bg-transparent`}>
                <Needle
                  width={48}
                  height={48}
                />
              </div>
              <h2 className="text-2xl font-semibold ml-4">
                <Link href={`/blog/${post.id}`} className="text-gray-800 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-300 transition-colors">
                  {post.title}
                </Link>
              </h2>
            </div>
            <p className="text-stone-700 dark:text-stone-300 mb-4">{post.date}</p>
            <p className="text-lg text-stone-700 dark:text-stone-200 mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}

function getIconBackground(index: number) {
  const backgrounds = [
    'bg-red-500 dark:bg-transparent',
    'bg-lime-200 dark:bg-lime-200',
    'bg-cyan-800 dark:bg-transparent',
    'bg-rose-900 dark:bg-transparent',
    // 'bg-orange-400 dark:bg-transparent'
  ]
  return backgrounds[index % backgrounds.length]
}

