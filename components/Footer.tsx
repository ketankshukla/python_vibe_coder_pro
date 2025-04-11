import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
        </div>
        <div className="text-3xl font-semibold sm:text-2xl md:text-3xl">
            <span className="text-[#FFD43B] dark:text-[#FFD43B]">Python</span>{''}
            <span className="text-[#306998] dark:text-[#306998]">VibeCoder</span>
          </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          ❤️ Created with love by Ketan Shukla ❤️
        </div>
      </div>
    </footer>
  )
}
