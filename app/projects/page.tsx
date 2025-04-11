import ProjectLayout from '@/layouts/ProjectLayout'
import projectsData from '@/data/projectsData'
import { genPageMetadata } from 'app/seo'

const PROJECTS_PER_PAGE = 5

function sortProjectsByDate(projects: any[]) {
  return [...projects].sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateB - dateA
  })
}

export const metadata = genPageMetadata({ title: 'Projects' })

export default function ProjectsPage() {
  const projects = sortProjectsByDate(projectsData)
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
    >
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          <span className="text-[#FFD43B] dark:text-[#FFD43B]">Pro</span>
          <span className="text-[#306998] dark:text-[#306998]">jects</span>
        </h1>
      </div>
    </ProjectLayout>
  )
}
