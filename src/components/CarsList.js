const CarsList = ({ cars, openModal, showBookButton }) => {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 md:px-8 px-4">
      {cars.map((car) => (
        <li key={car.id} className="bg-white rounded-md shadow-md flex flex-col items-center">
          <img src={car.images[0]} alt={car.model} className="w-full h-40 object-cover rounded-md" />
          <div className="text-center p-2">
            <p className="text-lg font-bold">{car.make} {car.model}</p>
            <p className="text-sm mb-">{car.pricePerDay} Dhs/Day</p>
          </div>
          {
            showBookButton && (
              <button onClick={() => openModal(car)} className="bg-blue-500 hover:bg-blue-700  text-white w-full p-2 rounded-md transition duration-150">
                Book Now &gt;
              </button>
            )
          }
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
