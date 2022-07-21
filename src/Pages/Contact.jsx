import React, { Component } from 'react'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillMail, AiFillPhone, AiFillTwitterSquare } from 'react-icons/ai'
import Navbar from '../Component/Navbar'

export default class Contact extends Component {
  render() {
    return (
      <Navbar>
        <section className='w-full mt-[3em]'>
            <div className='max-w-[90%] md:w-[70%] mx-auto backdrop-blur-2xl bg-white/10 shadow-lg rounded-xl'>
                <h1 className='text-3xl m-2 font-bold text-white'>Find me</h1>
                <div className='flex flex-col w-full sm:flex-row'>
                  <div className='flex flex-col bg-purple-800 md:w-[40%] w-full rounded-2xl'>
                    <h3 className='text-xl font-bold text-white text-center'>Contact Information</h3>
                    <p className='p-2 text-gray-300'>Fill up the form and out Team will get back to you within 24 hours.</p>
                    <ul className='flex flex-col justify-evenly h-[200px] mx-2'>
                      <li className='flex items-center'>
                      <AiFillGithub size={30} fill='white'/><a href="https://github.com/ridho808" className='mx-2 text-gray-300'>Ridho808</a>
                      </li>
                      <li className='flex items-center'>
                        <AiFillMail size={30} fill="white"/><a href="https://gmail.com/" className='mx-2 text-gray-300'>syamridho58@gmail.com</a>
                      </li>
                      <li className='flex items-center'>
                        <AiFillPhone size={30} fill="white"/><h4 className='mx-2 text-gray-300'>+6285216451460</h4>
                      </li>
                    </ul>
                    <h1 className='text-gray-300 m-2'>Social Media :</h1>
                    <ul className='flex justify-evenly w-[300px] flex-row mx-2 mb-2 '>
                      <li><AiFillFacebook fill='white' size={30}/></li>
                      <li><AiFillTwitterSquare fill='white' size={30}/></li>
                      <li><AiFillInstagram fill='white' size={30}/></li>
                    </ul>
                  </div>
                  <div className='w-full flex flex-col items-center justify-center my-3'>
                      <h1 className='Contact w-full'>DOOLEAN</h1>
                      <a href="https://doolean.herokuapp.com/" className='self-center btn hover:-translate-y-1 hover:scale-110'>
                        See More
                      </a>
                  </div>
                </div>
            </div>
        </section>
      </Navbar>
   )
  }
}
