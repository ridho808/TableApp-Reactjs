import React, { Component } from 'react'
import Navbar from '../Component/Navbar'
import Thumbnails from '../assets/mobile (3).png'
export default class About extends Component {
  render() {
    return (
      <Navbar>
        <section className='w-full mt-7'>
          <div className='max-w-[70%] mx-auto backdrop-blur-2xl bg-white/10 shadow-lg rounded-xl'>
              <h1 className='title-about'>Table APP</h1>
              <img src="https://img.icons8.com/color-glass/50/000000/data-sheet.png" alt='logo' className='self-center mx-auto'/>
              <p className='text-center text-white p-3'>simple table application made by <a href="https://github.com/ridho808/" className='font-bold'>Doolean</a> which aims to solve the challenges of react js community. this application is only as a learning for webapp development using react js library.</p>
              <img src={Thumbnails} alt="" className='object-cover w-[560px] mx-auto p-2 rounded-3xl' />
              <h2 className='text-xl text-white text-center'>Source Code :</h2>
              <p className='text-white text-center p-4'>
                <a href="https://github.com/ridho808/TableApp-Reactjs">github.com/ridho808/TableApp-Reactjs</a>
              </p>
          </div>
        </section>
      </Navbar>
    )
  }
}
