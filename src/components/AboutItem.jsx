import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../utils/utils'


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

export const AboutItem = ({ item, custom }) => {
    const [show, setShow] = useState(false)

    return (

        (<div className='ml-6 sm:ml-10 lg:ml-14'>
            <motion.button custom={custom} variants={leftAnimation} className={cn('underlinee', show && 'mb-4')} onClick={() => setShow(!show)}>
                <h3 className={cn("font-syne  rounded-full p-2 transition lg:hover:bg-white/20 font-medium sm:text-2xl xl:text-[32px]")}>{item.title}</h3>
            </motion.button>
            <AnimatePresence>
                {show &&
                    <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ type: 'spring', duration: 0.4 }}
                        className='text-xs sm:text-base lg:text-lg overflow-hidden'>{item.desc}
                    </motion.p>}
            </AnimatePresence>
        </div>)
    )
}
