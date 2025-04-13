'use client'

import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'

// Import our new components
import HeroSection from '@/components/HeroSection'
import FeaturedPosts from '@/components/FeaturedPosts'
import FeaturedProjects from '@/components/FeaturedProjects'
import CareerTimeline from '@/components/CareerTimeline'
import SkillsSection from '@/components/SkillsSection'
import GitHubActivity from '@/components/GitHubActivity'
import TestimonialsSection from '@/components/TestimonialsSection'
import NewsletterSection from '@/components/NewsletterSection'

export default function Home({ posts }) {
  // Get top 2 blog posts
  const topPosts = posts.slice(0, 2)
  
  // Get top 2 projects
  const topProjects = projectsData.slice(0, 2)

  return (
    <>
      {/* Hero Section */}
      <HeroSection 
        name="Ketan Shukla"
        title="Python Developer & ETL Specialist"
        description="Hi, I'm Ketan Shukla. I specialize in building robust ETL pipelines and data-driven applications using Python. With expertise in data engineering and automation, I help organizations transform raw data into valuable insights."
        imageSrc="/static/images/avatar.jpg"
        email={siteMetadata.email}
        githubUrl={siteMetadata.github}
        linkedinUrl={siteMetadata.linkedin}
      />
      
      {/* Featured Blog Posts */}
      <FeaturedPosts 
        posts={topPosts}
        title="Featured Blog Posts"
        viewAllLink="/blog"
      />
      
      {/* Featured Projects */}
      <FeaturedProjects 
        projects={topProjects}
        title="Featured Projects"
        viewAllLink="/projects"
      />
      
      {/* Career Timeline */}
      <CareerTimeline 
        title="Career Journey"
      />
      
      {/* Skills Section */}
      <SkillsSection 
        title="Technical Skills"
      />
      
      {/* GitHub Activity */}
      <GitHubActivity 
        username="ketankshukla"
        githubUrl={siteMetadata.github}
        title="GitHub Activity"
      />
      
      {/* Testimonials */}
      <TestimonialsSection 
        title="What People Say"
      />
      
      {/* Newsletter Subscription */}
      <NewsletterSection 
        title="Stay Updated"
        description="Subscribe to my newsletter for the latest articles, tutorials, and project updates."
      />
    </>
  )
}