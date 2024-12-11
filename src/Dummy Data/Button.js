import React, { useState, useEffect } from 'react'
import arrowup from '../assets/arrowup.png'


const Button = () => {

    const [isVisible, setIsVisible] = useState(false)

    const GoToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const ListScroll = () => {

        let height = 200;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > height) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", ListScroll);
    }, [])


    return (
        <>
            {isVisible && (
                <div className='hidden md:block'>
                    <div className=' md:flex md:justify-center md:items-center md:text-base md:w-10 md:h-10 md:fixed md:bottom-10 md:right-10 md:z-10 md:cursor-pointer md:animate-bounce' onClick={GoToTop}>
                        <button className='bg-white rounded-full'><img src={arrowup} className=' w-20' alt='button_arrow' /></button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Button
