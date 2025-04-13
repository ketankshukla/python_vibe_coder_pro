'use client'

import { FaCode, FaDatabase, FaServer, FaTools, FaChartLine, FaRobot } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa6'

// Skill data type
export interface Skill {
  name: string
  icon: React.ReactNode
  level: number
}

// Default skills data
export const defaultSkills: Skill[] = [
  { name: 'Python', icon: <FaPython className="h-8 w-8 text-[#306998]" />, level: 95 },
  { name: 'ETL Pipelines', icon: <FaDatabase className="h-8 w-8 text-[#FFD43B]" />, level: 90 },
  { name: 'Data Engineering', icon: <FaServer className="h-8 w-8 text-[#306998]" />, level: 85 },
  { name: 'SQL & NoSQL', icon: <FaDatabase className="h-8 w-8 text-[#FFD43B]" />, level: 90 },
  { name: 'API Development', icon: <FaCode className="h-8 w-8 text-[#306998]" />, level: 80 },
  { name: 'Data Analysis', icon: <FaChartLine className="h-8 w-8 text-[#FFD43B]" />, level: 85 },
  { name: 'DevOps', icon: <FaTools className="h-8 w-8 text-[#306998]" />, level: 75 },
  { name: 'Machine Learning', icon: <FaRobot className="h-8 w-8 text-[#FFD43B]" />, level: 70 },
]

interface SkillsSectionProps {
  skills?: Skill[]
  title?: string
}

export default function SkillsSection({ 
  skills = defaultSkills,
  title = "Technical Skills"
}: SkillsSectionProps) {
  return (
    <div className="mb-16 rounded-xl bg-white p-8 shadow-md dark:bg-gray-800">
      <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">{title}</h2>
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
  )
}
