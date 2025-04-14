import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import { formatDateTime } from '@/lib/formatDate'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
// ScrollTopAndComment is now handled globally in the main layout

// Edit URL function removed

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { slug: string; title: string; path?: string }
  prev?: { slug: string; title: string; path?: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, tags } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDateTime(date)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 md:grid md:grid-cols-4 md:gap-x-6 md:divide-y-0">
            <dl className="pb-10 pt-6 md:border-b md:border-gray-200 md:pt-11 md:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 md:block md:space-x-0 md:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width={38}
                          height={38}
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <dl className="whitespace-nowrap text-sm font-medium leading-5">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                              {author.twitter
                                .replace('https://twitter.com/', '@')
                                .replace('https://x.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 md:col-span-3 md:row-span-2 md:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">{children}</div>
              {siteMetadata.comments && (
                <div
                  className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300"
                  id="comment"
                >
                  <Comments slug={slug} title={title} />
                </div>
              )}
            </div>
            <footer>
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 md:col-start-1 md:row-start-2 md:divide-y">
                {tags && tags.length > 0 && (
                  <div className="py-4 md:py-8">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap justify-center gap-2 pt-4 md:justify-start">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="py-4 xl:py-8">
                    <h2 className="mb-2 text-center text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 xl:text-left">
                      Article Navigation
                    </h2>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:justify-between">
                      {prev && (
                        <div className="w-full sm:w-1/2 sm:pr-2">
                          <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <h3 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                              Next Article
                            </h3>
                            <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 truncate">
                              <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                            </div>
                          </div>
                        </div>
                      )}
                      {next && (
                        <div className="w-full sm:w-1/2 sm:pl-2">
                          <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-right">
                            <h3 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                              Previous Article
                            </h3>
                            <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 truncate">
                              <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
