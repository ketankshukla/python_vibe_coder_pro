import { genPageMetadata } from 'app/seo'
import ResumeContent from '@/components/ResumeContent'

export const metadata = genPageMetadata({ title: 'Resume' })

export default function ResumePage() {
  return (
    <div className="resume-page">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5 page-title-section">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Resume
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          My professional experience and qualifications
        </p>
      </div>

      <div className="container py-12">
        <div className="resume-container">
          <ResumeContent />
        </div>
      </div>
    </div>
  )
}

