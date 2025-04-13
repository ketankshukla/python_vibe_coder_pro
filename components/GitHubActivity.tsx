'use client'

import Link from '@/components/Link'
import { FaArrowRight } from 'react-icons/fa6'

interface GitHubStats {
  repositories: string
  contributions: string
  stars: string
  followers: string
}

interface GitHubActivityProps {
  username: string
  githubUrl: string
  stats?: GitHubStats
  title?: string
}

export default function GitHubActivity({ 
  username, 
  githubUrl,
  stats = {
    repositories: '25+',
    contributions: '500+',
    stars: '100+',
    followers: '50+'
  },
  title = "GitHub Activity"
}: GitHubActivityProps) {
  return (
    <div className="mb-16 rounded-xl bg-white p-8 shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">{title}</h2>
        <Link
          href={githubUrl}
          className="text-[#306998] hover:text-[#306998]/80 dark:text-[#FFD43B] dark:hover:text-[#FFD43B]/80 inline-flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub Profile <FaArrowRight className="ml-1" />
        </Link>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
        <img 
          src={`https://ghchart.rshah.org/306998/${username}`} 
          alt={`${username}'s GitHub Contribution Chart`} 
          className="w-full dark:hidden"
        />
        <img 
          src={`https://ghchart.rshah.org/FFD43B/${username}`} 
          alt={`${username}'s GitHub Contribution Chart`} 
          className="hidden w-full dark:block"
        />
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-lg bg-gray-50 p-4 text-center dark:bg-gray-700">
          <h4 className="text-lg font-semibold text-[#306998] dark:text-[#FFD43B]">Repositories</h4>
          <p className="text-2xl font-bold">{stats.repositories}</p>
        </div>
        <div className="rounded-lg bg-gray-50 p-4 text-center dark:bg-gray-700">
          <h4 className="text-lg font-semibold text-[#306998] dark:text-[#FFD43B]">Contributions</h4>
          <p className="text-2xl font-bold">{stats.contributions}</p>
        </div>
        <div className="rounded-lg bg-gray-50 p-4 text-center dark:bg-gray-700">
          <h4 className="text-lg font-semibold text-[#306998] dark:text-[#FFD43B]">Stars</h4>
          <p className="text-2xl font-bold">{stats.stars}</p>
        </div>
        <div className="rounded-lg bg-gray-50 p-4 text-center dark:bg-gray-700">
          <h4 className="text-lg font-semibold text-[#306998] dark:text-[#FFD43B]">Followers</h4>
          <p className="text-2xl font-bold">{stats.followers}</p>
        </div>
      </div>
    </div>
  )
}
