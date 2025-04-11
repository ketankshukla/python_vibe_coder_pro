import { writeFileSync, mkdirSync, readFileSync } from 'fs'
import path from 'path'
import { slug } from 'github-slugger'
import { allBlogs } from '../.contentlayer/generated/index.mjs'
import siteMetadata from '../data/siteMetadata.js'
import { escape } from 'pliny/utils/htmlEscaper.js'

const generateRss = (config, posts, page = 'feed.xml') => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(config.title)}</title>
      <link>${config.siteUrl}/blog</link>
      <description>${escape(config.description)}</description>
      <language>${config.language}</language>
      <managingEditor>${config.email} (${config.author})</managingEditor>
      <webMaster>${config.email} (${config.author})</webMaster>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <atom:link href="${config.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts
        .map((post) => `
            <item>
              <guid>${config.siteUrl}/blog/${post.slug}</guid>
              <title>${escape(post.title)}</title>
              <link>${config.siteUrl}/blog/${post.slug}</link>
              <description>${escape(post.summary)}</description>
              <pubDate>${new Date(post.date).toUTCString()}</pubDate>
              <author>${config.email} (${config.author})</author>
              ${post.tags && post.tags.map((t) => `<category>${t}</category>`).join('')}
            </item>
          `)
        .join('')}
    </channel>
  </rss>
`

async function generate() {
  // RSS feed
  const publishPosts = allBlogs.filter((post) => !post.draft)
  if (publishPosts.length > 0) {
    const rss = generateRss(siteMetadata, publishPosts)
    writeFileSync('./public/feed.xml', rss)
  }

  // Tag data
  const tagCount = {}
  allBlogs.forEach((file) => {
    if (file.tags && !file.draft) {
      file.tags.forEach((tag) => {
        const formattedTag = slug(tag)
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1
        } else {
          tagCount[formattedTag] = 1
        }
      })
    }
  })
  writeFileSync('./app/tag-data.json', JSON.stringify(tagCount))
}

generate()
