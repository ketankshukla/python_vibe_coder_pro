'use client'

import siteMetadata from '@/data/siteMetadata'
import { useEffect, useState } from 'react'

interface ScrollTopAndCommentProps {
  alwaysShowScrollDown?: boolean
}

const ScrollTopAndComment = ({ alwaysShowScrollDown = false }: ScrollTopAndCommentProps) => {
  const [showCommentButton, setShowCommentButton] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showScrollDown, setShowScrollDown] = useState(false)

  useEffect(() => {
    const checkVisibility = () => {
      // Check comments visibility (only on pages with comments)
      const commentSection = document.getElementById('comment')
      if (commentSection) {
        const rect = commentSection.getBoundingClientRect()
        setShowCommentButton(rect.top > window.innerHeight || rect.bottom < 0)
      } else {
        setShowCommentButton(false)
      }

      // Check scroll position for up arrow
      setShowScrollTop(window.scrollY > 100)
      
      // Check if we're not at the bottom of the page for down arrow
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
      setShowScrollDown(!isAtBottom && (alwaysShowScrollDown || window.scrollY < 100))
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
  }, [alwaysShowScrollDown])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  const handleScrollToComment = () => {
    const commentSection = document.getElementById('comment')
    if (commentSection) {
      commentSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  const handleScrollDown = () => {
    window.scrollTo({ 
      top: window.scrollY + window.innerHeight * 0.8, 
      behavior: 'smooth' 
    })
  }

  if (!showCommentButton && !showScrollTop && !showScrollDown) {
    return null
  }

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-50">
      {siteMetadata.comments?.provider && showCommentButton && (
        <button
          aria-label="Scroll To Comment"
          onClick={handleScrollToComment}
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
      {showScrollDown && (
        <button
          aria-label="Scroll Down"
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
          aria-label="Scroll To Top"
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
