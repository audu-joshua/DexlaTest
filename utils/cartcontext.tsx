"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { CartItem } from "./carttype"; // Importing the CartItem type

interface CartContextType {
    cart: CartItem[]; // The current cart state, an array of CartItem
    addToCart: (item: CartItem) => void; // Function to add an item to the cart
    removeFromCart: (id: string) => void; // Function to remove an item from the cart
    clearCart: () => void; // Function to clear the entire cart
    increaseQuantity: (id: string) => void; // Function to increase the quantity of a specific item
    decreaseQuantity: (id: string) => void; // Function to decrease the quantity of a specific item
}

// Create the CartContext with a default value of undefined
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component to manage the cart state
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Initialize cart state from local storage or as an empty array
    const [cart, setCart] = useState<CartItem[]>(() => {
        if (typeof window !== "undefined") {
            const savedCart = localStorage.getItem("cart");
            return savedCart ? JSON.parse(savedCart) : [];
        }
        return [];
    });

    // Effect to update local storage whenever the cart changes
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);

    // Function to add an item to the cart
    const addToCart = (item: CartItem) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                // If item exists, increase the quantity
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                // If item does not exist, add it to the cart with quantity 1
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    // Function to remove an item from the cart by ID
    const removeFromCart = (id: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // Function to clear the cart
    const clearCart = () => {
        setCart([]);
    };

    // Function to increase the quantity of an item
    const increaseQuantity = (id: string) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Function to decrease the quantity of an item
    const decreaseQuantity = (id: string) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0) // Remove the item if quantity is 0
        );
    };

    return (
        <CartContext.Provider
            value={{
                cart, // Providing the cart state
                addToCart, // Providing the addToCart function
                removeFromCart, // Providing the removeFromCart function
                clearCart, // Providing the clearCart function
                increaseQuantity, // Providing the increaseQuantity function
                decreaseQuantity, // Providing the decreaseQuantity function
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the CartContext
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider"); // Error handling for context usage
    }
    return context; // Returning the context value
};
