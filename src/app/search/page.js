"use client"
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import CarsList from '@/components/CarsList';

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
      <h1 className="text-3xl text-center font-bold mb-4">Search Results</h1>
      <ul className="mb-8 flex justify-center gap-4 text-sm">
        {make && <li>Make: {make}</li>}
        {fuel && <li>Fuel Type: {fuel}</li>}
        {transmission && <li>Transmission Type: {transmission}</li>}
      </ul>
    <CarsList cars={searchResults}/>
    </div>
  );
};

export default SearchResults;
