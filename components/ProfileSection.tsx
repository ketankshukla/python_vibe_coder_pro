import Image from './Image'
import SocialIcon from './social-icons'
import siteMetadata from '@/data/siteMetadata'
import { FaFilePdf, FaFileWord } from 'react-icons/fa'

const ProfileSection = () => {
  return (
    <div className="flex flex-col items-center space-y-3 sm:space-y-4">
      <Image
        src="/static/images/avatar.jpg"
        alt="avatar"
        width={160}
        height={160}
        className="h-32 w-32 sm:h-40 sm:w-40 rounded-full object-cover"
      />
      <h3 className="text-xl sm:text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
        Ketan Shukla
      </h3>
      <div className="text-gray-500 dark:text-gray-400">Python ETL Developer</div>
      <div className="flex flex-wrap justify-center gap-3 pt-2">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={7} />
        <SocialIcon kind="github" href={siteMetadata.github} size={7} />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={7} />
        <SocialIcon kind="x" href={siteMetadata.twitter} size={7} />
        <div className="flex items-center justify-center">
          <a
            className="text-sm text-gray-500 transition hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            href="/static/cv/ketan_shukla_ETL_resume.pdf"
            aria-label="download resume pdf"
            style={{ display: 'flex', alignItems: 'center', height: '1.75rem' }}
          >
            <FaFilePdf className="h-7 w-7 text-[#FF0000] hover:text-[#CC0000]" />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            className="text-sm text-gray-500 transition hover:text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
            href="/static/cv/ketan_shukla_ETL_resume.docx"
            aria-label="download resume word"
            style={{ display: 'flex', alignItems: 'center', height: '1.75rem' }}
          >
            <FaFileWord className="h-7 w-7 text-[#2B579A] hover:text-[#1E3F6F]" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProfileSection
