import React from 'react'
import Link from 'next/link'

export const Header = () => (
  <header>
    <nav className="flex bg-green-500 w-screen h-14">
      <div className="flex justify-center items-center">
        <Link href="/">
          <a className="px-3 py-2 hover:bg-gray-50">Home</a>
        </Link>
        <Link href="/blog-page">
          <a className="px-3 py-2 hover:bg-gray-50">Blog</a>
        </Link>
        <Link href="/contact-page">
          <a className="px-3 py-2 hover:bg-gray-50">Contact</a>
        </Link>
      </div>
    </nav>
  </header>
)
