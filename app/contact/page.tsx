'use client'

import Link from "next/link"
import {useRouter} from 'next/navigation'


export default function Contact() {
    const router = useRouter()

    return (
      <div>

        <h1>contact us</h1>
        <Link href='/'>home</Link>
        <Link href={`/blog/aaa`}>post</Link>
        <button onClick={() => router.push('/')}>Home</button>
      </div>
    )
  }