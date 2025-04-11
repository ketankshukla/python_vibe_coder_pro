import { allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import { sortBlogPostsByDateAndTime } from '../lib/utils'

export default async function Page() {
  const sortedPosts = sortBlogPostsByDateAndTime(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
