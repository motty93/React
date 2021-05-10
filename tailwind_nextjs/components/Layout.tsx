import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Header } from './Header'
import { Footer } from './Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="flex justify-center items-center flex-col min-h-screen text-xs font-mono">
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <main className="flex flex-1 justify-center items-center flex-col w-screen">
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout
