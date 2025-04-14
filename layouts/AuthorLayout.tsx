import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import ProfileSection from '@/components/ProfileSection'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="mb-12 items-start space-y-8 sm:space-y-2 md:grid md:grid-cols-3 md:gap-x-8 md:space-y-0">
          <div className="flex flex-col items-center pb-8 pt-8">
            <ProfileSection />
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert md:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
