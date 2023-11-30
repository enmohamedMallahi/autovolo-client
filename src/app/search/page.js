"use client"
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';

const SearchPage = ({ searchParams }) => {
  const router = useRouter();
  const { carBrand, pickupDate, dropoffDate, pickupPlace, dropoffPlace } = searchParams;

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(`https://autovolo-admin.vercel.app/api/cars?make=${ carBrand }`);
        setCars(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cars:', error);
        setLoading(false);
      }
    };

    fetchCars();
  }, [carBrand]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center font-bold mb-2">Search Results</h1>
      {/* <p>
        Car Brand: {carBrand}<br />
        Pickup Date: {pickupDate}<br />
        Dropoff Date: {dropoffDate}<br />
        Pickup Place: {pickupPlace}<br />
        Dropoff Place: {dropoffPlace}<br />
      </p> */}

      <h2 className="text-2xl text-center font-bold my-4">Available Cars</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cars.map((car) => (
            <li key={car.id} className="bg-white p-4 rounded-md shadow-md">
              <img src={car.images[0]} alt={car.model} className="w-full h-40 object-cover mb-2 rounded-md" />
              <p className="text-lg font-bold">{car.model}</p>
              <p>{car.year}</p>
              <p>{car.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchPage;
