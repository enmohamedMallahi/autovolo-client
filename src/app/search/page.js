"use client"
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ConfirmationModal from '@/components/ConfirmationModal';
import CarsList from '@/components/CarsList';


const SearchPage = ({ searchParams }) => {
  const router = useRouter();
  const { carBrand } = searchParams;

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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


  const openModal = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBook = (customerName) => {
    // Implement the booking logic here, e.g., make an API request
    console.log(`Booking ${ selectedCar.model } for ${ customerName }`);
  };


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center font-bold mb-2">Available Cars</h1>


      {/* <h2 className="text-2xl text-center font-bold my-4"></h2> */}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <CarsList showBookButton={true} cars={cars} openModal={openModal} />
      )}



      {(selectedCar && isModalOpen) && (
        <ConfirmationModal
          carDetails={selectedCar}
          handleClose={closeModal}
          handleBook={handleBook}
          bookingData={searchParams}
        />
      )}
    </div>
  );
};

export default SearchPage;
