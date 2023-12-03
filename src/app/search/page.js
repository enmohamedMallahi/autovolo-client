"use client"
import cars from '@/data/cars';
import CarsList from '@/components/CarsList';



const SearchPage = ({ searchParams }) => {
  const { make } = searchParams;
  const filteredCars = cars.filter(car => car.make == make);


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center font-bold mb-2">Available Cars</h1>


      {/* <h2 className="text-2xl text-center font-bold my-4"></h2> */}


      <CarsList cars={filteredCars} />

    </div>
  );
};

export default SearchPage;
