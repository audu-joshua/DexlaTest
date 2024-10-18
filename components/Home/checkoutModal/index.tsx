import { FaTimesCircle } from 'react-icons/fa';
import { useState } from 'react';

interface CheckoutModalProps {
  cart: Array<{ id: string, name: string, quantity: number, price: number }>;
  totalAmount: number;
  onClose: () => void;
  onConfirmPurchase: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ cart, totalAmount, onClose, onConfirmPurchase }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const handleConfirmPurchase = () => {
    setIsProcessing(true);

    // Simulating an API call or processing time
    setTimeout(() => {
      setIsProcessing(false);
      setPurchaseSuccess(true);

      // Clear cart after successful purchase
      onConfirmPurchase();
    }, 2000); // 2 seconds of processing time
  };

  return (
    <div className="fixed px-3 md:px-6 lg:px-12 inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Checkout</h2>
          <button onClick={onClose}>
            <FaTimesCircle className="text-2xl text-red-500" />
          </button>
        </div>

        {isProcessing ? (
          <div className="my-4 text-center">
            <p className="font-bold text-lg">Processing your order...</p>
            {/* Add a spinner animation (Tailwind's built-in spinner class can be used) */}
            <div className="loader animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mx-auto my-4"></div>
          </div>
        ) : purchaseSuccess ? (
          <div className="my-4 text-center">
            <p className="font-bold text-lg text-green-500">Purchase Successful!</p>
          </div>
        ) : (
          <div className="my-4">
            <h3 className="font-bold mb-2">Order Summary</h3>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>{item.name} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold mt-4">
              <span>Total</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <button
              className="w-full bg-green-600 text-white py-2 rounded-lg mt-4"
              onClick={handleConfirmPurchase}
            >
              Confirm Purchase
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
