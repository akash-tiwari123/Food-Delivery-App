import React from 'react'
import {BsFillCartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/context'
const HeaderCartButton = () => {
  const {cart} =  useGlobalContext()
  let num = cart.reduce((total, item)=>{
    return total + item.count
  },0)
  return (
    <div>
      <Link to='/cart' className=' no-underline'>
      <button className='bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full'>
            <BsFillCartFill size={20}/>
            <span className='ml-1'>Cart</span>
            <sup className='ml-1 text-[17px]'>{num}</sup>
        </button>
      </Link>
    </div>
  )
}

export default HeaderCartButton
