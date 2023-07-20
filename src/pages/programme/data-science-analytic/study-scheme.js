import React from 'react'
import Head from 'next/head'
import Layout from '@/components/homePageLayout/Layout'

const studyScheme = () => {
  return (
    <>
      <Layout isContent={true} titleContent={"Study Scheme"}>
        <Head>
          <title>Data Science analytic | Study Scheme</title>
        </Head>
        <section className='min-h-main py-12'>
          <article className='layout h3 space-y-4'>
            <div>
              <p>The programme is offered on full=time basis with a minimum period of candidature of three (3) semesters and a maximum of six (6) semesters.</p>
              <p>The study schemes are as follows:</p>
            </div>
            <div>
              <p>1.5 years (applicable to full-time study schemes only):</p>
              <div>
                <table className='border-spacing-1 border-separate'>
                  <thead>
                    <tr className='bg-green-300 h-[100px]'>
                      <th className='border-2 border-black px-2'>Course type(code)(unit)</th>
                      <th className='border-2 border-black px-2' colSpan={6}>Sep/Oct intake: 1,5 years (3 semesters)</th>
                    </tr>
                  </thead>
                  <tbody className='text-center'>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2' rowSpan={5}>
                        Core (T)
                        (32 Units)
                      </td>
                      <td className='border-2 border-black px-2'>Year I sem I (sept/oct)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>year I sem II (feb,may,apr)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>Year II sem I (sept/oct)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                    </tr>
                    <tr>
                      <td className='border-2 border-black px-2'>
                        CDS501
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDS504
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDS590*
                      </td>
                      <td className='border-2 border-black px-2'>
                        8
                      </td>
                    </tr>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        CDS502
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDS506*
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
                        CDS503
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
                        CDS505
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
                        Elective (E)
                        (12 Units)
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
                        Elective III
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                    </tr>
                    <tr className='border-4 border-black px-2'>
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
                        Elective III
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
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
                <p>+Must be taken in two consecutive semesters, CDS506 followed by CDS590</p>
              </div>

              <div>
                <table className='border-spacing-1 border-separate'>
                  <thead>
                    <tr className='bg-orange-500 h-[100px]'>
                      <th className='border-2 border-black px-2'>Course type(code)(unit)</th>
                      <th className='border-2 border-black px-2' colSpan={6}>Feb/Mar/Apr intake: 1,5 years (3 Semesters)</th>
                    </tr>
                  </thead>
                  <tbody className='text-center'>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2' rowSpan={4}>
                        Core (T)
                        (20 Units)
                      </td>
                      <td className='border-2 border-black px-2'>Year I sem I (Feb/Mar/Apr)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>year I sem II (Sep/Oct)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>Year II sem I (Feb/Mar/Apr)</td>
                      <td className='border-2 border-black px-2'>unit</td>

                    </tr>
                    <tr>
                      <td className='border-2 border-black px-2'>
                        CDS501
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDS502
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDS590*
                      </td>
                      <td className='border-2 border-black px-2'>
                        8
                      </td>
                    </tr>
                    <tr className='border-4 border-black px-2'>
                      <td className='border-2 border-black px-2'>
                        CDS503
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDS505
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
                        CDS504
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
                      </td>
                      <td className='border-2 border-black px-2'>
                        CDS506*
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
                        (24 Units)
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
                        Elective III
                      </td>
                      <td className='border-2 border-black px-2'>
                        4
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
                <p>+Must be taken in two consecutive semesters, CDS506 followed by CDS590</p>
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
                      <td className='border-2 border-black px-2'>Year 1 sem 1 (sept/oct)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>year 1 sem II (feb,may,apr)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>Year 2 sem 1 (sept/oct)</td>
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
                      <td className='border-2 border-black px-2'>Year 1 sem 1 (feb/mar/apr)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>year 1 sem II (sept/oct)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>Year 2 sem 1 (feb/mar/apr)</td>
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
                      <td className='border-2 border-black px-2'>Year 1 sem 1 (sept/oct)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>year 1 sem II (feb,may,apr)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>Year 2 sem 1 (sept/oct)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>year 2 sem II (feb,may,apr)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>Year 3 sem 1 (sept/oct)</td>
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
                      <td className='border-2 border-black px-2'>Year 1 sem 1 (feb/mar/apr)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>year 1 sem II (sept/oct)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>Year 2 sem 1 (feb/mar/apr)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>year 2 sem II (sept/oct)</td>
                      <td className='border-2 border-black px-2'>unit</td>
                      <td className='border-2 border-black px-2'>Year 3 sem 1 (feb/mar/apr)</td>
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