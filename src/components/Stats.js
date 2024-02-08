const Stats = () => {
  return (
    <section className="mx-auto max-w-screen-xl py-8 px-4 md:px-8 lg:px-16">
      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Découvrez nos réalisations</h2>
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          En savoir plus sur nos succès et sur la manière dont nous avons fait la différence dans l'industrie de la location de voitures.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">
        {/* Statistique 1: Véhicules disponibles */}
        <div className="flex flex-col items-center md:p-4">
          <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">100+</div>
          <div className="text-sm font-semibold sm:text-base">Véhicules disponibles</div>
        </div>

        {/* Statistique 2: Clients satisfaits */}
        <div className="flex flex-col items-center md:p-4">
          <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">500+</div>
          <div className="text-sm font-semibold sm:text-base">Clients satisfaits</div>
        </div>

        {/* Statistique 3: Années de service */}
        <div className="flex flex-col items-center md:p-4">
          <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">10+</div>
          <div className="text-sm font-semibold sm:text-base">Années de service</div>
        </div>

        {/* Statistique 4: Service de qualité */}
        <div className="flex flex-col items-center md:p-4">
          <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">Primé</div>
          <div className="text-sm font-semibold sm:text-base">Service de qualité</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;