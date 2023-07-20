import Carousel from '@/components/Carousel'
import Layout from '@/components/homePageLayout/Layout'
import Image from 'next/image'


export default function Home() {
  return (
    <Layout>
      <section className='min-h-main space-y-10'>
        <article className='h-[457px]'>
          <Carousel/>
        </article>
        <article className='layout mx-auto h-[457px] flex py-12'>
          <div className='w-4/5 h-full border-r-[10px] border-usm-primary-orange px-4'>
            <div>
              <div className='border-b-8 border-usm-primary-purple'>
                <span className='uppercase text-6xl font-extrabold text-usm-primary-purple'>Vision</span>
              </div>
              <div className='flex justify-end bg-white'>
                <span className='uppercase text-6xl font-extrabold text-usm-primary-orange text-right'>
                  Mission
                </span>
              </div>
            </div>
          </div>

          <div className='space-y-4 p-10'>
            <div>
              <p className='h2 uppercase'>Vission:</p>
              <p className='h2 font-medium'>Towards holistic and sustainability-inspired computing for a better tomorrow</p>
            </div>
            <div>
              <p className='h2 uppercase'>Mission:</p>
              <p className='h2 font-medium'>Providing holistic and sustainability-inspired computing in the quest for knowledge
                and excellence in education and research that nurtures individuals who can contribute
                effectively towards the transformation of the nation.</p>
            </div>
          </div>
        </article>
      </section>
    </Layout>

  )
}
