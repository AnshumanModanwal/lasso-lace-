import React, { useState, useEffect } from 'react'
import { CheckCircle, ChevronRight, CreditCard, X } from 'react-feather'
import { Link } from 'react-router-dom'
import Button from './Button'
import Loader from "./Loader"

export default function CheckoutForm({ onCancel, onSuccess, autoSubmit }) {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const [orderDetails, setOrderDetails] = useState({});

  useEffect(() => {
    (async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const mockResponse = {
        status: "success",
        clientSecret: "mock_client_secret",
        finalOrder: { /* Mock order details here */ }
      };
      if (mockResponse.status !== "error") {
        setClientSecret(mockResponse.clientSecret);
        setOrderDetails(mockResponse.finalOrder);
      }
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      setSucceeded(true);
      onSuccess();
    }, 3000);
  };

  useEffect(() => {
    if (autoSubmit && clientSecret) {
      handleSubmit(new Event('submit'));
    }
  }, [autoSubmit, clientSecret]);

  if (succeeded) {
    return (
      <div className='flex flex-col items-center'>
        <CheckCircle className='w-20 h-20 text-green-400' />
        <p className='text-lg font-light my-4'>Order Placed Successfully</p>
        <Link to="/orders">
          <Button link>
            <span>Go to Orders</span>
            <ChevronRight className='ml-2' />
          </Button>
        </Link>
        <Button secondary onClick={onCancel}>Close</Button>
      </div>
    );
  }

  return (
    <div>
      <section className='mb-6'>
        {orderDetails?.amount && (
          <div className='flex justify-between text-lg mt-2'>
            <h4 className='text-lg mb-2'>Final Order</h4>
            <span className='font-bold text-xl'>${orderDetails.amount}</span>
          </div>
        )}
        {orderDetails?.products?.length ? (
          <ul>
            {orderDetails.products.map(product => (
              <CheckoutItem 
                key={product.productID._id}
                title={product.productID.title} 
                price={product.productID.price} 
                quantity={product.quantity} 
              />
            ))}
          </ul>
        ) : (
          <Loader color="bg-gray-600" />
        )}
      </section>
      <form onSubmit={handleSubmit}>
        {/* Payment button */}
        <Button className="w-full mt-6" disabled={processing || disabled || succeeded}>
          {processing 
            ? <Loader/>
            : <>
              <CreditCard className='mr-2 opacity-70' /> 
              <span>Make Payment</span>
            </>
          }
        </Button>
        <Button className="w-full" secondary onClick={onCancel}>Cancel</Button>
      </form>
    </div>
  );
}

function CheckoutItem({ title, price, quantity }) {
  return (
    <li className='flex justify-between'>
      <p>{title}</p>
      <div className='flex justify-between items-center'>
        {quantity > 1 && (
          <span className='inline-flex items-center text-gray-400 mr-5'>
            <X className='' />
            {quantity}
          </span>
        )}
        <span className='text-lg font-light'>${quantity * price}</span>
      </div>
    </li>
  );
}
