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
    year: '2025 (Expected)',
    title: 'Certificate in Data Science',
    company: 'San Diego City College',
    description: 'Currently pursuing a certificate in Data Science with a focus on Python for Data Science, Database Management, and Data Visualization.',
    icon: <FaGraduationCap className="h-6 w-6 text-white" />,
    iconBg: '#306998',
    skills: ['Python for Data Science', 'Database Management', 'Data Visualization']
  },
  {
    id: 2,
    year: '2024',
    title: 'E-commerce Sales ETL Pipeline',
    company: 'Portfolio Project',
    description: 'Developed a comprehensive data pipeline for extracting, transforming, and loading e-commerce sales data from multiple platforms and formats. Implemented versatile extractors supporting diverse data sources.',
    icon: <FaDatabase className="h-6 w-6 text-white" />,
    iconBg: '#FFD43B',
    skills: ['Python', 'Pandas', 'SQLAlchemy', 'PyPDF', 'Data Pipelines']
  },
  {
    id: 3,
    year: '2024',
    title: 'Log Analysis System',
    company: 'Portfolio Project',
    description: 'Developed a Python-based log analysis system that processes server logs, extracts performance metrics, and identifies potential security threats using regex pattern matching and statistical methods.',
    icon: <FaCode className="h-6 w-6 text-white" />,
    iconBg: '#306998',
    skills: ['Python', 'regex', 'Pandas', 'SQLite', 'Data Analysis']
  },
  {
    id: 4,
    year: '2023',
    title: 'Data Warehouse ETL',
    company: 'Portfolio Project',
    description: 'Engineered a modular ETL framework for transferring data from multiple source systems to a central data warehouse with configurable extractors for various data sources.',
    icon: <FaDatabase className="h-6 w-6 text-white" />,
    iconBg: '#FFD43B',
    skills: ['Python', 'ETL', 'Data Warehousing', 'SQL', 'Data Modeling']
  },
  {
    id: 5,
    year: '2023',
    title: 'COVID-19 ETL Pipeline',
    company: 'Portfolio Project',
    description: 'Engineered a comprehensive Python ETL pipeline that extracts COVID-19 data from multiple sources including CSV files, JSON data, REST APIs, and web scraping.',
    icon: <FaPython className="h-6 w-6 text-white" />,
    iconBg: '#306998',
    skills: ['Python', 'ETL', 'Data Processing', 'API Integration', 'Web Scraping']
  },
  {
    id: 6,
    year: '2023',
    title: 'Financial Market ETL',
    company: 'Portfolio Project',
    description: 'Designed and implemented a comprehensive ETL pipeline for processing financial market data from multiple sources with data transformation components that calculate advanced financial metrics.',
    icon: <FaCode className="h-6 w-6 text-white" />,
    iconBg: '#FFD43B',
    skills: ['Python', 'Pandas', 'Financial Data', 'ETL', 'Data Validation']
  },
  {
    id: 7,
    year: '2023',
    title: 'Certificate in Python Development',
    company: 'San Diego City College',
    description: 'Completed a certificate program in Python Development, focusing on core Python programming concepts and applications.',
    icon: <FaCertificate className="h-6 w-6 text-white" />,
    iconBg: '#306998',
    skills: ['Python', 'Programming', 'Software Development']
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
