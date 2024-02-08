// components/CarsList.js
import Link from 'next/link';

const CarsList = ({ cars }) => {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 md:px-8 px-4">
      {cars.map((car) => (
        <li key={car.id} className="bg-white rounded-md shadow-md flex flex-col items-center">
          <Link href={`/car/${ car.id }`}>

            <img
              src={car.images[0]}
              alt={car.model}
              className="w-full h-28 md:h-32 lg:h-40 object-cover rounded-md"
            />

          </Link>
          <div className="text-center p-2">
            <p className="text-lg font-bold">
              <Link href={`/car/${ car.id }`}>
                {car.make} {car.model}
              </Link>
            </p>
            <p className="text-sm mb-">{car.pricePerDay} Dhs/Jours</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
