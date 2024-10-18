"use client";
import React, { useState } from 'react';
import { dummyItems } from '@/utils/listing';
import { useCart } from '@/utils/cartcontext';

const Listing = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Clothing', 'Accessories'];

  // Filter the items based on the selected category
  const filteredItems = selectedCategory === 'All'
    ? dummyItems
    : dummyItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-8 px-3 md:px-6 lg:px-12">
      <h2 className="text-2xl text-black font-bold mb-4">Category</h2>
      <div className="flex space-x-2 mb-4">
        {/* Category filter buttons */}
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`border rounded-full px-4 py-2 transition-colors duration-300 ${
              selectedCategory === category ? 'bg-[#293a93] text-white' : 'bg-white text-black'
            } border-[#293a93]`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {filteredItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md p-4">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-2" />
            <h3 className="font-bold text-[#293a93]">{item.name}</h3>
            <p className="text-gray-700 font-semibold">${item.price.toFixed(2)}</p>

            {/* Add to Cart Button */}
            <button
              className="mt-2 bg-[#293a93] text-white px-4 py-2 rounded"
              onClick={() => addToCart({ ...item, quantity: 1 })} // Add item to cart with quantity
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Listing;
