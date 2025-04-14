'use client'

import siteMetadata from '@/data/siteMetadata'
import { useEffect, useState, useCallback } from 'react'

interface ScrollTopAndCommentProps {
  alwaysShowScrollDown?: boolean
}

const ScrollTopAndComment = ({ alwaysShowScrollDown = false }: ScrollTopAndCommentProps) => {
  // Start with both buttons hidden to avoid hydration mismatch
  const [mounted, setMounted] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showScrollDown, setShowScrollDown] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect if we're on a mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Function to get accurate document height (works better on mobile)
  const getDocHeight = useCallback(() => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    )
  }, [])

  useEffect(() => {
    // Mark component as mounted
    setMounted(true)
    
    const checkVisibility = () => {
      // At top of page: show only down arrow
      // At bottom of page: show only up arrow
      // In middle: show both arrows
      
      const scrollPosition = window.scrollY || window.pageYOffset
      const windowHeight = window.innerHeight
      const docHeight = getDocHeight()
      
      const isAtTop = scrollPosition < 100
      const isAtBottom = windowHeight + scrollPosition >= docHeight - 100
      
      // Show up arrow if not at the top
      setShowScrollTop(!isAtTop)
      
      // Show down arrow if not at the bottom
      setShowScrollDown(!isAtBottom)
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
  }, [getDocHeight])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  const handleScrollDown = () => {
    // Use the more reliable document height calculation
    window.scrollTo({ 
      top: getDocHeight(), 
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

  // On mobile, adjust the layout when both buttons are visible
  const showBothButtons = showScrollDown && showScrollTop
  
  return (
    <div className={`fixed ${isMobile ? 'bottom-4 right-4' : 'bottom-8 right-8'} ${showBothButtons && isMobile ? 'flex-row' : 'flex-col'} flex gap-3 z-50`}>
      {showScrollDown && (
        <button
          aria-label="Scroll to Bottom"
          onClick={handleScrollDown}
          className={`rounded-full bg-gray-200 ${isMobile ? 'p-3' : 'p-2'} text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 shadow-md`}
        >
          <svg className={`${isMobile ? 'h-6 w-6' : 'h-5 w-5'}`} viewBox="0 0 20 20" fill="currentColor">
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
          className={`rounded-full bg-gray-200 ${isMobile ? 'p-3' : 'p-2'} text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 shadow-md`}
        >
          <svg className={`${isMobile ? 'h-6 w-6' : 'h-5 w-5'}`} viewBox="0 0 20 20" fill="currentColor">
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
