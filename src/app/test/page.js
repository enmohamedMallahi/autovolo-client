"use client"
import { useState, useEffect } from 'react';
import Search from '@/components/Searcher';
import Hero from '@/components/Hero';

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Dummy data for testing
    const dummyCars = [
      {
        id: '1',
        make: 'Toyota',
        model: 'Camry',
        pricePerDay: 220,
        passengers: 5,
        doors: 5,
        bags: 3,
        fuel: 'Diesel',
        transmission: 'Manual',
        images: ['https://www.1servicecar.com/img/cars/thumb-Kia-Picanto.webp'],
      },
      {
        id: '2',
        make: 'Honda',
        model: 'Civic',
        pricePerDay: 250,
        passengers: 6,
        doors: 5,
        bags: 6,
        fuel: 'Diesel',
        transmission: 'Automatic',
        images: ['https://www.1servicecar.com/img/cars/thumb-Fiat-Panda.webp'],
      },
      {
        id: '5',
        make: 'BMW',
        model: 'X5',
        pricePerDay: 450,
        passengers: 5,
        doors: 5,
        bags: 4,
        fuel: 'Diesel',
        transmission: 'Automatic',
        images: ['https://www.1servicecar.com/img/cars/thumb-BMW-X5.webp'],
      },
      {
        id: '7',
        make: 'Renault',
        model: 'Clio 4',
        pricePerDay: 180,
        passengers: 5,
        doors: 5,
        bags: 2,
        fuel: 'Petrol',
        transmission: 'Manual',
        images: ['https://www.1servicecar.com/img/cars/thumb-Renault-Clio.webp'],
      },
      {
        id: '8',
        make: 'Peugeot',
        model: '208',
        pricePerDay: 190,
        passengers: 5,
        doors: 5,
        bags: 3,
        fuel: 'Petrol',
        transmission: 'Manual',
        images: ['https://www.1servicecar.com/img/cars/thumb-Peugeot-208.webp'],
      },
      {
        id: '9',
        make: 'Dacia',
        model: 'Dokker',
        pricePerDay: 160,
        passengers: 7,
        doors: 5,
        bags: 4,
        fuel: 'Diesel',
        transmission: 'Manual',
        images: ['https://www.1servicecar.com/img/cars/thumb-Dacia-Dokker.webp'],
      },
      {
        id: '10',
        make: 'Volkswagen',
        model: 'Touareg',
        pricePerDay: 400,
        passengers: 5,
        doors: 4,
        bags: 5,
        fuel: 'Diesel',
        transmission: 'Automatic',
        images: ['https://www.1servicecar.com/img/cars/thumb-WV-Touareg.webp'],
      },
    ];

    setCars(dummyCars);
  }, []);

  return (
    <div className="">

      {/* <Hero /> */}

      <section className="flex flex-col-reverse md:flex-row gap-4">
        <div class="md:w-5/12">
          <Search />
        </div>
        <div class=" overflow-hidden rounded-lg bg-gray-100 shadow-lg md:w-7/12 h-auto">
          <img src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Fakurian Design" class="h-full w-full object-cover object-center" />
        </div>
      </section>

      <section className="grid grid-cols-2  md:grid-cols-3  gap-6 mt-8">
        {cars.map((car) => (
          <div key={car.id}>

            <div
              className="relative overflow-hidden bg-white p-2 md:p-4 rounded-md shadow-md transition duration-300 transform hover:scale-105"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src={car.images[0]}
                  alt={`${ car.make } ${ car.model }`}
                  className="object-cover w-full h-auto rounded-md"
                />
              </div>
              <div className="absolute p-4 inset-0 bg-black text-white bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center  gap-4">

                <span className="bg-gray-500 text-xs rounded-md p-2">{car.pricePerDay} dhs/ day</span>
                <div className="hidden md:flex flex-row gap-2 text-xs text-center">
                  <span className="border rounded-md p-2">{car.passengers} Places</span>
                  <span className="border rounded-md p-2">{car.doors} Doors</span>
                  <span className="border rounded-md p-2">{car.bags} Bags</span>
                </div>
                {/* <div className="flex flex-col gap-2">
                  <span>{car.priceP} Passengers</span>
                  <span>{car.doors} Doors</span>
                  <span>{car.bags} Bags</span>
                </div> */}

                {/* Fuel: {car.fuel}, Transmission: {car.transmission} */}

              </div>
            </div>
            <h2 className="text-black text-lg md:text-xl font-semibold my-4 text-center">
              {car.make} - {car.model}
            </h2>
          </div>
        ))}
      </section>

    </div>
  );
};

export default Home;
