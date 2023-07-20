import React from 'react'
import Head from 'next/head'
import Layout from '@/components/homePageLayout/Layout'
import Link from 'next/link'

const admissionInfo = () => {
  return (
    <>
      <Layout isContent={true} titleContent={"Admission Info"}>
        <Head>
          <title>Data Science analytic | Admission Info</title>
        </Head>
        <section className='min-h-main py-12'>
          <article className='layout h3 font-medium text-justify space-y-4'>
            <div className='space-y-2'>
              <p className='h3'>1. Admission Requirements</p>
              <p>Applicants should possess the following:</p>
              <ul className='list-disc ml-10'>
                <li>
                  Applicants should possess a bachelor's degree in any field focusing on numeracy skills such as computing, engineering, physical sciences and other fields that contain sound statistical background (e.g. business, accounting, economics, life sciences and health sciences) with a minimum CGPA of 2.75 and above, or equivalent, from a recognized university.
                </li>
                <li>
                  Priority will be given to applicants who have working experience of at least 3 years in areas related to ICT.
                </li>
                <li>
                  Degrees awarded by local private institutions of higher learning, including those awarded under any collaborative/franchising schemes with local or foreign partners must be accredited by the Malaysian Qualifications Agency (MQA).
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
                  A minimum score of 35 in Internet-based TOEFL (Test of English as a Foreign Language) ; OR
                </li>
                <li>
                  A minimum score of 5.0 in IELTS (International English Language Testing System); or
                </li>
                <li>
                  A minimum score of 154 in Cambridge English Advance (CAE); or
                </li>
                <li>
                  A minimum score of 154 in Cambridge Proficiency Advance (CPE); or
                </li>
                <li>
                  A minimum score of 36 in Pearson Test of English (PTE); or
                </li>
                <li>
                  English is the candidate's mother tongue or National Language; or
                </li>
                <li>
                  The candidate graduated from an Institution of Higher Learning in which the medium of instruction at Bachelor and Master level is English; or
                </li>
                <li>
                  <p>English courses offered by British Council <span className='italic text-usm-primary-orange'> (The level of qualification and the relevant courses are to be identified by the University Postgraduate Studies Council )</span>; or</p>
                </li>
                <li>
                  <p>English courses from selected Malaysian public/private University or institution <span className='italic text-usm-primary-orange'>(The level of qualification and the relevant courses are to be identified by the University Postgraduate Studies Council)</span></p>
                </li>
              </ul>
            </div>

            <div className='space-y-2'>
              <p className='h3'>3. Durations</p>
              <p>Full-time: Min 3 semesters / Max 6 semesters</p>
            </div>

            <div className='space-y-2'>
              <p className='h3'>4. Semester Intake</p>
              <p>February & September </p>
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