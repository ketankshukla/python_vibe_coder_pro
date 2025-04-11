'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Project } from '@/data/projectsData'
import Link from 'next/link'
import Tag from '@/components/Tag'
import SearchIcon from '@/components/SearchIcon'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Card from '@/components/Card'

// Simple search icon component
// const SearchIcon = () => (
//   <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//   </svg>
// )

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface Props {
  projects: Project[]
  title: string
  initialDisplayProjects?: Project[]
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

export default function ProjectLayout({
  projects,
  title,
  initialDisplayProjects = [],
  pagination,
  children,
}: Props) {
  const displayProjects = initialDisplayProjects.length > 0 ? initialDisplayProjects : projects
  const [searchQuery, setSearchQuery] = useState('')

  // Filter projects based on search
  const filteredProjects = displayProjects.filter((project) => {
    const searchLower = searchQuery.toLowerCase()
    const titleMatch = project.title.toLowerCase().includes(searchLower)
    const descriptionMatch = project.description.toLowerCase().includes(searchLower)
    const featuresMatch = project.features?.some(feature => feature.toLowerCase().includes(searchLower))

    return titleMatch || descriptionMatch || featuresMatch
  })

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="container py-12">
          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-[#FFD43B] focus:border-[#FFD43B] sm:text-sm"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => {
              const { title, description, href, date, features, techStack, status, type } = project
              return (
                <Card
                  key={title}
                  title={title}
                  description={description}
                  href={href}
                  date={date ? formatDate(date) : undefined}
                  features={features}
                  techStack={techStack}
                  status={status}
                  type={type}
                />
              )
            })}
          </div>
        </div>
      </div>
      {pagination && pagination.totalPages > 1 && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
      {children}
    </>
  )
}
