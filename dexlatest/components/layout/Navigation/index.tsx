"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart, FaUser, FaTimesCircle } from 'react-icons/fa';

interface CartItem {
    image: string;
    name: string;
    price: number;
}

const Header: React.FC<{ cartItems: CartItem[], addToCart: (item: CartItem) => void }> = ({ cartItems, addToCart }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [userOpen, setUserOpen] = useState(false);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <header className="bg-white border border-b-[#293a93] border-solid text-black p-4 fixed w-full z-50">
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
                            {cartItems.length > 0 && (
                                <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                                    {cartItems.length}
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
                            <div>
                                {cartItems.length === 0 ? (
                                    <p>Your cart is empty.</p>
                                ) : (
                                    cartItems.map((item, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                                            <div>
                                                <p className="font-bold">{item.name}</p>
                                                <p className="text-gray-700">${item.price.toFixed(2)}</p>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
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
                            <p>thomas@gmail.com</p> {/* Dummy email */}
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
