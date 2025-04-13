'use client'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Card from '@/components/Card'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import { formatDateTime } from '@/lib/formatDate'
import projectsData from '@/data/projectsData'
import { FaFilePdf, FaFileWord, FaCode, FaDatabase, FaServer, FaTools, FaChartLine, FaRobot } from 'react-icons/fa'
import { FaArrowRight, FaPython } from 'react-icons/fa6'
import { useState } from 'react'

export default function Home({ posts }) {
  // Get top 2 blog posts
  const topPosts = posts.slice(0, 2)
  
  // Get top 2 projects
  const topProjects = projectsData.slice(0, 2)

  // State for newsletter form
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [subscribing, setSubscribing] = useState(false)
  
  // Skills data
  const skills = [
    { name: 'Python', icon: <FaPython className="h-8 w-8 text-[#306998]" />, level: 95 },
    { name: 'ETL Pipelines', icon: <FaDatabase className="h-8 w-8 text-[#FFD43B]" />, level: 90 },
    { name: 'Data Engineering', icon: <FaServer className="h-8 w-8 text-[#306998]" />, level: 85 },
    { name: 'SQL & NoSQL', icon: <FaDatabase className="h-8 w-8 text-[#FFD43B]" />, level: 90 },
    { name: 'API Development', icon: <FaCode className="h-8 w-8 text-[#306998]" />, level: 80 },
    { name: 'Data Analysis', icon: <FaChartLine className="h-8 w-8 text-[#FFD43B]" />, level: 85 },
    { name: 'DevOps', icon: <FaTools className="h-8 w-8 text-[#306998]" />, level: 75 },
    { name: 'Machine Learning', icon: <FaRobot className="h-8 w-8 text-[#FFD43B]" />, level: 70 },
  ]
  
  // Testimonials data
  const testimonials = [
    {
      quote: "Ketan's ETL expertise transformed our data infrastructure. His Python solutions cut processing time by 60%.",
      author: "Jane Smith",
      position: "CTO, DataTech Solutions",
      avatar: "/static/images/avatar.jpg"
    },
    {
      quote: "Working with Ketan on our data pipeline was exceptional. His attention to detail and problem-solving skills are outstanding.",
      author: "Michael Johnson",
      position: "Lead Data Engineer, Analytics Corp",
      avatar: "/static/images/avatar.jpg"
    },
    {
      quote: "Ketan delivered a complex ETL system that exceeded our expectations. His code is clean, well-documented, and highly maintainable.",
      author: "Sarah Williams",
      position: "VP of Engineering, DataFlow Inc",
      avatar: "/static/images/avatar.jpg"
    }
  ]
  
  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault()
    setSubscribing(true)
    
    // Simulate API call
    setTimeout(() => {
      setSubscribed(true)
      setSubscribing(false)
    }, 1500)
  }

  return (
    <>
      {/* Hero Section */}
      <div className="mb-12 md:mb-16">
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-between md:gap-x-12">
          <div className="pt-6 md:pt-0 md:w-2/3">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              <span className="text-[#FFD43B] dark:text-[#FFD43B]">Python</span> Developer & <span className="text-[#306998] dark:text-[#306998]">ETL</span> Specialist
            </h1>
            <p className="mt-6 text-lg leading-7 text-gray-500 dark:text-gray-400">
              Hi, I'm Ketan Shukla. I specialize in building robust ETL pipelines and data-driven applications using Python.
              With expertise in data engineering and automation, I help organizations transform raw data into valuable insights.
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
              <a
                href={`mailto:${siteMetadata.email}`}
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
              <a
                href={siteMetadata.github}
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
              <a
                href={siteMetadata.linkedin}
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
              <a
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="/static/cv/ketan_shukla_ETL_resume.pdf"
                aria-label="download resume pdf"
              >
                <FaFilePdf className="h-6 w-6 text-[#FF0000] hover:text-[#CC0000]" />
              </a>
              <a
                className="text-sm text-gray-500 transition hover:text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
                href="/static/cv/ketan_shukla_ETL_resume.docx"
                aria-label="download resume word"
              >
                <FaFileWord className="h-6 w-6 text-[#2B579A] hover:text-[#1E3F6F]" />
              </a>
            </div>
          </div>
          <div className="flex justify-center md:w-1/3">
            <Image
              src="/static/images/avatar.jpg"
              alt="Ketan Shukla"
              width={300}
              height={300}
              className="h-48 w-48 rounded-full object-cover md:h-64 md:w-64"
            />
          </div>
        </div>
      </div>

      {/* Featured Blog Posts Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Featured Blog Posts</h2>
          <Link
            href="/blog"
            className="text-[#306998] hover:text-[#306998]/80 dark:text-[#FFD43B] dark:hover:text-[#FFD43B]/80 inline-flex items-center"
          >
            View all posts <FaArrowRight className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {!topPosts.length && 'No posts found.'}
          {topPosts.map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <Card
                key={slug}
                title={title}
                description={summary || ''}
                date={date}
                tags={tags}
                href={`/blog/${slug}`}
                status="Published"
                type="Blog"
              />
            )
          })}
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-[#306998] hover:text-[#306998]/80 dark:text-[#FFD43B] dark:hover:text-[#FFD43B]/80 inline-flex items-center"
          >
            View all projects <FaArrowRight className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {topProjects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              date={project.date}
              features={project.features}
              techStack={project.techStack}
              href={project.href}
              status={project.status}
              type={project.type}
            />
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-16 rounded-xl bg-white p-8 shadow-md dark:bg-gray-800">
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Technical Skills</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
              <div className="mb-3">{skill.icon}</div>
              <h3 className="mb-2 text-lg font-medium">{skill.name}</h3>
              <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-600">
                <div 
                  className="h-2 rounded-full bg-gradient-to-r from-[#FFD43B] to-[#306998]" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="mt-1 text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub Activity Section */}
      <div className="mb-16 rounded-xl bg-white p-8 shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">GitHub Activity</h2>
          <Link
            href={siteMetadata.github}
            className="text-[#306998] hover:text-[#306998]/80 dark:text-[#FFD43B] dark:hover:text-[#FFD43B]/80 inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Profile <FaArrowRight className="ml-1" />
          </Link>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
          <img 
            src={`https://ghchart.rshah.org/306998/ketankshukla`} 
            alt="Ketan Shukla's GitHub Contribution Chart" 
            className="w-full dark:hidden"
          />
          <img 
            src={`https://ghchart.rshah.org/FFD43B/ketankshukla`} 
            alt="Ketan Shukla's GitHub Contribution Chart" 
            className="hidden w-full dark:block"
          />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-lg bg-gray-50 p-4 text-center dark:bg-gray-700">
            <h4 className="text-lg font-semibold text-[#306998] dark:text-[#FFD43B]">Repositories</h4>
            <p className="text-2xl font-bold">25+</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 text-center dark:bg-gray-700">
            <h4 className="text-lg font-semibold text-[#306998] dark:text-[#FFD43B]">Contributions</h4>
            <p className="text-2xl font-bold">500+</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 text-center dark:bg-gray-700">
            <h4 className="text-lg font-semibold text-[#306998] dark:text-[#FFD43B]">Stars</h4>
            <p className="text-2xl font-bold">100+</p>
          </div>
          <div className="rounded-lg bg-gray-50 p-4 text-center dark:bg-gray-700">
            <h4 className="text-lg font-semibold text-[#306998] dark:text-[#FFD43B]">Followers</h4>
            <p className="text-2xl font-bold">50+</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-16 rounded-xl bg-white p-8 shadow-md dark:bg-gray-800">
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">What People Say</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col rounded-lg bg-gray-50 p-6 dark:bg-gray-700">
              <div className="mb-4 flex-grow">
                <svg className="h-8 w-8 text-[#FFD43B]" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="mb-6 flex-grow text-gray-600 dark:text-gray-300">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mb-16 rounded-xl bg-gradient-to-r from-[#306998] to-[#FFD43B] p-8 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Stay Updated</h2>
          <p className="mb-8">Subscribe to my newsletter for the latest articles, tutorials, and project updates.</p>
          
          {subscribed ? (
            <div className="rounded-lg bg-white bg-opacity-20 p-6">
              <svg className="mx-auto h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="mt-4 text-xl font-medium">Thanks for subscribing!</p>
              <p className="mt-2">You'll receive updates on new content and projects.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="w-full sm:w-2/3">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full rounded-lg border-0 bg-white bg-opacity-20 px-4 py-3 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                disabled={subscribing}
                className="w-full rounded-lg bg-white px-6 py-3 font-medium text-[#306998] transition hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 disabled:opacity-70 sm:w-auto"
              >
                {subscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  )
}
