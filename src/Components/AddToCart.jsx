import React from 'react'
import { useGlobalContext } from '../context/context';

const AddToCart = (props) => {
  // console.log(props.dataa);
  const {addToCart} = useGlobalContext()
  return (
    <div>
      
        <button onClick={()=>addToCart(props.dataa)}  className='border-dotted border-white text-white mx-3  absolute bottom-4 hover:bg-orange-700 hover:border-orange-700 hover:border-solid transition duration-300 ease-in-out'>Add To Cart</button>
      
    </div>
  )
}

export default AddToCart
