import Link from 'next/link'

const TagItem = ({ tag }) => (
  <Link href={`/tag/${encodeURIComponent(tag)}`} scroll={false}>
    <p className='mr-2 rounded-full bg-gray-200 px-2 py-1 leading-none text-sm hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'>
      {tag}
    </p>
  </Link>
)

export default TagItem
