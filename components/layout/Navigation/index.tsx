"use client";
import { useState } from 'react';
import {FaShoppingCart, FaUser, FaTimesCircle, FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { useCart } from '@/utils/cartcontext';
import CheckoutModal from '@/components/Home/checkoutModal';

const Header: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false); // State for cart dropdown visibility
  const [userOpen, setUserOpen] = useState(false); // State for user dropdown visibility
  const [checkoutOpen, setCheckoutOpen] = useState(false); // State for checkout modal visibility
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useCart();

  // Calculate total cart amount
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle search input change
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Filter cart items based on search query
  const filteredItems = cart.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
<header className="bg-white text-black p-4 shadow-lg fixed w-full z-50">
<nav className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold text-blue-600">
            <img src="/images/logoblue.png" alt="Logo" width={50} height={50} />
          </div>
        </div>

        {/* Search Input */}
        <div className="flex flex-grow mx-8">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for products..."
            className="w-full px-4 py-2 rounded-lg text-black border-2 border-gold focus:border-[#293a93] focus:outline-none transition duration-200"
          />
        </div>

        {/* Navigation Icons */}
        <ul className="flex space-x-4 items-center relative">
          {/* Cart Icon */}
          <li className="relative">
            <button onClick={() => setCartOpen(!cartOpen)} className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                  {cart.length}
                </span>
              )}
            </button>
          </li>

          {/* Cart Dropdown */}
          {cartOpen && (
            <div className="absolute right-0 top-0 h-screen md:h-auto w-64 bg-white overflow-auto shadow-lg border rounded-lg p-4 z-50">
              <div className="flex justify-between items-center">
                <h3 className="font-bold">Your Cart</h3>
                <button onClick={() => setCartOpen(false)}>
                  <FaTimesCircle className="text-xl text-red-500" />
                </button>
              </div>

              {filteredItems.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <>
                  {filteredItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 mb-4">
                      <img src={item.image} alt={item.name} width={50} height={50} className="rounded-lg" />
                      <div className="flex-1">
                        <h4>{item.name}</h4>
                        <p>${item.price}</p>
                        <div className="flex items-center space-x-2">
                          <button onClick={() => decreaseQuantity(item.id)} className="bg-gray-200 p-1 rounded">
                            <FaMinus />
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => increaseQuantity(item.id)} className="bg-gray-200 p-1 rounded">
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                        <FaTrash />
                      </button>
                    </div>
                  ))}
                  <div className="border-t border-gray-300 pt-4 mb-8">
                    <div className="flex justify-between">
                      <h4 className="font-bold">Total</h4>
                      <p className="font-bold">${totalAmount.toFixed(2)}</p>
                    </div>
                    <button
                      className="w-full bg-[#293a93] text-white py-2 mt-2 rounded-lg"
                      onClick={() => {
                        setCartOpen(false);
                        setCheckoutOpen(true);
                      }}
                    >
                      Checkout
                    </button>
                  </div>
                </>
              )}
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
            <div className="absolute right-0 top-0 h-screen md:h-auto w-64 bg-white shadow-lg border rounded-lg p-4 z-50">
              <div className="flex justify-between items-center">
                <h3>User Info</h3>
                <button onClick={() => setUserOpen(false)}>
                  <FaTimesCircle className="text-xl text-red-500" />
                </button>
              </div>
              <img src="/images/josh.png" alt="User Profile" className="w-16 h-16 rounded-full mx-auto my-4" />
              <p className="text-center">Audu Joshua Adinoyi</p>
              <p className="text-center">empire4josh@gmail.com</p> 
            </div>
          )}
        </ul>
      </nav>

      {/* Checkout Modal */}
      {checkoutOpen && (
        <CheckoutModal
          cart={cart}
          totalAmount={totalAmount}
          onClose={() => setCheckoutOpen(false)}
          onConfirmPurchase={() => clearCart()}
        />
      )}
    </header>
  );
};

export default Header;
