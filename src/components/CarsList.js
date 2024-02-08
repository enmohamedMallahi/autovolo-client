import Link from 'next/link';

const BookingForm = () => {
  const availableMakes = [
    {
      name: 'Toyota',
      logo: './images/Toyota.svg',
    },
    { name: 'Honda', logo: './images/Honda.svg' },
    {
      name: 'Renault',
      logo: 'https://seeklogo.com/images/R/renault-logo-18DB8E9AE7-seeklogo.com.png',
    },
    {
      name: 'Peugeot',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsJDIBiGMBWIQ8l9kIIhpaw80cGATc-Gh07wwFjarrA&s',
    },
    {
      name: 'Dacia',
      logo: './images/Dacia.svg',
    },
    {
      name: 'Volkswagen',
      logo: 'https://seeklogo.com/images/V/Volkswagen-logo-80097D61AA-seeklogo.com.png',
    },
  ];

  return (
    <div className="bg-indigo-600 p-8 h-full">
      <h2 className="text-4xl text-white font-bold text-center mb-6">Sélectionnez une marque</h2>

      <div className="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-3 lg:gap-6">
        {availableMakes.map(make => (
          <Link key={make.name} href={`/search?make=${ make?.name }`}>
            <div className="flex h-16 items-center justify-center rounded-lg bg-gray-100 p-4 text-gray-400 sm:h-32 text-lg hover:scale-105 hover:opacity-90 transition duration-150">
              <img className="h-16 grayscale w-auto" src={make?.logo} alt={make.name} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookingForm;
