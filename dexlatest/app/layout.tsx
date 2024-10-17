"use client"; // Add this line at the top
import localFont from "next/font/local";
import React, { ReactNode } from "react"; // Import React here
import "./globals.css";
import Header from "@/components/layout/Navigation";
import { useState } from "react";
import { CartItem } from "@/utils/carttype";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, item];
      console.log(updatedItems); // Log to see the current items in the cart
      return updatedItems;
    });
  };
  
  return (
    <html lang="en">
      <body>
        <Header cartItems={cartItems} addToCart={addToCart} />
        {/* Render the Page component with addToCart prop */}
        {React.cloneElement(children as React.ReactElement, { addToCart })}
      </body>
    </html>
  );
}
