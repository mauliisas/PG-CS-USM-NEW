import { WrapTextContent, WrapContent } from '@/components/CardContent'
import Layout from '@/components/homePageLayout/Layout'
import React from 'react'
import { Pdf } from '@/utils/data'

const index = () => {

  return (
    <Layout>
      <section className='min-h-main py-12'>
        <article className='layout grid grid-cols-2 h2 gap-24'>
          <div className='flex justify-center flex-col'>
            <p>MSc (Computer Science) Mixed Mode</p>
            <div className='h-[512px] mx-auto overflow-y-auto space-y-10 py-4'>

              {
                Pdf.variant1.map((data, index) => {
                  return (
                    <WrapContent key={index} title={data.title} url={data.url} type={data.type} thumbnail={data.thumb} />
                  )
                })
              }
            </div>
          </div>
          <div className='flex justify-center flex-col'>
            <p>MSc (Data Science & Analytics) Coursework Mode</p>
            <div className='h-[512px] mx-auto overflow-y-auto space-y-10 py-4'>

              {
                Pdf.variant2.map((data, index) => {
                  return (
                    <WrapContent key={index} title={data.title} url={data.url} type={data.type} thumbnail={data.thumb} />
                  )
                })
              }
            </div>
          </div>
          <div className='flex justify-center flex-col'>
            <p>MSc in Digital Transformation Coursework Mode</p>
            <div className='h-[512px] mx-auto overflow-y-auto space-y-10 py-4'>

              {
                Pdf.variant3.map((data, index) => {
                  return (
                    <WrapContent key={index} title={data.title} url={data.url} type={data.type} thumbnail={data.thumb} />
                  )
                })
              }
            </div>
          </div>
          <div className='flex justify-center flex-col'>
            <p>General Information for All Programmes</p>
            <div className='h-[512px] mx-auto overflow-y-auto space-y-10 py-4'>

              {
                Pdf.variant4.map((data, index) => {
                  return (
                    <WrapContent key={index} title={data.title} url={data.url} type={data.type} thumbnail={data.thumb} />
                  )
                })
              }
            </div>
          </div>

          <div className='flex justify-center flex-col'>
            <p>IPS Useful Forms </p>
            <div className='h-[512px] mx-auto overflow-y-auto space-y-10 py-4'>

              {
                Pdf.variant5.map((data, index) => {
                  return (
                    <WrapTextContent key={index} title={data.title} body={data.body} type={data.type} link={data.link} list={data.list} />
                  )
                })
              }
            </div>
          </div>
          <div className='flex justify-center flex-col'>
            <p>FAQS</p>
            <div className='h-[512px] mx-auto overflow-y-auto space-y-10 py-4'>
              {
                Pdf.variant6.map((data, index) => {
                  return (
                    <WrapContent key={index} title={data.title} desc={data.desc} url={data.url} type={data.type} thumbnail={data.thumb} />
                  )
                })
              }
              {
                Pdf.variant6txt.map((data, index) => {
                  return (
                    <WrapTextContent key={index} title={data.title} body={data.body} type={data.type} link={data.link} list={data.list} />
                  )
                })
              }
            </div>
          </div>

          <div className='flex justify-center flex-col'>
            <p>FAQS</p>
            <div className='h-[512px] mx-auto overflow-y-auto space-y-10 py-4'>

              {
                Pdf.variant7.map((data, index) => {
                  return (
                    <WrapTextContent key={index} title={data.title} body={data.body} type={data.type} link={data.link} list={data.list} />
                  )
                })
              }
            </div>
          </div>

          <div className='flex justify-center flex-col'>
            <p>Teaching & Learning</p>
            <div className='h-[512px] mx-auto overflow-y-auto space-y-10 py-4'>

              {
                Pdf.variant8txt.map((data, index) => {
                  return (
                    <WrapTextContent key={index} title={data.title} body={data.body} type={data.type} link={data.link} list={data.list} />
                  )
                })
              }
              {
                Pdf.variant8.map((data, index) => {
                  return (
                    <WrapContent key={index} title={data.title} desc={data.desc} url={data.url} type={data.type} thumbnail={data.thumb} />
                  )
                })
              }
            </div>
          </div>

          <div className='flex justify-center flex-col'>
            <p>Useful Contacts</p>
            <div className='h-[512px] mx-auto overflow-y-auto space-y-10 py-4'>
              {
                Pdf.variant9.map((data, index) => {
                  return (
                    <WrapContent key={index} title={data.title} desc={data.desc} url={data.url} type={data.type} thumbnail={data.thumb} />
                  )
                })
              }
              {
                Pdf.variant9txt.map((data, index) => {
                  return (
                    <WrapTextContent key={index} title={data.title} body={data.body} type={data.type} link={data.link} list={data.list} />
                  )
                })
              }
            </div>
          </div>

          <div className='flex justify-center flex-col'>
            <p>Q&A During Welcoming Ceremony</p>
            <div className='h-[512px] mx-auto overflow-y-auto space-y-10 py-4'>
              {
                Pdf.variant10.map((data, index) => {
                  return (
                    <WrapTextContent key={index} title={data.title} body={data.body} type={data.type} link={data.link} list={data.list} />
                  )
                })
              }
            </div>
          </div>
        </article>
      </section>
    </Layout>
  )
}



export default index