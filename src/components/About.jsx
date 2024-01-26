import React from 'react'
import { AboutItem } from './AboutItem'
import { motion } from 'framer-motion'

const about = [
    {
        title: 'Who I am?..',
        desc: 'Hi, my name is Daniil Kononchuk, I’m 19 years old, and I’m an emerging frontend developer. My first steps in the world of creating a user interface were a real discovery for me, and since then my passion for this art has not left me. I already have several projects in my account, which I have presented above. Every day is a new opportunity for me to learn something new and improve in the world of frontend development.'
    },
    {
        title: 'Where did I study?',
        desc: 'At Taras Shevchenko National University of Kiev, I grasped computer engineering fundamentals in two years, igniting a passion for frontend development. Furthering my education at home for eight months, I honed skills and shaped a clear vision for the future in this dynamic field.'
    },
    {
        title: 'What technologies do I use?',
        desc: 'In my toolkit, I adeptly wield HTML, CSS, SCSS, Tailwind CSS, JavaScript, and TypeScript for frontend development, utilizing React, Redux Toolkit, and RTK Query for dynamic interfaces. For enhanced performance in large-scale applications, I favor Next.js. React Hook Form, Material UI, and Shadcn-UI streamline form interactions. On the server side, I leverage Node.js, Express.js, and MongoDB with Mongoose. Clerk handles authentication seamlessly. Prisma and UseQuery enhance database operations. GitHub ensures version control throughout my development process.'
    },
]

export const About = () => {
    return (
        <div id='about' className='my-16'>
            <h2 className='h2'>About</h2>
            <motion.div initial='hidden' whileInView='visible' className="grid gap-8">
                {about.map((item, i) => (
                    <AboutItem custom={i / 10} key={item.title} item={item} />
                ))}
            </motion.div>
        </div>
    )
}
