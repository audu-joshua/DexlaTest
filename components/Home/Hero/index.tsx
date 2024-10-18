"use client";
import { FaEnvelope, FaArrowRight } from 'react-icons/fa';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-8 pt-28 px-3 md:px-6 lg:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
        {/* First Card - Full width on mobile, first column on larger screens */}
        <div
  className="bg-blue-600 text-white h-[370px] md:h-full p-4 flex flex-col justify-between md:col-span-1 md:row-span-3 rounded-2xl relative"
  style={{
    backgroundImage: 'url(/images/darkwoman.png)', // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>

  <div className="flex space-x-4 mt-auto relative z-10">
    {/* Learn More Button */}
    <button className="bg-white text-black rounded-full flex items-center px-4 py-2">
      <span>Learn More</span>
      <span className="ml-2 bg-black text-white rounded-full p-1">
        <FaArrowRight />
      </span>
    </button>

    {/* Contact Us Button */}
    <button className="border border-white text-white rounded-full flex items-center px-4 py-2">
      <span className="mr-2">
        <FaEnvelope />
      </span>
      Contact Us
    </button>
  </div>
</div>



        {/* Second Card - Full width on mobile, second column on larger screens */}
        <div className="bg-[#F4BC7F] h-[250px] md:h-full text-black p-4 flex flex-col justify-between  md:row-span-1 rounded-2xl">
  {/* Top Text */}
  <h2 className="text-3xl font-extrabold">Welcome to Dexla Shop</h2>

  {/* Bottom Text */}
  <p className="mt-auto text-sm text-[]">
    We are your ultimate shopping destination for gadgets, home appliances, and more. We take pride in offering you the best shopping experience.
  </p>
</div>


    <div className='flex justify-between gap-4'>
        {/* Third Card - Shares the row with the fourth card on mobile */}
        {/* Third Card */}
<div
  className="bg-red-600 text-white p-4 w-full flex flex-col justify-between h-48 relative rounded-lg"
  style={{
    backgroundImage: 'url(/images/cheerfulman.png)', // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>

  <div className="relative z-10 mt-auto">
    <button className="bg-white text-black rounded-lg px-4 py-2">
      Shop Now
    </button>
  </div>
</div>

{/* Fourth Card */}
<div
  className="bg-yellow-600 text-white p-4 w-full flex flex-col justify-between h-48 relative rounded-lg"
  style={{
    backgroundImage: 'url(/images/shopping.png)', // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>


  <div className="relative z-10 mt-auto">
    <button className="border border-white text-white rounded-lg px-4 py-2">
      #Shopping Cart
    </button>
  </div>
</div>

    </div>
      </div>
    </section>
  );
};

export default HeroSection;
