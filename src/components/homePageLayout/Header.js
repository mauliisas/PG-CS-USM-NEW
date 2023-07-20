import Image from 'next/image'
import React, { useState } from 'react'
import Links from '../buttons/Links'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Navbar } from '@material-tailwind/react';
const Header = () => {
    const currentRoute = usePathname()
    return (
        <Navbar className='bg-usm-header sticky top-0 h-[165px] z-50 rounded-none border-none max-w-full p-10'>
            <div className='flex flex-row items-center px-4'>

                <div className=' w-1/3'>
                    <Image
                        src='/images/USM+APEX-h.png'
                        alt='logo'
                        width={300}
                        height={300}
                    />

                </div>

                <div className='w-1/3 flex justify-center items-center'>
                    <span className='uppercase text-5xl font-extrabold text-usm-primary-purple'>Master Of Science</span>
                </div>
                <div className=' w-1/3 flex justify-end'>
                    <Image
                        src='/images/USM-Ver-1color.png'
                        alt='logo'
                        width={150}
                        height={150}

                    />
                </div>
            </div>
            <div className=' flex justify-center'>
                <ul className='flex justify-between w-1/2 m-auto '>
                    {/* {
                        links.map((link, index) => {
                            return (
                                <li key={index}>
                                    <Links current={currentRoute === link.href} href={link.href}>{link.label}</Links>
                                </li>
                            )
                        })
                    } */}
                    <li>
                        <Links current={currentRoute === '/'} href={'/'}>About</Links>
                    </li>
                    <li className='group relative cursor-pointer w-fit'>
                        <Links current={currentRoute.startsWith('/programme')} href={''}>programme</Links>
                        <div className="invisible bg-usm-primary-purple absolute z-50 flex w-96 flex-col justify-center items-center shadow-xl group-hover:visible">
                            <div className='text-white w-full px-10 py-4'>
                                <Link href={'/programme/computer-science'} passHref legacyBehavior>
                                    <a href={'/programme/computer-science'} className={'h4'}>MASTER OF SCIENCE
                                        (Computer Science)
                                        MIXED MODE</a>
                                </Link>
                                <ul className='list-disc pt-4'>
                                    <li>
                                        <Link href={'/programme/computer-science/programme-structure'} passHref legacyBehavior>
                                            <a href={'/programme/computer-science/programme-structure '} className={'hover:text-usm-primary-orange p'}>Programme Structure</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/programme/computer-science/study-scheme'} passHref legacyBehavior>
                                            <a href={'/programme/computer-science/study-scheme'} className={'hover:text-usm-primary-orange p'}>Study Scheme</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/programme/computer-science/course-synopsis'} passHref legacyBehavior>
                                            <a href={'/programme/computer-science/course-synopsis'} className={'hover:text-usm-primary-orange p'}>Course Synopsis</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/programme/computer-science/admission-info'} passHref legacyBehavior>
                                            <a href={'/programme/computer-science/admission-info'} className={'hover:text-usm-primary-orange p'}>Admission Info</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='text-white w-full px-10 py-4'>
                                <Link href={'/programme/data-science-analytic'} passHref legacyBehavior>
                                    <a href={'/programme/data-science-analytic'} className={'h4'}>MASTER OF SCIENCE
                                        (Data Science & Analytics)
                                        COURSEWORK MODE</a>
                                </Link>
                                <ul className='list-disc pt-4'>
                                    <li>
                                        <Link href={'/programme/data-science-analytic/outcome-based-education'} passHref legacyBehavior>
                                            <a href={'/programme/data-science-analytic/out-comebased-education'} className={'hover:text-usm-primary-orange p'}>Outcome Based Education</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/programme/data-science-analytic/programme-structure'} passHref legacyBehavior>
                                            <a href={'/programme/data-science-analytic/programme-structure'} className={'hover:text-usm-primary-orange p'}>Programme Structure</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/programme/data-science-analytic/study-scheme'} passHref legacyBehavior>
                                            <a href={'/programme/data-science-analytic/study-scheme'} className={'hover:text-usm-primary-orange p'}>Study Scheme</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/programme/data-science-analytic/course-synopsis'} passHref legacyBehavior>
                                            <a href={'/programme/data-science-analytic/course-synopsis'} className={'hover:text-usm-primary-orange p'}>Course Synopsis</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/programme/data-science-analytic/admission-info'} passHref legacyBehavior>
                                            <a href={'/programme/data-science-analytic/admission-info'} className={'hover:text-usm-primary-orange p'}>Admission Info</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className='text-white w-full px-10 py-4'>
                                <Link href={'/programme/digital-transformation'} passHref legacyBehavior>
                                    <a href={'/programme/digital-transformation'} className={'h4'}>MASTER OF SCIENCE
                                        IN DIGITAL TRANSFORMATION
                                        COURSEWORK MODE</a>
                                </Link>
                                <ul className='list-disc pt-4'>
                                    <li>
                                        <Link href={'/programme/digital-transformation/programme-structure'} passHref legacyBehavior>
                                            <a href={'/programme/digital-transformation/programme-structure'} className={'hover:text-usm-primary-orange p'}>Programme Structure</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/programme/digital-transformation/study-scheme'} passHref legacyBehavior>
                                            <a href={'/programme/digital-transformation/study-scheme'} className={'hover:text-usm-primary-orange p'}>Study Scheme</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/programme/digital-transformation/course-synopsis'} passHref legacyBehavior>
                                            <a href={'/programme/digital-transformation/course-synopsis'} className={'hover:text-usm-primary-orange p'}>Course Synopsis</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/programme/digital-transformation/admission-info'} passHref legacyBehavior>
                                            <a href={'/programme/digital-transformation/admission-info'} className={'hover:text-usm-primary-orange p'}>Admission Info</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </li>
                    <li className='group relative cursor-pointer'>
                        <Links current={currentRoute === '/handbook'} href={'/handbook'}>Handbook</Links>
                    </li>
                </ul>
            </div>

        </Navbar>
    )
}

const links = [
    { href: '/', label: 'About' },
    { href: '/programme', label: 'Programme' },
    { href: '/handbook', label: 'Handbook' },
];

export default Header