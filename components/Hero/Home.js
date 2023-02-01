import BLOG from '@/blog.config'
import Link from 'next/link'
// import Avatar from './NotionAvatar.js'
import Social from '../Common/Social.js'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { MailIcon, RssIcon, ClipboardCheckIcon } from '@heroicons/react/outline'
import dynamic from 'next/dynamic'
import { NotionRenderer } from 'react-notion-x'
import Image from 'next/image'
import BlurImage from '@/components/BlurImage'
import Tilt from 'react-parallax-tilt'

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


  const [ tiltAngleX, setTiltAngleX ]  = useState(0)
  const [ tiltAngleY, setTiltAngleY ]  = useState(0)


  const onMove = React.useCallback(({ tiltAngleXPercentageL: tiltAngleX, tiltAngleXPercentage: tiltAngleY }) => {
    setTiltAngleY(() => tiltAngleY);
    setTiltAngleX(() => tiltAngleX);
    // this.setState({ tiltAngleX, tiltAngleY });
  }, []);

  const clickCopy = async () => {
    setShowCopied(true)
    navigator.clipboard.writeText(BLOG.link + '/feed')
    setTimeout(() => {
      setShowCopied(false)
    }, 1000)
  }

  return (
    <>
      <div className='container mx-auto mb-10 flex flex-col items-center px-5 py-2 md:flex-row'>
        <div className='mb-6 flex flex-col text-left md:mb-0 md:w-3/5 md:items-start'>
          <Tilt
            className="track-on-window"
            perspective={500}
            onMove={onMove}
            // glareEnable={true}
            // glareMaxOpacity={0.75}
            // glarePosition="all"
            scale={1.02}
            trackOnWindow={true}
            style={{
            '--tilt--angle-x': tiltAngleX, '--tilt--angle-y': tiltAngleY,
            }}
          >
          <h1 className='inner-element text-display font-display leading-[90%] text-3xl text-9xl' style={
            {'--tilt--angle-x': tiltAngleX, '--tilt--angle-y': tiltAngleY}
          }>
            ROD <br />
            KISTEN
          </h1>
          <h2 style={{backgroundPosition: 'var(--tilt--angle-x) var(--tilt--angle-y)'}} className='bg-[center_top_var(--tilt-angle-x)] text-display bg-gradient-to-r from-purple-400 via-blue-500 to-pink-600 bg-clip-text font-display leading-[90%] text-transparent text-6xl'>
            WELCOME TO MY WORLD
          </h2>
          </Tilt>
          <NotionRenderer
            className='md:ml-0'
            recordMap={blockMap}
            components={{ Collection, Image: Image }}
          />
          <Social />
          <div className='mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center'>
            <Link passHref href='/contact' scroll={false} legacyBehavior>
              <button className='inline-flex items-center rounded-lg bg-gray-100 py-3 px-5 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'>
                <MailIcon className='inline-block h-7 w-7 text-gray-600 dark:text-day' />
                <span className='ml-4 flex flex-col items-start leading-none'>
                  <span className='mb-1 text-gray-600 text-xs dark:text-day'>
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
                className='inline-flex items-center rounded-lg bg-gray-200 py-3 px-5 dark:bg-gray-600'
              >
                <ClipboardCheckIcon className='inline-block h-7 w-7 text-gray-600 dark:text-day' />
                <span className='ml-4 flex flex-col items-start leading-none'>
                  <span className='mb-1 text-gray-600 text-xs dark:text-day'>
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
                className='inline-flex items-center rounded-lg bg-gray-100 py-3 px-5 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
              >
                <RssIcon className='inline-block h-7 w-7 text-gray-600 dark:text-day' />
                <span className='ml-4 flex flex-col items-start leading-none'>
                  <span className='mb-1 text-gray-600 text-xs dark:text-day'>
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
            className={`w-[500px] relative transform`}
            // className={`w-[500px] h-[500px] relative plaiceholder-[/rod-circle-transparent.png] bg-url-[/rod-circle-transparent.png] transform scale-110 filter blur-2xl z-[-1] `}
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
