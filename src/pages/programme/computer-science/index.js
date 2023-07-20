import React from 'react'
import Head from 'next/head'
import Layout from '@/components/homePageLayout/Layout'

const computerScince = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Computer Science | USM</title>
        </Head>
        <section className='min-h-main py-12'>
        <article className='layout flex flex-row w-full'>
          <div className='w-fit border-r-[10px] border-usm-primary-orange px-4'>
            <div>
              <div className='border-b-8 border-usm-primary-purple'>
                <span className='uppercase text-4xl font-extrabold text-usm-primary-purple'>MASTER OF SCIENCE (Computer Science)</span>
              </div>
              <div className='flex justify-end w-[300px]'>
                <span className='uppercase text-4xl font-extrabold text-usm-primary-orange text-right'>
                  Mixed Mode
                </span>
              </div>
            </div>
          </div>

          <div className='px-10 text-justify'>
            <div className='space-y-6'>
              <p className='h3 uppercase'>Introduction and Programme Educational Objective</p>
              <p className='h3 font-medium'>This programme was first introduced as a coursework programme in 1996 to replace a mixed-mode programme, 
              MSc. (Artificial Intelligence) which was first offered in 1987. The curriculum was appropriately revised in 2001 and subsequently in 2007 
              academic year, resulting in a mixed-mode programme which is the current mode of the programme. In 2018, a revised curriculum was introduced.</p>
              <p className='h3 font-medium'>
              The goal of this programme is to produce computing practioners with advanced knowledge and research skills in Computer Science.
               Therefore, the programme educational objective of this programme is to produce computing practitioners who:
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
              <p className='h3 font-medium'>Hits: 8518</p>
            </div>
          </div>
        </article>
        </section>
      </Layout>
    </>
  )
}
const ContentList = [
  {content:"[PEO1]   are competent with a firm grounding in Computer Science to foster research and development of new knowledge in the field."},
  {content:"[PEO2]   have leadership skills, and are able to communicate as well as interact effectively with diverse stakeholders."},
  {content:"[PEO3]   have positive attitudes, lifelong learning capabilities and entrepreneurial mind-set for successful career."},
  {content:"[PEO4]   uphold and defend ethical and professional practices in maintaining self and professional integrity."},
]
export default computerScince