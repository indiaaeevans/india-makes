import { posts } from '../../data/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Machine from '@/public//sewing-machine.svg'
import Shears from '@/public//shears.svg'
import Needle from '@/public//needle.svg'
import Iron from '@/public//iron.svg'
import Tape from '@/public//measuring-tape.svg'
import Image from 'next/image'

export default async function BlogPost(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const post = posts.find(p => p.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-50 rounded-lg p-8 shadow-lg">
      <h1 className="text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 dark:from-pink-400 dark:to-purple-400">
        {post.title}
      </h1>
      <p className="text-purple-600 dark:text-purple-400 mb-4 text-center">{post.date}</p>
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {post.tags.map(tag => (
          <Link 
            key={tag} 
            href={`/blog?tags=${tag}`}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-purple-200 dark:hover:bg-purple-700 transition-colors"
          >
            {tag}
          </Link>
        ))}
      </div>
      <div className="prose dark:prose-invert prose-lg mx-auto">
        <div className="blog-post-image-container">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Blog post cover image"
            width={800}
            height={400}
            className="blog-post-image"
          />
          <div className="blog-post-image-caption">
            Image caption: A beautiful representation of {post.title}
          </div>
        </div>
        <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">{post.excerpt}</p>
        <p className="text-lg text-gray-700 dark:text-gray-200">
          This is where the full content of the blog post would go. For this example, we're just using the excerpt as placeholder content.
        </p>
        <div className="blog-post-image-container">
          <Image
            src="/placeholder.svg?height=300&width=600"
            alt="Additional blog post image"
            width={600}
            height={300}
            className="blog-post-image"
          />
          <div className="blog-post-image-caption">
            Image caption: Another relevant image for {post.title}
          </div>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-200">
          Here's some more content that would typically follow the image. In a real blog post, this would be filled with relevant information, examples, or further explanation of the topic.
        </p>
        <div className="mt-8 flex justify-center space-x-4 text-4xl">
        {[Tape, Shears, Machine, Needle, Iron].map((Icon, index) => (
          <span key={index} className="animate-bounce" style={{ animationDelay: `${index * 0.1}s` }}>
            <Icon width={40} height={40} />
          </span>
        ))}
        </div>
      </div>
    </div>
  )
}

