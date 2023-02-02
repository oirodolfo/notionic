import Link from 'next/link'

const Tags = ({ tags, currentTag }) => {
  if (!tags) return null
  return (
    <div className='tag-container'>
      <div className='mt-4 flex flex-wrap justify-center'>
        {Object.keys(tags).map((key) => {
          const selected = key === currentTag
          return (
            <div
              key={key}
              className={`m-1 whitespace-nowrap rounded-lg font-medium hover:bg-zinc-400 hover:text-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-600 ${
                selected
                  ? 'bg-zinc-400 text-zinc-100 dark:bg-zinc-600'
                  : 'bg-zinc-100 text-zinc-400 dark:bg-night'
              }`}
            >
              <Link
                key={key}
                scroll={false}
                href={selected ? '/search' : `/tag/${encodeURIComponent(key)}`}
                className='block px-4 py-2'
              >
                {`${key} (${tags[key]})`}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tags
