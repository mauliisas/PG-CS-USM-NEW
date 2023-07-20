import React from 'react'
import Head from 'next/head'
import Layout from '@/components/homePageLayout/Layout'

const digitalTransformation = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Digital Transformation | USM</title>
        </Head>
        <section className='min-h-main py-12'>
          <article className='layout flex flex-row w-full'>
            <div className='w-fit border-r-[10px] border-usm-primary-orange px-4'>
              <div>
                <div className='border-b-8 border-usm-primary-purple w-[300px]'>
                  <span className='uppercase text-4xl font-extrabold text-usm-primary-purple'>MASTER OF SCIENCE IN DIGITAL TRANSFORMATION</span>
                </div>
                <div className='flex justify-end w-[300px]'>
                  <span className='uppercase text-4xl font-extrabold text-usm-primary-orange text-right'>
                  COURSEWORK MODE
                  </span>
                </div>
              </div>
            </div>

            <div className='px-10 text-justify'>
              <div className='space-y-6'>
                <p className='h3 font-medium'>
                The goal of this programme is to produce workforce/human resources who are capable of using digital technology and applications to improve existing processes and workforce efficiency, enhance customer experience, and launch new products or business models. Therefore, the objectives of this programme are to produce computing practitioners who:
                </p>
                <ul className='h3 font-medium list-disc ml-10'>
                  {
                    ContentList.map((data, index) => {
                      return (
                        <li key={index}>
                          {data.content}
                        </li>
                      )
                    })
                  }
                </ul>
                <p className='h3 font-medium'>Hits: 5080</p>
              </div>
            </div>
          </article>
        </section>
      </Layout>
    </>
  )
}
const ContentList = [
  {content:"have advanced knowledge in Digital Transformation who are capable of adopting best methodologies and techniques in providing innovative solutions across various sectors"},
  {content:"have leadership skills and are able to communicate as well as interact effectively with diverse stakeholders"},
  {content:"have positive attitudes, engaging in lifelong learning activities and having entrepreneurial mind-set for successful career"},
  {content:"uphold and defend ethical and professional practices in maintaining self and professional integrity"},
]

export default digitalTransformation