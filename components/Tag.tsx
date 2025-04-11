'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { slug } from 'github-slugger'

interface Props {
  text: string
  index?: number
  onClick?: (tag: string) => void
  isProjectTag?: boolean
}

const Tag = ({ text, index = 0, onClick, isProjectTag = false }: Props) => {
  const tagColor =
    index % 2 === 0
      ? 'text-[#FFD43B] dark:text-[#FFD43B] hover:text-[#FFD43B]/80 dark:hover:text-[#FFD43B]/80'
      : 'text-[#306998] dark:text-[#306998] hover:text-[#306998]/80 dark:hover:text-[#306998]/80'

  const handleClick = () => {
    if (onClick) {
      onClick(text)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`mr-3 text-sm font-medium uppercase ${tagColor} cursor-pointer transition-colors duration-200 ${isProjectTag ? 'hover:bg-gray-50 dark:hover:bg-gray-800' : ''}`}
    >
      {text.split(' ').join('-')}
    </button>
  )
}

export default Tag
