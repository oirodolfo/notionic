import { useState } from 'react'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'

function Contact() {
  const [showResult, setShowResult] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const { locale } = useRouter()
  const t = lang[locale]

  const sentMessage = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    // setTimeout(() => {
    //   setSubmitting(false)
    //   setShowResult(true)
    // }, 3000)

    const tgUrl = '/api/sendtotg'
    const res = await fetch(tgUrl, {
      body: JSON.stringify({
        name: event.target.name.value,
        mail: event.target.mail.value,
        message: event.target.message.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    // await res.json()
    const result = await res.json()
    const status = result.status
   // console.log('status:', status)
    if (status === 'Success') {
      setSubmitting(false)
      setShowResult(true)
    } else {
      alert(t.CONTACT.FAILED_MESSAGE)
    }
  }
  return (
    <>
      {showResult ? (
        <div>
          <p className='mx-auto max-w-screen-md text-center font-bold md:text-lg'>
            {t.CONTACT.SUCCESS_MESSAGE}
          </p>
        </div>
      ) : (
        <form
          className='mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2'
          onSubmit={sentMessage}
        >
          <div>
            <input
              name='name'
              id='name'
              type='text'
              required
              placeholder={t.CONTACT.FORM_USERNAME}
              className='block w-full rounded-lg bg-zinc-100 py-3 px-4 leading-tight text-zinc-700 focus:bg-white focus:outline-none dark:bg-zinc-700 dark:text-zinc-200 dark:focus:bg-zinc-600'
            />
          </div>
          <div>
            <input
              name='email'
              id='mail'
              type='text'
              required
              placeholder={t.CONTACT.FORM_EMAIL}
              className='block w-full rounded-lg bg-zinc-100 py-3 px-4 leading-tight text-zinc-700 focus:bg-white focus:outline-none dark:bg-zinc-700 dark:text-zinc-200 dark:focus:bg-zinc-600'
            />
          </div>

          <div className='sm:col-span-2'>
            <textarea
              name='message'
              id='message'
              type='text'
              required
              placeholder={t.CONTACT.FORM_CONTENT}
              className='block h-64 w-full rounded-lg bg-zinc-100 py-3 px-4 leading-tight text-zinc-700 focus:bg-white focus:outline-none dark:bg-zinc-700 dark:text-zinc-200 dark:focus:bg-zinc-600'
            ></textarea>
          </div>

          <div className='flex items-center justify-between sm:col-span-2'>
            {submitting ? (
              <button
                disabled
                className='inline-block cursor-not-allowed rounded-lg bg-zinc-300 px-8 py-3 text-center outline-none transition duration-100 dark:bg-zinc-600'
              >
                <svg
                  className='h-5 w-5 animate-spin text-zinc-600 dark:text-day'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='white'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
              </button>
            ) : (
              <button
                type='submit'
                className='inline-block rounded-lg bg-zinc-100 px-8 py-3 text-center outline-none transition duration-100 hover:bg-zinc-200 dark:bg-zinc-700 dark:hover:bg-zinc-600'
              >
                <p className='h-5 text-zinc-400'>{t.CONTACT.SEND_BUTTON}</p>
              </button>
            )}
            <p className='mb-2 text-zinc-400 text-xs'>
              {t.CONTACT.FORM_EMAIL_REQUIRED}
            </p>
          </div>
        </form>
      )}
    </>
  )
}

export default Contact
