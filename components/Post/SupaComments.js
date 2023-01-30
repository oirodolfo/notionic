import BLOG from '@/blog.config'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const SupaComments = () => {
  const { locale, asPath } = useRouter()
  useEffect(() => {
    const script = document.createElement('script')
    const anchor = document.getElementById('comments')
    script.setAttribute('src', `/comments/comments-${locale}.js`)
    script.setAttribute('crossorigin', 'anonymous')
    script.setAttribute('async', true)
    anchor.appendChild(script)
    return () => {
      anchor.innerHTML = ''
    }
  }, [locale, asPath])
  return (
    <>
      {/* SupaComments share existing tailwind css styles, don't need to import an additional css file. */}
      <div className='mt-10 mt-2 hidden h-8 h-10 w-8 w-10 space-y-4 rounded-full' />
      <div className='col-span-1 col-span-2 hidden h-2 w-20 flex-1 animate-pulse grid-cols-3 gap-4 space-x-4 rounded' />
      <div
        id='comments'
        // data-url='localhost:3000'
        data-url={BLOG.isProd ? 'rodkisten.com' : 'localhost:3000'}
        supabase-url={BLOG.comment.supaCommentsConfig.supabaseUrl}
        anon-key={BLOG.comment.supaCommentsConfig.supabaseAnonKey}
      ></div>
    </>
  )
}

export default SupaComments
