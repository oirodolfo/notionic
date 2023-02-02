import Document, { Html, Head, Main, NextScript } from 'next/document'
import BLOG from '@/blog.config'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html
        lang={BLOG.lang}
        className='dark dark-mode'
        data-mode={'dark'}
        style={{ colorScheme: 'dark' }}
      >
        <Head>
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
          />
          <link rel='icon' href='/favicon.ico' />
          <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
          <link
            rel='apple-touch-icon'
            sizes='192x192'
            href='/favicon.png'
          ></link>
          <link
            rel='alternate'
            type='application/rss+xml'
            title='RSS 2.0'
            href='/feed'
          ></link>

          <meta
            name='theme-color'
            content={BLOG.darkBackground}
            media='(prefers-color-scheme: dark)'
          />
          <meta name='theme-color' content={BLOG.darkBackground} />

          <Script id='bcache-check'>
            {`
            window.addEventListener('pageshow', (event) => {
                if (event.persisted) {
                  console.log('This page was restored from the bfcache.');
                } else {
                  console.log('This page was loaded normally.');
                }
              });
              
              
              window.addEventListener('pagehide', (event) => {
              if (event.persisted) {
                console.log('This page *might* be entering the bfcache.');
              } else {
                console.log('This page will unload normally and be discarded.');
              }
            });
            `}
          </Script>
          {/* {BLOG.appearance === 'auto' ? ( */}
          {/*   <> */}
          {/*     <meta */}
          {/*       name='theme-color' */}
          {/*       content={BLOG.lightBackground} */}
          {/*       media='(prefers-color-scheme: light)' */}
          {/*     /> */}
          {/*     <meta */}
          {/*       name='theme-color' */}
          {/*       content={BLOG.darkBackground} */}
          {/*       media='(prefers-color-scheme: dark)' */}
          {/*     /> */}
          {/*   </> */}
          {/* ) : ( */}
          {/*   <meta */}
          {/*     name='theme-color' */}
          {/*     content={ */}
          {/*       BLOG.appearance === 'dark' */}
          {/*         ? BLOG.darkBackground */}
          {/*         : BLOG.lightBackground */}
          {/*     } */}
          {/*   /> */}
          {/* )} */}
        </Head>
        <body className=''>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
