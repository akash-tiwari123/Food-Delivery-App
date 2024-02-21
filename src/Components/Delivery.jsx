import React from 'react';

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h1 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h1>
      <div className='w-full max-w-3xl mx-auto md:grid md:grid-cols-2'>
        <img
          className='w-full md:w-3/4 mx-auto my-4 md:my-0'
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          alt=""
        />
        <div className='flex flex-col justify-center mt-8 md:mt-0'>
          <p className='text-[#00df9a] font-bold text-2xl'>Get The App</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience On-Demand</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, at. Aut facilis molestiae aliquam libero
            in, quasi eos magni ipsum distinctio velit. Voluptatibus perferendis reprehenderit quo magnam error voluptate
            enim illo! Deleniti, necessitatibus reiciendis quos nisi ipsa quibusdam quidem incidunt in, modi quam optio
            eligendi voluptas eius voluptate asperiores quas minima vel officia omnis tenetur voluptates culpa porro!
            Repudiandae aliquam fugit ab nulla, itaque libero facere. 
          </p>
          <button className='bg-black hover:bg-orange-700 text-[#00df9a] w-full md:w-48 rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>
  Get Started
</button>

        </div>
      </div>
    </div>
  );
};

export default Delivery;
