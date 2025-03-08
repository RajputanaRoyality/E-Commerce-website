import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
            <img src={assets.logo} className='md-5 w-32' alt="" />
            <p className=' text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea laudantium, 
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