import BLOG from '@/blog.config'
import { useState } from 'react'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'

import WechatPay from '@/components/Post/WechatPay'
import { MailIcon, ThumbUpIcon } from '@heroicons/react/outline'

const PostFooter = () => {
  const [showPay, setShowPay] = useState(false)
  const { locale } = useRouter()
  const router = useRouter()
  const t = lang[locale]

  return (
    <div className='w-full justify-between pb-12 font-medium text-gray-500 dark:text-gray-400'>
      <div className='relative flex flex-wrap items-center justify-center gap-3 rounded-lg bg-gray-100 px-4 py-3 dark:bg-gray-700 sm:flex-nowrap sm:justify-between'>
        <div className='mb-2 inline-block w-full max-w-screen-sm font-light text-sm sm:mb-0 sm:w-auto md:text-base'>
          {t.LAYOUT.NOTICE_TEXT}
        </div>
        <div className='flex flex-wrap gap-3'>
          {BLOG.showWeChatPay && (
            <button
              onClick={() => setShowPay((showPay) => !showPay)}
              className='flex gap-1 rounded-lg bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 dark:hover:text-gray-300'
            >
              <ThumbUpIcon className='relative flex h-5 w-5 cursor-pointer select-none flex-col items-center justify-center' />
              {t.LAYOUT.PAY_BUTTON}
            </button>
          )}
          <button
            onClick={() => router.push(BLOG.path || '/contact')}
            className='flex gap-1 rounded-lg bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300 hover:text-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 dark:hover:text-gray-300'
          >
            <MailIcon className='relative flex h-5 w-5 cursor-pointer select-none flex-col items-center justify-center' />
            {t.LAYOUT.NOTICE_BUTTON}
          </button>
        </div>
      </div>
      {showPay && <WechatPay />}
    </div>
  )
}

export default PostFooter
