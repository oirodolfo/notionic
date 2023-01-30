import Link from 'next/link'
import Image from 'next/image'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const articleTestClassName =
  'group flex flex-col relative m-5 md:mb-8 p-5 overflow-hidden shadow-xl  bg-slate-800 ' +
  'sm:rounded-xl cursor-pointer rounded-lg backdrop-blur ring-1 ring-inset' +
  'ring-white/10 '

const BlogPost = ({ post }) => {
  const { locale } = useRouter()
  return (
    <motion.div>
      <Link
        passHref
        href={`${BLOG.path}/${post.slug}`}
        scroll={false}
        legacyBehavior
      >
        <article
          key={post.id}
          className={articleTestClassName}
          // className='group flex flex-col overflow-hidden relative mb-5 md:mb-8 cursor-pointer rounded-lg p-5'
        >
          <Image
            className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
            src={post?.page_cover}
            alt={`${post.title}`}
            fill
            sizes='100vw'
          />
          <div className='md-cover absolute inset-0 hidden md:block'></div>
          <div className='sm-cover absolute inset-0 md:hidden'></div>
          <div className='relative mt-auto'>
            <header className='flex flex-col justify-between md:flex-row md:items-baseline'>
              <h2 className='mb-2 font-medium text-black text-lg dark:text-gray-100 md:text-xl'>
                {post.title}
              </h2>
              <span className='text-color-fix flex-shrink-0 font-light text-gray-600 dark:text-gray-400'>
                {formatDate(post?.date?.start_date || post.createdTime, locale)}
              </span>
            </header>
            <p className='hidden font-light leading-8 text-gray-700 dark:text-gray-300 md:block'>
              {post.summary}
            </p>
            {/* w-4/5  */}
          </div>
        </article>
      </Link>
    </motion.div>
  )
}

export default BlogPost
