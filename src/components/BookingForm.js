"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const BookingForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    carBrand: '',
    pickupDate: '',
    dropoffDate: '',
    pickupPlace: '',
    dropoffPlace: '',
  });

  const availableMakes = ['Dacia', 'Ford', 'Mercedes', 'Renault'];
  const availablePickupPlaces = ['Location A', 'Location B', 'Location C'];
  const availableDropoffPlaces = ['Location X', 'Location Y', 'Location Z'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    const query = Object.keys(formData)
      .filter((key) => formData[key]) // Filter out empty values
      .map((key) => `${ key }=${ encodeURIComponent(formData[key]) }`)
      .join('&');

    router.push(`/search?${ query }`);

  };

  return (
    <form onSubmit={handleSubmit} className=" bg-yellow-400 p-8 h">
      <h2 className="text-4xl text-white font-bold text-center mb-6 ">Book Your Car</h2>

      <div className="mb-4">
        <select
          type="text"
          id="carBrand"
          name="carBrand"
          placeholder="Car Brand"
          value={formData.carBrand}
          onChange={handleChange}
          required
          className="text-center font-bold mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="" >
            Select Car Make
          </option>
          {availableMakes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-4 mb-4">
        <div className="w-full">
          <label htmlFor="pickupDate" className="block text-sm font-medium text-white">
            Pickup Date
          </label>
          <input
            type="date"
            id="pickupDate"
            name="pickupDate"
            placeholder="HHh"
            value={formData.pickupDate}
            onChange={handleChange}
            required
            className="  mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="w-full">
          <label htmlFor="dropoffDate" className="block text-sm font-medium text-white">
            Dropoff Date
          </label>
          <input
            type="date"
            id="dropoffDate"
            name="dropoffDate"
            value={formData.dropoffDate}
            onChange={handleChange}
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

      </div>


      <div className="flex gap-4 mb-4">
        <div className="w-full">
          <label htmlFor="pickupPlace" className="block text-sm font-medium text-white">
            Pickup Place
          </label>
          <select
            id="pickupPlace"
            name="pickupPlace"
            value={formData.pickupPlace}
            onChange={handleChange}
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="" disabled>
              Select Pickup Place
            </option>
            {availablePickupPlaces.map((place, index) => (
              <option key={index} value={place}>
                {place}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full">
          <label htmlFor="dropoffPlace" className="block text-sm font-medium text-white">
            Dropoff Place
          </label>
          <select
            id="dropoffPlace"
            name="dropoffPlace"
            value={formData.dropoffPlace}
            onChange={handleChange}
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="" disabled>
              Select Dropoff Place
            </option>
            {availableDropoffPlaces.map((place, index) => (
              <option key={index} value={place}>
                {place}
              </option>
            ))}
          </select>
        </div>

      </div>

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="w-full bg-black text-white px-6 py-3 rounded-md hover:opacity-90 focus:outline-none focus:ring focus:border-blue-300"
        >
          Book Now
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
