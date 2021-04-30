import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="flex justify-center items-center flex-col min-h-screen text-xs font-mono">
    <Head>
      <title>{title}</title>
    </Head>
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
    <main className="flex flex-1 justify-center items-center flex-col w-screen">
      {children}
    </main>
    <footer className="w-full h-12 flex justify-center items-center border-2">
      <p className="flex items-center">Powered by UKIYOcreate</p>
    </footer>
  </div>
)

export default Layout
