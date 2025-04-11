'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useEffect } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function Comments({ slug, title }: { slug: string; title: string }) {
  if (!siteMetadata.comments?.provider) {
    return null
  }

  // Use the pathname for the discussion to maintain consistency
  return <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
}
