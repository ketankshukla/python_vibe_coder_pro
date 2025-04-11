import Link from 'next/link'
import { slug } from 'github-slugger'

interface Props {
  text: string
  index?: number
}

const Tag = ({ text, index = 0 }: Props) => {
  const tagColor =
    index % 2 === 0
      ? 'text-[#FFD43B] dark:text-[#FFD43B] hover:text-[#FFD43B]/80 dark:hover:text-[#FFD43B]/80'
      : 'text-[#306998] dark:text-[#306998] hover:text-[#306998]/80 dark:hover:text-[#306998]/80'

  return (
    <Link href={`/tags/${slug(text)}`} className={`mr-3 text-sm font-medium uppercase ${tagColor}`}>
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
