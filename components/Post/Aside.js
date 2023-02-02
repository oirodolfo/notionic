import BLOG from '@/blog.config'
import { useEffect, useState } from 'react'
import Link from 'next/link'

import WechatPay from '@/components/Post/WechatPay'
import {
  ThumbUpIcon,
  ChevronLeftIcon,
  ArrowUpIcon
} from '@heroicons/react/outline'

const Aside = ({ subPageTitle, frontMatter }) => {
  const [showPay, setShowPay] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [showSubPageTitle, setShowSubPageTitle] = useState(false)

  useEffect(() => {
    if (frontMatter.title !== subPageTitle) {
      setShowSubPageTitle(true)
    }
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 900) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [frontMatter, subPageTitle])
  return (
    <>
      <aside className='sticky hidden md:inset-y-1/2 md:ml-8 md:flex md:flex-col md:items-center md:self-start'>
        <div className='flex flex-col items-center text-center'>
          <div className='nav block grid gap-y-5 rounded-lg bg-zinc-100 p-2 dark:bg-zinc-700'>
            {BLOG.showWeChatPay && (
              <button
                onClick={() => setShowPay((showPay) => !showPay)}
                className='text-zinc-600 hover:text-zinc-400 dark:text-day dark:hover:text-zinc-400'
              >
                <ThumbUpIcon className='h-5 w-5' />
              </button>
            )}
            {showSubPageTitle && (
              <Link
                passHref
                href={`${BLOG.path}/${frontMatter.slug}`}
                scroll={false}
                className='text-zinc-600 hover:text-zinc-400 dark:text-day dark:hover:text-zinc-400'
              >
                <ChevronLeftIcon className='h-5 w-5' />
              </Link>
            )}
            {showButton && (
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='text-zinc-600 hover:text-zinc-400 dark:text-day dark:hover:text-zinc-400'
              >
                <ArrowUpIcon className='h-5 w-5' />
              </button>
            )}
          </div>
        </div>
      </aside>
      {showPay && <WechatPay />}
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='fixed bottom-5 right-5 z-10 inline-flex rounded-lg bg-zinc-200 p-2 shadow hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 md:hidden'
        >
          <ArrowUpIcon className='h-5 w-5 text-zinc-600 dark:text-day' />
        </button>
      )}
    </>
  )
}

export default Aside
