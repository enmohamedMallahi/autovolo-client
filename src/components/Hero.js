// components/HeroSection.js

const HeroSection = () => {
  return (
    <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48 mb-4 mx-4 md:px-8 lg:px-16">
      {/* Background Image */}
      <img
        src="https://preview.redd.it/0uermbt9q8b61.jpg?width=640&crop=smart&auto=webp&s=c7536f51a1fd27ceadc78e805a2981fc68598740"
        loading="lazy"
        alt="Photo by Fakurian Design"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>

      {/* Hero Text */}
      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">{"Explorez l'expérience de conduite ultime"}</p>
        <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">Trouvez la voiture parfaite avec nous</h1>


        {/* Call-to-Action Buttons */}
        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <a href="#booking" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Louer maintenant</a>
          {/* <a href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</a> */}
        </div>
      </div>
    </section>

  );
};

export default HeroSection;
