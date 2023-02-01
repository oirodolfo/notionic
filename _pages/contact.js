import Container from '@/components/Container'
import ContactForm from '@/components/ContactForm'
import BLOG from '@/blog.config'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'

export const Contact = () => {
  const { locale } = useRouter()
  const t = lang[locale]
  return (
    <Container title={BLOG.title} description={BLOG.description}>
      <div className='mb-8 text-gray-600 dark:text-gray-200 md:mb-16'>
        <h2 className='mb-4 text-center font-light text-xl lg:text-3xl'>
          {t.CONTACT.TITLE}
        </h2>
        <p className='mx-auto max-w-screen-md text-center font-light md:text-lg'>
          {t.CONTACT.DESCRIPTION}
        </p>
        <p className='mx-auto max-w-screen-md text-center font-light md:text-lg'>
          {t.CONTACT.TG_DESCRIPTION}
          <a
            href={BLOG.socialLink.telegram}
            className='underline transition duration-100 hover:text-indigo-500 active:text-indigo-600'
          >
            @{BLOG.socialLink.telegram.slice(13)}
          </a>
        </p>
      </div>
      <ContactForm />
    </Container>
  )
}

export default Contact
