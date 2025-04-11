import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { slug } from 'github-slugger'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

export default async function Page() {
  const tagCounts = tagData as Record<string, number>
  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            <span className="text-[#FFD43B] dark:text-[#FFD43B]">Ta</span>
            <span className="text-[#306998] dark:text-[#306998]">gs</span>
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {Object.keys(tagCounts)
            .sort((a, b) => tagCounts[b] - tagCounts[a])
            .map((t, index) => {
              return (
                <div key={t} className="mb-2 mr-5 mt-2">
                  <Tag text={t} index={index} />
                  <Link
                    href={`/tags/${slug(t)}`}
                    className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                    aria-label={`View posts tagged ${t}`}
                  >
                    {` (${tagCounts[t]})`}
                  </Link>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}
