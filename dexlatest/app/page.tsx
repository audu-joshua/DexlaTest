import React from 'react';
import Hero from '@/components/Home/Hero';
import Experience from '@/components/Home/experience';
import Listing from '@/components/Home/listing';

const Page: React.FC = () => {
  return (
    <div className='bg-white'>
      <Hero />
      <Experience />
      <Listing /> {/* This should now work */}
    </div>
  );
};

export default Page;
