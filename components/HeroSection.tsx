'use client'

import Link from '@/components/Link'
import Image from '@/components/Image'
import { FaFilePdf, FaFileWord } from 'react-icons/fa'

interface HeroSectionProps {
  name?: string
  title?: string
  description?: string
  imageSrc?: string
  email?: string
  githubUrl?: string
  linkedinUrl?: string
  resumePdfUrl?: string
  resumeDocxUrl?: string
}

export default function HeroSection({
  name = "Ketan Shukla",
  title = "Python Developer & ETL Specialist",
  description = "Hi, I'm Ketan Shukla. I specialize in building robust ETL pipelines and data-driven applications using Python. With expertise in data engineering and automation, I help organizations transform raw data into valuable insights.",
  imageSrc = "/static/images/avatar.png",
  email = "",
  githubUrl = "",
  linkedinUrl = "",
  resumePdfUrl = "/static/cv/ketan_shukla_ETL_resume.pdf",
  resumeDocxUrl = "/static/cv/ketan_shukla_ETL_resume.docx"
}: HeroSectionProps) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex flex-col-reverse items-center md:flex-row md:justify-between md:gap-x-12">
        <div className="pt-6 md:pt-0 md:w-2/3">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            <span className="text-[#FFD43B] dark:text-[#FFD43B]">Python</span> Developer & <span className="text-[#306998] dark:text-[#306998]">ETL</span> Specialist
          </h1>
          <p className="mt-6 text-lg leading-7 text-gray-500 dark:text-gray-400">
            {description}
          </p>
          <div className="mt-8 flex space-x-4">
            <Link
              href="/about"
              className="rounded-lg bg-[#306998] px-4 py-2 text-sm font-medium text-white hover:bg-[#306998]/90 dark:hover:bg-[#306998]/80 focus:outline-none focus:ring-4 focus:ring-[#306998]/50"
            >
              About Me
            </Link>
            <Link
              href="/projects"
              className="rounded-lg bg-[#FFD43B] px-4 py-2 text-sm font-medium text-gray-900 hover:bg-[#FFD43B]/90 dark:hover:bg-[#FFD43B]/80 focus:outline-none focus:ring-4 focus:ring-[#FFD43B]/50"
            >
              View Projects
            </Link>
          </div>
          <div className="mt-6 flex space-x-3">
            {email && (
              <a
                href={`mailto:${email}`}
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-gray-700 hover:text-[#306998] dark:text-gray-400 dark:hover:text-[#FFD43B]"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-gray-700 hover:text-[#306998] dark:text-gray-400 dark:hover:text-[#FFD43B]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
            )}
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 text-gray-700 hover:text-[#306998] dark:text-gray-400 dark:hover:text-[#FFD43B]"
                >
                  <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
                </svg>
              </a>
            )}
            {resumePdfUrl && (
              <a
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href={resumePdfUrl}
                aria-label="download resume pdf"
              >
                <FaFilePdf className="h-6 w-6 text-[#FF0000] hover:text-[#CC0000]" />
              </a>
            )}
            {resumeDocxUrl && (
              <a
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href={resumeDocxUrl}
                aria-label="download resume word"
              >
                <FaFileWord className="h-6 w-6 text-[#2B579A] hover:text-[#1E3F6F]" />
              </a>
            )}
          </div>
        </div>
        <div className="flex justify-center md:w-1/3">
          <Image
            src={imageSrc}
            alt={name}
            width={300}
            height={300}
            className="h-48 w-48 rounded-full object-cover md:h-64 md:w-64"
          />
        </div>
      </div>
    </div>
  )
}
