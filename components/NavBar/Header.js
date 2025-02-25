import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import Image from 'next/image'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import {
  HomeIcon,
  NewspaperIcon,
  CollectionIcon,
  SparklesIcon,
  SearchIcon,
  MenuIcon
} from '@heroicons/react/outline'
import Social from '../Common/Social.js'
// import ThemeSwitcher from './ThemeSwitcher.js'
// import LangSwitcher from './LangSwitcher.js'
import { motion } from 'framer-motion'

const NavBar = () => {
  const router = useRouter()
  const { locale } = useRouter()
  const t = lang[locale]
  const [showMenu, setShowMenu] = useState(false)

  let activeMenu = ''
  if (router.query.slug) {
    activeMenu = '/' + router.query.slug
  } else {
    activeMenu = router.pathname
  }

  const links = [
    {
      id: 0,
      name: t.NAV.INDEX,
      to: BLOG.path || '/',
      icon: <HomeIcon className='mb-1 inline-block h-5 w-5' />,
      show: true
    },
    {
      id: 1,
      name: t.NAV.NEWSLETTER,
      to: '/newsletter',
      icon: <NewspaperIcon className='mb-1 inline-block h-5 w-5' />,
      show: BLOG.pagesShow.newsletter
    },
    {
      id: 2,
      name: t.NAV.NOTES,
      to: '/notes',
      icon: <CollectionIcon className='mb-1 inline-block h-5 w-5' />,
      show: BLOG.pagesShow.notes
    },
    {
      id: 3,
      name: t.NAV.PROJECTS,
      to: '/projects',
      icon: <SparklesIcon className='mb-1 inline-block h-5 w-5' />,
      show: BLOG.pagesShow.projects
    },
    {
      id: 4,
      name: t.NAV.SEARCH,
      to: '/search',
      icon: <SearchIcon className='mb-1 inline-block h-5 w-5' />,
      show: true
    }
  ]
  return (
    <motion.div className='flex'>
      {/* Desktop Menu */}
      {/* <button className='header-button-container'> */}
      {/*   <span class=''>Pink to orange</span> */}
      {/* </button> */}

      <ul className='header-button-container hidden rounded p-1 md:flex md:gap-1'>
        {links.map(
          (link) =>
            link.show && (
              // eslint-disable-next-line react/jsx-key
              <li
                key={link.id}
                className={`${
                  activeMenu === link.to ? 'bg-slate-200 dark:bg-zinc-700' : ''
                } nav block cursor-pointer rounded-lg py-1 px-2 hover:bg-zinc-200 dark:hover:bg-zinc-900`}
              >
                <Link href={link.to} scroll={false}>
                  <div className='font-light'>
                    {link.icon}
                    <span className='m-1 inline-block'>{link.name}</span>
                  </div>
                </Link>
              </li>
            )
        )}
      </ul>

      {/* <ThemeSwitcher /> */}
      {/* <LangSwitcher /> */}

      {/* Mobile Phone Menu */}
      <div className='mr-2 block md:hidden '>
        <button
          type='button'
          aria-label='Menu'
          onClick={() => setShowMenu((showMenu) => !showMenu)}
          className='-mr-3 block cursor-pointer rounded-lg p-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 md:pb-3'
        >
          <MenuIcon className='mb-1 inline-block h-5 w-5' />
        </button>
        {showMenu && (
          <div className='supports-backdrop-blur:bg-white/60 absolute right-0 z-40 mr-4 mt-2 w-40 origin-top-right divide-y divide-zinc-200 rounded-md bg-white shadow-lg outline-none backdrop-blur dark:divide-zinc-600 dark:bg-zinc-700 '>
            <div className='py-1'>
              {links.map(
                (link) =>
                  link.show && (
                    <Link
                      passHref
                      key={link.id}
                      href={link.to}
                      scroll={false}
                      onClick={() => setShowMenu((showMenu) => !showMenu)}
                      className='block w-full justify-between px-4 py-2 font-light leading-5 hover:bg-zinc-100 dark:hover:bg-zinc-600'
                    >
                      {link.icon}
                      <span className='m-1'>{link.name}</span>
                    </Link>
                  )
              )}
            </div>
            <div className='px-4 py-4'>
              <Social />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

const Header = ({ navBarTitle, fullWidth }) => {
  const [showTitle, setShowTitle] = useState(false)
  const useSticky = !BLOG.autoCollapsedNavBar
  const navRef = useRef(null)
  const sentinalRef = useRef([])
  const handler = ([entry]) => {
    if (navRef && navRef.current && useSticky) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current?.classList.add('sticky-nav-full')
      } else {
        navRef.current?.classList.remove('sticky-nav-full')
      }
    } else {
      navRef.current?.classList.add('remove-sticky')
    }
  }
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (window.pageYOffset > 100) {
  //       setShowTitle(true)
  //     } else {
  //       setShowTitle(false)
  //     }
  //   })
  //
  //   // const obvserver = new window.IntersectionObserver(handler)
  //   // obvserver.observe(sentinalRef.current)
  //   // Don't touch this, I have no idea how it works XD
  //   // return () => {
  //   //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
  //   // }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [sentinalRef])
  return (
    <>
      <div className='observer-element h-4 md:h-12' ref={sentinalRef}></div>
      <div
        className={`sticky-nav m-auto mb-2 flex h-6 w-full flex-row items-center justify-between bg-opacity-60 py-8 md:mb-12 ${
          !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
        }`}
        id='sticky-nav'
        ref={navRef}
      >
        <div className='flex items-center'>
          <Link passHref href='/' scroll={false} aria-label={BLOG.title}>
            <motion.div className='my-2 fill-current hover:text-blue-500 dark:hover:text-blue-500 '>
              <Image
                src='/kisten-logo.png'
                width={64}
                height={64}
                alt='Rod Kisten'
                priority
              />
              {/* <svg */}
              {/*   xmlns='http://www.w3.org/2000/svg' */}
              {/*   width='24' */}
              {/*   height='24' */}
              {/*   viewBox='0 0 100 100' */}
              {/* > */}
              {/*   <g transform='translate(0.000000,100) scale(0.080000,-0.080000)'> */}
              {/*     <path d='M762 1203 c-6 -15 -13 -46 -17 -68 -4 -22 -13 -49 -20 -61 -15 -23 -122 -69 -257 -109 -49 -14 -88 -28 -88 -29 0 -2 33 -20 73 -40 49 -24 87 -36 115 -36 28 0 42 -4 42 -13 0 -34 -295 -517 -390 -639 -40 -52 -4 -28 86 56 49 46 105 109 124 141 19 31 64 98 100 148 77 108 125 186 173 283 20 39 46 78 59 86 13 8 69 34 126 58 107 45 118 57 110 111 -3 21 -10 25 -78 34 l-75 10 -5 45 c-5 42 -7 45 -36 48 -26 3 -33 -1 -42 -25z' /> */}
              {/*     <path d='M754 616 c-40 -19 -88 -39 -108 -46 -43 -14 -45 -30 -7 -72 25 -28 33 -31 80 -30 39 1 54 -3 58 -15 7 -18 -30 -140 -58 -192 -36 -67 6 -93 135 -84 l86 6 0 -26 c0 -14 -4 -37 -10 -51 -5 -14 -8 -26 -6 -26 7 0 110 68 129 85 11 10 17 30 17 60 0 62 -22 70 -150 57 -52 -5 -98 -6 -103 -2 -4 3 3 31 16 61 13 30 32 78 42 108 10 30 28 70 41 89 26 38 30 63 14 93 -17 31 -91 25 -176 -15z' /> */}
              {/*   </g> */}
              {/* </svg> */}
            </motion.div>
          </Link>
          {navBarTitle ? (
            <p
              className={`ml-2 font-medium ${
                !showTitle ? 'hidden' : 'hidden xl:block'
              }`}
            >
              {navBarTitle}
            </p>
          ) : (
            <p
              className={`ml-2 font-medium ${
                !showTitle ? 'hidden' : 'hidden xl:block'
              }`}
            >
              {BLOG.title},{' '}
              <span className='font-normal'>{BLOG.description}</span>
            </p>
          )}
        </div>
        <NavBar />
      </div>
    </>
  )
}

export default Header
