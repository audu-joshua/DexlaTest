"use client";
import React from 'react';

const ShopNow: React.FC = () => {
  return (
    <div className="container border border-solid border-green-200 px-3 md:px-6 lg:px-12 mx-auto p-4 grid md:grid-cols-2 items-center justify-between">
      {/* Image Section */}
      <div className="md:h-full">
        <img
          src="/images/shopnow.png" // Image source; ensure the path is correct
          alt="Shop Now" // Alt text for accessibility
          className="w-full h-full object-cover rounded-tr-2xl rounded-tl-2xl md:rounded-tl-2xl md:rounded-bl-2xl md:rounded-tr-none shadow-lg" // Use object-cover to maintain aspect ratio and fill space
        />
      </div>

      {/* Text and Button Section */}
      <div className="bg-[#1D242D] h-full p-5 rounded-br-2xl md:rounded-bl-none rounded-bl-2xl md:rounded-tr-2xl flex flex-col justify-between">
        <p className="text-[#F8F8F8] font-normal py-2 rounded mb-4">
          LIMITED OFFER 
        </p>
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Register to start shopping at discount rate 
        </h1>
        <button className="bg-white w-fit text-black py-2 px-6 rounded hover:bg-[#293a93] transition duration-300">
          Shop Now 
        </button>
      </div>
    </div>
  );
};

export default ShopNow;
