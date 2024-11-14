import React, { useEffect, useState } from 'react'
import clsx from "clsx"
import CheckoutForm from "./CheckoutForm"
import PageHeader from './PageHeader';
import Button from "./Button"

export default function CheckoutModal({ onCancel, onSuccess }) {
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  useEffect(() => {
    // Set a delay to show the CheckoutForm after 3 seconds
    const timer = setTimeout(() => setShowCheckoutForm(true), 3000);
    return () => clearTimeout(timer); // Clear timer on unmount
  }, []);

  return (
    <div className={clsx(
      "fixed inset-0 z-40 overflow-auto",
      "flex justify-center items-center",
      "w-screen h-screen bg-black/40",
    )}>
      <div className={clsx(
        "relative w-full max-w-md",
        "p-4 m-auto rounded-lg shadow-lg",
        "bg-gray-200 text-gray-800/80",
      )}>
        <PageHeader h3>Checkout</PageHeader>
        <hr className="w-full border-1 rounded-full border-gray-500/10 my-3" />
        
        {showCheckoutForm ? (
          <CheckoutForm onCancel={onCancel} onSuccess={onSuccess} autoSubmit={true} />
        ) : (
         ""
        )}
      </div>
    </div>
  );
}
