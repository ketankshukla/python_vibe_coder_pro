'use client'

import Link from '@/components/Link'
import Card from '@/components/Card'
import { FaArrowRight } from 'react-icons/fa'

interface Project {
  title: string
  description: string
  imgSrc?: string
  href: string
  features?: string[]
  techStack?: string[]
  status?: string
}

interface FeaturedProjectsProps {
  projects: Project[]
  title?: string
  viewAllLink?: string
  maxProjects?: number
}

export default function FeaturedProjects({
  projects,
  title = "Featured Projects",
  viewAllLink = "/projects",
  maxProjects = 2
}: FeaturedProjectsProps) {
  const displayProjects = projects.slice(0, maxProjects)

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
        {displayProjects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            href={project.href}
            features={project.features}
            techStack={project.techStack}
            status={project.status}
            type="project"
          />
        ))}
      </div>
    </div>
  )
}
