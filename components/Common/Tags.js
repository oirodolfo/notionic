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
              className={`m-1 whitespace-nowrap rounded-lg font-medium hover:bg-gray-400 hover:text-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 ${
                selected
                  ? 'bg-gray-400 text-gray-100 dark:bg-gray-600'
                  : 'bg-gray-100 text-gray-400 dark:bg-night'
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
