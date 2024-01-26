import React from 'react'
import { motion } from 'framer-motion'
import { Navbar } from './Navbar'

const leftAnimation = {
    hidden: {
        x: -500,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom, duration: 0.8, type: 'spring' }
    }),
}
const rightAnimation = {
    hidden: {
        x: 500,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom, duration: 0.8, type: 'spring' }
    }),
}

export const Title = () => {
    return (
        <>
            <Navbar />
            <div id='home' className='text-center pt-20'>
                <motion.div
                    initial='hidden'
                    whileInView='visible'

                    className='w-full flex justify-center'>
                    <motion.h1 variants={leftAnimation} className='font-syne uppercase font-extrabold text-center text-xl sm:text-3xl md:text-4xl lg:text-6xl my-16 sm:my-20 md:my-28 lg:my-36 xl:my-36 2xl:my-44 max-w-[500px] sm:max-w-full'>
                        I'm a
                        <img className='inline mx-4 w-6 h-6 sm:w-9 sm:h-9 lg:w-14 lg:h-14 lg:mx-8' src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/FFFFFF/external-web-programming-digital-marketing-smashingstocks-glyph-smashing-stocks.png" alt="img" />
                        frontend developer
                        <img className='inline mx-4 w-6 h-6 sm:w-9 sm:h-9 lg:w-14 lg:h-14 lg:mx-8' src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/FFFFFF/external-programing-hacking-flatart-icons-solid-flatarticons.png" alt="img" />
                        from Ukraine
                    </motion.h1>
                </motion.div>
                <motion.div
                    initial='hidden'
                    whileInView='visible'

                    className="flex flex-col-reverse justify-center items-center -mt-6 mb-12 sm:mb-24 md:mb-32 lg:mb-44 gap-12 xl:gap-0 xl:flex-row xl:-mt-20 2xl:-mt-24">
                    <div className="flex items-center justify-between w-full space-x-1 mt-14 sm:mt-0 xl:mr-20 2xl:mr-36 ">
                        <motion.img custom={0.2} variants={leftAnimation} src="logo1.svg" alt="logo" className='w-[120px]' />
                        <motion.img custom={0.4} variants={leftAnimation} src="logo2.svg" alt="logo" className='w-[80px]' />
                        <motion.img custom={0.6} variants={rightAnimation} src="logo3.svg" alt="logo" className='w-[100px]' />
                    </div>

                    <motion.div custom={0.8} variants={rightAnimation} className="xl:w-[492px] max-w-[500px] sm:max-w-[650px] md:max-w-[750px] lg:max-w-[800px] text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-base shrink-0">
                        Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of distinctive branding and web development, each crafted to captivate and inspire.
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}
