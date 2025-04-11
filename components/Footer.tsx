import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { FaFilePdf, FaFileWord } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
      <div className="flex space-x-3 pt-2">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
        <SocialIcon kind="github" href={siteMetadata.github} />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
        <SocialIcon kind="x" href={siteMetadata.twitter} />
        <a
          className="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          href="/static/cv/ketan-shukla-resume-ETL-final.pdf"
          aria-label="download resume pdf"
        >
          <FaFilePdf className="h-8 w-8 text-[#FF0000] hover:text-[#CC0000]" />
        </a>
        <a
          className="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          href="/static/cv/ketan-shukla-resume-ETL-final.docx"
          aria-label="download resume word"
        >
          <FaFileWord className="h-8 w-8 text-[#2B579A] hover:text-[#1E3F6F]" />
        </a>
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
