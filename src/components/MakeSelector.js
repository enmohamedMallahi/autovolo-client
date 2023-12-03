import Link from 'next/link'

const BookingForm = () => {

  const availableMakes = ['Toyota', 'Honda', 'Renault', 'Peugeot', 'Dacia', 'Volkswagen'];

  return (
    <div className="bg-yellow-400 p-8 h">
      <h2 className="text-4xl text-white font-bold text-center mb-6">Select a brand</h2>

      <div class="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-3 lg:gap-6">

        {availableMakes.map(make => (
          <Link href={`/search?make=${ make }`}>
            <div class="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32">
              <span>{make}</span>
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default BookingForm;
