import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import Social from '../Common/Social.js'
import Avatar from './NotionAvatar.js'
import dynamic from 'next/dynamic'
import { NotionRenderer } from 'react-notion-x'
import Image from 'next/image'

const Collection = dynamic(
  () =>
    import('react-notion-x/build/third-party/collection').then(
      (m) => m.Collection
    ),
  { ssr: true }
)

const NoteHero = ({ blockMap }) => {
  const { locale } = useRouter()
  const t = lang[locale]
  return (
    <>
      <div className='container mx-auto mb-10 flex flex-col items-center px-5 py-2 md:flex-row'>
        <div className='mb-6 flex flex-col text-left md:mb-0 md:w-3/5 md:items-start'>
          <NotionRenderer
            className='md:ml-0'
            recordMap={blockMap}
            components={{ Collection }}
          />
          <Social />
          {/* <div className='py-4 font-light text-zinc-400 text-xs'> */}
          {/*   {t.HERO.NOTES.TEXT_FOOTER} */}
          {/* </div> */}
        </div>
        <div className='[rod-added] w-2/5 self-start md:mt-4'>
          <Image
            className={`relative w-[500px] transform`}
            // className={`w-[500px] h-[500px] relative plaiceholder-[/rod-circle-transparent.png] bg-url-[/rod-circle-transparent.png] transform scale-110 filter blur-2xl z-[-1] `}
            src={'/rod-circle-transparent.png'}
            alt={"Rod Kisten's avatar"}
            width={500}
            height={500}
            priority={true}
          />
          {/* <Avatar className='text-zinc-600 dark:text-zinc-300' /> */}
        </div>
      </div>
    </>
  )
}

export default NoteHero
