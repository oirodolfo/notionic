import Link from 'next/link'

const TagItem = ({ tag }) => (
  <Link href={`/tag/${encodeURIComponent(tag)}`} scroll={false}>
    <p className='mr-2 rounded-full bg-zinc-200/0.8 filter blur-lg px-2 py-1 leading-none text-sm hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600'>
      {tag}
    </p>
  </Link>
)

export default TagItem
