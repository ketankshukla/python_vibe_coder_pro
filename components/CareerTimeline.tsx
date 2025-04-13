'use client'

import { useEffect, useRef, useState } from 'react'
import { FaBriefcase, FaGraduationCap, FaDatabase, FaCode, FaCertificate } from 'react-icons/fa'
import { FaBuildingColumns, FaPython } from 'react-icons/fa6'

// Timeline data type
export interface TimelineItem {
  id: number
  year: string
  title: string
  company: string
  description: string
  icon: React.ReactNode
  iconBg: string
  skills: string[]
}

// Default timeline data
export const defaultTimelineData: TimelineItem[] = [
  {
    id: 1,
    year: '2023 - Present',
    title: 'Senior ETL Developer',
    company: 'DataFlow Solutions',
    description: 'Leading the development of enterprise ETL pipelines using Python, Apache Airflow, and AWS services. Reduced data processing time by 40% and implemented real-time data validation.',
    icon: <FaBriefcase className="h-6 w-6 text-white" />,
    iconBg: '#306998',
    skills: ['Python', 'Apache Airflow', 'AWS', 'Data Engineering']
  },
  {
    id: 2,
    year: '2021 - 2023',
    title: 'Data Engineer',
    company: 'Tech Innovations Inc.',
    description: 'Designed and implemented data pipelines for business intelligence and analytics. Created automated workflows for data extraction, transformation, and loading from multiple sources.',
    icon: <FaDatabase className="h-6 w-6 text-white" />,
    iconBg: '#FFD43B',
    skills: ['ETL', 'SQL', 'Python', 'Data Modeling']
  },
  {
    id: 3,
    year: '2020',
    title: 'AWS Certified Data Analytics Specialist',
    company: 'Certification',
    description: 'Earned AWS certification demonstrating expertise in designing and implementing AWS services to derive value from data.',
    icon: <FaCertificate className="h-6 w-6 text-white" />,
    iconBg: '#306998',
    skills: ['AWS', 'Big Data', 'Analytics']
  },
  {
    id: 4,
    year: '2019 - 2021',
    title: 'Python Developer',
    company: 'DataCraft Systems',
    description: 'Developed and maintained Python applications for data processing and analysis. Created RESTful APIs and implemented automated testing frameworks.',
    icon: <FaPython className="h-6 w-6 text-white" />,
    iconBg: '#FFD43B',
    skills: ['Python', 'Django', 'Flask', 'API Development']
  },
  {
    id: 5,
    year: '2018',
    title: 'Master of Science in Data Science',
    company: 'University of Technology',
    description: 'Graduated with honors. Specialized in data engineering and machine learning. Thesis on optimizing ETL processes for big data applications.',
    icon: <FaGraduationCap className="h-6 w-6 text-white" />,
    iconBg: '#306998',
    skills: ['Data Science', 'Machine Learning', 'Statistics']
  },
  {
    id: 6,
    year: '2016 - 2018',
    title: 'Junior Software Developer',
    company: 'StartUp Innovations',
    description: 'Developed web applications and internal tools. Gained experience in full-stack development and agile methodologies.',
    icon: <FaCode className="h-6 w-6 text-white" />,
    iconBg: '#FFD43B',
    skills: ['JavaScript', 'Python', 'Web Development']
  },
  {
    id: 7,
    year: '2016',
    title: 'Bachelor of Science in Computer Science',
    company: 'Tech University',
    description: 'Graduated with distinction. Focus on software engineering and database systems.',
    icon: <FaBuildingColumns className="h-6 w-6 text-white" />,
    iconBg: '#306998',
    skills: ['Computer Science', 'Algorithms', 'Database Systems']
  }
]

interface CareerTimelineProps {
  data?: TimelineItem[]
  title?: string
}

export default function CareerTimeline({ 
  data = defaultTimelineData,
  title = "Career Journey"
}: CareerTimelineProps) {
  // State for timeline animation
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)
  
  // Handle intersection observer for timeline animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get the item id from the data attribute
            const id = parseInt((entry.target as HTMLElement).dataset.id || '0')
            setVisibleItems((prev) => {
              if (!prev.includes(id)) {
                return [...prev, id].sort((a, b) => a - b)
              }
              return prev
            })
          }
        })
      },
      { threshold: 0.2 } // Trigger when 20% of the item is visible
    )

    // Get all timeline items
    const timelineItems = document.querySelectorAll('.timeline-item')
    timelineItems.forEach((item) => {
      observer.observe(item)
    })

    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item)
      })
    }
  }, [])

  return (
    <div className="mb-16 rounded-xl bg-white p-8 shadow-md dark:bg-gray-800">
      <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">{title}</h2>
      <div className="relative" ref={timelineRef}>
        {/* Timeline center line */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-gradient-to-b from-[#306998] to-[#FFD43B] md:left-[120px] md:translate-x-0"></div>
        
        {/* Timeline items */}
        <div className="space-y-12">
          {data.map((item) => {
            const isVisible = visibleItems.includes(item.id)
            return (
              <div 
                key={item.id} 
                data-id={item.id}
                className={`timeline-item relative flex flex-col md:flex-row transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                {/* Year - for mobile it's above, for desktop it's to the left */}
                <div className="mb-4 flex justify-center md:absolute md:left-0 md:top-0 md:w-[100px] md:justify-end">
                  <div className="font-medium text-[#306998] dark:text-[#FFD43B]">{item.year}</div>
                </div>
                
                {/* Icon */}
                <div className="absolute left-1/2 -translate-x-1/2 transform md:left-[120px] md:translate-x-0">
                  <div 
                    className="flex h-12 w-12 items-center justify-center rounded-full" 
                    style={{ backgroundColor: item.iconBg }}
                  >
                    {item.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="ml-0 mt-16 md:ml-[160px] md:mt-0">
                  <div className="rounded-lg bg-gray-50 p-6 shadow-sm dark:bg-gray-700">
                    <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                    <p className="mb-4 text-sm font-medium text-[#306998] dark:text-[#FFD43B]">{item.company}</p>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">{item.description}</p>
                    
                    {/* Skills used */}
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, index) => (
                        <span 
                          key={index} 
                          className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-600 dark:text-gray-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
