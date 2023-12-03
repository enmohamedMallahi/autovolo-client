// components/HeroSection.js

const HeroSection = () => {
  return (
    <section className="border py-8 md:h-[50vh] flex flex-col md:flex-row items-center justify-center gap-8">
      <div className=" text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">MODÈLES DE VÉHICULES</h1>
        <p className="text-lg md:text-xl mb-8">RÉSERVEZ MAINTENANT ET OBTENEZ LA MEILLEURE OFFRE</p>
        <a
          href="#booking"
          className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300 text-lg md:text-md animate-bounce"
        >
          Book Now
        </a>
      </div>
      <img src="./images/main-car.png" alt="Autovolo Car Rental" className="md:w-[50%] w-[80%]" />
    </section>
  );
};

export default HeroSection;
