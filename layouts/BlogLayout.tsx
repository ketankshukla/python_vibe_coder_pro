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

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface Props {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
  children?: React.ReactNode
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()

  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `${pathname}` : `${pathname}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`${pathname}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function BlogLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
  children,
}: Props) {
  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts
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

          {pagination && (
            <Pagination
              totalPages={pagination.totalPages}
              currentPage={pagination.currentPage}
            />
          )}
        </div>
      </div>

      {children}
    </>
  )
}
