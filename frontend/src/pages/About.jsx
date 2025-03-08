import React from 'react'
import Titles from '../components/Titles'
import { assets } from '../assets/assets'
import NewsLetterBox from '../../src/components/NewsLetterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Titles text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, quas esse necessitatibus harum minus fugit debitis corrupti praesentium ut at eum voluptas distinctio enim repellendus itaque reiciendis optio libero eveniet.\</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur aut harum ratione voluptates dolore, rem rerum numquam illo sapiente doloribus.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at forever is to empower customers with choice,convinence and evrything</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Titles text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minus dolore doloribus! Eveniet at quas excepturi nostrum a iste suscipit!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minus dolore doloribus! Eveniet at quas excepturi nostrum a iste suscipit!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minus dolore doloribus! Eveniet at quas excepturi nostrum a iste suscipit!</p>
        </div>
      </div>

      <NewsLetterBox/>
    </div>


  )
}

export default About