import Image from './Image'
import SocialIcon from './social-icons'
import siteMetadata from '@/data/siteMetadata'
import { FaFilePdf, FaFileWord } from 'react-icons/fa'

const ProfileSection = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Image
        src="/static/images/avatar.jpg"
        alt="avatar"
        width={160}
        height={160}
        className="h-40 w-40 rounded-full object-cover"
      />
      <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
        Ketan Shukla
      </h3>
      <div className="text-gray-500 dark:text-gray-400">Python ETL Developer</div>
      <div className="flex space-x-3 pt-2">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
        <SocialIcon kind="github" href={siteMetadata.github} />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
        <SocialIcon kind="x" href={siteMetadata.twitter} />
        <a
          className="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          href="/static/cv/ketan_shukla_ETL_resume.pdf"
          aria-label="download resume pdf"
        >
          <FaFilePdf className="h-8 w-8 text-[#FF0000] hover:text-[#CC0000]" />
        </a>
        <a
          className="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          href="/static/cv/ketan_shukla_ETL_resume.docx"
          aria-label="download resume word"
        >
          <FaFileWord className="h-8 w-8 text-[#2B579A] hover:text-[#1E3F6F]" />
        </a>
      </div>
    </div>
  )
}

export default ProfileSection
