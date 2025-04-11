import ProjectLayout from '@/layouts/ProjectLayout'
import projectsData from '@/data/projectsData'
import { genPageMetadata } from 'app/seo'

const PROJECTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Projects' })

export default function ProjectsPage() {
  const projects = projectsData
  const pageNumber = 1
  const initialDisplayProjects = projects.slice(
    PROJECTS_PER_PAGE * (pageNumber - 1),
    PROJECTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(projects.length / PROJECTS_PER_PAGE),
  }

  return (
    <ProjectLayout
      projects={projects}
      initialDisplayProjects={initialDisplayProjects}
      pagination={pagination}
      title="Projects"
    />
  )
}
