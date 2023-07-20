import React from 'react'
import Head from 'next/head'
import Layout from '@/components/homePageLayout/Layout'

const programmeStructure = () => {
  return (
    <>
      <Layout isContent={true} titleContent={"Programme Structure"}>
        <Head>
          <title>Digital Transformation | Programme Structure</title>
        </Head>
        <section className='min-h-main pt-12 text-justify h3 font-medium space-y-8 py-12'>
          <article className='layout space-y-4'>
            <p>Credit requirements: 44 units</p>
            <p className='h3'>
              (i) Core Courses: 24 units (Code: T)
            </p>
            <div className='space-y-4'>
              <ul className='list-decimal ml-10'>
                <li>
                  Perform computer science research project using a suitable methodology.
                </li>
                <li>
                  Defend orally the research progress /outcomes convincingly.
                </li>
                <li>
                  Perform the research tasks and processes in an ethical manner.
                </li>
                <li>
                  Perform literature review relevant to domain of interest independently.
                </li>
                <li>
                  Perform the research with proper planning to meet research milestone.
                </li>
              </ul>
            </div>
          </article>
          <article className='layout space-y-4'>
            <p className='h3'>(ii) Elective Courses: 8 Units (Code: E)</p>
            <p>Choose any two (2) courses from the electives below:</p>
            <div className='flex flex-col w-3/4'>
              <table className='border-spacing-1 border-separate '>
                <thead className=''>
                  <tr className='bg-red-200 h-[100px]'>
                    <th className='border-2 border-black px-2' colSpan={2}>
                      Digital Infrastructure</th>
                  </tr>
                </thead>
                <tbody >
                  <tr className='border-4 border-black px-2'>
                    <td className='border-2 border-black px-2'>
                      (a)
                    </td>
                    <td className='border-2 border-black px-2'>
                      CDT545/4 – Cyber Security in Digital Transformation
                    </td>
                  </tr>

                  <tr className='border-4 border-black px-2'>
                    <td className='border-2 border-black px-2'>
                      (b)
                    </td>
                    <td className='border-2 border-black px-2'>
                      CDS504/4 – Enabling Technologies and Infrastructures for Big Data
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className='border-spacing-1 border-separate '>
                <thead className=''>
                  <tr className='bg-red-200 h-[100px]'>
                    <th className='border-2 border-black px-2' colSpan={2}>
                      Business and Organisation</th>
                  </tr>
                </thead>
                <tbody >
                  <tr className='border-4 border-black px-2'>
                    <td className='border-2 border-black px-2'>
                      (a)
                    </td>
                    <td className='border-2 border-black px-2'>
                      CDS511/4 – Consumer Behavioural and Social Media Analytics
                    </td>
                  </tr>

                  <tr className='border-4 border-black px-2'>
                    <td className='border-2 border-black px-2'>
                      (b)
                    </td>
                    <td className='border-2 border-black px-2'>
                      CDS512/4 – Business Intelligence and Decision Analytics
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <article className='layout space-y-4'>
            <p className='h3'>(iii) Project (Core): 12 units (Code: T)</p>
            <p>CDT594/12 – Digital Transformation Project and Practicum</p>
            <p>This experiential work-based learning course designed to equip students to confidently help conceive, lead and execute digital transformation initiatives and develop new business models for existing organizations through the implementation of a consultancy project. Students are required to complete the practicum at their respective workplaces or their chosen/assigned organisations.  Students work under the supervision of a lecturer and an industry supervisor.  The students are required to solve a real-world problem or tap opportunities related to digital transformation during their practicum. The prerequisite of this course is CDS506 which must be taken in the preceding semester. The students are required to secure practicum placement together with project proposal during CDS506.</p>
          </article>
        </section>
      </Layout>
    </>
  )
}

export default programmeStructure