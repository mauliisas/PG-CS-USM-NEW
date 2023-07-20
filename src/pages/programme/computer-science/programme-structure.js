import React from 'react'
import Head from 'next/head'
import Layout from '@/components/homePageLayout/Layout'

const programStructure = () => {
  return (
    <Layout isContent={true} titleContent={"Programme Structure"}>
      <Head>
        <title>Computer Science | Programme Structure</title>
      </Head>
      <section className='min-h-main pt-12 text-justify'>
        <article className='layout space-y-4'>
          <div className='h3 font-medium space-y-4'>
            <p >This mixed mode programme requires a minimum duration of one (1) year and a maximum of two (2) years for
              fulltime study or a minimum duration of two (2) years and a maximum of four (4) years for part-time study.
              It consists of two distinct components; a taught component and a research component resulting in a dissertation.
            </p>
            <p>Two focus areas are offered:</p>
            <ul className='list-disc ml-10'>
              <li>
                Data and Knowledge Engineering
              </li>
              <li>
                Enabling Technologies and Infrastructures
              </li>
            </ul>

            <p className='h3'>
              (i)      Core Courses (Taught courses) : 8 units (Code: T)
            </p>
            <ul className='ml-10'>
              <li>
                CCS591/4 – Research and Empirical Methods in Computer Science
              </li>
              <li>
                CCS592/4 – Advanced Algorithms and Complexity
              </li>
            </ul>

            <p className='h3'>(ii)     Elective Courses: 12 units (Code: E)</p>
            <p className='ml-10'>      Choose three (3) elective courses with at least two (2) courses from a chosen focus area.
              The following table presents the list of elective courses under the two focus areas.   </p>
          </div>

          <div className='border-4 border-black rounded-xl w-[716px] h-[255px] p-8 space-y-2 text-left'>
            <p className='h1'>
              Data & Knowledge Engineering
            </p>
            <ul className='text-xl'>
              <li>
                (a) CCS516/4 – Computational Intelligence
              </li>
              <li>
                (b) CDS503/4 – Machine Learning +
              </li>
              <li>
                (c) CDS505/4 – Data Visualization and Visual Analytics +
              </li>
              <li>
                (d) CDS521/4 – Multimodal Information Retrieval +
              </li>
              <li>
                (e) CDS522/4 – Text and Speech Analytics +
              </li>
            </ul>
          </div>

          <div className='border-4 border-black rounded-xl w-[716px] h-[329px] p-8 space-y-2 text-left'>
            <p className='h1'>
              Enabling Technologies & Infrastructures
            </p>
            <ul className='text-xl'>
              <li>
                (f)CCS525/4 – Advanced Cloud Computing Platform
              </li>
              <li>
                (g)CCS526/4 – Wireless and Mobile Communications
              </li>
              <li>
                (h)CCS527/4 – Internet of Things
              </li>
              <li>
                (i)CCS528/4 – Information Security and Cryptography
              </li>
              <li>
                (j)CDS523/4 – Forensic Analytics and Digital
                Investigations Courses offered under MSc
                (Data Science and Analytics)
              </li>
            </ul>
          </div>
        </article>

        <article className='layout space-y-6 h3 font-medium py-4'>
          <div className='space-y-6'>
            <p className='h3'>
              (iii) Dissertation (Core Course): 20 unit (Code: T)
            </p>
            <p>
              CCS599/20 – Dissertation
            </p>
            <p>
              The course aims to enhance students’ knowledge and skills in planning and implementation of a research project in the field of computer science.
              Students can choose research topics in related areas in computer science but they are encouraged to choose research topic in their respective focus area,
              and then proceed to conduct extensive review of literature pertaining to the topic and eventually carry out the research under the supervision of a lecturer.
              At the end of the course, students are required to produce a satisfactory dissertation in order to fulfill their degree requirements.
            </p>
          </div>
          <div className='space-y-4'>
            <p>
              At the end of this course, the students will be able to:
            </p>
            <ul className='list-disc ml-10'>
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
            <p>
              Students need to plan early and consult prospective supervisors for a suitable research topic/title at the beginning of the pre-requisite course CCS591. CCS591
              and CSS599 Dissertation must be taken in two consecutive semesters (CCS591 followed by CCS599). Students are strongly encouraged to choose a research
              topic from their chosen focus area. The research areas offered within the two focus areas are listed in the table below.
            </p>
          </div>
        </article>

        <article className='layout flex space-x-2'>
          <div className='w-[481px] space-y-2'>
            <div className='h-[88px] border-2 border-black rounded-lg flex items-center px-4'>
              <p className='h2'>Focus Area</p>
            </div>
            <div className='h-[367px] border-2 border-black rounded-lg flex justify-center items-center'>
              <p className='h2'>Data & Knowledge Engineering</p>
            </div>
            <div className='h-[209px] border-2 border-black rounded-lg flex justify-center items-center px-4'>
              <p className='h2'>
                Enabling Technologies & Infrastructures
              </p>
            </div>
          </div>

          <div className='w-[581px] space-y-2'>
            <div className='h-[88px] border-2 border-black rounded-lg flex items-center px-4'>
              <p className='h2'>Research Area</p>
            </div>
            <div className='h-[367px] border-2 border-black rounded-lg py-8 px-4'>
              <ul className='h3 font-medium'>
                {
                  Research.map((content, index) => {
                    return (
                      <li key={index}>
                        {content.content}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className='h-[209px] border-2 border-black rounded-lg'>
              <ul className='h3 font-medium px-4 py-10'>
                <li>
                  COM31 – High Performance Computing
                </li>
                <li>
                  COM32 – Networks
                </li>
                <li>
                  COM33 – Information Security
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article className='layout h3 font-medium py-10 space-y-4'>
          <p>Students may commence their dissertation during the Inter-Semester Break and complete the course at the end of the Long Vacation
            Session OR during the Long Vacation Session and complete the course at the end of Semester I.
            The duration for this course is approximately 30 weeks [including the evaluation process and submission of the final hardbound copy of the dissertation].
            The following table presents duration and sessions involved in the course</p>
          <div>
            <table className='border-spacing-1 border-separate '>
              <thead className=''>
                <tr className='bg-red-300 h-[100px]'>
                  <th className='border-2 border-black px-2'>Actvity</th>
                  <th className='border-2 border-black px-2'></th>
                  <th className='border-2 border-black px-2'></th>
                </tr>
              </thead>
              <tbody >
                <tr className='border-4 border-black'>
                  <td className='border-2 border-black px-2'>
                    Start
                  </td>
                  <td className='border-2 border-black px-2'>
                    Inter-Semester Break
                  </td>
                  <td className='border-2 border-black px-2'>
                    Long Vacation Session
                  </td>
                </tr>

                <tr className='boder'>
                  <td className='border-2 border-black px-2'>
                    Registration (Web-Based)
                  </td>
                  <td className='border-2 border-black px-2'>
                    Semester II (February)
                  </td>
                  <td className='border-2 border-black px-2'>
                    Semester I (September)
                  </td>
                </tr>

                <tr className='boder'>
                  <td className='border-2 border-black px-2'>
                    Duration
                  </td>
                  <td className='border-2 border-black px-2'>
                    4 weeks (Inter-Semester Break) + 19 weeks (Semester II) + 7 weeks (Long Vacation)
                  </td>
                  <td className='border-2 border-black px-2'>
                    10 weeks (Long Vacation) + 20 weeks (Semester I including 1st Week of the Inter-Semester Break)
                  </td>
                </tr>

                <tr className='boder'>
                  <td className='border-2 border-black px-2'>
                    Completion
                  </td>
                  <td className='border-2 border-black px-2'>
                    7th Week of the Long Vacation Session
                  </td>
                  <td className='border-2 border-black px-2'>
                    1st Week of the Inter-Semester Break
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
          <p>
            Students are expected to meet their supervisors as often as possible to discuss their research work and record their meetings
            in a logbook both during the pre-requisite course CCS591 and throughout CCS599.
          </p>
          <p>
            Students are required to complete various activities/assessments by some specific deadlines. A monitoring process will be
            implemented during the dissertation for the benefit of the students. The activities are as follows.
          </p>
        </article>


        <article className='layout h3 font-medium py-10 space-y-4'>
          <p className='h3'>CCCS591 (Pre-requisite Course) (All as part of CCS591 coursework)</p>
          <div>
            <table className='border-spacing-1 border-separate '>
              <thead className=''>
                <tr className='bg-green-200 h-[100px]'>
                  <th className='border-2 border-black px-2'>
                    Activity/Evaluation</th>
                  <th className='border-2 border-black px-2'>Week of the Semester*</th>
                </tr>
              </thead>
              <tbody >
                <tr className='border-4 border-black'>
                  <td className='border-2 border-black px-2'>
                    Confirmation of a Research Topic - Students need to identify a supervisor to work with and propose
                    a research topic which is to be agreed upon by the supervisor.
                    A proposal form must be filled by the student and signed by the supervisor.
                  </td>
                  <td className='border-2 border-black px-2'>
                    5th
                  </td>
                </tr>

                <tr className='border-4 border-black'>
                  <td className='border-2 border-black px-2'>
                    Submission of the Research Proposal - Chapter 1: Introduction, and Chapter 2: Literature Review
                  </td>
                  <td className='border-2 border-black px-2'>
                    11th
                  </td>
                </tr>

                <tr className='border-4 border-black'>
                  <td className='border-2 border-black px-2'>
                    Submission of the Extended Research Proposal – Refined Chapters 1 and 2, and Chapter 3: Research Methodology
                  </td>
                  <td className='border-2 border-black px-2'>
                    17th
                  </td>
                </tr>

                <tr className='border-4 border-black'>
                  <td className='border-2 border-black px-2'>
                    Poster Presentation
                  </td>
                  <td className='border-2 border-black px-2'>
                    19th
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article className='layout h3 font-medium space-y-4 pb-12'>
          <p className='h3'>
            CCS599 - Dissertation
          </p>

          <div>
            <table className='border-spacing-1 border-separate '>
              <thead className=''>
                <tr className='bg-purple-200 h-[100px]'>
                  <th className='border-2 border-black px-2'>
                    Activity</th>
                  <th className='border-2 border-black px-2'>Actual Week</th>
                  <th colSpan={2} className='border-2 border-black px-2'>Week of the Semester/Break*</th>
                </tr>
              </thead>
              <tbody className='text-left'>
                <tr className='border-4 border-black'>
                  <td className='border-2 border-black px-2'>
                    Start
                  </td>
                  <td className='border-2 border-black px-2'>
                    1th
                  </td>
                  <td className='border-2 border-black px-2'>
                    1st (Inter -semester Break)5th
                  </td>
                  <td className='border-2 border-black px-2'>
                    1st (Long Vacation Session)
                  </td>
                </tr>

                <tr className='border-4 border-black'>
                  <td className='border-2 border-black px-2'>
                    Submission of the Mid-Term Report - Refined Chapters 1 to 3 (From CCS591), and Chapter 4: Proposed Work (Three (3) copies, red cover)
                  </td>
                  <td className='border-2 border-black px-2'>
                    9th
                  </td>
                  <td className='border-2 border-black px-2'>
                    5th  (Semester II - February)
                  </td>
                  <td className='border-2 border-black px-2'>
                    9th (Long Vacation Session)
                  </td>
                </tr>

                <tr className='border-4 border-black'>
                  <td className='border-2 border-black px-2'>
                    Presentation of the Mid-Term Report in a Seminar +
                  </td>
                  <td className='border-2 border-black px-2'>
                    11th
                  </td>
                  <td className='border-2 border-black px-2'>
                    7th (Semester II)
                  </td>
                  <td className='border-2 border-black px-2'>
                    1st (Semester I - September)
                  </td>
                </tr>

                <tr className='border-4 border-black'>
                  <td className='border-2 border-black px-2'>
                    Submission of the Draft of the Dissertation to be Checked by the Respective Supervisor – Refined Chapters 1 to 4, Chapter 5: Evaluation, and Chapter 6: Conclusion
                  </td>
                  <td className='border-2 border-black px-2'>
                    21th
                  </td>
                  <td className='border-2 border-black px-2'>
                    17th  (Semester II)
                  </td>
                  <td className='border-2 border-black px-2'>
                    11th  (Semester I)
                  </td>
                </tr>

                <tr className='border-4 border-black'>
                  <td className='border-2 border-black px-2'>
                    Submission of the Dissertation (Five (5) copies, red cover)
                  </td>
                  <td className='border-2 border-black px-2'>
                    23rd
                  </td>
                  <td className='border-2 border-black px-2'>
                    19th (Semester II)
                  </td>
                  <td className='border-2 border-black px-2'>
                    13th  (Semester I)
                  </td>
                </tr>

                <tr className='border-4 border-black'>
                  <td className='border-2 border-black px-2'>
                    Viva Voce
                  </td>
                  <td className='border-2 border-black px-2'>
                    26th
                  </td>
                  <td className='border-2 border-black px-2'>
                    3rd  (Long Vacation Session)
                  </td>
                  <td className='border-2 border-black px-2'>
                    16th  (Semester I)
                  </td>
                </tr>

                <tr className='border-4 border-black'>
                  <td className='border-2 border-black px-2'>
                    Submission of Corrected Dissertation (Two (2) copies)
                  </td>
                  <td className='border-2 border-black px-2'>
                    28th
                  </td>
                  <td className='border-2 border-black px-2'>
                    5th (Long Vacation Session)
                  </td>
                  <td className='border-2 border-black px-2'>
                    18th (Semester I)
                  </td>
                </tr>

                <tr className='border-4 border-black'>
                  <td className='border-2 border-black px-2'>
                    Submission of Final Corrected Dissertation (Hardbound, three (3) copies, red cover). Students must also return the logbook.
                  </td>
                  <td className='border-2 border-black px-2'>
                    30th
                  </td>
                  <td className='border-2 border-black px-2'>
                    7th (Long Vacation Session)
                  </td>
                  <td className='border-2 border-black px-2'>
                    1st (Inter -semester Break)
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
          <p>
              *   These are tentative dates. The actual dates will be posted via the e-Learning portal
            </p>
            <p>
              +    Students who could not produce a feasible piece of work after the evaluation of the mid-term report will be advised to drop CCS599.
            </p>
            <p>
              Detailed guidelines of the course will be uploaded to the e-learning portal.
            </p>
            <p>
              A panel of examiners will be formed, and the main objective of this panel is to ensure that the research has achieved a certain standard.
              The dissertation will be evaluated by two examiners. Students are expected to produce an original piece of work that enhances existing work
              and contributes to the body of knowledge. Students are also required to use the standard format for the dissertation.
            </p>
        </article>
      </section>
    </Layout>
  )
}

const Research = [
  { content: "COM11 – Enterprise Computing" },
  { content: "COM12 – Software Engineering" },
  { content: "COM13 – Social and Sustainable Computing" },
  { content: "COM14 – Multimedia Computing" },
  { content: "COM21 – Computational Intelligence" },
  { content: "COM22 – Computer Vision and Image Processing" },
  { content: "COM23 – Visual Computing" },
  { content: "COM24 – Language and Knowledge Engineering" },
]
export default programStructure