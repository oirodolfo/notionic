import BLOG from '@/blog.config'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

const SEO = ({ meta }) => {
  /**const ogImage = `https://${BLOG.ogImageGenerateHost}/api/default?logo=${
    BLOG.link
  }/favicon.png&siteName=${encodeURIComponent(
    BLOG.title?.trim()
  )}&description=${encodeURIComponent(
    BLOG.description?.trim()
  )}&title=${encodeURIComponent(
    meta.title?.trim()
  )}&summary=${encodeURIComponent(
    meta.description?.trim()
  )}&theme=light&border=solid`
**/

  // CONSTRUCT IMAGE HERE
  const ogImage2 = `${BLOG.link}/api/og?siteName=${encodeURIComponent(
    BLOG.title?.trim()
  )}&description=${encodeURIComponent(
    BLOG.description?.trim()
  )}&title=${encodeURIComponent(
    meta.title?.trim()
  )}&summary=${encodeURIComponent(
    meta.description?.trim()
  )}&theme=light&border=solid`

  const router = useRouter()
  const url = BLOG.path.length ? `${BLOG.link}/${BLOG.path}` : BLOG.link
  return (
    <Head>
      <title>{meta.title}</title>

      <meta name="application-name" content="Rod Kisten" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Rod Kisten" />
      {/* <meta name="description" content={APP_DESCRIPTION} /> */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="theme-color"
            content="#e0b0ff"
            media="(prefers-color-scheme: light)"/>
        <meta name="theme-color"
              content="#330099"
              media="(prefers-color-scheme: dark)"/>
        <meta name="theme-color" content="#" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <NextSeo
        title={meta.title}
        description={meta.description}
        canonical={meta.slug ? `${url}/${meta.slug}` : `${url}${router.asPath}`}
        twitter={{
          handle: '@KistenRod',
          site: '@KistenRod',
          cardType: 'summary_large_image'
        }}
        titleTemplate={'Rod Kisten | %s'}
        openGraph={{
          profile: {
            firstName: 'Rod',
            lastName: 'Kisten',
            username: 'rodkisten',
            gender: 'male'
          }
        }}
      />
      {/* <meta content={BLOG.darkBackground} name='theme-color' /> */}
      <meta name='robots' content='follow, index' />
      <meta charSet='UTF-8' />
      {BLOG.seo.googleSiteVerification && (
        <meta
          name='google-site-verification'
          content={BLOG.seo.googleSiteVerification}
        />
      )}
      {BLOG.seo.keywords && (
        <meta name='keywords' content={BLOG.seo.keywords.join(', ')} />
      )}
      <meta name='description' content={meta.description} />
      <meta property='og:locale' content={BLOG.lang} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:description' content={meta.description} />
      <meta
        property='og:url'
        content={meta.slug ? `${url}/${meta.slug}` : `${url}${router.asPath}`}
      />
      <meta property='og:image' content={ogImage2} />
      <meta property='og:type' content={meta.type} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:image' content={ogImage2} />
      {meta.type === 'article' && (
        <>
          <meta
            property='article:published_time'
            content={meta.date || meta.createdTime}
          />
          <meta property='article:author' content={BLOG.author} />
        </>
      )}
    </Head>
  )
}

export default SEO
