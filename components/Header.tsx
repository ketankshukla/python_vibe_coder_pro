'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Image from '@/components/Image'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  let headerClass = 'flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center">
          <div className="mr-2 sm:mr-3">
            <Image
              src="/static/images/logo.png"
              alt="Logo"
              width={64}
              height={64}
              className="h-10 w-auto rounded-xl sm:h-12 md:h-16"
              priority
            />
          </div>
          <div className="text-xl font-semibold sm:text-2xl md:text-3xl">
            <span className="text-[#FFD43B] dark:text-[#FFD43B]">Python</span>{''}
            <span className="text-[#306998] dark:text-[#306998]">VibeCoder</span>
          </div>
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-44 items-center space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-80 lg:max-w-full">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link, index) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`block text-lg font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#FFD43B] dark:bg-[#FFD43B] text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-md'
                      : 'text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300'
                  }`}
                >
                  {link.title}
                </Link>
              )
            })}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
