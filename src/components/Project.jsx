import React from 'react'
import { motion } from 'framer-motion'


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

const rotateAnimation = {
    hidden: {
        x: -50,
        opacity: 0,
        rotate: 90
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        rotate: 0,
        transition: { delay: custom, duration: 0.8, type: 'spring' }
    }),
}

export const Project = ({ item }) => {
    const { img, title, desc, hash, link } = item
    return (
        <>
            <div className='back w-full relative rounded-[40px] p-8 '>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    className="flex lg:items-stretch items-center flex-col lg:flex-row relative gap-y-2 sm:gap-x-8 z-10"
                >
                    <motion.h3
                        variants={leftAnimation}
                        className="lg:hidden block font-syne font-semibold text-xl sm:text-2xl"
                    >
                        {title}
                    </motion.h3>
                    <div className="w-full max-w-[600px] lg:w-[50%]">
                        <img className='w-full lg:h-full rounded-3xl' src={img} alt="project" />
                    </div>
                    <div className=" flex flex-col justify-between max-w-[600px] lg:max-w-[350px] xl:max-w-[572px]">
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                        >
                            <motion.h3 variants={leftAnimation} className="hidden lg:block font-syne font-semibold text-2xl xl:text-4xl">{title}</motion.h3>
                            <motion.p variants={leftAnimation} custom={0.2} className="text-sm xl:text-lg py-2.5 xl:py-4">{desc}</motion.p>
                            <div className="flex flex-wrap gap-2">
                                {hash.map(h => (
                                    <motion.div custom={0.4} variants={rotateAnimation} key={h} className='text-xs cursor-pointer py-2 px-6 rounded-full border lg:hover:bg-white lg:hover:border-white lg:hover:text-dark font-semibold'>{h}</motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            variants={rotateAnimation}
                            viewport={{ amount: 0.2, once: true }}
                        >
                            <a href={link} target='_blank' className='lg:hover:scale-105 transition inline-block px-6 py-4 text-dark rounded-full bg-white font-syne font-semibold text-sm mt-8'>Discover Project Results</a>
                        </motion.div>
                    </div>
                </motion.div>

                <svg className='back2 ' xmlns="http://www.w3.org/2000/svg" width="809" height="470" viewBox="0 0 809 470" fill="none">
                    <g filter="url(#filter0_f_23_199)">
                        <ellipse cx="404.5" cy="382.5" rx="104.5" ry="82.5" fill="#FF804A" />
                    </g>
                    <defs>
                        <filter id="filter0_f_23_199" x="0" y="0" width="809" height="765" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_23_199" />
                        </filter>
                    </defs>

                </svg>

            </div>
        </>
    )
}
