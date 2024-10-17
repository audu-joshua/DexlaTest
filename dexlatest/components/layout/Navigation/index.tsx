"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart, FaUser, FaTimesCircle } from 'react-icons/fa';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false); // Toggle for cart dropdown
  const [userOpen, setUserOpen] = useState(false); // Toggle for user dropdown
  const [cartItems, setCartItems] = useState(3); // Sample cart item count for now

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="bg-white text-black py-4 relative">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Left Section - Logo and Hamburger Menu */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu - Visible on mobile */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FaTimes className="text-2xl transition-transform duration-300" />
            ) : (
              <FaBars className="text-2xl transition-transform duration-300" />
            )}
          </button>

          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600 dark:text-white">
            <img src="/images/logoblue.png" alt="Logo" width={50} height={50} />
          </div>
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex flex-grow mx-8">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for products..."
            className="w-full px-4 py-2 rounded-lg text-black focus:ring-2 focus:ring-[#293a93] focus:outline-none"
          />
        </div>

        {/* Navigation Links - Hidden on mobile, visible on larger screens */}
        <ul className={`hidden md:flex space-x-4 items-center`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
        </ul>

        {/* Right Section - Cart and User Info */}
        <ul className="flex space-x-4 items-center relative">
          {/* Cart Icon with item count */}
          <li className="relative">
            <button onClick={() => setCartOpen(!cartOpen)} className="relative">
              <FaShoppingCart className="text-2xl" />
              {cartItems > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                  {cartItems}
                </span>
              )}
            </button>
          </li>

          {/* Cart Dropdown */}
          {cartOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg border rounded-lg p-4 z-50">
              <div className="flex justify-between items-center">
                <h3 className="font-bold">Your Cart</h3>
                <button onClick={() => setCartOpen(false)}>
                  <FaTimesCircle className="text-xl text-red-500" />
                </button>
              </div>
              <p>Items in cart: {cartItems}</p>
              <p>Listing of cart items...</p> {/* Placeholder for the actual cart items */}
            </div>
          )}

          {/* User Icon */}
          <li className="relative">
            <button onClick={() => setUserOpen(!userOpen)} className="relative">
              <FaUser className="text-2xl" />
            </button>
          </li>

          {/* User Dropdown */}
          {userOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border rounded-lg p-4 z-50">
              <div className="flex justify-between items-center">
                <h3 className="font-bold">User Info</h3>
                <button onClick={() => setUserOpen(false)}>
                  <FaTimesCircle className="text-xl text-red-500" />
                </button>
              </div>
              <p>Thomas McDonough</p>
              <p>thomas.mcdonough@example.com</p> {/* Dummy email */}
            </div>
          )}
        </ul>
      </nav>

      {/* Mobile Menu - Only shown when menuOpen is true */}
      {menuOpen && (
        <div className="md:hidden bg-blue-600 text-white px-8 py-4 absolute inset-x-0 top-16 z-50 transition-transform duration-300">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
