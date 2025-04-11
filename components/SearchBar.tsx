'use client'

import { useState } from 'react'
import XIcon from './XIcon'

interface SearchBarProps {
  onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="flex items-center">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
            onSearch(e.target.value)
          }}
          className="w-full px-3 py-1.5 text-sm rounded-md border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#FFD43B] dark:focus:ring-[#FFD43B] focus:border-transparent dark:bg-gray-800"
        />
        {searchQuery && (
          <button
            onClick={() => {
              setSearchQuery('')
              onSearch('')
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-[#FFD43B] dark:hover:text-[#FFD43B]"
          >
            <XIcon className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  )
}
