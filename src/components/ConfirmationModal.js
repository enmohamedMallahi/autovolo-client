"use client"
import { useState } from 'react';
import axios from 'axios';

const ConfirmationModal = ({ carDetails, handleClose, bookingData }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    pickupDate: '',
    dropoffDate: '',
    pickupPlace: '',
    dropoffPlace: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBook = async () => {
    try {
      const orderData = {
        carDetails,
        customer: {
          name: formData.customerName,
          email: formData.customerEmail,
          phone: formData.customerPhone,
        },
        booking: {
          pickupDate: formData.pickupDate,
          dropoffDate: formData.dropoffDate,
          pickupPlace: formData.pickupPlace,
          dropoffPlace: formData.dropoffPlace,
        },
      };

      // Make a POST request to the booking endpoint
      // const response = await axios.post('https://autovolo-admin.vercel.app/api/orders', orderData);

      // Handle the response as needed (e.g., show a success message)
      alert('Your request was sent successfully!')
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white mx-4 p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Confirm Booking</h2>
        <p>{`You are about to book ${ carDetails.make } ${ carDetails.model }`}</p>

        {/* Customer Information */}
        <label htmlFor="customerName" className="block ">
          Customer Name:
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full"
          />
        </label>

        <div className="flex gap-4 mb-4">

          <label htmlFor="customerEmail" className="block mt-4">
            Customer Email:
            <input
              type="email"
              id="customerEmail"
              name="customerEmail"
              value={formData.customerEmail}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            />
          </label>

          <label htmlFor="customerPhone" className="block mt-4">
            Customer Phone:
            <input
              type="tel"
              id="customerPhone"
              name="customerPhone"
              value={formData.customerPhone}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            />
          </label>

        </div>

        {/* Booking Information */}
        <div className="flex gap-4 mb-4">
          <label htmlFor="pickupDate" className="block w-full ">
            Pickup Date:
            <input
              type="date"
              id="pickupDate"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            />
          </label>
          <label htmlFor="dropoffDate" className="block w-full ">
            Dropoff Date:
            <input
              type="date"
              id="dropoffDate"
              name="dropoffDate"
              value={formData.dropoffDate}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            />
          </label>
        </div>

        <div className="flex  gap-4 mb-4">
          <label htmlFor="pickupPlace" className="block w-full ">
            Pickup Place:
            <input
              type="text"
              id="pickupPlace"
              name="pickupPlace"
              value={formData.pickupPlace}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            />
          </label>
          <label htmlFor="dropoffPlace" className="block w-full ">
            Dropoff Place:
            <input
              type="text"
              id="dropoffPlace"
              name="dropoffPlace"
              value={formData.dropoffPlace}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full"
            />
          </label>
        </div>

        {/* Buttons */}
        <div className="flex  justify-center gap-2 ">
          <button onClick={handleClose} className="w-full px-4 py-2 border border-gray-300 rounded-md">
            Cancel
          </button>
          <button onClick={handleBook} className="w-full px-4 py-2 bg-black text-white rounded-md">
            Book Now
          </button>
        </div>
      </div>
    </div >
  );
};

export default ConfirmationModal;
