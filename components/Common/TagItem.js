import Link from 'next/link'

const TagItem = ({ tag }) => (
  <Link href={`/tag/${encodeURIComponent(tag)}`} scroll={false}>
    <p className='bg-zinc-200/0.8 mr-2 rounded-full px-2 py-1 leading-none blur-lg filter text-sm hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600'>
      {tag}
    </p>
  </Link>
)

export default TagItem
