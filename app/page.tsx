import React from 'react';
import Hero from '@/components/Home/Hero';
import Experience from '@/components/Home/experience';
import Listing from '@/components/Home/listing';
import ShopNow from '@/components/Home/shopnow';

const Page: React.FC = () => {
  return (
    <div className='bg-white'>
      <Hero />
      <Experience />
      <Listing />
      <ShopNow/>
    </div>
  );
};

export default Page;
