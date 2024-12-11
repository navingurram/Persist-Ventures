import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <>
            <footer className='bg-light-900 text-light-200 bg-zinc-900'>
                <div className='container mx-auto py-14 px-6 border-t border-gray-200'>
                    <div className='grid md:grid-cols-12 grid-cols-1 gap-7'>
                        <div className='xl:col-span-3 md:col-span-12 col-span-12'>
                            <Link>
                            <h1 className="text-3xl font-bold text-white">Gym Fluencer</h1>
                            </Link>
                            <p className='mt-3 xl:pr-14 xl:pl-14 leading-7 text-[14px] sm:flex-wrap text-white tracking-wide font-medium'>We are a well-known name in the industry as a service provider of a large array of Management Softwares</p>
                        </div>
                        <div className='xl:col-span-2 md:col-span-6 col-span-12'>
                            <h5 className='text-white font-bold text-base uppercase'>Company</h5>
                            <ul className='list-none mt-5 space-y-3 text-[14px] text-white cursor-pointer'>
                                <li>
                                    <Link to='aboutus' spy={true} smooth={true} offset={-100} duration={500} className='hover:text-[#FFBF00] font-[500]'>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to='logo' spy={true} smooth={true} offset={-100} duration={500} className='hover:text-[#FFBF00] font-[500]'>
                                        Clients
                                    </Link>
                                </li>
                                <li>
                                    <Link to='contact' spy={true} smooth={true} offset={-100} duration={500} className='hover:text-[#FFBF00] font-[500]'>
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link to='team' spy={true} smooth={true} offset={-100} duration={500} className='hover:text-[#FFBF00] font-[500]'>
                                        Team
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='xl:col-span-2 md:col-span-6 col-span-12'>
                            <h5 className='tracking-wide text-dark-100 font-bold text-white uppercase'>Resource</h5>
                            <ul className='list-none mt-5 space-y-3 text-[14px] text-white cursor-pointer'>
                                <li>
                                    <Link to='services' spy={true} smooth={true} offset={-100} duration={500} className='hover:text-[#FFBF00] font-[500]'>
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to='projects' spy={true} smooth={true} offset={-100} duration={500} className='hover:text-[#FFBF00] font-[500]'>
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link to='careers' spy={true} smooth={true} offset={-100} duration={500} className='hover:text-[#FFBF00] font-[500]'>
                                        Careers
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                        <div className='xl:col-span-3 md:col-span-6 col-span-12'>
                        <h5 className='tracking-wide text-dark-100 font-bold text-white'>Contact Details</h5>
                            <ul className='list-none mt-5 space-y-3 text-[13px] text-white cursor-pointer'>
                                <li>
                                    <h6 smooth={true} offset={-100} duration={500} className='tracking-wide'>
                                        gymfluencer@gmail.com
                                    </h6>
                                </li>
                                <li>
                                    <h6 offset={-100} duration={500} className='tracking-wide'>
                                        +9198604305482
                                    </h6>
                                </li>
                                <li>
                                    <h6 offset={-100} duration={500} className='tracking-wide'>
                                     Nagpur, 440024
                                    </h6>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                    
                    <div className='border-t border-gray-200 grid md:grid-cols-12 grid-cols-6 mt-5 text-white'>
                        <div className='lg:col-span-4 col-span-12'>
                            <h1 className='lg:pl-20 pt-3 font-medium cursor-pointer tracking-wide'>Terms & Conditions</h1>
                        </div>
                        <div className='lg:col-span-4 col-span-12'>
                            <h1 className='lg:pl-20 pt-3 font-medium cursor-pointer tracking-wide'>All rights reserved {new Date().getFullYear()}@allstates</h1>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
