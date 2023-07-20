import React from 'react'
import Head from 'next/head'
import Layout from '@/components/homePageLayout/Layout'

const dataScienceAnalytic = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Data Science analytic | USM</title>
        </Head>
        <section className='min-h-main py-12'>
        <article className='layout flex flex-row w-full'>
          <div className='w-fit border-r-[10px] border-usm-primary-orange px-4'>
            <div>
              <div className='border-b-8 border-usm-primary-purple'>
                <span className='uppercase text-4xl font-extrabold text-usm-primary-purple'>MASTER OF SCIENCE (DATA SCIENCE AND ANALYTICS)</span>
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
              <p className='h3 font-medium'>This programme was introduced in the 2017/18 academic year to meet the ever-growing demand of professional practitioners in the field of Big Data Analytics.</p>
              <p className='h3 font-medium'>
              The goal of this programme is to produce workforce/professional practioners in the field of Big Data Analytics who are capable of making right decisions based on the availability of comprehensive data. Therefore, the educational objective of this programme is to produce computing practitioners who:
              </p>
              <ul className='h3 font-medium'>
                {
                  ContentList.map((data,index)=>{
                    return(
                      <li key={index}>
                          {data.content}
                      </li>
                    )
                  })
                }
              </ul>
              <p className='h3 font-medium'>Hits: 8532</p>
            </div>
          </div>
        </article>
        </section>
      </Layout>
    </>
  )
}
const ContentList = [
  {content:"[PEO1]   have advanced knowledge in the field of Data science and Analytics capable of adopting best methodologies, tools and techniques to provide innovative solutions across various sectors."},
  {content:"[PEO2]   have leadership skills, and are able to communicate as well as interact effectively with diverse stakeholders."},
  {content:"[PEO3]   have positive attitudes, lifelong-learning capabilities and entrepreneurial mind-set for successful career."},
  {content:"[PEO4]   uphold and defend ethical and professional practices in maintaining self and professional integrity."},
]
export default dataScienceAnalytic