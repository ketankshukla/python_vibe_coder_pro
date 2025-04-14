import Image from './Image'
import Link from './Link'
import { useState } from 'react'

interface CardProps {
  title: string
  description: string
  imgSrc?: string
  href?: string
  features?: string[]
  techStack?: string[]
  status?: string
  type?: string
  date?: string
  tags?: string[]
}

const Card = ({ title, description, imgSrc, href, features, techStack, status, type, date, tags }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const statusColors: { [key: string]: string } = {
    Active: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    Completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    InProgress: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    Published: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  }

  const typeColors: { [key: string]: string } = {
    Personal: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    Work: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    Client: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    Blog: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02]">
      {imgSrc && (
        <div className="aspect-w-16 aspect-h-9">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                width={544}
                height={306}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              width={544}
              height={306}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
        </div>
      )}
      <div className="p-6">
        <h2 className="mb-2 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`} className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors duration-200">
              {title}
            </Link>
          ) : (
            <span className="text-yellow-600 dark:text-yellow-400">{title}</span>
          )}
        </h2>
        {date && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        )}
        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-gray-100">Project Status & Type</h3>
          <div className="flex items-center gap-2 mb-4">
            {status && (
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[status] ?? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}>
                {status}
              </span>
            )}
            {type && (
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${typeColors[type] ?? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}>
                {type}
              </span>
            )}
          </div>
        </div>
        <p className="prose text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {description}
        </p>
        {(features?.length || techStack?.length) && (
          <div className="space-y-4">
            {features?.length && (
              <div>
                <h3 className="text-sm font-semibold mb-2 text-yellow-600 dark:text-yellow-400">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {features.map((feature, index) => (
                    <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {techStack?.length && (
              <div>
                <h3 className="text-sm font-semibold mb-2 text-yellow-600 dark:text-yellow-400">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        {tags?.length && (
          <div className="mt-4">
            <h3 className="text-sm font-semibold mb-2 text-yellow-600 dark:text-yellow-400">{type === 'Blog' ? 'Categories' : 'Tags'}</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
        {href && (
          <Link href={href} className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
            {type === 'Blog' ? 'Read More' : 'View Project'}
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Card
