'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { genPageMetadata } from '../../seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function TagPage() {
  const router = useRouter()
  
  useEffect(() => {
    router.push('/projects')
  }, [router])

  return null
}
