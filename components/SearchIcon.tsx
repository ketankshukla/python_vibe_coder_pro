'use client'

import { ReactNode } from 'react'

interface SearchIconProps {
  className?: string
  children?: ReactNode
}

export default function SearchIcon({ className, children }: SearchIconProps) {
  return (
    <div className={className}>
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      {children}
    </div>
  )
}
