import React, { useState } from 'react';
import { ArrowSmRightIcon } from '@heroicons/react/solid';
import { mealData } from '../Data/data';

const Meal = () => {
  const [foods, setFoods]=useState(mealData)
  const fillterCat=(category)=>{
    setFoods(
      mealData.filter((item)=>{
        return item.category === category;
      })
    )
  }
  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
      <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Our Meals</h1>
      <div className=' flex flex-col lg:flex-row justify-center'>
      <div className='flex justify-center md:justify-center'>
        <button onClick={() => setFoods(mealData)} className=' rounded-lg m-1 px-4 py-2 border-2 border-orange-700 text-[#FFFFFF] bg-orange-700 hover:bg-white hover:text-orange-700  hover:border-orange-700 transition duration-300 ease-in-out'>All</button>
        <button onClick={() => fillterCat("pizza")} className=' rounded-lg m-1 px-4 py-2 border-2 border-orange-700 text-[#FFFFFF] bg-orange-700 hover:bg-white hover:text-orange-700  hover:border-orange-700 transition duration-300 ease-in-out'>Pizza</button>
        <button onClick={() => fillterCat("chicken")} className=' rounded-lg m-1 px-4 py-2 border-2 border-orange-700 text-[#FFFFFF] bg-orange-700 hover:bg-white hover:text-orange-700  hover:border-orange-700 transition duration-300 ease-in-out'>Chicken</button>
        <button onClick={() => fillterCat("salad")} className=' rounded-lg m-1 px-4 py-2 border-2 border-orange-700 text-[#FFFFFF] bg-orange-700 hover:bg-white hover:text-orange-700  hover:border-orange-700 transition duration-300 ease-in-out'>Salad</button>
      </div>


      </div>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>
        {foods.map((item, index) => (
          <div key={index} className='border-none hover:scale-110 ease-in-out duration-500'>
            <img
              src={item.image}
              alt={item.name}
              className='h-[200px] w-full rounded-lg object-cover border hover:border-blue-500'
            />
            <div className='flex justify-between py-2 px-4'>
              <p className='font-bold'>{item.name}</p>
              <p className='bg-orange-700 h-[60px] w-[60px] rounded-full -mt-10 text-white py-[14px] px-2 border-4 font-bold'>
                {item.price}
              </p>
            </div>
            <div className='pl-2 py-4 -mt-12  ml-4'>
              <p className='flex items-center font-bold text-indigo-600 cursor-pointer'>View More <ArrowSmRightIcon className='w-6 ml-2'/></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;
