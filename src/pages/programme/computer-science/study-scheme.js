import React from 'react'
import Head from 'next/head'
import Layout from '@/components/homePageLayout/Layout'

const studyScheme = () => {
  return (
    <>
      <Layout isContent={true} titleContent={"Study Scheme"}>
        <Head>
          <title>Computer Science | Study Scheme</title>
        </Head>
        <section className='min-h-main py-12'>
          <article className='layout h3 space-y-4'>
            <div>
              <p>The period of candidature for a full-time programme is between one (1) to two (2) years, and for a part-time programme is between two (2) to four (4) years. The following tables show the various study schemes.</p>
            </div>

            <div>
              <p>1 year (applicable to full-time study scheme only)</p>
              <div>
                <table className='border-spacing-1 border-separate'>
                  <thead>
                    <tr className='bg-yellow-200 h-[100px]'>
                      <th className='border-2 border-black px-2' rowSpan={2}>Course type(code)(unit)</th>
                      <th className='border-2 border-black px-2' colSpan={4}>sep/oct intake: 1 year (2 semester + 1 inter-semester break + 1 long vacation sessions)</th>
                    </tr>
                    <tr className='bg-yellow-200'>
                      <th className='border-2 border-black px-2'>Year 1 sem I (sept/oct)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                      <th className='border-2 border-black px-2'>year 1 sem II (feb,may,apr)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                    </tr>
                  </thead>
                  <tbody className='text-center'>

                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2' rowSpan={2}>
                        Core (T)
                        (28 Units)
                      </td>
                      <td className='border-2 border-black px-2'>
                        CCS591+
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CCS599+ (3 + 12 + 5 units) [4 (Inter-Semester Break) + 19 (Semester II) + 7 (Long Vacation) = 30 weeks]
                      </td>
                      <td className='border-2 border-black px-2'>
                        20
                      </td>
                    </tr>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        CCS592
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                    </tr>

                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2' rowSpan={3}>
                        Elective (E)
                        (12 Units)
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective I
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
                        Elective III
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
                        Total : 40 Units
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        16
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        24
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>+Must be taken in two consecutive semesters, CCS591 followed by CCS599</p>
              </div>

              <div>
                <table className='border-spacing-1 border-separate'>
                  <thead>
                    <tr className='bg-yellow-200 h-[100px]'>
                      <th className='border-2 border-black px-2' rowSpan={2}>Course type(code)(unit)</th>
                      <th className='border-2 border-black px-2' colSpan={4}>feb/mar/apr intake: 1 year (2 semester + 1 long vacation sessions)</th>
                    </tr>
                    <tr className='bg-yellow-200'>
                      <th className='border-2 border-black px-2'>Year 1 sem I (feb/mar/apr)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                      <th className='border-2 border-black px-2'>year 1 sem II (sep/oct)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                    </tr>
                  </thead>
                  <tbody className='text-center'>

                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2' rowSpan={2}>
                        Core (T)
                        (28 Units)
                      </td>
                      <td className='border-2 border-black px-2'>
                        CCS591+
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CCS599+ (8+ 12 units) [10 (Long Vacation) +20 (Semester I)-30 weeks]
                      </td>
                      <td className='border-2 border-black px-2'>
                        20
                      </td>
                    </tr>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        CCS592
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
                      <td className='border-2 border-black px-2' rowSpan={2}>
                        Elective (E)
                        (12 Units)
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective I
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
                        Total : 40 Units
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        16
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        24
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>+Must be taken in two consecutive semesters, CCS591 followed by CCS599</p>
              </div>
            </div>


            <div>
              <p>1.5 years (applicable to full-time study scheme only)</p>
              <div>
                <table className='border-spacing-1 border-separate'>
                  <thead>
                    <tr className='bg-green-200 h-[100px]'>
                      <th className='border-2 border-black px-2' rowSpan={2}>Course type(code)(unit)</th>
                      <th className='border-2 border-black px-2' colSpan={6}>sep/oct intake: 1 year (2 semester + 1 inter-semester break + 1 long vacation sessions)</th>
                    </tr>
                    <tr className='bg-green-200'>
                      <th className='border-2 border-black px-2'>Year 1 sem I (sept/oct)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                      <th className='border-2 border-black px-2'>year 1 sem II (feb/mar/apr)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                      <th className='border-2 border-black px-2'>year 2 sem I (sept/oct)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                    </tr>
                  </thead>
                  <tbody className='text-center'>

                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2' rowSpan={2}>
                        Core (T)
                        (28 Units)
                      </td>
                      <td className='border-2 border-black px-2'>
                      </td>
                      <td className='border-2 border-black px-2'>
                      </td>
                      <td className='border-2 border-black px-2'>
                        CCS591+
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CCS599+ (8+12 units)
                        [10 (Long Vacation) + 20
                        (Semester 1)-30 weeks]
                      </td>
                      <td className='border-2 border-black px-2'>
                        20
                      </td>
                    </tr>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        CCS592
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
                      <td className='border-2 border-black px-2' rowSpan={3}>
                        Elective (E)
                        (12 Units)
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective I
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective III*
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
                        Elective II
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
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        Elective III*
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

                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        Total : 40 Units
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        8/12
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        8/12
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        20
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>+Must be taken in two consecutive semesters, CCS591 followed by CCS599</p>
                <p>* Alternative Semester</p>
              </div>

              <div>
                <table className='border-spacing-1 border-separate'>
                  <thead>
                    <tr className='bg-green-200 h-[100px]'>
                      <th className='border-2 border-black px-2' rowSpan={2}>Course type(code)(unit)</th>
                      <th className='border-2 border-black px-2' colSpan={6}>Feb/Mar/Apr Intake: 1.5 Years (3 Semesters + 1 Inter-Semester Break + 1 Long Vacation Session)</th>
                    </tr>
                    <tr className='bg-green-200'>
                      <th className='border-2 border-black px-2'>Year 1 sem I (sept/oct)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                      <th className='border-2 border-black px-2'>year 1 sem II (feb/mar/apr)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                      <th className='border-2 border-black px-2'>year 2 sem I (sept/oct)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                    </tr>
                  </thead>
                  <tbody className='text-center'>

                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        Core (T)
                        (28 Units)
                      </td>
                      <td className='border-2 border-black px-2'>
                        CCS592
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CCS591+
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CCS599+ (3+ 12 + 5 units)
                        [4 (Inter-Semester Break) + 19
                        (Semester II) + 7(Long Vacation)
                        -30 weeks]
                      </td>
                      <td className='border-2 border-black px-2'>
                        20
                      </td>
                    </tr>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2' rowSpan={2}>
                        Elective (E)
                        (12 Units)
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective I
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective II*
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
                        Elective II*
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective III
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
                        Total : 40 Units
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        8/12
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        8/12
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        20
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>+Must be taken in two consecutive semesters, CCS591 followed by CCS599</p>
                <p>* Alternative Semester</p>
              </div>
            </div>

            <div>
              <p>2 years (applicable to full-time study scheme only)</p>
              <div>
                <table className='border-spacing-1 border-separate'>
                  <thead>
                    <tr className='bg-orange-500 h-[100px]'>
                      <th className='border-2 border-black px-2' rowSpan={2}>Course type(code)(unit)</th>
                      <th className='border-2 border-black px-2' colSpan={8}>Sep/Oct Intake: 2 Years (4 Semesters + 1 inter-Semester Break + 1 Long Vacation Session)</th>
                    </tr>
                    <tr className='bg-orange-500'>
                      <th className='border-2 border-black px-2'>Year 1 sem I (sept/oct)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                      <th className='border-2 border-black px-2'>year 1 sem II (feb/mar/apr)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                      <th className='border-2 border-black px-2'>year 2 sem I (sept/oct)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                      <th className='border-2 border-black px-2'>year 2 sem II (feb/mar/apr)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                    </tr>
                  </thead>
                  <tbody className='text-center'>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        Core (T)
                        (28 Units)
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        CCS591+
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CCS591+
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CCS599+ (3 + 12 +5 units) [4+(inter-semester break)+19(semester II + 7)(Long vacation) = 30 wek]
                      </td>
                      <td className='border-2 border-black px-2'>
                        20
                      </td>
                    </tr>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2' rowSpan={2}>
                        Elective (E)
                        (12 Units)
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective I
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective III
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
                    <tr className='border-4 border-black px-2'>
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
                        Total : 40 Units
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
                        4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        20
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>+Must be taken in two consecutive semesters, CCS591 followed by CCS599</p>
              </div>

              <div>
                <table className='border-spacing-1 border-separate'>
                  <thead>
                    <tr className='bg-orange-500 h-[100px]'>
                      <th className='border-2 border-black px-2' rowSpan={2}>Course type(code)(unit)</th>
                      <th className='border-2 border-black px-2' colSpan={8}>Feb/Mar/Apr Intake: 2 Years (4 Semesters + 1 Long Vacation Session)</th>
                    </tr>
                    <tr className='bg-orange-500'>
                      <th className='border-2 border-black px-2'>Year 1 sem I (feb/mar/apr)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                      <th className='border-2 border-black px-2'>year 1 sem II (sept/oct)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                      <th className='border-2 border-black px-2'>year 2 sem I (feb/mar/apr)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                      <th className='border-2 border-black px-2'>year 2 sem II (sept/oct)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                    </tr>
                  </thead>
                  <tbody className='text-center'>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        Core (T)
                        (28 Units)
                      </td>
                      <td className='border-2 border-black px-2'>
                        CCS592
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        CCS591+
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CCS599+ (8+ 12
                        units)
                        [10 (Long
                        Vacation) + 20
                        (Semester 1) =
                        30 weeks]
                      </td>
                      <td className='border-2 border-black px-2'>
                        20
                      </td>
                    </tr>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2' rowSpan={2}>
                        Elective (E)
                        (12 Units)
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
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                    </tr>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective III
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

                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        Total : 40 Units
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
                        4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        20
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>+Must be taken in two consecutive semesters, CCS591 followed by CCS599</p>
              </div>
            </div>

            <div>
              <p>2.5 years (applicable to full-time study scheme only)</p>
              <div>
                <table className='border-spacing-1 border-separate'>
                  <thead>
                    <tr className='bg-blue-400 h-[100px]'>
                      <th className='border-2 border-black px-2' rowSpan={2}>Course type(code)(unit)</th>
                      <th className='border-2 border-black px-2' colSpan={10}>Sep/Oct Intake: 2.5 Years (5 Semesters + 1 Long Vacation Session)</th>
                    </tr>
                    <tr className='bg-blue-400'>
                      <th className='border-2 border-black px-2'>Year 1 sem I (sept/oct)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                      <th className='border-2 border-black px-2'>year 1 sem II (feb/mar/apr)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                      <th className='border-2 border-black px-2'>year 2 sem I (sept/oct)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                      <th className='border-2 border-black px-2'>year 2 sem II (feb/mar/apr)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                      <th className='border-2 border-black px-2'>year 3 sem I (sept/oct)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                    </tr>
                  </thead>
                  <tbody className='text-center'>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        Core (T)
                        (28 Units)
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        CCS592
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        CCS591+
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CCS599+ (8 + 12units) [10(Long vacation)+ 20 (semester I) = 30 weeks]
                      </td>
                      <td className='border-2 border-black px-2'>
                        20
                      </td>
                    </tr>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2' rowSpan={2}>
                        Elective (E)
                        (12 Units)
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective I
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
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                    </tr>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        Elective II*
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective II*
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective III
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

                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        Total : 40 Units
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        4/8
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        4/8
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                      4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        20
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>+Must be taken in two consecutive semesters, CCS591 followed by CCS599</p>
                <p>* Alternative Semester</p>
              </div>

              <div>
                <table className='border-spacing-1 border-separate'>
                  <thead>
                    <tr className='bg-blue-400 h-[100px]'>
                      <th className='border-2 border-black px-2' rowSpan={2}>Course type(code)(unit)</th>
                      <th className='border-2 border-black px-2' colSpan={10}>Feb/Mar/Apr Intake: 2.5 Years (5 Semesters +1 Inter-Semester Break 1 Long Vacation Session)</th>
                    </tr>
                    <tr className='bg-blue-400'>
                      <th className='border-2 border-black px-2'>Year 1 sem I (feb/mar/apr)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                      <th className='border-2 border-black px-2'>year 1 sem II (Sep/oct)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                      <th className='border-2 border-black px-2'>year 2 sem I (feb/mar/apr)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                      <th className='border-2 border-black px-2'>year 2 sem II (Sep/oct)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                      <th className='border-2 border-black px-2'>year 3 sem I (feb/mar/apr)</th>
                      <th className='border-2 border-black px-2'>unit</th>
                    </tr>
                  </thead>
                  <tbody className='text-center'>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        Core (T)
                        (28 Units)
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
                        CCS592
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CCS591+
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CCS599+ (3 + 12 + 5units) [4(Inter-semester break)+19(semester II)+7 (long vacation) = 30 weeks]
                      </td>
                      <td className='border-2 border-black px-2'>
                        20
                      </td>
                    </tr>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2' rowSpan={2}>
                        Elective (E)
                        (12 Units)
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective I
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective II*
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
                        Elective II*
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        Elective III
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
                        Total : 40 Units
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        4/8
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        4/8
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                      4
                      </td>
                      <td className='border-2 border-black px-2'>

                      </td>
                      <td className='border-2 border-black px-2'>
                        20
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>+Must be taken in two consecutive semesters, CCS591 followed by CCS599</p>
                <p>* Alternative Semester</p>
              </div>
            </div>

            <div>
              <p>Courser offering is given in the table below:</p>
              <div>
              <table className='border-spacing-1 border-separate '>
              <thead className=''>
                <tr className='bg-purple-200 h-[100px]'>
                  <th className='border-2 border-black px-2'>Semester I (sep/oct)</th>
                  <th className='border-2 border-black px-2'>Semester II (feb/mar/apr)</th>
                </tr>
              </thead>
              <tbody className='text-left'>
                <tr className='border-4 border-black px-2'>
                  <td className='border-2 border-black px-2'>
                    CCS516
                  </td>
                  <td className='border-2 border-black px-2'>
                    CCS525
                  </td>
                </tr>
                <tr className='border-4 border-black px-2'>
                  <td className='border-2 border-black px-2'>
                    CCS526
                  </td>
                  <td className='border-2 border-black px-2'>
                    CCS591*
                  </td>
                </tr>
                <tr className='border-4 border-black px-2'>
                  <td className='border-2 border-black px-2'>
                    CCS527
                  </td>
                  <td className='border-2 border-black px-2'>
                    CCS592
                  </td>
                </tr>
                <tr className='border-4 border-black px-2'>
                  <td className='border-2 border-black px-2'>
                    CCS528
                  </td>
                  <td className='border-2 border-black px-2'>
                    CCS599*
                  </td>
                </tr>
                <tr className='border-4 border-black px-2'>
                  <td className='border-2 border-black px-2'>
                    CCS591*
                  </td>
                  <td className='border-2 border-black px-2'>
                    CDS503*
                  </td>
                </tr>
                <tr className='border-4 border-black px-2'>
                  <td className='border-2 border-black px-2'>
                    CCS599*
                  </td>
                  <td className='border-2 border-black px-2'>
                    CDS521
                  </td>
                </tr>
                <tr className='border-4 border-black px-2'>
                  <td className='border-2 border-black px-2'>
                    CCS503*
                  </td>
                  <td className='border-2 border-black px-2'>
                    CDS523
                  </td>
                </tr>
                <tr className='border-4 border-black px-2'>
                  <td className='border-2 border-black px-2'>
                    CDS505
                  </td>
                  <td className='border-2 border-black px-2'>
                    
                  </td>
                </tr>
                <tr className='border-4 border-black px-2'>
                  <td className='border-2 border-black px-2'>
                    CDS522
                  </td>
                  <td className='border-2 border-black px-2'>
                    
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