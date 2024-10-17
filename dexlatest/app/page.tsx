import React from 'react';
import Hero from '@/components/Home/Hero';
import Experience from '@/components/Home/experience';
import Listing from '@/components/Home/listing';
import { CartItem } from '@/utils/carttype';

interface PageProps {
  addToCart: (item: CartItem) => void; // Define the prop type
}

  const Page: React.FC<PageProps> = ({ addToCart }) => {
  return (
    <div className='bg-white'>
      <Hero />
      <Experience />
      <Listing addToCart={addToCart} /> {/* This should now work */}
    </div>
  );
};


export default Page;
