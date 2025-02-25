import { useState } from 'react'
import BlogPost from '@/components/BlogPost'
import Container from '@/components/Container'
import Tags from '@/components/Common/Tags'
import PropTypes from 'prop-types'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'

const SearchLayout = ({ tags, posts, currentTag }) => {
  const [searchValue, setSearchValue] = useState('')
  const { locale } = useRouter()
  const t = lang[locale]

  let filteredBlogPosts = []
  if (posts) {
    filteredBlogPosts = posts.filter((post) => {
      const tagContent = post.tags ? post.tags.join(' ') : ''
      const searchContent = post.title + post.summary + tagContent
      return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    })
  }

  return (
    <Container>
      <div className='relative'>
        <input
          type='text'
          placeholder={
            currentTag
              ? `${t.SEARCH.ONLY_SEARCH} #${currentTag}`
              : `${t.SEARCH.PLACEHOLDER}`
          }
          className='w-full rounded-lg bg-white p-3 shadow-md outline-none focus:shadow dark:bg-zinc-600'
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <svg
          className='absolute right-3 top-3 h-5 w-5 text-zinc-400'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          ></path>
        </svg>
      </div>
      <Tags tags={tags} currentTag={currentTag} />
      <div className='article-container my-8'>
        {!filteredBlogPosts.length && (
          <p className='text-zinc-500 dark:text-zinc-300'>
            {t.SEARCH.NOT_FOUND}
          </p>
        )}
        {filteredBlogPosts.slice(0, 20).map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </Container>
  )
}
SearchLayout.propTypes = {
  posts: PropTypes.array.isRequired,
  tags: PropTypes.object.isRequired,
  currentTag: PropTypes.string
}
export default SearchLayout
