'use client'

import Link from '@/components/Link'
import Card from '@/components/Card'
import { FaArrowRight } from 'react-icons/fa'

interface Post {
  title: string
  description: string
  imgSrc?: string
  href: string
  date?: string
  tags?: string[]
}

interface FeaturedPostsProps {
  posts: Post[]
  title?: string
  viewAllLink?: string
  maxPosts?: number
}

export default function FeaturedPosts({
  posts,
  title = "Featured Blog Posts",
  viewAllLink = "/blog",
  maxPosts = 2
}: FeaturedPostsProps) {
  const displayPosts = posts.slice(0, maxPosts)

  return (
    <div className="mb-16 rounded-xl bg-white p-8 shadow-md dark:bg-gray-800">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">{title}</h2>
        <Link
          href={viewAllLink}
          className="text-[#306998] hover:text-[#306998]/80 dark:text-[#FFD43B] dark:hover:text-[#FFD43B]/80 inline-flex items-center self-end sm:self-auto text-sm sm:text-base py-1 px-3 border border-[#306998] dark:border-[#FFD43B] rounded-md hover:bg-[#306998]/10 dark:hover:bg-[#FFD43B]/10 transition-colors"
        >
          View All <FaArrowRight className="ml-1" />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {displayPosts.map((post) => (
          <Card
            key={post.title}
            title={post.title}
            description={post.description}
            imgSrc={post.imgSrc}
            href={post.href}
            date={post.date}
            tags={post.tags}
            type="Blog"
          />
        ))}
      </div>
    </div>
  )
}
