import React from 'react'
import Head from 'next/head'
import Layout from '@/components/homePageLayout/Layout'

const studyScheme = () => {
  return (
    <>
      <Layout isContent={true} titleContent={"Study Scheme"}>
        <Head>
          <title>Digital Transformation | Study Scheme</title>
        </Head>
        <section className='min-h-main py-12'>
          <article className='layout h3 space-y-4'>
            <div>
              <p>The period of candidature for a full-time programme is between one-and-a-half (1.5) to three (3) years, and for a part-time programme is between two (2) to four (4) years.</p>
              <p>The study schemes are as follows:</p>
            </div>
            <div>
              <p>1.5 years (applicable to full-time and part-time study schemes):</p>
              <div>
                <table className='border-spacing-1 border-separate'>
                  <thead>
                    <tr className='bg-green-300 h-[100px]'>
                      <th className='border-2 border-black px-2'>Course type(code)(unit)</th>
                      <th className='border-2 border-black px-2' colSpan={6}>sep/oct intake: 1,5 years (3 semesters)</th>
                    </tr>
                  </thead>
                  <tbody className='text-center'>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2' rowSpan={4}>
                        Core (T)
                        (36 Units)
                      </td>
                      <td className='border-2 border-black px-2'>Year 1 sem I (sept/oct)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>year 1 sem II (feb,may,apr)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>Year 2 sem I (sept/oct)</td>
                      <td className='border-2 border-black px-2'>unit</td>

                    </tr>
                    <tr>
                      <td className='border-2 border-black px-2'>
                        CDT541
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT543
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT594+
                      </td>
                      <td className='border-2 border-black px-2'>
                        12
                      </td>
                    </tr>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        CDT542
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT544
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                    </tr>

                    <tr>
                      <td className='border-2 border-black px-2'>
                        CDT501
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT506+
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                    </tr>

                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        Elective (E)
                        (8 Units)
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective I
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective II
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                    </tr>

                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        Total : 44 Units
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        16
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        16
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        12
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>+Must be taken in two consecutive semesters, CDS506 followed by CDT594</p>
              </div>

              <div>
                <table className='border-spacing-1 border-separate'>
                  <thead>
                    <tr className='bg-orange-500 h-[100px]'>
                      <th className='border-2 border-black px-2'>Course type(code)(unit)</th>
                      <th className='border-2 border-black px-2' colSpan={6}>feb/mar/apr intake: 1,5 years (3 semesters)</th>
                    </tr>
                  </thead>
                  <tbody className='text-center'>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2' rowSpan={4}>
                        Core (T)
                        (36 Units)
                      </td>
                      <td className='border-2 border-black px-2'>Year 1 sem I (feb/mar/apr)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>year 1 sem II (sep/oct)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>Year 2 sem I (feb/mar/apr)</td>
                      <td className='border-2 border-black px-2'>unit</td>

                    </tr>
                    <tr>
                      <td className='border-2 border-black px-2'>
                        CDT543
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT541
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT594+
                      </td>
                      <td className='border-2 border-black px-2'>
                        12
                      </td>
                    </tr>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        CDT544
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT542
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                    </tr>

                    <tr>
                      <td className='border-2 border-black px-2'>
                        CDT501
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT506+
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                    </tr>

                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        Elective (E)
                        (8 Units)
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective I
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective II
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                    </tr>

                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        Total : 44 Units
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        16
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        16
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        12
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>+Must be taken in two consecutive semesters, CDS506 followed by CDT594</p>
              </div>
            </div>
            <div>
              <p>2 years (applicable to full-time and part-time study schemes):</p>
              <div>
                <table className='border-spacing-1 border-separate'>
                  <thead>
                    <tr className='bg-green-300 h-[100px]'>
                      <th className='border-2 border-black px-2'>Course type(code)(unit)</th>
                      <th className='border-2 border-black px-2' colSpan={8}>sep/oct intake: 1,5 years (3 semesters)</th>
                    </tr>
                  </thead>
                  <tbody className='text-center'>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2' rowSpan={4}>
                        Core (T)
                        (36 Units)
                      </td>
                      <td className='border-2 border-black px-2'>Year 1 sem I (sept/oct)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>year 1 sem II (feb,may,apr)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>Year 2 sem I (sept/oct)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>year 2 sem II (feb,may,apr)</td>
                      <td className='border-2 border-black px-2'>unit</td>

                    </tr>
                    <tr>
                      <td className='border-2 border-black px-2'>
                        CDT541
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT543
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT506+
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT594+
                      </td>
                      <td className='border-2 border-black px-2'>
                        12
                      </td>
                    </tr>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        CDT544
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT542
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                    </tr>

                    <tr>
                      <td className='border-2 border-black px-2'>
                        CDT501
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                    </tr>

                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        Elective (E)
                        (8 Units)
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective I
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective II
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                    </tr>

                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        Total : 44 Units
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        12
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        12
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        8
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        12
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>+Must be taken in two consecutive semesters, CDS506 followed by CDT594</p>
              </div>

              <div>
                <table className='border-spacing-1 border-separate'>
                  <thead>
                    <tr className='bg-orange-500 h-[100px]'>
                      <th className='border-2 border-black px-2'>Course type(code)(unit)</th>
                      <th className='border-2 border-black px-2' colSpan={8}>feb/mar/apr intake: 1,5 years (3 semesters)</th>
                    </tr>
                  </thead>
                  <tbody className='text-center'>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2' rowSpan={4}>
                        Core (T)
                        (36 Units)
                      </td>
                      <td className='border-2 border-black px-2'>Year 1 sem I (feb/mar/apr)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>year 1 sem II (sept/oct)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>Year 2 sem I (feb/mar/apr)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>year 2 sem II (sept/oct)</td>
                      <td className='border-2 border-black px-2'>unit</td>

                    </tr>
                    <tr>
                      <td className='border-2 border-black px-2'>
                        CDT543
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT541
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT506+
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT594+
                      </td>
                      <td className='border-2 border-black px-2'>
                        12
                      </td>
                    </tr>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        CDT544
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT542
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                    </tr>

                    <tr>
                      <td className='border-2 border-black px-2'>
                        CDT501
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                    </tr>

                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        Elective (E)
                        (8 Units)
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective I
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective II
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                    </tr>

                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        Total : 44 Units
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        12
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        12
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        8
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        12
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>+Must be taken in two consecutive semesters, CDS506 followed by CDT594</p>
              </div>
            </div>

            <div>
              <p>2.5 years (applicable to full-time and part-time study schemes):</p>
              <div>
                <table className='border-spacing-1 border-separate'>
                  <thead>
                    <tr className='bg-green-300 h-[100px]'>
                      <th className='border-2 border-black px-2'>Course type(code)(unit)</th>
                      <th className='border-2 border-black px-2' colSpan={10}>sep/oct intake: 2,5 years (5 semesters)</th>
                    </tr>
                  </thead>
                  <tbody className='text-center'>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2' rowSpan={3}>
                        Core (T)
                        (36 Units)
                      </td>
                      <td className='border-2 border-black px-2'>Year 1 sem I (sept/oct)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>year 1 sem II (feb,may,apr)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>Year 2 sem I (sept/oct)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>year 2 sem II (feb,may,apr)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>Year 3 sem I (sept/oct)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                    </tr>
                    <tr>
                      <td className='border-2 border-black px-2'>
                        CDT541
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT543
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDS501
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT506+
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT594+
                      </td>
                      <td className='border-2 border-black px-2'>
                        12
                      </td>
                    </tr>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        CDT542
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT544
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                    </tr>

                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        Elective (E)
                        (8 Units)
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective I
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective II
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                    </tr>

                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        Total : 44 Units
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        8
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        8
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        8
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        8
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        12
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>+Must be taken in two consecutive semesters, CDS506 followed by CDT594</p>
              </div>

              <div>
                <table className='border-spacing-1 border-separate'>
                  <thead>
                    <tr className='bg-orange-400 h-[100px]'>
                      <th className='border-2 border-black px-2'>Course type(code)(unit)</th>
                      <th className='border-2 border-black px-2' colSpan={10}>feb/mar/apr intake: 2,5 years (5 semesters)</th>
                    </tr>
                  </thead>
                  <tbody className='text-center'>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2' rowSpan={3}>
                        Core (T)
                        (36 Units)
                      </td>
                      <td className='border-2 border-black px-2'>Year 1 sem I (feb/mar/apr)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>year 1 sem II (sept/oct)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>Year 2 sem I (feb/mar/apr)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>year 2 sem II (sept/oct)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>Year 3 sem I (feb/mar/apr)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                    </tr>
                    <tr>
                      <td className='border-2 border-black px-2'>
                        CDT543
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT541
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDS501
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT506+
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT594+
                      </td>
                      <td className='border-2 border-black px-2'>
                        12
                      </td>
                    </tr>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        CDT544
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDT542
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                    </tr>

                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        Elective (E)
                        (8 Units)
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective I
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective II
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                    </tr>

                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        Total : 44 Units
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        8
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        8
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        8
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        8
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        12
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>+Must be taken in two consecutive semesters, CDS506 followed by CDT594</p>
              </div>
            </div>
            
            <div>
            <p>Courser offering is given in the table below:</p>
              <div>
              <table className='border-spacing-1 border-separate '>
              <thead className=''>
                <tr className='bg-green-500 h-[100px]'>
                  <th className='border-2 border-black px-2'>Semester I (sep/oct)</th>
                  <th className='border-2 border-black px-2'>Semester II (feb/mar/apr)</th>
                </tr>
              </thead>
              <tbody className='text-left'>
                <tr className='border-4 border-black px-2'>
                  <td className='border-2 border-black px-2'>
                    CDS501*
                  </td>
                  <td className='border-2 border-black px-2'>
                    CDS501*
                  </td>
                </tr>
                <tr className='border-4 border-black px-2'>
                  <td className='border-2 border-black px-2'>
                    CDS506*
                  </td>
                  <td className='border-2 border-black px-2'>
                    CDS504*
                  </td>
                </tr>
                <tr className='border-4 border-black px-2'>
                  <td className='border-2 border-black px-2'>
                    CDS511
                  </td>
                  <td className='border-2 border-black px-2'>
                    CDS506*
                  </td>
                </tr>
                <tr className='border-4 border-black px-2'>
                  <td className='border-2 border-black px-2'>
                    CDT541
                  </td>
                  <td className='border-2 border-black px-2'>
                    CDS512
                  </td>
                </tr>
                <tr className='border-4 border-black px-2'>
                  <td className='border-2 border-black px-2'>
                    CDT542
                  </td>
                  <td className='border-2 border-black px-2'>
                    CDT543
                  </td>
                </tr>
                <tr className='border-4 border-black px-2'>
                  <td className='border-2 border-black px-2'>
                    CDT545
                  </td>
                  <td className='border-2 border-black px-2'>
                    CDT544
                  </td>
                </tr>
                <tr className='border-4 border-black px-2'>
                  <td className='border-2 border-black px-2'>
                    CDT594*
                  </td>
                  <td className='border-2 border-black px-2'>
                    CDT594*
                  </td>
                </tr>
              </tbody>
            </table>
              </div>
            </div>
          </article>
        </section>
      </Layout>
    </>
  )
}

export default studyScheme