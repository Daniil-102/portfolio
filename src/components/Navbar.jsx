import React, { useState } from 'react'
import { NavLink } from '../ui/NavLink'
import { Buttonn } from '../ui/Button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import { Link } from 'react-scroll'
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion'


const sheetAnimation = {
    hidden: {
        y: 500,
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom, duration: 0.2, type: 'spring' }
    }),

}

const links = ['Home', 'Projects', 'About', 'Contacts']

export const Navbar = () => {
    const [open, setOpen] = useState(false)

    const isMediumScreen = useMediaQuery({ query: '(max-width: 768px)' });

    const offset = isMediumScreen ? -70 : -110;


    return (

        <nav

            className='flex justify-between items-center py-3 px-3 md:py-5 md:px-5 fixed top-0 left-0 right-0 z-20 bg-white/40 shadow-md w-full rounded-b-3xl'>
            <Link
                to={'home'}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >
                <img className='cursor-pointer h-10 w-10 md:h-16 md:w-16 transition duration-300 rounded-lg lg:hover:grayscale-0 grayscale lg:hover:bg-transparent lg:hover:scale-110 bg-black/20' src="https://img.icons8.com/nolan/64/technology-items.png" alt="technology-items" />
            </Link>
            <ul className="space-x-2 hidden md:block">
                {links.map((link, i) => (
                    <NavLink offset={offset} key={link} to={link.toLowerCase()} >
                        {link}
                    </NavLink>
                ))}

            </ul>
            <Buttonn className='text-black border-black lg:hover:bg-white/80 hidden md:block'>
                <Link
                    to={'contacts'}
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={500}
                >
                    HIRE ME
                </Link>
            </Buttonn>
            <Button onClick={() => setOpen(true)} className='block md:hidden' variant='ghost' size='sm'>
                <Menu className='h-8 w-8 text-black' />
            </Button>
            <Sheet open={open} onOpenChange={() => setOpen(false)}>
                <SheetContent className='bg-neutral-900 border-none w-[320px]'>
                    <motion.ul
                        initial='hidden'
                        whileInView='visible'
                        className='flex h-full flex-col space-y-4 items-center justify-center'
                    >
                        {links.map((link, i) => (
                            <NavLink variants={sheetAnimation} i={i} offset={offset} key={link} className='w-full text-white' to={link.toLowerCase()} onClick={() => setOpen(false)} >
                                {link}
                            </NavLink>
                        ))}
                    </motion.ul>
                </SheetContent>
            </Sheet>
        </nav>
    )
}
