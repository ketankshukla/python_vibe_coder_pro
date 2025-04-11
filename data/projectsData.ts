export interface Project {
  title: string
  description: string
  href: string
  date?: string
  tags?: string[]
}

const projectsData: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio website built with Next.js, Tailwind CSS, and TypeScript. Features a blog section with MDX support and GitHub Discussions integration for comments.',
    href: 'https://github.com/ketankshukla/python_vibe_coder_pro',
    date: '2025-04-11T14:15:00',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX', 'GitHub Discussions']
  },
  {
    title: 'Weather Project',
    description: 'This project shows the weather of a given city',
    href: 'https://github.com/ketankshukla/project_weather',
    date: '2025-04-11T14:15:00',
    tags: ['Python', 'API Integration', 'Weather Data']
  },
  {
    title: 'ETL Pipeline for Data Warehouse',
    description: 'Developed and maintained an ETL pipeline using Python and Apache Airflow to extract, transform, and load data from various sources into a data warehouse. Implemented data validation, error handling, and logging mechanisms to ensure data integrity and reliability.',
    href: 'https://github.com/ketankshukla/etl-pipeline',
    date: '2024-03-01T10:00:00',
    tags: ['Python', 'ETL', 'Apache Airflow', 'Data Warehouse', 'Data Engineering']
  },
  {
    title: 'CSV Data Processing System',
    description: 'Created a Python-based system to process large CSV files efficiently. Implemented memory optimization techniques, batch processing, and error handling to ensure smooth data processing. The system can handle files with millions of records while maintaining optimal performance.',
    href: 'https://github.com/ketankshukla/csv-processing-system',
    date: '2024-01-15T09:00:00',
    tags: ['Python', 'CSV Processing', 'Memory Optimization', 'Batch Processing', 'Data Engineering']
  }
]

export default projectsData
