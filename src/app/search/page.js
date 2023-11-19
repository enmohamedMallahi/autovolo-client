"use client"
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const SearchResults = ({ searchParams }) => {
  const router = useRouter();
  const { make, fuel, transmission } = searchParams;
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://autovolo-admin.vercel.app/api/cars?make=${ make }&fuel=${ fuel }&transmission=${ transmission }`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    // Fetch data when query parameters change
    if (make || fuel || transmission) {
      fetchSearchResults();
    }
  }, [make, fuel, transmission]);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Search Results</h1>
      <p className="mb-4">Showing results for:</p>
      <ul className="mb-8">
        {make && <li>Make: {make}</li>}
        {fuel && <li>Fuel Type: {fuel}</li>}
        {transmission && <li>Transmission Type: {transmission}</li>}
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {searchResults.map((car) => (
          <div
            key={car.id}
            className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={car.images[0]}
              alt={`${ car.make } ${ car.model }`}
              className="w-full h-32 object-cover mb-4 rounded-md"
            />
            <p className="text-lg font-semibold mb-2">
              {car.make} - {car.model}
            </p>
            <p className="text-gray-600">{car.description}</p>
            {/* Display other car details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
