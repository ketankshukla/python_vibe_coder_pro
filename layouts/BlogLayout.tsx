'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from 'next/link'
import Tag from '@/components/Tag'
import SearchIcon from '@/components/SearchIcon'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Card from '@/components/Card'
import SearchBar from '@/components/SearchBar'

// Pagination interface removed

interface Props {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  // pagination prop removed
  children?: React.ReactNode
}

// Pagination component removed

export default function BlogLayout({
  posts,
  title,
  initialDisplayPosts = [],
  // pagination removed,
  children,
}: Props) {
  // Use all posts directly instead of pagination
  const displayPosts = posts
  const [searchQuery, setSearchQuery] = useState('')

  // Filter posts based on search
  const filteredPosts = displayPosts.filter((post) => {
    const searchLower = searchQuery.toLowerCase()
    const titleMatch = post.title.toLowerCase().includes(searchLower)
    const summaryMatch = post.summary?.toLowerCase().includes(searchLower)
    const tagsMatch = post.tags?.some(tag => tag.toLowerCase().includes(searchLower))

    return titleMatch || summaryMatch || tagsMatch
  })

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="container py-6">
          <div className="mb-4">
            <div className="relative">
              <div className="flex items-center">
                <div className="flex-1">
                  <SearchBar onSearch={setSearchQuery} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {filteredPosts.map((post) => (
              <Card
                key={post.slug}
                title={post.title}
                description={post.summary || ''}
                date={formatDate(post.date)}
                tags={post.tags}
                href={`/blog/${post.slug}`}
                status="Published"
                type="Blog"
              />
            ))}
          </div>

          {/* Pagination removed */}
        </div>
      </div>

      {children}
    </>
  )
}
