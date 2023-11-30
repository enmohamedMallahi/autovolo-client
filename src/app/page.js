"use client"
import { useState, useEffect } from 'react';
import Search from '@/components/Searcher';
import CarsList from '@/components/CarsList';
import Hero from '@/components/Hero';
import ContactSection from '@/components/ContactSection';
import BookingForm from '@/components/BookingForm';

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

      <Hero />

      <BookingForm />

      {/* <section className="flex flex-col-reverse md:flex-row gap-4">
        <div class="md:w-5/12">
          <Search />
        </div>
        <div class=" overflow-hidden rounded-lg bg-gray-100 shadow-lg md:w-7/12 h-auto">
          <img
            src="https://macyscars.ma/wp-content/uploads/2021/04/2020-range-roverpreview.png"
            loading="lazy"
            alt="Photo by Fakurian Design"
            class="h-full w-full object-cover object-center" />
        </div>
      </section> */}

      <CarsList cars={cars} />

      <ContactSection />

    </div>
  );
};

export default Home;
