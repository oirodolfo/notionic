import BLOG from '@/blog.config.js'
import Link from 'next/link'
import ImageFallback from './Common/ImageFallback.js'

const NotePost = ({ note }) => {
  const craftSlug = note.url.slice(23)
  return (
    <Link
      passHref
      href={`/notes/${note.slug}`}
      key={craftSlug}
      className='group relative mb-10 flex h-60 items-end overflow-hidden rounded-lg bg-zinc-100 p-4'
    >
      <ImageFallback
        className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-105'
        src={`https://api.craft.do/render/preview/${craftSlug}`}
        fallbackSrc={BLOG.defaultCover}
        alt={`${note.title}`}
        layout='fill'
      />
      <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80 md:hidden'></div>
      <div className='relative flex flex-col md:hidden'>
        <span className='font-semibold text-white text-lg lg:text-xl'>
          {note.title}
        </span>
      </div>
    </Link>
  )
}

export default NotePost
