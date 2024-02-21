import React from 'react'
import { FaDribbbleSquare , FaFacebookSquare,FaGithubSquare,FaInstagramSquare,FaTwitterSquare } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24262b]'>
        <div className=' py-16 px-4 grid lg:grid-cols-3 text-gray-300 gap-8'>
             <div>
                <h1 className=' w-full text-3xl font-bold text-orange-500'>YumEats</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, sunt, voluptatem architecto illum suscipit provident expedita voluptates iste quibusdam libero odio! Voluptate blanditiis, facere architecto incidunt quidem amet tempora rerum!
                </p>
                <div className=' flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30}/>
                    <FaInstagramSquare size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaDribbbleSquare size={30}/>
                </div>
             </div>
             <div className=' lg:col-span-2 flex justify-between mt-6 ml-9 '>
                <div>
                    <h6 className=' font-medium  hover:underline'>About YumEats</h6>
                    <ul className='ml-[-30px]'>
                        <li className='py-2 text-sm text-[#9b9b9b] cursor-pointer hover:scale-105 hover:text-orange-300'>Who We are</li>
                        <li className='py-2 text-sm text-[#9b9b9b] cursor-pointer hover:scale-105 hover:text-orange-300'>Work with Us</li>
                        <li className='py-2 text-sm text-[#9b9b9b] cursor-pointer hover:scale-105 hover:text-orange-300'>Press Kit</li>
                    </ul>
                </div>
                <div>
                    <h6 className=' font-medium  hover:underline'>Location</h6>
                    <ul className='ml-[-30px]'>
                        <li className='py-2 text-sm text-[#9b9b9b] cursor-pointer hover:scale-105 hover:text-orange-300'>India</li>
                        <li className='py-2 text-sm text-[#9b9b9b] cursor-pointer hover:scale-105 hover:text-orange-300'>New York</li>
                        <li className='py-2 text-sm text-[#9b9b9b] cursor-pointer hover:scale-105 hover:text-orange-300'>USA</li>
                        <li className='py-2 text-sm text-[#9b9b9b] cursor-pointer hover:scale-105 hover:text-orange-300'>Canada</li>
                    </ul>
                </div>
                
                
                <div>
                    <h6 className=' font-medium  hover:underline'>Company</h6>
                    <ul className='ml-[-30px]'>
                        <li className='py-2 text-sm text-[#9b9b9b] cursor-pointer hover:scale-105 hover:text-orange-300'>About</li>
                        <li className='py-2 text-sm text-[#9b9b9b] cursor-pointer hover:scale-105 hover:text-orange-300'>Careers</li>
                        <li className='py-2 text-sm text-[#9b9b9b] cursor-pointer hover:scale-105 hover:text-orange-300'>Term</li>
                    </ul>
                </div>
                <div>
                    <h6 className=' font-medium hover:underline'>Contact Us</h6>
                    <ul className='ml-[-30px]'>
                        <li className='py-2 text-sm text-[#9b9b9b] cursor-pointer hover:scale-105 hover:text-orange-300'>Help & Support</li>
                        <li className='py-2 text-sm text-[#9b9b9b] cursor-pointer hover:scale-105 hover:text-orange-300'>Partner With Us</li>
                        {/* <li className='py-2 text-sm text-[#9b9b9b] cursor-pointer hover:scale-105 hover:text-orange-300'>USA</li>
                        <li className='py-2 text-sm text-[#9b9b9b] cursor-pointer hover:scale-105 hover:text-orange-300'>Canada</li> */}
                    </ul>
                </div>
             </div>
        </div>
      
    </div>
  )
}

export default Footer
