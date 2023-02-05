import React from 'react'
import Link from 'next/link'

import {
  sanityStaticProps,
  useSanityQuery,
  PortableText
} from '../../sanity.config'
import groq from 'next-sanity'

const myQuery = groq`*[ etc... ]`

export async function generateStaticParams(context) {
  const props = await sanityStaticProps({ context, query: myQuery })
  if (props) {
    return props
  }
}

export default async function DashboardPage() {
  return (
    <ul>
      <li>
        <Link href='testing'>Just testing, ok?</Link>
      </li>
    </ul>
  )
}
