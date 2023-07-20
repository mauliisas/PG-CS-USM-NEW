import React from 'react'
import Head from 'next/head'
import Layout from '@/components/homePageLayout/Layout'
import Link from 'next/link'

const admissionInfo = () => {
  return (
    <>
      <Layout isContent={true} titleContent={"Admission Info"}>
        <Head>
          <title>Digital Transformation | Admission Info</title>
        </Head>
        <section className='min-h-main py-12'>
          <article className='layout h3 font-medium text-justify space-y-4'>
            <div className='space-y-2'>
              <p className='h3'>1. Admission Requirements</p>
              <p>Applicants should possess the following:</p>
              <ul className='list-disc ml-10'>
                <li>
                  A bachelor’s degree in the field of computing/ICT with a CGPA of at least 2.75 or equivalent from a recognised university.
                </li>
              </ul>
            </div>

            <div className='space-y-2'>
              <p className='h3'>2. Language Requirements</p>
              <p>
                (Applicable for International Applicants Only)
              </p>
              <ul className='list-disc ml-10'>
                <li>
                  A minimum score of 550 in TOEFL (Test of English as a Foreign Language) Paper-based Test (PBT); or
                </li>
                <li>
                  A minimum score of 213 in TOEFL Computer-based Test (CBT); or
                </li>
                <li>
                  A minimum score of 80 in TOEFL Internet-based Test (iBT); or
                </li>
                <li>
                  A minimum of Band 5.0 in IELTS (International English Language Testing System); or
                </li>
                <li>
                  A minimum of Grade B in the USM Intensive English Course Level 4 offered by the School of Language, Literacies and Translation; or
                </li>
                <li>
                  English is the applicant’s mother tongue or national language; or
                </li>
                <li>
                  The applicant graduated from an Institution of Higher Learning in which the medium of instruction is English; or
                </li>
                <li>
                  English language course offered by the British Council (subjected to the consideration of the University’s Postgraduate Studies Board); or
                </li>
                <li>
                  English language course from selected Public or Private Institution of Higher Learning (subjected to the consideration of the University’s Postgraduate Studies Board).
                </li>
              </ul>
            </div>

            <div className='space-y-2'>
              <p className='h3'>3. Durations</p>
              <ul className='list-disc ml-10'>
                <li>
                Full-time: Min 3 semesters / Max 6 semesters
                </li>
                <li>
                Part-time: Min 4 semesters / Max 8 semesters
                </li>
              </ul>
            </div>

            <div className='space-y-2'>
              <p className='h3'>4. Semester Intake</p>
              <p>April & October </p>
            </div>

            <div className='space-y-2'>
              <Link href={'https://admission.usm.my/images/IPS/PG_Fees_Nov22.pdf'} legacyBehavior passHref>
                <a href='https://admission.usm.my/images/IPS/PG_Fees_Nov22.pdf' className='text-usm-primary-orange h3'>5.Fee</a>
              </Link>
            </div>
          </article>
        </section>
      </Layout>
    </>
  )
}

export default admissionInfo