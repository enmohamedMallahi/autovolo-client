const CarsList = ({cars}) => {
  return (
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
  )
}

export default CarsList