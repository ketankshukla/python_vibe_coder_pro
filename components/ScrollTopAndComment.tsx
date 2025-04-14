'use client'

import siteMetadata from '@/data/siteMetadata'
import { useEffect, useState } from 'react'

interface ScrollTopAndCommentProps {
  alwaysShowScrollDown?: boolean
}

const ScrollTopAndComment = ({ alwaysShowScrollDown = false }: ScrollTopAndCommentProps) => {
  // Start with both buttons hidden to avoid hydration mismatch
  const [mounted, setMounted] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showScrollDown, setShowScrollDown] = useState(false)

  useEffect(() => {
    // Mark component as mounted
    setMounted(true)
    
    const checkVisibility = () => {
      // At top of page: show down arrow, hide up arrow
      // At bottom of page: show up arrow, hide down arrow
      // In middle: hide both (we'll handle this differently)
      
      const isAtTop = window.scrollY < 100
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
      
      setShowScrollTop(!isAtTop)
      setShowScrollDown(isAtTop && !isAtBottom)
    }

    const handleWindowScroll = () => {
      checkVisibility()
    }

    // Check visibility on mount
    checkVisibility()

    window.addEventListener('scroll', handleWindowScroll)
    window.addEventListener('resize', checkVisibility)
    return () => {
      window.removeEventListener('scroll', handleWindowScroll)
      window.removeEventListener('resize', checkVisibility)
    }
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  const handleScrollDown = () => {
    window.scrollTo({ 
      top: document.body.scrollHeight, 
      behavior: 'smooth' 
    })
  }

  // Don't render anything until after client-side hydration is complete
  if (!mounted) {
    return null
  }
  
  // Only render if we have at least one button to show
  if (!showScrollTop && !showScrollDown) {
    return null
  }

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-50">
      {showScrollDown && (
        <button
          aria-label="Scroll to Bottom"
          onClick={handleScrollDown}
          className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 shadow-md"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      {showScrollTop && (
        <button
          aria-label="Scroll to Top"
          onClick={handleScrollTop}
          className="rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 shadow-md"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  )
}

export default ScrollTopAndComment
