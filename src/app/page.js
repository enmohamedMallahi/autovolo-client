import CarsList from '@/components/CarsList';
import Hero from '@/components/Hero';
import ContactUs from '@/components/ContactUs'
import MakeSelector from '@/components/MakeSelector';
import cars from '@/data/cars';


const Home = () => {

  return (
    <div className="">

      <Hero />

      <MakeSelector />



      <h2 className="text-center font-bold text-2xl md:text-3xl my-4">Our Best Cars</h2>
      <CarsList cars={cars} />

      <ContactUs />

    </div>
  );
};

export default Home;
