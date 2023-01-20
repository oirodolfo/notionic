import Link from 'next/link'
import BLOG from '@/blog.config'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import {
  UserIcon,
  UsersIcon,
  BookOpenIcon,
  MailIcon
} from '@heroicons/react/outline'
import Social from '../Common/Social.js'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
      <footer className='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center border-b dark:border-gray-600 py-1'>
          <ul className='flex flex-wrap justify-center md:justify-start md:gap-1'>
            {links.map(
              (link) =>
                link.show && (
                  <Link passHref key={link.id} href={link.to} scroll={false} legacyBehavior>
                    <li key={link.id}
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

        <div className="sc-9fa30a12-1 iXFafK">
          <div className="sc-9fa30a12-3 gPchcu">
            <h2 className="gradient sunset-2">Say hi!</h2>
            <p>
              Want to create something awesome? Or, you have any query? Drop an email or
              tweet
            </p>
            <div className="sc-9fa30a12-2 aUtVV">
              <a
                href="mailto:hey@rodkisten.com?subject=Saying Hello!!!"
                className="gradient sunset-2"
              >
                <svg
                  width={18}
                  height={18}
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 24 24"
                  className="email-icon"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3.2 2C1.41665 2 0 3.48152 0 5.25V18.75C0 20.5185 1.41665 22 3.2 22H20.8C22.5834 22 24 20.5185 24 18.75V5.25C24 3.48152 22.5834 2 20.8 2H3.2ZM2.57921 4.18358C2.76312 4.06664 2.97707 4 3.2 4H20.8C21.0226 4 21.2363 4.06645 21.42 4.1831L11.9993 11.7197L2.57921 4.18358ZM2 6.28146V18.75C2 19.4565 2.56335 20 3.2 20H20.8C21.4366 20 22 19.4565 22 18.75V6.28037L12.624 13.7812C12.2588 14.0733 11.7398 14.0733 11.3746 13.7812L2 6.28146Z" />
                </svg>
                hey@rodkisten.com
              </a>
              <a href="https://twitter.com/@KistenRod" className="gradient sky-3" rel="noopener noreferer" target="_bblank">
                <svg
                  width={18}
                  height={18}
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0 24 24"
                  className="tw-icon"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.5606 2.38023C15.6073 1.95798 16.7542 1.88511 17.8434 2.17316C18.7222 2.40556 19.5238 2.86227 20.1816 3.49326C21.0148 3.17251 21.8062 2.73561 22.5345 2.19258C22.8429 1.96267 23.262 1.9496 23.5841 2.15986C23.9062 2.37011 24.0629 2.75901 23.9765 3.13384C23.6332 4.62404 22.9383 6.00066 21.9547 7.13569C21.9742 7.32875 21.9843 7.52279 21.9849 7.71707L21.9849 7.71994C21.9849 14.1388 19.0653 18.856 14.8426 21.2315C10.6347 23.5988 5.24859 23.5732 0.45286 20.7572C0.089782 20.544 -0.0815072 20.111 0.0374718 19.7071C0.156451 19.3032 0.535135 19.0322 0.955808 19.0499C2.75298 19.1254 4.53405 18.7234 6.13966 17.8879C4.50748 16.875 3.35541 15.6575 2.57061 14.3478C1.57702 12.6896 1.20226 10.9347 1.1344 9.35669C1.06665 7.78135 1.30346 6.36035 1.5534 5.33887C1.67886 4.82612 1.80897 4.40863 1.90904 4.11609C1.96357 3.95668 2.02109 3.79822 2.08477 3.64223L2.08599 3.63931C2.21549 3.33013 2.51221 3.11122 2.84605 3.07967C3.18253 3.04788 3.50922 3.20371 3.69626 3.48521C4.63224 4.89389 5.87966 6.03065 7.32368 6.79886C8.50005 7.42469 9.77863 7.79099 11.0828 7.88131C11.0828 6.68433 11.3546 5.52873 12.0071 4.51275C12.6256 3.54972 13.5147 2.80216 14.5606 2.38023ZM3.29441 5.94646C3.08875 6.8368 2.91248 8.00808 2.96709 9.27787C3.02517 10.6283 3.34308 12.0681 4.14413 13.4049C4.94058 14.7341 6.2448 16.0127 8.3599 17.0063C8.65437 17.1446 8.85352 17.4286 8.88328 17.7526C8.91304 18.0765 8.76894 18.392 8.5046 18.5817C7.24555 19.485 5.84896 20.1362 4.38475 20.5129C7.75815 21.5657 11.173 21.1912 13.9432 19.6328C17.5284 17.6158 20.15 13.5482 20.1505 7.7216C20.1497 7.47905 20.1276 7.23723 20.0846 6.9993C20.0322 6.71004 20.1217 6.41323 20.3253 6.2011C20.6622 5.84989 20.9631 5.46385 21.224 5.04966C20.888 5.19302 20.5455 5.32038 20.1973 5.43119C19.8399 5.54494 19.4492 5.42961 19.2109 5.13997C18.7224 4.54635 18.0798 4.13313 17.3744 3.94658C16.6696 3.76019 15.928 3.80666 15.2469 4.0814C14.5651 4.35646 13.9707 4.84991 13.5505 5.50407C13.1301 6.15876 12.907 6.93949 12.9171 7.74025L12.9173 7.75188L12.9172 8.81678C12.9172 9.31354 12.5217 9.72002 12.0251 9.73363C10.0939 9.78656 8.18262 9.33363 6.46212 8.41833C5.27487 7.78672 4.20499 6.9491 3.29441 5.94646Z" />
                </svg>
                @KistenRod
              </a>
            </div>
          </div>
          <div className="sc-9fa30a12-4 cfIBlJ">
            <Image
              src="/chat.png"
              height={200}
              width={266}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto'
              }} />
          </div>
        </div>

        <div
          class="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
            My links ✨
          </h5>
          <p class="text-sm font-normal text-gray-500 dark:text-gray-400">You can find me basically everywhere.</p>
          <ul class="my-4 space-y-3">
            <li>
              <a href="#"
                 className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <svg aria-hidden="true" className="h-4" viewBox="0 0 40 38" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z" fill="#E17726"/>
                  <path d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z" fill="#E27625"/>
                  <path d="M32.1656 27.0093L39.7516 27.1537L37.1004 36.1603L27.8438 33.6116L32.1656 27.0093Z"
                        fill="#E27625"/>
                  <path d="M7.83409 27.0093L12.1399 33.6116L2.89876 36.1604L0.263672 27.1537L7.83409 27.0093Z"
                        fill="#E27625"/>
                  <path
                    d="M17.5203 10.8677L17.8304 20.8807L8.55371 20.4587L11.1924 16.4778L11.2258 16.4394L17.5203 10.8677Z"
                    fill="#E27625"/>
                  <path
                    d="M22.3831 10.7559L28.7737 16.4397L28.8067 16.4778L31.4455 20.4586L22.1709 20.8806L22.3831 10.7559Z"
                    fill="#E27625"/>
                  <path d="M12.4115 27.0381L17.4768 30.9848L11.5928 33.8257L12.4115 27.0381Z" fill="#E27625"/>
                  <path d="M27.5893 27.0376L28.391 33.8258L22.5234 30.9847L27.5893 27.0376Z" fill="#E27625"/>
                  <path d="M22.6523 30.6128L28.6066 33.4959L23.0679 36.1282L23.1255 34.3884L22.6523 30.6128Z"
                        fill="#D5BFB2"/>
                  <path d="M17.3458 30.6143L16.8913 34.3601L16.9286 36.1263L11.377 33.4961L17.3458 30.6143Z"
                        fill="#D5BFB2"/>
                  <path d="M15.6263 22.1875L17.1822 25.4575L11.8848 23.9057L15.6263 22.1875Z" fill="#233447"/>
                  <path d="M24.3739 22.1875L28.133 23.9053L22.8184 25.4567L24.3739 22.1875Z" fill="#233447"/>
                  <path d="M12.8169 27.0049L11.9606 34.0423L7.37109 27.1587L12.8169 27.0049Z" fill="#CC6228"/>
                  <path d="M27.1836 27.0049L32.6296 27.1587L28.0228 34.0425L27.1836 27.0049Z" fill="#CC6228"/>
                  <path
                    d="M31.5799 20.0605L27.6165 24.0998L24.5608 22.7034L23.0978 25.779L22.1387 20.4901L31.5799 20.0605Z"
                    fill="#CC6228"/>
                  <path
                    d="M8.41797 20.0605L17.8608 20.4902L16.9017 25.779L15.4384 22.7038L12.3988 24.0999L8.41797 20.0605Z"
                    fill="#CC6228"/>
                  <path d="M8.15039 19.2314L12.6345 23.7816L12.7899 28.2736L8.15039 19.2314Z" fill="#E27525"/>
                  <path d="M31.8538 19.2236L27.2061 28.2819L27.381 23.7819L31.8538 19.2236Z" fill="#E27525"/>
                  <path
                    d="M17.6412 19.5088L17.8217 20.6447L18.2676 23.4745L17.9809 32.166L16.6254 25.1841L16.625 25.1119L17.6412 19.5088Z"
                    fill="#E27525"/>
                  <path
                    d="M22.3562 19.4932L23.3751 25.1119L23.3747 25.1841L22.0158 32.1835L21.962 30.4328L21.75 23.4231L22.3562 19.4932Z"
                    fill="#E27525"/>
                  <path
                    d="M27.7797 23.6011L27.628 27.5039L22.8977 31.1894L21.9414 30.5138L23.0133 24.9926L27.7797 23.6011Z"
                    fill="#F5841F"/>
                  <path
                    d="M12.2373 23.6011L16.9873 24.9926L18.0591 30.5137L17.1029 31.1893L12.3723 27.5035L12.2373 23.6011Z"
                    fill="#F5841F"/>
                  <path
                    d="M10.4717 32.6338L16.5236 35.5013L16.4979 34.2768L17.0043 33.8323H22.994L23.5187 34.2753L23.48 35.4989L29.4935 32.641L26.5673 35.0591L23.0289 37.4894H16.9558L13.4197 35.0492L10.4717 32.6338Z"
                    fill="#C0AC9D"/>
                  <path
                    d="M22.2191 30.231L23.0748 30.8354L23.5763 34.8361L22.8506 34.2234H17.1513L16.4395 34.8485L16.9244 30.8357L17.7804 30.231H22.2191Z"
                    fill="#161616"/>
                  <path
                    d="M37.9395 0.351562L39.9998 6.53242L38.7131 12.7819L39.6293 13.4887L38.3895 14.4346L39.3213 15.1542L38.0875 16.2779L38.8449 16.8264L36.8347 19.1742L28.5894 16.7735L28.5179 16.7352L22.5762 11.723L37.9395 0.351562Z"
                    fill="#763E1A"/>
                  <path
                    d="M2.06031 0.351562L17.4237 11.723L11.4819 16.7352L11.4105 16.7735L3.16512 19.1742L1.15488 16.8264L1.91176 16.2783L0.678517 15.1542L1.60852 14.4354L0.350209 13.4868L1.30098 12.7795L0 6.53265L2.06031 0.351562Z"
                    fill="#763E1A"/>
                  <path
                    d="M28.1861 16.2485L36.9226 18.7921L39.7609 27.5398L32.2728 27.5398L27.1133 27.6049L30.8655 20.2912L28.1861 16.2485Z"
                    fill="#F5841F"/>
                  <path
                    d="M11.8139 16.2485L9.13399 20.2912L12.8867 27.6049L7.72971 27.5398H0.254883L3.07728 18.7922L11.8139 16.2485Z"
                    fill="#F5841F"/>
                  <path
                    d="M25.5283 5.17383L23.0847 11.7736L22.5661 20.6894L22.3677 23.4839L22.352 30.6225H17.6471L17.6318 23.4973L17.4327 20.6869L16.9139 11.7736L14.4707 5.17383H25.5283Z"
                    fill="#F5841F"/>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">MetaMask</span>
                <span
                  class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
              </a>
            </li>
          </ul>
          <div>
            <a href="#"
               className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
              <svg className="w-3 h-3 mr-2" aria-hidden="true" focusable="false" data-prefix="far"
                   data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                      d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path>
              </svg>
              Why do I need to connect with my wallet?</a>
          </div>
        </div>

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
