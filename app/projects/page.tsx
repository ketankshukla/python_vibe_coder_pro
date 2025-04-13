import ProjectLayout from '@/layouts/ProjectLayout'
import projectsData from '@/data/projectsData'
import { genPageMetadata } from 'app/seo'

// Projects are now loaded with infinite scrolling

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
  // No pagination or initial slicing needed for infinite scrolling

  return (
    <ProjectLayout
      projects={projects}
      title="Projects"
    >
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      </div>
    </ProjectLayout>
  )
}
