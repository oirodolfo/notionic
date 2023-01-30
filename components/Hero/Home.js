import BLOG from '@/blog.config'
import Link from 'next/link'
// import Avatar from './NotionAvatar.js'
import Social from '../Common/Social.js'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { MailIcon, RssIcon, ClipboardCheckIcon } from '@heroicons/react/outline'
import dynamic from 'next/dynamic'
import { NotionRenderer } from 'react-notion-x'
import Image from 'next/image'

const Collection = dynamic(
  () =>
    import('react-notion-x/build/third-party/collection').then(
      (m) => m.Collection
    ),
  { ssr: true }
)

const Hero = ({ blockMap }) => {
  const [showCopied, setShowCopied] = useState(false)
  const { locale } = useRouter()
  const t = lang[locale]

  const clickCopy = async () => {
    setShowCopied(true)
    navigator.clipboard.writeText(BLOG.link + '/feed')
    setTimeout(() => {
      setShowCopied(false)
    }, 1000)
  }

  return (
    <>
      <div className='container mx-auto flex px-5 py-2 mb-10 md:flex-row flex-col items-center'>
        <div className='flex flex-col md:w-3/5 md:items-start mb-6 md:mb-0 text-left'>
          <h1 className="font-display text-display text-9xl text-3xl leading-[90%]">ROD <br/>KISTEN</h1>
          <h2 className="leading-[90%] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-500 to-pink-600 font-display text-display text-6xl">WELCOME TO MY WORLD</h2>
          <NotionRenderer
            className='md:ml-0'
            recordMap={blockMap}
            components={{ Collection }}
          />
          <Social />
          <div className='flex flex-col sm:flex-row sm:justify-center gap-4 mt-6'>
            <Link passHref href='/contact' scroll={false} legacyBehavior>
              <button className='bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 inline-flex py-3 px-5 rounded-lg items-center'>
                <MailIcon className='inline-block text-gray-600 dark:text-day h-7 w-7' />
                <span className='ml-4 flex items-start flex-col leading-none'>
                  <span className='text-xs text-gray-600 dark:text-day mb-1'>
                    {t.HERO.HOME.CONTACT_BUTTON_DES}
                  </span>
                  <span className='font-medium'>
                    {t.HERO.HOME.CONTACT_BUTTON}
                  </span>
                </span>
              </button>
            </Link>
            {showCopied ? (
              <button
                disabled
                className='bg-gray-200 dark:bg-gray-600 inline-flex py-3 px-5 rounded-lg items-center'
              >
                <ClipboardCheckIcon className='inline-block text-gray-600 dark:text-day h-7 w-7' />
                <span className='ml-4 flex items-start flex-col leading-none'>
                  <span className='text-xs text-gray-600 dark:text-day mb-1'>
                    {t.HERO.RSS_BUTTON_DES_COPIED}
                  </span>
                  <span className='font-medium'>
                    {t.HERO.RSS_BUTTON_COPIED}
                  </span>
                </span>
              </button>
            ) : (
              <button
                onClick={() => clickCopy()}
                className='bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 inline-flex py-3 px-5 rounded-lg items-center'
              >
                <RssIcon className='inline-block text-gray-600 dark:text-day h-7 w-7' />
                <span className='ml-4 flex items-start flex-col leading-none'>
                  <span className='text-xs text-gray-600 dark:text-day mb-1'>
                    {t.HERO.RSS_BUTTON_DES}
                  </span>
                  <span className='font-medium'>{t.HERO.HOME.RSS_BUTTON}</span>
                </span>
              </button>
            )}
          </div>
        </div>
        {/*     align-self: flex-start;
    margin-top: 3rem; */}
        <div className='w-2/5 self-start md:mt-4'>
          <Image
            src={'/rod-circle-transparent.png'}
            alt={"Rod Kisten's avatar"}
            width={500}
            height={500}
          />
          {/* <Avatar className='text-gray-600 dark:text-gray-300' /> */}
        </div>
      </div>
    </>
  )
}

export default Hero
