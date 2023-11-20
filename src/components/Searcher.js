'use client'
// components/Search.js
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Search = () => {
  const router = useRouter();
  const [filters, setFilters] = useState({
    make: '',
    fuelType: '',
    transmissionType: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSearch = () => {
    router.push(`/search?make=${ filters.make }&fuel=${ filters.fuelType }&transmission=${ filters.transmissionType }`);
  };

  const makes = ['Dacia', 'Ford', 'Mercedes', 'Renault'];
  const fuelTypes = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];
  const transmissionTypes = ['automatic', 'manual'];

  return (
    <div className=" h-full bg-gradient-to-r from-blue-500 to-indigo-500 p-8 shadow-md rounded-md">
      <h2 className="text-center text-2xl font-bold text-white mb-4">Discover Your Dream Car</h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
      <div className="grid grid-cols-1  gap-4">
        <div className="mb-2">
          <label className="block sr-only ">Make:</label>
          <select
            name="make"
            value={filters.make}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md bg-white text-gray-800"
          >
            <option value="">Select Make</option>
            {makes.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-2">
          <label className="block sr-only ">Fuel Type:</label>
          <select
            name="fuelType"
            value={filters.fuelType}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md bg-white text-gray-800"
          >
            <option value="">Select Fuel</option>
            {fuelTypes.map((fuelType) => (
              <option key={fuelType} value={fuelType}>
                {fuelType}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-2">
          <label className="block sr-only ">Transmission Type:</label>
          <select
            name="transmissionType"
            value={filters.transmissionType}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md bg-white text-gray-800"
          >
            <option value="">Select Transmission</option>
            {transmissionTypes.map((transmissionType) => (
              <option key={transmissionType} value={transmissionType}>
                {transmissionType}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        onClick={handleSearch}
        className="mt-4 w-full bg-white text-indigo-500 px-6 py-3 rounded-md hover:bg-gray-100 transition duration-200"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
