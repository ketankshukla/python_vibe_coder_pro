export interface Project {
  title: string
  description: string
  href: string
  date?: string
  features?: string[]
  techStack?: string[]
  status?: 'Active' | 'Completed'
  type?: 'Personal' | 'Work' | 'Client'
}

const projectsData: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js, Tailwind CSS, and TypeScript. Features a blog section with MDX support and GitHub Discussions integration for comments. The site showcases a clean, responsive design with dark mode support and optimized performance.',
    href: 'https://github.com/ketankshukla/python_vibe_coder_pro',
    date: '2024-12-11T14:15:00',
    features: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX', 'GitHub Discussions'],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX', 'GitHub Discussions'],
    status: 'Completed',
    type: 'Personal'
  },
  {
    title: 'Weather Project',
    description: 'A weather application that displays current weather conditions for any city using the OpenWeather API. Built with Python and modern web technologies, this project showcases real-time weather updates and temperature trends.',
    href: 'https://github.com/ketankshukla/project_weather',
    date: '2024-11-11T14:15:00',
    features: ['Python', 'API Integration', 'Weather Data'],
    techStack: ['Python', 'OpenWeather API', 'HTML/CSS', 'JavaScript'],
    status: 'Completed',
    type: 'Personal'
  },
  {
    title: 'ETL Pipeline for Data Warehouse',
    description: 'An ETL pipeline using Python and Apache Airflow for data extraction, transformation, and loading into a data warehouse. Implements robust error handling and logging.',
    href: 'https://github.com/ketankshukla/data-warehouse-etl',
    date: '2025-03-01T10:00:00',
    features: ['Python', 'ETL', 'Apache Airflow', 'Data Warehouse', 'Data Engineering'],
    techStack: ['Python', 'Apache Airflow', 'PostgreSQL', 'AWS S3', 'Pandas'],
    status: 'Completed',
    type: 'Personal'
  },
  {
    title: 'Log Analysis & Monitoring System',
    description: 'A Python-based log analysis system that processes server logs, extracts performance metrics, and implements anomaly detection using statistical methods.',
    href: 'https://github.com/ketankshukla/log_analysis_system',
    date: '2025-02-15T10:00:00',
    features: ['Python', 'Log Analysis', 'Regex', 'Pandas', 'SQLite', 'Monitoring', 'Security', 'ETL'],
    techStack: ['Python', 'Regex', 'Pandas', 'SQLite', 'SMTP', 'Statistical Analysis'],
    status: 'Completed',
    type: 'Personal'
  }
]

export default projectsData
