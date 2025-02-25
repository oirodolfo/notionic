import Head from 'next/head'

const Fallback = () => (
  <>
    <Head>
      <title>Rod Kisten</title>
    </Head>
    <h1>This is offline fallback page</h1>
    <h2>When offline, any page route will fallback to this page</h2>
  </>
)

export default Fallback
