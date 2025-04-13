import BlogLayout from '@/layouts/BlogLayout'
import { allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from '../seo'
import { sortBlogPostsByDateAndTime } from '@/lib/utils'

// Posts are now loaded with infinite scrolling

export const metadata = genPageMetadata({ title: 'Blog' })

export default function BlogPage() {
  const posts = allCoreContent(sortBlogPostsByDateAndTime(allBlogs))
  // No pagination or initial slicing needed for infinite scrolling

  return (
    <BlogLayout
      posts={posts}
      title="Blog"
    />
  )
}
