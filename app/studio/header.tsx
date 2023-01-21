import Head from 'next/head'
import { NextStudioHead } from 'next-sanity/studio/head'

export default function SHeader () {
    return <>
         <Head>
        <NextStudioHead favicons={false} />
         </Head>
     </>
}
