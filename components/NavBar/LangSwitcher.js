import { TranslateIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LangSwitcher = () => {
  const { locale, asPath } = useRouter()

  return (
    <>
      <Link
        passHref
        href={asPath}
        locale={locale === 'en' ? 'zh' : 'en'}
        scroll={false}
        legacyBehavior
      >
        <button
          aria-label='LangSwitcher'
          className='cursor-pointer rounded-lg p-2 hover:bg-zinc-200 dark:text-zinc-50 dark:hover:bg-zinc-700'
        >
          <TranslateIcon className='h-5 w-5' />
        </button>
      </Link>
    </>
  )
}

export default LangSwitcher
