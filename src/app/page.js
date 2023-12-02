import CarsList from '@/components/CarsList';
import Hero from '@/components/Hero';
import ContactUs from '@/components/ContactUs'
import BookingForm from '@/components/BookingForm';

const Home = () => {
  const cars = [
    {
      id: '1',
      make: 'Toyota',
      model: 'Camry',
      pricePerDay: 220,
      passengers: 5,
      doors: 5,
      bags: 3,
      fuel: 'Diesel',
      transmission: 'Manual',
      images: ['https://www.1servicecar.com/img/cars/thumb-Kia-Picanto.webp'],
    },
    {
      id: '2',
      make: 'Honda',
      model: 'Civic',
      pricePerDay: 250,
      passengers: 6,
      doors: 5,
      bags: 6,
      fuel: 'Diesel',
      transmission: 'Automatic',
      images: ['https://www.1servicecar.com/img/cars/thumb-Fiat-Panda.webp'],
    },
    {
      id: '5',
      make: 'BMW',
      model: 'X5',
      pricePerDay: 450,
      passengers: 5,
      doors: 5,
      bags: 4,
      fuel: 'Diesel',
      transmission: 'Automatic',
      images: ['https://www.1servicecar.com/img/cars/thumb-BMW-X5.webp'],
    },
    {
      id: '7',
      make: 'Renault',
      model: 'Clio 4',
      pricePerDay: 180,
      passengers: 5,
      doors: 5,
      bags: 2,
      fuel: 'Petrol',
      transmission: 'Manual',
      images: ['https://www.1servicecar.com/img/cars/thumb-Renault-Clio.webp'],
    },
    {
      id: '8',
      make: 'Peugeot',
      model: '208',
      pricePerDay: 190,
      passengers: 5,
      doors: 5,
      bags: 3,
      fuel: 'Petrol',
      transmission: 'Manual',
      images: ['https://www.1servicecar.com/img/cars/thumb-Peugeot-208.webp'],
    },
    {
      id: '9',
      make: 'Dacia',
      model: 'Dokker',
      pricePerDay: 160,
      passengers: 7,
      doors: 5,
      bags: 4,
      fuel: 'Diesel',
      transmission: 'Manual',
      images: ['https://www.1servicecar.com/img/cars/thumb-Dacia-Dokker.webp'],
    },
    {
      id: '10',
      make: 'Volkswagen',
      model: 'Touareg',
      pricePerDay: 400,
      passengers: 5,
      doors: 4,
      bags: 5,
      fuel: 'Diesel',
      transmission: 'Automatic',
      images: ['https://www.1servicecar.com/img/cars/thumb-WV-Touareg.webp'],
    },
  ];

  return (
    <div className="">

      <Hero />

      <BookingForm />



      <h2 className="text-center font-bold text-2xl md:text-3xl my-4">Our Best Cars</h2>
      <CarsList showBookButton={false} cars={cars} />

      <ContactUs />

    </div>
  );
};

export default Home;
