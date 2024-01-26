import React from 'react';
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
const topAnimation = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 1, type: 'spring' }
    }
}

export const Footer = () => {
    const emailAddress = 'kononchuk.daniil@knu.ua';
    const subject = 'Offer of employment';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    return (
        <motion.footer
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.4 }}
            className="mt-10 md:mt-20 overflow-hidden"
        >
            <div className="w-full background h-1" />
            <motion.h3 variants={topAnimation} className='text-3xl font-syne font-bold text-center mt-6 mb-3 md:mt-10'>Contact me</motion.h3>
            <div className='flex flex-col-reverse md:flex-row py-5 md:py-10 max-w-[400px] text-center md:text-start md:max-w-[1024px] justify-between items-center mx-auto gap-6'>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    className='flex flex-col gap-4'
                >
                    <motion.div
                        variants={leftAnimation}
                        custom={0.1}
                        className="flex items-center gap-3">
                        <div className='p-2 rounded-[50%] bg-white/10'>
                            <img className='w-5 md:w-7 h-5 md:h-7' src="https://img.icons8.com/ios-filled/50/FFFFFF/marker.png" alt="marker" />
                        </div>
                        <p className='text-sm md:text-base'>Zelenodolsk, Ukranine</p>
                    </motion.div>
                    <motion.div
                        variants={leftAnimation}
                        custom={0.2}
                        className="flex items-center gap-3">
                        <div className='p-2 rounded-[50%] bg-white/10'>
                            <img className='w-5 md:w-7 h-5 md:h-7' src="https://img.icons8.com/ios-glyphs/30/FFFFFF/phone--v1.png" alt="phone--v1" />
                        </div>
                        <a className='text-sm md:text-base' href={`tel:+380937902916`}>+38 (093) 790-29-16</a>
                    </motion.div>
                    <motion.div
                        variants={leftAnimation}
                        custom={0.3}
                        className="flex items-center gap-3">
                        <div className='p-2 rounded-[50%] bg-white/10'>
                            <img className='w-5 md:w-7 h-5 md:h-7' src="https://img.icons8.com/material/24/FFFFFF/mail.png" alt="mail" />
                        </div>
                        <a className='text-sm md:text-base' target='_blank' href={mailtoLink}>{emailAddress}</a>
                    </motion.div>

                </motion.div>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    className="w-full md:max-w-[300px] space-y-4 md:space-y-6">
                    <motion.h5
                        variants={rightAnimation}
                        custom={0.1}
                        className="font-syne text-xl font-bold">About communications</motion.h5>
                    <motion.p
                        variants={rightAnimation}
                        custom={0.2}
                        className="text-gray text-xs md:text-sm">
                        Please use the form above to send your contact details, or contact me using the contact provided information.
                    </motion.p>
                    <div className="flex gap-3 justify-center">
                        <motion.a
                            variants={rightAnimation}
                            custom={0.3}
                            target='_blank' href="https://github.com/Daniil-102?tab=repositories">
                            <img className='w-10 h-10 p-2 bg-white/10 rounded' src="https://img.icons8.com/ios-filled/50/FFFFFF/github.png" alt="github" />
                        </motion.a>
                        <motion.a
                            variants={rightAnimation}
                            custom={0.4}
                            target='_blank' href="https://www.instagram.com/kononchuk.daniil25/">
                            <img className='w-10 h-10 p-2 bg-white/10 rounded' src="https://img.icons8.com/ios-glyphs/30/FFFFFF/instagram-new.png" alt="instagram" />
                        </motion.a>
                        <motion.a
                            variants={rightAnimation}
                            custom={0.5}
                            target='_blank' href="https://t.me/daniil_6t">
                            <img className='w-10 h-10 p-2 bg-white/10 rounded' src="https://img.icons8.com/ios-filled/50/FFFFFF/telegram.png" alt="telegram" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </motion.footer >
    );
};

