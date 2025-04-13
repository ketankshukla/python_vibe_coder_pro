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
import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Card from '@/components/Card'
import SearchBar from '@/components/SearchBar'

interface Props {
  projects: Project[]
  title: string
  initialDisplayProjects?: Project[]
  pagination?: {
    totalPages: number
    currentPage: number
  }
  children?: React.ReactNode
}

export default function ProjectLayout({
  projects,
  title,
  initialDisplayProjects = [],
  pagination,
  children,
}: Props) {
  const [searchQuery, setSearchQuery] = useState('')
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([])
  const [projectsToShow, setProjectsToShow] = useState(6)
  const [isLoading, setIsLoading] = useState(false)
  const loaderRef = useRef<HTMLDivElement | null>(null)

  // Filter projects based on search
  const filteredProjects = projects.filter((project) => {
    const searchLower = searchQuery.toLowerCase()
    const titleMatch = project.title.toLowerCase().includes(searchLower)
    const descriptionMatch = project.description.toLowerCase().includes(searchLower)
    const featuresMatch = project.features?.some(feature => feature.toLowerCase().includes(searchLower))

    return titleMatch || descriptionMatch || featuresMatch
  })
  
  // If there's a search query, show all filtered results
  // Otherwise, use posts with infinite scrolling
  const allProjectsToUse = searchQuery ? filteredProjects : projects
  
  useEffect(() => {
    setVisibleProjects(allProjectsToUse.slice(0, projectsToShow))
  }, [allProjectsToUse, projectsToShow])
  
  // Reset projects to show when search query changes
  useEffect(() => {
    setProjectsToShow(6)
  }, [searchQuery])
  
  const loadMoreProjects = useCallback(() => {
    if (visibleProjects.length >= allProjectsToUse.length) return
    
    setIsLoading(true)
    // Simulate loading delay
    setTimeout(() => {
      setProjectsToShow(prev => prev + 6)
      setIsLoading(false)
    }, 500)
  }, [visibleProjects.length, allProjectsToUse.length])
  
  // Set up intersection observer for infinite scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries
        if (entry.isIntersecting && !isLoading && visibleProjects.length < allProjectsToUse.length) {
          loadMoreProjects()
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
  }, [loaderRef, isLoading, loadMoreProjects, visibleProjects.length, allProjectsToUse.length])

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
            {visibleProjects.map((project) => {
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

          {visibleProjects.length < allProjectsToUse.length && (
            <div ref={loaderRef} className="py-8 flex justify-center">
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-t-2 border-[#306998] rounded-full animate-spin"></div>
                  <span className="ml-2 text-gray-500 dark:text-gray-400">Loading more projects...</span>
                </div>
              ) : (
                <button 
                  onClick={loadMoreProjects}
                  className="px-4 py-2 bg-[#306998] text-white rounded-md hover:bg-[#306998]/90 transition-colors"
                >
                  Load More
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {children}
    </>
  )
}
