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
import SearchBar from '@/components/SearchBar'

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
            {filteredProjects.map((project) => {
              const { title, description, href, date, features, techStack, status, type } = project
              return (
                <Card
                  key={project.href}
                  title={project.title}
                  description={project.description}
                  date={project.date ? formatDate(project.date) : undefined}
                  tags={project.features || []}
                  href={project.href}
                  status={project.status || 'Active'}
                  type={project.type || 'Project'}
                  features={project.features}
                  techStack={project.techStack}
                />
              )
            })}
          </div>

          {pagination && pagination.totalPages > 1 && (
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
