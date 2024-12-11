import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const HomePage = () => {

    return (
        <>
            <main>
                <div id='home' className="herosection container-fluid flex items-center justify-center">
                    <div className='text-center w-full'>
                        <h1 className='md:text-[50px] font-bold sm:text-5xl text-[40px]'>Explore Now For</h1>
                        <TypeAnimation className='md:text-[50px] sm:text-5xl text-[40px] font-bold md:mt-6'
                            sequence={[
                                'Strength & Stamina',
                                1000,
                                'Personalized Training',
                                1000,
                                'Total Body Transformation',
                                1000,
                            ]}
                            wrapper="h1"
                            speed={5}
                            repeat={Infinity}
                        />
                        <p className='max-w-[700px] mt-5 mx-auto mb-5 text-[18px] md:text-[17.5px] leading-6'>Join us to explore personalized workout plans, state-of-the-art equipment, and expert trainers to transform your fitness journey.</p>
                        <button onClick={() => {
                            document.getElementById('aboutus').scrollIntoView({ behavior: 'smooth' })
                        }} className='bg-white rounded-lg text-black text-[14px] p-2'>Get Started</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePage