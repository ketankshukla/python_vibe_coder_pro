'use client'

import { useState } from 'react'

interface NewsletterSectionProps {
  title?: string
  description?: string
  successMessage?: string
  buttonText?: string
  loadingText?: string
}

export default function NewsletterSection({
  title = "Stay Updated",
  description = "Subscribe to my newsletter for the latest articles, tutorials, and project updates.",
  successMessage = "Thanks for subscribing! You'll receive updates on new content and projects.",
  buttonText = "Subscribe",
  loadingText = "Subscribing..."
}: NewsletterSectionProps) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [subscribing, setSubscribing] = useState(false)
  
  // Handle newsletter subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribing(true)
    
    // Simulate API call - in a real implementation, this would call an API endpoint
    setTimeout(() => {
      setSubscribed(true)
      setSubscribing(false)
    }, 1500)
  }

  return (
    <div className="mb-16 rounded-xl bg-gradient-to-r from-[#306998] to-[#FFD43B] p-8 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold">{title}</h2>
        <p className="mb-8">{description}</p>
        
        {subscribed ? (
          <div className="rounded-lg bg-white bg-opacity-20 p-6">
            <svg className="mx-auto h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="mt-4 text-xl font-medium">Thanks for subscribing!</p>
            <p className="mt-2">{successMessage}</p>
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
              {subscribing ? loadingText : buttonText}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
