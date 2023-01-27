import Link from 'next/link'
import BLOG from '@/blog.config'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import {
  BookOpenIcon,
  MailIcon,
  UserIcon,
  UsersIcon
} from '@heroicons/react/outline'
import Social from '../Common/Social.js'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import { links } from '@/lib/links'

const LinksComponent = (props) => {
  //
  // <Image
  //   src={link.thumbnail}
  //   height={16}
  //   width={16}
  //   className='w-[40px] rounded'
  //   alt={link.title}
  // />
  return (
    <>
      {links
        .filter(
          (link) => !!link.url || link.url === '' || link.type !== 'HEADER'
        )
        .map((link) => (
          <li key={`${link.id}`}>
            <Link
              href={link.url}
              className='flex backdrop-blur flex-row items-center p-2 text-base text-gray-900 rounded-lg bg-fuchsia-50/10 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'
              // className='w-full min-w-[120px] text-base font-medium no-underline dark:text-black text-white border-transparent bg-black dark:bg-white rounded md:leading-6 transition-all duration-300'

            >
              {/* icon */}

              <SocialIcon
                href={link.url}
                url={link.url}
                // src={link.thumbnail}
                height={16}
                width={16}
                bgColor={'#FFFFFF'}
                alt={link.title}
              />

              <span className='flex-1 ml-3 whitespace-nowrap truncate hover:text-clip'>
                {link.title}
              </span>
              {/* <span className='inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400'> */}
              {/*   Popular */}
              {/* </span> */}
            </Link>
          </li>
        ))}
    </>
  )
}

