"use client"
import { useState } from 'react';
import cars from '@/data/cars';
import ConfirmationModal from '@/components/ConfirmationModal';

const CarPage = ({ params }) => {
  const { carId } = params;
  const selectedCar = cars.find((car) => car.id === carId);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBook = (customerName) => {
    // Implement the booking logic here, e.g., make an API request
    console.log(`Booking ${ selectedCar.make } ${ selectedCar.model } for ${ customerName }`);
    closeModal();
  };

  return (
    <div className="px-4 md:px-8 lg:px-16">
      {selectedCar ? (
        <div className="relative">
          <div className="bg-gray-300 rounded-md p-2 mb-4">
            <img
              src={selectedCar.images[0]}
              alt={`${ selectedCar.make } ${ selectedCar.model } `}
              className="mx-auto max-w-[60vw] md:max-w-[40vw] object-cover"
            />
            <h1 className="text-3xl text-center font-bold">{selectedCar.make} {selectedCar.model}</h1>
          </div>
          <div className="text-center">
            {/* Price tag */}
            <p className="absolute top-0 mb-4 p-2 rounded-md bg-green-500 text-white text-lg">
              Price per Day: {selectedCar.pricePerDay} Dhs
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5 lg:gap-8 text-sm mb-4">
              {/* Passengers */}
              <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 lg:p-8">
                <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                  {selectedCar.passengers}
                </div>
                <div className="text-sm font-semibold sm:text-base">Passengers</div>
              </div>

              {/* Doors */}
              <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 lg:p-8">
                <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                  {selectedCar.doors}
                </div>
                <div className="text-sm font-semibold sm:text-base">Doors</div>
              </div>

              {/* Bags */}
              <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 lg:p-8">
                <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                  {selectedCar.bags}
                </div>
                <div className="text-sm font-semibold sm:text-base">Bags</div>
              </div>

              {/* Fuel */}
              <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 lg:p-8">
                <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                  {selectedCar.fuel}
                </div>
                <div className="text-sm font-semibold sm:text-base">Fuel</div>
              </div>

              {/* Transmission */}
              <div className="flex col-span-2 md:col-span-1 flex-col items-center justify-center rounded-lg bg-gray-100 p-4 lg:p-8">
                <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                  {selectedCar.transmission}
                </div>
                <div className="text-sm font-semibold sm:text-base">Transmission</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 fixed bottom-0 right-0 left-0 md:static md:bg-white flex w-full gap-4 justify-center mt-4 p-4">
            <button
              onClick={openModal}
              className="bg-green-500 text-white w-full px-6 py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:border-green-300"
            >
              Book Now
            </button>
            <button
              className="border opacity-80 border-blue-500 text-blue-500 w-full px-6 py-3 rounded-md hover:opacity-100 focus:outline-none focus:ring focus:border-blue-300"
            >
              Contact
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      {selectedCar && isModalOpen && (
        <ConfirmationModal
          carDetails={selectedCar}
          handleClose={closeModal}
          handleBook={handleBook}
        />
      )}
    </div>
  );
};

export default CarPage;
