import type { Blog } from 'contentlayer/generated'

export function sortBlogPostsByDateAndTime(posts: any[]): any[] {
  return posts.sort((a, b) => {
    // Parse dates to include time information
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    
    // Sort in descending order (newest first)
    return dateB.getTime() - dateA.getTime()
  })
}
