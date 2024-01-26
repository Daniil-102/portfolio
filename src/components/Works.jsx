import React from 'react'
import { Project } from './Project'

const projects = [
    {
        img: 'project1.jpg',
        title: 'Taskify for Ultimate Task Mastery!',
        desc: 'Welcome to our innovative app — where ideas thrive! Effortlessly manage tasks, coordinate projects, and streamline responsibilities. Dive into seamless goal management with unique organization features.',
        hash: ['Next.js', 'Prisma', 'clerk', 'shadcn-UI', 'tailwind'],
        link: 'https://taskify-puce-five.vercel.app/'
    },
    {
        img: 'project2.png',
        title: 'GoldenAura Treasures',
        desc: '"GoldenAura Treasures": Luxurious gold jewelry, each piece exuding refined style and unique elegance. Discover your uniqueness with "GoldenAura Treasures."',
        hash: ['React', 'TypeScript'],
        link: 'https://daniil-102.github.io/online_store/'
    },
    {
        img: 'project3.png',
        title: 'Your Voice: Personal Blog for Your Ideas',
        desc: 'Explore "Your Voice"—a dynamic space for creative expression, idea sharing, and collaborative inspiration."',
        hash: ['React', 'Redux', 'MogoDB', 'Mongoose'],
        link: 'https://konochuk-blog-frontend.vercel.app/'
    },
]

export const Works = () => {

    return (

        <div id='projects'>
            <h2 className='h2 '>Works</h2>

            <div className='grid gap-8 '>
                {projects.map(project => (
                    <Project key={project.title} item={project} />
                ))}
            </div>
        </div>
    )
}
