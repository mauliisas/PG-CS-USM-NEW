import React from 'react'
import Head from 'next/head'
import Layout from '@/components/homePageLayout/Layout'
import { CsProgramme2 } from '@/utils/data'

const courseSynopsis = () => {
  return (
    <>
      <Layout isContent={true} titleContent={"Course Synopsis"}>
        <Head>
          <title>Data Science analytic | Course Synopsis</title>
        </Head>
        <section className='min-h-main py-12'>
          <article className='layout h3 font-medium space-y-10'>
            {
              CsProgramme2.map((data, index) => {
                return (
                  <div key={index} className='space-y-10'>
                    <p className='h3'>{data.title}</p>
                    <p className='text-justify'>{data.body}</p>
                    {
                      data.list2 ? "" : data.list ? <p>
                        At the end of this course, the students will be able to:
                      </p> : ""
                    }
                    <ul className='list-disc ml-10 text-justify'>
                      {
                        data.list && data.list.map((data, index) => {
                          return (
                            <li key={index}>{data}</li>
                          )
                        })
                      }
                    </ul>
                    {
                      data.body2 && data.list2 ?
                        <>
                          <p className='text-justify'>{data.body2}</p>
                          <p>
                            At the end of this course, the students will be able to:
                          </p>
                          <ul className='list-disc ml-10 text-justify'>
                            {
                              data.list2.map((data, index) => {
                                return (
                                  <li key={index}>{data}</li>
                                )
                              })
                            }
                          </ul>
                        </>
                        : ""
                    }
                  </div>
                )
              })
            }
          </article>
        </section>
      </Layout>
    </>
  )
}

export default courseSynopsis