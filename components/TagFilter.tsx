'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface TagFilterProps {
  tags: string[];
}

export default function TagFilter({ tags }: TagFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedTags, setSelectedTags] = useState<string[]>(
    searchParams.get('tags')?.split(',') || []
  )

  const handleTagClick = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag]
    setSelectedTags(newSelectedTags)

    const params = new URLSearchParams(searchParams)
    if (newSelectedTags.length > 0) {
      params.set('tags', newSelectedTags.join(','))
    } else {
      params.delete('tags')
    }
    params.set('page', '1') // Reset to first page when changing tags
    router.push(`/blog?${params.toString()}`)
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Filter by Tags</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedTags.includes(tag)
                ? 'bg-purple-500 text-white'
                : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-purple-200 dark:hover:bg-purple-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}

