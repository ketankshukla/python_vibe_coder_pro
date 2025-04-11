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
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Get all unique tags and their counts
  const tagCounts = projects.reduce((acc, project) => {
    (project.tags || []).forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1
    })
    return acc
  }, {} as Record<string, number>)

  // Get all unique tags
  const allTags = [...new Set(projects.flatMap((project) => project.tags || []))]

  // Filter projects based on search and selected filters
  const filteredProjects = displayProjects.filter((project) => {
    const searchLower = searchQuery.toLowerCase()
    const titleMatch = project.title.toLowerCase().includes(searchLower)
    const descriptionMatch = project.description.toLowerCase().includes(searchLower)
    const tagsMatch = project.tags?.some(tag => tag.toLowerCase().includes(searchLower))
    const tagFilter = !selectedTag || project.tags?.includes(selectedTag)
    const typeFilter = selectedType === null || project.type === selectedType
    const statusFilter = selectedStatus === null || project.status === selectedStatus

    return (titleMatch || descriptionMatch || tagsMatch) && tagFilter && typeFilter && statusFilter
  })

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag === 'All Projects' ? null : tag)
  }

  const handleTypeClick = (type: string) => {
    setSelectedType(type === 'All Types' ? null : type)
  }

  const handleStatusClick = (status: string) => {
    setSelectedStatus(status === 'All Status' ? null : status)
  }

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            <span className="text-[#FFD43B] dark:text-[#FFD43B]">Pro</span>
            <span className="text-[#306998] dark:text-[#306998]">jects</span>
          </h1>
        </div>
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
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Filters Column */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-2">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  <Tag text="All Projects" index={-1} onClick={() => handleTagClick('All Projects')} />
                  {allTags.map((tag, index) => (
                    <Tag 
                      key={tag} 
                      text={`${tag} (${tagCounts[tag]})`} 
                      index={index} 
                      onClick={() => handleTagClick(tag)} 
                    />
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Project Types</h2>
                <div className="flex flex-wrap gap-2">
                  <Tag text="All Types" index={-2} onClick={() => handleTypeClick('All Types')} />
                  <Tag text="Personal" index={0} onClick={() => handleTypeClick('Personal')} />
                  <Tag text="Work" index={1} onClick={() => handleTypeClick('Work')} />
                  <Tag text="Client" index={2} onClick={() => handleTypeClick('Client')} />
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Project Status</h2>
                <div className="flex flex-wrap gap-2">
                  <Tag text="All Status" index={-3} onClick={() => handleStatusClick('All Status')} />
                  <Tag text="Active" index={0} onClick={() => handleStatusClick('Active')} />
                  <Tag text="Completed" index={1} onClick={() => handleStatusClick('Completed')} />
                </div>
              </div>
            </div>
            {/* Projects Columns */}
            <div className="lg:col-span-2">
              <div className="grid gap-6 md:grid-cols-2">
                {filteredProjects.map((project) => {
                  const { title, description, href, date, tags, techStack, status, type } = project
                  return (
                    <article key={title} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                      <div className="p-6">
                        <div className="flex flex-col gap-4">
                          <div>
                            <h3 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link href={href} target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300">
                                {title}
                              </Link>
                            </h3>
                            <p className="mt-2 text-gray-500 dark:text-gray-400 line-clamp-2">
                              {description}
                            </p>
                            <div className="flex items-center gap-2 mt-4">
                              {date && (
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  {formatDate(date)}
                                </span>
                              )}
                              <div className="h-2" /> {/* Spacer div */}
                            </div>
                          </div>
                          {tags && tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {tags.map((tag, index) => (
                                <Tag
                                  key={index}
                                  text={tag}
                                  index={index}
                                />
                              ))}
                            </div>
                          )}
                          <div className="flex flex-wrap gap-2">
                            {techStack?.map((tech, index) => (
                              <Tag
                                key={index}
                                text={tech}
                                index={index}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
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
