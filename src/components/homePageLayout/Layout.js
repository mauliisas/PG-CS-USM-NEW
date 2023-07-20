import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import TitleContent from '../TitleContent'


const Layout = ({ children, isContent, titleContent }) => {
  return (
    <>
      <Head>
        <title>Master of Science | USM</title>
      </Head>
      <div className='sticky top-0 z-50'>
        <Header />
        {
          isContent && <><TitleContent>{titleContent}</TitleContent></>
        }
      </div>
      {children}
      <Footer/>
    </>
  )
}

export default Layout