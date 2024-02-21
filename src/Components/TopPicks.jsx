import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { topPicks } from '../Data/data';
import AddToCart from './AddToCart';
import Buy from './Buy';
import MyFavoriteIcon from './MyFavouriteIcon';

const TopPicks = () => {
  return (
    <div className=''>
      <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Top Picks</h1>
      <div className='lg:hidden'>
        {/* Render your mobile-friendly version for smaller screens */}
        {/* You can use a simpler design or a different slider library for mobile */}
        <Splide options={{ perPage: 1, gap: '0.5rem', drag: 'free' }}>
          {topPicks.map((items) => (
            <SplideSlide key={items.id}>
              <div className='rounded-3xl relative'>
                <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white'>
                  <p className='px-3 pt-3'>{items.title}</p>
                  <p className='px-3'> {items.price}</p>
                  <div>
                    <MyFavoriteIcon />
                  </div>
                  <div>
                    <AddToCart dataa={items} />
                  </div>
                  <div>
                    <Buy />
                  </div>
                </div>
                <img
                  className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300'
                  src={items.img}
                  alt={items.title}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div className='hidden lg:flex max-w-[1520px] m-auto py-2 px-2'>
        <Splide options={{ perPage: 4, gap: '0.5rem', drag: 'free' }}>
          {topPicks.map((items) => (
            <SplideSlide key={items.id}>
              <div className='rounded-3xl relative'>
                <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white'>
                  <p className='px-3 pt-3'>{items.title}</p>
                  <p className='px-3'> {items.price}</p>
                  <div>
                    <MyFavoriteIcon />
                  </div>
                  <div>
                    <AddToCart dataa={items} />
                  </div>
                  <div>
                    <Buy />
                  </div>
                </div>
                <img
                  className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300'
                  src={items.img}
                  alt={items.title}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default TopPicks;
