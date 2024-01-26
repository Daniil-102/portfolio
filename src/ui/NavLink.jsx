import React from 'react'
import { cn } from '../utils/utils'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

export const NavLink = ({ className, offset, isActive, variants, i, children, to, ...props }) => {
    return (
        <Link
            to={to}
            smooth={true}
            offset={offset}
            duration={500}
        >
            <motion.div
                variants={variants}
                custom={i / 10}
                className={cn(
                    'font-syne inline-block cursor-pointer text-black font-bold px-6 py-2 rounded-3xl bg-transparent transition lg:hover:bg-white/40',
                    className
                )}
                {...props}
            >
                {children}
            </motion.div>
        </Link>

    )
}
