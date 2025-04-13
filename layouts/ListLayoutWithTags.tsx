'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDateTime } from '@/lib/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: {
    totalPages: number
    currentPage: number
  }
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [visiblePosts, setVisiblePosts] = useState<CoreContent<Blog>[]>([])
  const [postsToShow, setPostsToShow] = useState(10)
  const [isLoading, setIsLoading] = useState(false)
  const loaderRef = useRef<HTMLDivElement | null>(null)

  // Filter posts based on search query
  const filteredPosts = posts.filter((post) => {
    const searchTerms = searchQuery.toLowerCase()
    return (
      post.title.toLowerCase().includes(searchTerms) ||
      post.summary?.toLowerCase().includes(searchTerms) ||
      (post.tags?.some((tag) => tag.toLowerCase().includes(searchTerms)) ?? false)
    )
  })

  // If there's a search query, show all filtered results
  // Otherwise, use posts with infinite scrolling
  const allPostsToUse = searchQuery ? filteredPosts : posts
  
  useEffect(() => {
    setVisiblePosts(allPostsToUse.slice(0, postsToShow))
  }, [allPostsToUse, postsToShow])
  
  // Reset posts to show when search query changes
  useEffect(() => {
    setPostsToShow(10)
  }, [searchQuery])
  
  const loadMorePosts = useCallback(() => {
    if (visiblePosts.length >= allPostsToUse.length) return
    
    setIsLoading(true)
    // Simulate loading delay
    setTimeout(() => {
      setPostsToShow(prev => prev + 10)
      setIsLoading(false)
    }, 500)
  }, [visiblePosts.length, allPostsToUse.length])
  
  // Set up intersection observer for infinite scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries
        if (entry.isIntersecting && !isLoading && visiblePosts.length < allPostsToUse.length) {
          loadMorePosts()
        }
      },
      { threshold: 0.1 }
    )
    
    const currentLoaderRef = loaderRef.current
    if (currentLoaderRef) {
      observer.observe(currentLoaderRef)
    }
    
    return () => {
      if (currentLoaderRef) {
        observer.unobserve(currentLoaderRef)
      }
    }
  }, [loaderRef, isLoading, loadMorePosts, visiblePosts.length, allPostsToUse.length])

  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  return (
    <>
      <div>
        <div className="pb-6 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
        <div className="mb-6">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                const query = e.target.value
                setSearchQuery(query)
                // Reset pagination when search query changes
                if (query) {
                  router.push(`/blog`)
                }
              }}
              placeholder="Search posts..."
              className="w-full pl-10 pr-10 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD43B] dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:focus:ring-[#FFD43B]"
            />
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                router.push(`/blog`)
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex sm:space-x-24">
          <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
            <div className="px-6 py-4">
              {pathname.startsWith('/blog') ? (
                <h3 className="font-bold uppercase text-[#FFD43B] dark:text-[#FFD43B]">
                  All Posts
                </h3>
              ) : (
                <Link
                  href={`/blog`}
                  className="font-bold uppercase text-[#FFD43B] hover:text-[#FFD43B]/80 dark:text-[#FFD43B] dark:hover:text-[#FFD43B]/80"
                >
                  All Posts
                </Link>
              )}
              <ul>
                {sortedTags.map((t, index) => {
                  const tagColor =
                    index % 2 === 0
                      ? 'text-[#306998] hover:text-[#306998]/80 dark:text-[#306998] dark:hover:text-[#306998]/80'
                      : 'text-[#FFD43B] hover:text-[#FFD43B]/80 dark:text-[#FFD43B] dark:hover:text-[#FFD43B]/80'
                  return (
                    <li key={t} className="my-3">
                      {pathname.split('/tags/')[1] === slug(t) ? (
                        <h3 className={`inline px-3 py-2 text-sm font-bold uppercase ${tagColor}`}>
                          {`${t} (${tagCounts[t]})`}
                        </h3>
                      ) : (
                        <Link
                          href={`/tags/${slug(t)}`}
                          className={`px-3 py-2 text-sm font-medium uppercase ${tagColor}`}
                          aria-label={`View posts tagged ${t}`}
                        >
                          {`${t} (${tagCounts[t]})`}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div>
            <ul>
              {visiblePosts.map((post) => {
                const { path, date, title, summary, tags } = post
                return (
                  <li key={path} className="py-5">
                    <article className="flex flex-col space-y-2 xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date} suppressHydrationWarning>
                            {formatDateTime(date)}
                          </time>
                        </dd>
                      </dl>
                      <div className="space-y-3">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link href={`/${path}`} className="text-gray-900 dark:text-gray-100">
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags?.map((tag, index) => <Tag key={tag} text={tag} index={index} />)}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                    </article>
                  </li>
                )
              })}
            </ul>
            {visiblePosts.length < allPostsToUse.length && (
              <div ref={loaderRef} className="py-4 flex justify-center">
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-t-2 border-[#306998] rounded-full animate-spin"></div>
                    <span className="ml-2 text-gray-500 dark:text-gray-400">Loading more posts...</span>
                  </div>
                ) : (
                  <button 
                    onClick={loadMorePosts}
                    className="px-4 py-2 bg-[#306998] text-white rounded-md hover:bg-[#306998]/90 transition-colors"
                  >
                    Load More
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
