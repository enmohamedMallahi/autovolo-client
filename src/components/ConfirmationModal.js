"use client"

import React, { useState } from 'react';
import axios from 'axios';


const ConfirmationModal = ({ carDetails, handleClose, bookingData }) => {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const handleBook = async () => {
    try {
      const orderData = {
        carDetails,
        customer: {
          name: customerName,
          email: customerEmail,
          phone: customerPhone,
        },
      };

      // Make a POST request to the booking endpoint
      const response = await axios.post('https://autovolo-admin.vercel.app/api/orders', orderData);

      // Handle the response as needed (e.g., show a success message)
      console.log('Booking successful:', response.data);

      // Close the modal after successful booking
      handleClose();
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Error booking:', error);

      // Close the modal even if there's an error
      handleClose();
    }

  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Confirm Booking</h2>
        <p>{`You are about to book ${ carDetails.make } ${ carDetails.model } for ${ customerName }.`}</p>
        <label htmlFor="customerName" className="block mt-4">
          Customer Name:
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="border border-gray-300 p-2 w-full"
          />
        </label>
        <label htmlFor="customerEmail" className="block mt-4">
          Customer Email:
          <input
            type="email"
            id="customerEmail"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            className="border border-gray-300 p-2 w-full"
          />
        </label>
        <label htmlFor="customerPhone" className="block mt-4">
          Customer Phone:
          <input
            type="tel"
            id="customerPhone"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            className="border border-gray-300 p-2 w-full"
          />
        </label>
        <div className="flex justify-end mt-4">
          <button onClick={handleClose} className="mr-2 px-4 py-2 border border-gray-300 rounded-md">
            Cancel
          </button>
          <button onClick={handleBook} className="px-4 py-2 bg-black text-white rounded-md">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
