import CarsList from '@/components/CarsList';
import Hero from '@/components/Hero';
import ContactUs from '@/components/ContactUs'
import MakeSelector from '@/components/MakeSelector';
import cars from '@/data/cars';
import Features from '@/components/Features';
import Stats from '@/components/Stats';


const Home = () => {

  return (
    <>

      <Hero />

      <MakeSelector />


      <h2 className="text-center font-bold text-2xl md:text-3xl my-4">Nos meilleures voitures</h2>
      <CarsList cars={cars} />
      <Features />
      <Stats />

      <ContactUs />

    </>
  );
};

export default Home;
