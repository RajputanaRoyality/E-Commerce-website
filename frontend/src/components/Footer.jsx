import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='mt-35'>
        <div className='flex flex-row mb-[-270px]'>
        <img src={assets.logo} className='md-5 mb-[-140px] w-15 h-13' alt=""/>
        <h1 className='font-bold text-xl mt-3'>Vaiso Store</h1>
        </div>
        
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
            
            <p className=' text-gray-600'>
            Always bringing newest and trendy fashion to you, always with you to care and support.
            </p>
            </div>
            

            <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>7979096883</li>
                <li>contactforeveru@gmail.com</li>
            </ul>
        </div>

        </div>

        
    </div>
    
  )
}

export default Footer