const Footer = ({ fullWidth }) => {
  const router = useRouter()
  const { locale } = useRouter()
  const t = lang[locale]

  let activeMenu = ''
  if (router.query.slug) {
    activeMenu = '/' + router.query.slug
  } else {
    activeMenu = router.pathname
  }

  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since

  const links = [
    {
      id: 0,
      name: t.NAV.ABOUT,
      to: BLOG.path || '/about',
      icon: <UserIcon className='inline-block mb-1 h-5 w-5' />,
      show: true
    },
    {
      id: 1,
      name: t.NAV.FRINEDS,
      to: '/friends',
      icon: <UsersIcon className='inline-block mb-1 h-5 w-5' />,
      show: BLOG.pagesShow.friends
    },
    {
      id: 2,
      name: t.NAV.BOOKS,
      to: '/books',
      icon: <BookOpenIcon className='inline-block mb-1 h-5 w-5' />,
      show: BLOG.pagesShow.books
    },
    {
      id: 3,
      name: t.NAV.CONTACT,
      to: '/contact',
      icon: <MailIcon className='inline-block mb-1 h-5 w-5' />,
      show: BLOG.pagesShow.contact
    }
  ]

  return (
    <motion.div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-600 dark:text-gray-300 transition-all ${
        !fullWidth ? 'max-w-3xl md:px-8' : 'px-4 md:px-24'
      }`}
    >
      <footer className='px-4 md:px-8 mx-auto w-full'>
        {/* <footer className='max-w-screen-2xl px-4 md:px-8 mx-auto'> */}
        <div className='flex flex-col md:flex-row justify-between items-center border-b dark:border-gray-600 py-1'>
          <ul className='flex flex-wrap justify-center md:justify-start md:gap-1'>
            {links.map(
              (link) =>
                link.show && (
                  <Link
                    passHref
                    key={link.id}
                    href={link.to}
                    scroll={false}
                    legacyBehavior
                  >
                    <li
                      key={link.id}
                      className={`${
                        activeMenu === link.to
                          ? 'bg-gray-200 dark:bg-gray-700'
                          : ''
                      } hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer rounded-lg block py-1 px-2 nav`}
                    >
                      <div className='font-light'>
                        {link.icon}
                        <span className='inline-block m-1'>{link.name}</span>
                      </div>
                    </li>
                  </Link>
                )
            )}
          </ul>
          <div className='hidden md:flex'>
            <Social />
          </div>
        </div>

        {/*  */}
        {/* My loved songs Spotify playlist */}
        <div className='w-full p-4 bg-white border rounded-lg shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700'>
          {/* <div className='sc-9fa30a12-1 iXFafK'> */}
          {/*   <div className='sc-9fa30a12-3 gPchcu'> */}
          {/*     <h2 className='gradient sunset-2'>Say hi!</h2> */}
          {/*     <p> */}
          {/*       Want to create something awesome? Or, you have any query? Drop an */}
          {/*       email or tweet */}
          {/*     </p> */}
          {/*     <div className='sc-9fa30a12-2 aUtVV'> */}
          {/*       <a */}
          {/*         href='mailto:hey@rodkisten.com?subject=Saying Hello!!!' */}
          {/*         className='gradient sunset-2' */}
          {/*       > */}
          {/*         <svg */}
          {/*           width={18} */}
          {/*           height={18} */}
          {/*           fill='currentColor' */}
          {/*           fillRule='evenodd' */}
          {/*           clipRule='evenodd' */}
          {/*           viewBox='0 0 24 24' */}
          {/*           className='email-icon' */}
          {/*           xmlns='http://www.w3.org/2000/svg' */}
          {/*         > */}
          {/*           <path d='M3.2 2C1.41665 2 0 3.48152 0 5.25V18.75C0 20.5185 1.41665 22 3.2 22H20.8C22.5834 22 24 20.5185 24 18.75V5.25C24 3.48152 22.5834 2 20.8 2H3.2ZM2.57921 4.18358C2.76312 4.06664 2.97707 4 3.2 4H20.8C21.0226 4 21.2363 4.06645 21.42 4.1831L11.9993 11.7197L2.57921 4.18358ZM2 6.28146V18.75C2 19.4565 2.56335 20 3.2 20H20.8C21.4366 20 22 19.4565 22 18.75V6.28037L12.624 13.7812C12.2588 14.0733 11.7398 14.0733 11.3746 13.7812L2 6.28146Z' /> */}
          {/*         </svg> */}
          {/*         hey@rodkisten.com */}
          {/*       </a> */}
          {/*       <a */}
          {/*         href='https://twitter.com/@KistenRod' */}
          {/*         className='gradient sky-3' */}
          {/*         rel='noopener noreferer' */}
          {/*         target='_bblank' */}
          {/*       > */}
          {/*         <svg */}
          {/*           width={18} */}
          {/*           height={18} */}
          {/*           fill='currentColor' */}
          {/*           fillRule='evenodd' */}
          {/*           clipRule='evenodd' */}
          {/*           viewBox='0 0 24 24' */}
          {/*           className='tw-icon' */}
          {/*           xmlns='http://www.w3.org/2000/svg' */}
          {/*         > */}
          {/*           <path d='M14.5606 2.38023C15.6073 1.95798 16.7542 1.88511 17.8434 2.17316C18.7222 2.40556 19.5238 2.86227 20.1816 3.49326C21.0148 3.17251 21.8062 2.73561 22.5345 2.19258C22.8429 1.96267 23.262 1.9496 23.5841 2.15986C23.9062 2.37011 24.0629 2.75901 23.9765 3.13384C23.6332 4.62404 22.9383 6.00066 21.9547 7.13569C21.9742 7.32875 21.9843 7.52279 21.9849 7.71707L21.9849 7.71994C21.9849 14.1388 19.0653 18.856 14.8426 21.2315C10.6347 23.5988 5.24859 23.5732 0.45286 20.7572C0.089782 20.544 -0.0815072 20.111 0.0374718 19.7071C0.156451 19.3032 0.535135 19.0322 0.955808 19.0499C2.75298 19.1254 4.53405 18.7234 6.13966 17.8879C4.50748 16.875 3.35541 15.6575 2.57061 14.3478C1.57702 12.6896 1.20226 10.9347 1.1344 9.35669C1.06665 7.78135 1.30346 6.36035 1.5534 5.33887C1.67886 4.82612 1.80897 4.40863 1.90904 4.11609C1.96357 3.95668 2.02109 3.79822 2.08477 3.64223L2.08599 3.63931C2.21549 3.33013 2.51221 3.11122 2.84605 3.07967C3.18253 3.04788 3.50922 3.20371 3.69626 3.48521C4.63224 4.89389 5.87966 6.03065 7.32368 6.79886C8.50005 7.42469 9.77863 7.79099 11.0828 7.88131C11.0828 6.68433 11.3546 5.52873 12.0071 4.51275C12.6256 3.54972 13.5147 2.80216 14.5606 2.38023ZM3.29441 5.94646C3.08875 6.8368 2.91248 8.00808 2.96709 9.27787C3.02517 10.6283 3.34308 12.0681 4.14413 13.4049C4.94058 14.7341 6.2448 16.0127 8.3599 17.0063C8.65437 17.1446 8.85352 17.4286 8.88328 17.7526C8.91304 18.0765 8.76894 18.392 8.5046 18.5817C7.24555 19.485 5.84896 20.1362 4.38475 20.5129C7.75815 21.5657 11.173 21.1912 13.9432 19.6328C17.5284 17.6158 20.15 13.5482 20.1505 7.7216C20.1497 7.47905 20.1276 7.23723 20.0846 6.9993C20.0322 6.71004 20.1217 6.41323 20.3253 6.2011C20.6622 5.84989 20.9631 5.46385 21.224 5.04966C20.888 5.19302 20.5455 5.32038 20.1973 5.43119C19.8399 5.54494 19.4492 5.42961 19.2109 5.13997C18.7224 4.54635 18.0798 4.13313 17.3744 3.94658C16.6696 3.76019 15.928 3.80666 15.2469 4.0814C14.5651 4.35646 13.9707 4.84991 13.5505 5.50407C13.1301 6.15876 12.907 6.93949 12.9171 7.74025L12.9173 7.75188L12.9172 8.81678C12.9172 9.31354 12.5217 9.72002 12.0251 9.73363C10.0939 9.78656 8.18262 9.33363 6.46212 8.41833C5.27487 7.78672 4.20499 6.9491 3.29441 5.94646Z' /> */}
          {/*         </svg> */}
          {/*         @KistenRod */}
          {/*       </a> */}
          {/*     </div> */}
          {/*   </div> */}

            <div className='w-full p-4 bg-white border rounded-lg shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700'>
              <h5 className='mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white'>
                My links ✨
              </h5>
              <p className='text-sm font-normal text-gray-500 dark:text-gray-400'>
                You can find me basically everywhere.
              </p>
              <ul className='grid grid-cols-2 gap-2 items-stretch w-full'>
                <LinksComponent />
              </ul>
              <div>
                <a
                  href='https://linktr.ee/rodkisten'
                  className='inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400'
                >
                  Check out my Linktree!
                </a>
              </div>
            </div>

          {/*   <div className='sc-9fa30a12-4 cfIBlJ'> */}
          {/*     <Image */}
          {/*       src='/chat.png' */}
          {/*       height={200} */}
          {/*       width={266} */}
          {/*       sizes='100vw' */}
          {/*       style={{ */}
          {/*         width: '100%', */}
          {/*         height: 'auto' */}
          {/*       }} */}
          {/*     /> */}
          {/*   </div> */}
          {/* </div> */}
          <a
            data-pin-do='embedUser'
            data-pin-board-width='400'
            data-pin-scale-height='240'
            data-pin-scale-width='80'
            href='https://www.pinterest.com/rodkisten/'
          />
          <iframe
            style={{ borderRadius: 12 }}
            src='https://open.spotify.com/embed/playlist/16wLrDUyHWvCYkXj8xX9xH?utm_source=generator'
            width='100%'
            height={352}
            frameBorder={0}
            allowFullScreen=''
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          />
        </div>
        {/*  */}
        <div>
          <a
            className='twitter-timeline'
            data-theme='dark'
            data-tweet-limit='5'
            data-chrome='nofooter noborders'
            href='https://twitter.com/KistenRod?ref_src=twsrc%5Etfw'
          >
            Tweets by KistenRod
          </a>
        </div>
        {/* <div className="w-full"> */}

        {/*   <div className="relative z-10 -mx-4 shadow-lg ring-1 ring-slate-900/10 sm:mx-0 sm:rounded-3xl lg:w-1/2 lg:flex-none"> */}
        {/*     <div className="flex absolute -bottom-px left-1/2 -ml-48 h-[2px] w-96"> */}
        {/*       <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" /> */}
        {/*       <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" /> */}
        {/*       <div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" /> */}
        {/*       <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]" /> */}
        {/*     </div> */}
        {/*     <div className="relative bg-white px-4 py-10 sm:rounded-3xl sm:px-10"> */}
        {/*       <div className="flex items-center justify-between"> */}
        {/*         <h3 className="text-base font-semibold text-sky-500"> */}
        {/*           Get with all-access */}
        {/*         </h3> */}
        {/*         <a */}
        {/*           className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 bg-slate-900 text-white hover:bg-slate-700" */}
        {/*           href="/all-access" */}
        {/*         > */}
        {/* <span> */}
        {/*   Get all-access <span aria-hidden="true">→</span> */}
        {/* </span> */}
        {/*         </a> */}
        {/*       </div> */}
        {/*       <div className="mt-3 flex items-center"> */}
        {/*         <p className="text-[2.5rem] leading-none text-slate-900"> */}
        {/*           $<span className="font-bold">299</span> */}
        {/*         </p> */}
        {/*         <p className="ml-3 text-sm"> */}
        {/*           <span className="font-semibold text-slate-900">one-time payment</span> */}
        {/*           <br /> */}
        {/*           <span className="text-slate-500">plus local taxes</span> */}
        {/*         </p> */}
        {/*       </div> */}
        {/*       <p className="mt-6 text-sm leading-6 text-slate-600"> */}
        {/*         Get lifetime access to all of the application UI, marketing, and ecommerce */}
        {/*         components, as well as all of our site templates for a single one-time */}
        {/*         purchase. */}
        {/*       </p> */}
        {/*       <h4 className="sr-only">All-access features</h4> */}
        {/*       <ul className="mt-10 space-y-8 border-t border-slate-900/10 pt-10 text-sm leading-6 text-slate-700"> */}
        {/*         <li className="flex"> */}
        {/*           <svg */}
        {/*             xmlns="http://www.w3.org/2000/svg" */}
        {/*             fill="none" */}
        {/*             viewBox="0 0 32 32" */}
        {/*             className="h-8 w-8 flex-none" */}
        {/*           > */}
        {/*             <path fill="#fff" d="M0 0h32v32H0z" /> */}
        {/*             <path */}
        {/*               fill="#E0F2FE" */}
        {/*               d="M23 22l7-4v7l-7 4v-7zM9 22l7-4v7l-7 4v-7zM16 11l7-4v7l-7 4v-7zM2 18l7 4v7l-7-4v-7zM9 7l7 4v7l-7-4V7zM16 18l7 4v7l-7-4v-7z" */}
        {/*             /> */}
        {/*             <path */}
        {/*               fill="#0EA5E9" */}
        {/*               d="M16 3l.372-.651a.75.75 0 00-.744 0L16 3zm7 4h.75a.75.75 0 00-.378-.651L23 7zM9 7l-.372-.651A.75.75 0 008.25 7H9zM2 18l-.372-.651A.75.75 0 001.25 18H2zm28 0h.75a.75.75 0 00-.378-.651L30 18zm0 7l.372.651A.75.75 0 0030.75 25H30zm-7 4l-.372.651a.75.75 0 00.744 0L23 29zM9 29l-.372.651a.75.75 0 00.744 0L9 29zm-7-4h-.75c0 .27.144.518.378.651L2 25zM15.628 3.651l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm-.744 7l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm20.256-4l7 4 .744-1.302-7-4-.744 1.302zm7 2.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zm-7-2.698l7-4-.744-1.302-7 4 .744 1.302zm13.256 5.698l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM30.75 25v-7h-1.5v7h1.5zm-15.122-.651l-7 4 .744 1.302 7-4-.744-1.302zm-6.256 4l-7-4-.744 1.302 7 4 .744-1.302zM2.75 25v-7h-1.5v7h1.5zm14 0v-7h-1.5v7h1.5zM8.25 7v7h1.5V7h-1.5zm14 0v7h1.5V7h-1.5zm-7 4v7h1.5v-7h-1.5zm-7 11v7h1.5v-7h-1.5zm14 0v7h1.5v-7h-1.5z" */}
        {/*             /> */}
        {/*           </svg> */}
        {/*           <p className="ml-5"> */}
        {/*             <strong className="font-semibold text-slate-900"> */}
        {/*               Over 500+ components */}
        {/*             </strong>{" "} */}
        {/*             — everything you need to build beautiful application UIs, marketing */}
        {/*             sites, ecommerce stores, and more. */}
        {/*           </p> */}
        {/*         </li> */}
        {/*         <li className="flex"> */}
        {/*           <svg */}
        {/*             xmlns="http://www.w3.org/2000/svg" */}
        {/*             fill="none" */}
        {/*             viewBox="0 0 32 32" */}
        {/*             className="h-8 w-8 flex-none" */}
        {/*           > */}
        {/*             <path fill="#fff" d="M0 0h32v32H0z" /> */}
        {/*             <rect */}
        {/*               width={23} */}
        {/*               height={22} */}
        {/*               x={3} */}
        {/*               y={5} */}
        {/*               stroke="#0EA5E9" */}
        {/*               strokeLinejoin="round" */}
        {/*               strokeWidth="1.5" */}
        {/*               rx={2} */}
        {/*             /> */}
        {/*             <rect */}
        {/*               width={10} */}
        {/*               height={18} */}
        {/*               x={19} */}
        {/*               y={9} */}
        {/*               fill="#E0F2FE" */}
        {/*               stroke="#0EA5E9" */}
        {/*               strokeLinejoin="round" */}
        {/*               strokeWidth="1.5" */}
        {/*               rx={2} */}
        {/*             /> */}
        {/*             <circle cx={6} cy={8} r={1} fill="#0EA5E9" /> */}
        {/*             <circle cx={9} cy={8} r={1} fill="#0EA5E9" /> */}
        {/*             <path stroke="#0EA5E9" strokeWidth="1.5" d="M3 11h16" /> */}
        {/*           </svg> */}
        {/*           <p className="ml-5"> */}
        {/*             <strong className="font-semibold text-slate-900"> */}
        {/*               Every site template */}
        {/*             </strong>{" "} */}
        {/*             — beautifully designed, expertly crafted website templates built with */}
        {/*             modern technologies like React and Next.js. */}
        {/*           </p> */}
        {/*         </li> */}
        {/*         <li className="flex"> */}
        {/*           <svg */}
        {/*             xmlns="http://www.w3.org/2000/svg" */}
        {/*             fill="none" */}
        {/*             viewBox="0 0 32 32" */}
        {/*             className="h-8 w-8 flex-none" */}
        {/*           > */}
        {/*             <path fill="#fff" d="M0 0h32v32H0z" /> */}
        {/*             <path */}
        {/*               fill="#E0F2FE" */}
        {/*               d="M13.168 18.828a4 4 0 110-5.656L15.997 16l1.5-1.5 1.328-1.328a4 4 0 110 5.656L15.996 16l-1.499 1.5-1.329 1.328z" */}
        {/*             /> */}
        {/*             <path */}
        {/*               stroke="#0EA5E9" */}
        {/*               strokeLinecap="round" */}
        {/*               strokeWidth="1.5" */}
        {/*               d="M14.497 17.5l-1.329 1.328a4 4 0 110-5.656l5.657 5.656a4 4 0 100-5.656L17.496 14.5" */}
        {/*             /> */}
        {/*             <circle cx={16} cy={16} r={14} stroke="#0EA5E9" strokeWidth="1.5" /> */}
        {/*           </svg> */}
        {/*           <p className="ml-5"> */}
        {/*             <strong className="font-semibold text-slate-900"> */}
        {/*               Lifetime access */}
        {/*             </strong>{" "} */}
        {/*             — get instant access to everything we have today, plus any new */}
        {/*             components and templates we add in the future. */}
        {/*           </p> */}
        {/*         </li> */}
        {/*       </ul> */}
        {/*       <div className="relative mt-10 flex rounded-xl border border-slate-600/10 bg-slate-50 p-6"> */}
        {/*         <svg */}
        {/*           fill="none" */}
        {/*           xmlns="http://www.w3.org/2000/svg" */}
        {/*           className="h-8 w-8 flex-none" */}
        {/*           stroke="#94A3B8" */}
        {/*           strokeWidth="1.5" */}
        {/*         > */}
        {/*           <circle cx={11} cy={16} r="3.25" fill="#94A3B8" fillOpacity=".2" /> */}
        {/*           <circle cx={21} cy={13} r="3.25" fill="#94A3B8" fillOpacity=".2" /> */}
        {/*           <path */}
        {/*             d="M28.909 19c.223-.964.341-1.968.341-3 0-7.318-5.932-13.25-13.25-13.25S2.75 8.682 2.75 16c0 1.032.118 2.036.341 3" */}
        {/*             strokeLinecap="round" */}
        {/*           /> */}
        {/*           <path */}
        {/*             d="m18.031 29.016-2.187.109s-1.475-.118-1.827-.29c-1.049-.51-.579-2.915 0-3.95 1.157-2.064 3.752-5.135 7.125-5.135h.024c2.5 0 4.404 1.687 5.692 3.401-1.963 2.975-5.161 5.276-8.827 5.865Z" */}
        {/*             fill="#94A3B8" */}
        {/*             fillOpacity=".2" */}
        {/*             strokeLinejoin="round" */}
        {/*           /> */}
        {/*           <path */}
        {/*             d="m14.001 24.913.016-.027c.26-.465.593-.98.991-1.5-1.042-.918-2.374-1.636-3.988-1.636H11c-2.094 0-3.847 1.208-5.055 2.492a12.987 12.987 0 0 0 7.987 4.595l.057-.016c-1.004-.534-.555-2.868.012-3.908Z" */}
        {/*             fill="#94A3B8" */}
        {/*             fillOpacity=".2" */}
        {/*             strokeLinejoin="round" */}
        {/*           /> */}
        {/*         </svg> */}
        {/*         <p className="ml-5 text-sm leading-6 text-slate-700"> */}
        {/*           <strong className="font-semibold text-slate-900"> */}
        {/*             Available for teams */}
        {/*           </strong>{" "} */}
        {/*           — get access to all of our components and templates plus any future */}
        {/*           updates for your entire team. */}
        {/*         </p> */}
        {/*       </div> */}
        {/*     </div> */}
        {/*   </div> */}

        {/* </div> */}
        <div className='text-gray-400 text-xs font-light py-4'>
          © {from === y || !from ? y : `${from} - ${y}`} | {BLOG.author}
          <p className='md:float-right'>
            {t.FOOTER.COPYRIGHT_START}
            <a className='underline' href={`${t.FOOTER.COPYRIGHT_LINK}`}>
              {t.FOOTER.COPYRIGHT_NAME}
            </a>
            {t.FOOTER.COPYRIGHT_END}
          </p>
        </div>
      </footer>
    </motion.div>
  )
}

export default Footer
