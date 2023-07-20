import React from 'react'
import Head from 'next/head'
import Layout from '@/components/homePageLayout/Layout'

const programmeStructure = () => {
  return (
    <>
      <Layout  isContent={true} titleContent={"Programme Structure"}>
        <Head>
          <title>Data Science analytic | Programme Structure</title>
        </Head>
        <section className='min-h-main pt-12 text-justify h3 font-medium space-y-8 py-12'>
          <article className='layout space-y-4'>
            <div className='h3 font-medium space-y-4'>
              <p>Credit requirements: 44 units</p>
              <p className='h3'>(i)    Core Courses (Taught Courses) : 24 units (Code: T) </p>
              <div className='flex flex-col w-3/4'>
              <table className='border-spacing-1 border-separate '>
                <tbody >
                  <tr className='border-4 border-black px-2'>
                    <td className='border-2 border-black px-2'>
                      (a)
                    </td>
                    <td className='border-2 border-black px-2'>
                      CDS501/4 – Principles and Practices of Data Science and Analytics
                    </td>
                  </tr>
                  <tr className='border-4 border-black px-2'>
                    <td className='border-2 border-black px-2'>
                      (b)
                    </td>
                    <td className='border-2 border-black px-2'>
                      CDS502/4 – Big Data Storage and Management
                    </td>
                  </tr>
                  <tr className='border-4 border-black px-2'>
                    <td className='border-2 border-black px-2'>
                      (c)
                    </td>
                    <td className='border-2 border-black px-2'>
                      CDS503/4 – Machine Learning
                    </td>
                  </tr>
                  <tr className='border-4 border-black px-2'>
                    <td className='border-2 border-black px-2'>
                      (d)
                    </td>
                    <td className='border-2 border-black px-2'>
                      CDS504/4 – Enabling Technologies and Infrastructures for Big Data
                    </td>
                  </tr>
                  <tr className='border-4 border-black px-2'>
                    <td className='border-2 border-black px-2'>
                      (e)
                    </td>
                    <td className='border-2 border-black px-2'>
                      CDS505/4 – Data Visualisation and Visual Analytics
                    </td>
                  </tr>
                  <tr className='border-4 border-black px-2'>
                    <td className='border-2 border-black px-2'>
                      (f)
                    </td>
                    <td className='border-2 border-black px-2'>
                      CDS506/4 – Research, Consultancy and Professional Skills
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
          </article>
          <article className='layout space-y-4'>
            <div className='h3 font-medium space-y-4 py-5'>
              <p className='h3'>(ii) Elective Courses: 12 Units (Code: E)</p>
              <p>Choose any <strong>three (3)</strong> courses from the table below:</p>
              <div className='flex flex-col w-3/4'>
              <table className='border-spacing-1 border-separate '>
                <thead className=''>
                  <tr className='bg-green-200 h-[100px]'>
                    <th className='border-2 border-black px-2' colSpan={2}>
                      Business Analytics</th>
                  </tr>
                </thead>
                <tbody >
                  <tr className='border-4 border-black px-2'>
                    <td className='border-2 border-black px-2'>
                      (a)
                    </td>
                    <td className='border-2 border-black px-2'>
                     CDS511/4–Consumer Behavioural and Social Media Analytics
                    </td>
                  </tr>

                  <tr className='border-4 border-black px-2'>
                    <td className='border-2 border-black px-2'>
                      (b)
                    </td>
                    <td className='border-2 border-black px-2'>
                      CDS512/4–Business Intelligence and Decision Analytics
                    </td>
                  </tr>

                  <tr className='border-4 border-black px-2'>
                    <td className='border-2 border-black px-2'>
                      (c)
                    </td>
                    <td className='border-2 border-black px-2'>
                      CDS513/4–Predictive Business Analytics
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className='border-spacing-1 border-separate '>
                <thead className=''>
                  <tr className='bg-green-200 h-[100px]'>
                    <th className='border-2 border-black px-2' colSpan={2}>
                      Multimodal Analytics</th>
                  </tr>
                </thead>
                <tbody >
                  <tr className='border-4 border-black px-2'>
                    <td className='border-2 border-black px-2'>
                      (a)
                    </td>
                    <td className='border-2 border-black px-2'>
                      CDS521/4 – Multimodal Information Retrieval
                    </td>
                  </tr>

                  <tr className='border-4 border-black px-2'>
                    <td className='border-2 border-black px-2'>
                      (b)
                    </td>
                    <td className='border-2 border-black px-2'>
                      CDS522/4–Text and Speech Analytics
                    </td>
                  </tr>

                  <tr className='border-4 border-black px-2'>
                    <td className='border-2 border-black px-2'>
                      (c)
                    </td>
                    <td className='border-2 border-black px-2'>
                      CDS523/4–Forensic Analytics and Digital Investigations
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
          </article>
          <article className='layout space-y-4'>
            <div className='h3 font-medium space-y-4'>
              <p className='h3'> (iii)  Project (Core): 8 units (Code: T)</p>
              <p>CDS590 – Consultancy Project and Practicum</p>
              <p>This experiential work-based learning course prepares students to be a data scientist/analytics consultant by enhancing students’ knowledge and skills in research, planning and implementation of a consultancy project in the field of data science/analytics, which can be applied to real life situation.  Students are required to complete the practicum at their respective workplaces or their chosen/assigned organisations.  Students work under the supervision of a lecturer and an industry supervisor.  The students are required to solve a real- world problem or tap opportunities related to data science and analytics during their practicum.</p>
              <p>The prerequisite of this course is CDS506 which must be taken in the preceding semester. The students are required to secure practicum placement together with project proposal during CDS506.</p>
              <p>At the end of this course, the students will be able to:</p>
              <div className='space-y-4'>
                <ul className='list-decimal ml-10'>
                    <li>
                        Devise a solution to a real-world problem using data science technique appropriately.
                    </li>
                    <li>
                      Practice effective communication orally, the progress and achievement of the practicum.
                    </li>
                    <li>
                      Perform work collaboratively in a multi-ethnic environment with superior, colleagues, staff and supervisors.
                    </li>
                    <li>
                      Display professional behaviours such as trust, honest and non-violation of the predefined policy at the workplace.
                    </li>
                    <li>
                      Display confidence and ability to overcome challenges in completing the project and practicum.
                    </li>
                    <li>
                      Perform project tasks with proper planning to meet project milestone.
                    </li>
                    <li>
                      Display high level of responsibility and accountability to lead the project independently.
                    </li>
                </ul>
              </div>
            </div>
          </article>
        </section>
      </Layout>
    </>
  )
}

export default programmeStructure