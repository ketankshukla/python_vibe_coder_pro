'use client'

import Image from '@/components/Image'

// Testimonial data type
export interface Testimonial {
  quote: string
  author: string
  position: string
  avatar: string
}

// Default testimonials data
export const defaultTestimonials: Testimonial[] = [
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

interface TestimonialsSectionProps {
  testimonials?: Testimonial[]
  title?: string
}

export default function TestimonialsSection({ 
  testimonials = defaultTestimonials,
  title = "What People Say"
}: TestimonialsSectionProps) {
  return (
    <div className="mb-16 rounded-xl bg-white p-8 shadow-md dark:bg-gray-800">
      <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">{title}</h2>
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
  )
}
