import React from 'react'
// import { FaUserCircle } from "react-icons/fa";
import logo from "../../assets/logo.png"
import {Link} from 'react-scroll'


const ResponsiveMenu = ({mobileMenuOpen}) => {

    const navigation = [
        { name: 'Home', href: 'home', id:1},
        { name: 'About us', href: 'aboutus', id:2},
        { name: 'Contact', href: 'contact', id:3},
        { name: 'Services', href: 'services', id:4},
        { name: 'Projects', href: 'projects', id:5},
    ]
    
  return (
    <div className={`${mobileMenuOpen ? "left-0" : "left-[-100%]"} 
    fixed bottom-0 top-0 w-[75%] transition-all duration-300 
    pt-16 px-8 bg-orange-500 shadow-md text-white`}>
        <div className='card'>
            {/* User Section */}
            <div className='flex item-center justify-start gap-3'>
                <img src={logo} alt="logo" className='w-30'/>
            </div>

            {/* Menu Section */}
            <nav className='mt-12'>
                <ul className='space-y-1 text-[17px]'>
                    {
                        navigation.map((item, id)=>{
                            return(
                                <li key={item.id} className='cursor-pointer py-4'>
                                    <Link activeClass='active' to={item.href} spy={true} smooth={true} offset={-100} duration={500} className='mb-5 inline-block'>{item.name}</Link>
                                </li>
                            )
                        })
                    }
                    </ul>
            </nav>
        </div>
    </div>
  )
}

export default ResponsiveMenu