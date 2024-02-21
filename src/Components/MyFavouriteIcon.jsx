// import React from 'react'
import { FaHeart } from 'react-icons/fa';



import React, { useState } from 'react';

const MyFavouriteIcon = ({ onToggleFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
    // onToggleFavorite(); // Notify the parent component about the toggle
  };

  return (
    <div>
      <button   
        className={`border-none mx-[245px] absolute bottom-[153px] ${isFavorite ? 'text-red-500' : 'text-white'}`}
        onClick={handleClick}
      >
        <FaHeart size={23} />
      </button>
    </div>
  );
};

export default MyFavouriteIcon;
