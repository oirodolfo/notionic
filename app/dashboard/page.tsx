import React from 'react'
import Link from 'next/link'

export default async function DashboardPage() {
  return (
    <ul>
      <li>
        <Link href='testing'>Just testing, ok?</Link>
      </li>
    </ul>
  )
}
