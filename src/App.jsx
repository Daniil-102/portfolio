import React from 'react'
import './App.scss'
import { Title } from './components/Title'
import { Works } from './components/Works'
import { About } from './components/About'
import { Form } from './components/Form'
import { Footer } from './components/Footer'


function App() {

  return (
    <div className='container px-2'>
      <div className='flex flex-col w-full overflow-hidden'>
        <Title />
        <Works />
        <About />
        <Form />
        <Footer />
      </div>
    </div>
  )
}

export default App
