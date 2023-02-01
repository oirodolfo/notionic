// import 'prismjs'
// import 'prismjs/components/prism-bash'
// import 'prismjs/components/prism-diff'
// import 'prismjs/components/prism-go'
// import 'prismjs/components/prism-yaml'
// import 'prismjs/components/prism-rust'
// import 'prismjs/components/prism-javascript'
// import 'prismjs/components/prism-markup'
// import 'prismjs/components/prism-typescript'
// import 'prismjs/themes/prism-tomorrow.min.css' // prism-okaidia.min.css
import "react-notion-x/src/styles.css";
import "katex/dist/katex.min.css";
import "@/styles/globals.css";
import "@/styles/notion.css";
import BLOG from "@/blog.config";
import dynamic from "next/dynamic";
// import Scripts from "@/components/Common/Scripts";
// import { ThemeProvider } from "next-themes";
// import TransitionEffect from "@/components/Common/TransitionEffect";
// import { useEffect } from 'react'
import "@/styles/nprogress.css";
import Header from "@/components/NavBar/Header";
import { Anton, Inter } from "@next/font/google";
import React from "react";
import Providers from "@/app/Providers";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });
const anton = Anton({
    subsets: ["latin"],
    variable: "--anton-font",
    weight: "400",
});
//
// const Ackee = dynamic(() => import("@/components/Common/Ackee"), {
//     ssr: false,
// });
const Gtag = dynamic(() => import("@/components/Common/Gtag"), { ssr: false });

type RootLayoutType = {
    children: React.ReactNode;
    params?: {
        post?: Record<string, any>;
    }
}

export default function RootLayout({ children, params }: RootLayoutType) {
    return (
        <Providers>
            <html lang="en">
                <body className="antialiased dark-mode dark">
                    <main className={`${inter.variable} ${anton.variable} font-sans`}>
            {/*{BLOG.isProd && BLOG?.analytics?.provider === "ackee" && (*/}
            {/*    <Ackee*/}
            {/*        ackeeServerUrl={BLOG.analytics.ackeeConfig.dataAckeeServer}*/}
            {/*        ackeeDomainId={BLOG.analytics.ackeeConfig.domainId}*/}
            {/*    />*/}
            {/*)}*/}
            {/*{BLOG.isProd && BLOG?.analytics?.provider === "ga" && <Suspense /> <Gtag /> </Suspense>}*/}
            {/*<ThemeProvider attribute="class">*/}
                <Header
                    navBarTitle={params.post ? params.post.title : null}
                    fullWidth={params.post ? params.post.fullWidth : false}
                />
                {/*<TransitionEffect>*/}
                    <div
                        className={`min-h-[calc(100vh-14rem)] md:min-h-[calc(100vh-18rem)] ${
                            BLOG.font === "serif" ? "font-serif" : "font-sans"
                        }`}
                    >
                        {children}
                        {/*<Component {...pageProps} />*/}
                    </div>
                {/*</TransitionEffect>*/}
                {/*{isHome && (*/}
                {/*    <Footer*/}
                {/*        fullWidth={pageProps.post ? pageProps.post.fullWidth : false}*/}
                {/*    />*/}
                {/*)}*/}
            {/*</ThemeProvider>*/}
        </main>
        </body>
        </html>
        </Providers>
    );
}

//
// ///// ============== _APPP

// function MyApp({ Component, pageProps }) {
//   // https://github.com/vercel/next.js/blob/canary/examples/with-loading/pages/_app.js
//   const router = useRouter()
//
//   const isHome = router.route === '/' || router.route === ''
//
//   useEffect(() => {
//     const handleStart = (url) => {
//       // console.log(`Loading: ${url}`)
//       NProgress.start()
//     }
//     const handleStop = () => {
//       NProgress.done()
//     }
//
//     router.events.on('routeChangeStart', handleStart)
//     router.events.on('routeChangeComplete', handleStop)
//     router.events.on('routeChangeError', handleStop)
//
//     return () => {
//       router.events.off('routeChangeStart', handleStart)
//       router.events.off('routeChangeComplete', handleStop)
//       router.events.off('routeChangeError', handleStop)
//     }
//   }, [router])
//
//   return (
//       <>
//         <main className={`${inter.variable} ${anton.variable} font-sans`}>
//           <Scripts />
//           {BLOG.isProd && BLOG?.analytics?.provider === 'ackee' && (
//               <Ackee
//                   ackeeServerUrl={BLOG.analytics.ackeeConfig.dataAckeeServer}
//                   ackeeDomainId={BLOG.analytics.ackeeConfig.domainId}
//               />
//           )}
//           {BLOG.isProd && BLOG?.analytics?.provider === 'ga' && <Gtag />}
//           <ThemeProvider attribute='class'>
//             <Header
//                 navBarTitle={pageProps.post ? pageProps.post.title : null}
//                 fullWidth={pageProps.post ? pageProps.post.fullWidth : false}
//             />
//             <TransitionEffect>
//               <div
//                   className={`min-h-[calc(100vh-14rem)] md:min-h-[calc(100vh-18rem)] ${
//                       BLOG.font === 'serif' ? 'font-serif' : 'font-sans'
//                   }`}
//               >
//                 <Component {...pageProps} />
//               </div>
//             </TransitionEffect>
//             {isHome && (
//                 <Footer
//                     fullWidth={pageProps.post ? pageProps.post.fullWidth : false}
//                 />
//             )}
//           </ThemeProvider>
//         </main>
//       </>
//   )
// }
//
// export default MyApp
//
// ///// ============== _DOCUMENT
//
//
// import Document, { Html, Head, Main, NextScript } from 'next/document'
// import BLOG from '@/blog.config'
//
// class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx)
//     return { ...initialProps }
//   }
//
//   render() {
//     return (
//         <Html lang={BLOG.lang}>
//           <Head>
//             <meta
//                 name='viewport'
//                 content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
//             />
//             <link rel='icon' href='/favicon.ico' />
//             <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
//             <link
//                 rel='apple-touch-icon'
//                 sizes='192x192'
//                 href='/favicon.png'
//             ></link>
//             <link
//                 rel='alternate'
//                 type='application/rss+xml'
//                 title='RSS 2.0'
//                 href='/feed'
//             ></link>
//             {BLOG.appearance === 'auto' ? (
//                 <>
//                   <meta
//                       name='theme-color'
//                       content={BLOG.lightBackground}
//                       media='(prefers-color-scheme: light)'
//                   />
//                   <meta
//                       name='theme-color'
//                       content={BLOG.darkBackground}
//                       media='(prefers-color-scheme: dark)'
//                   />
//                 </>
//             ) : (
//                 <meta
//                     name='theme-color'
//                     content={
//                       BLOG.appearance === 'dark'
//                           ? BLOG.darkBackground
//                           : BLOG.lightBackground
//                     }
//                 />
//             )}
//           </Head>
//           <body className=''>
//           <Main />
//           <NextScript />
//           </body>
//         </Html>
//     )
//   }
// }
//
// export default MyDocument
