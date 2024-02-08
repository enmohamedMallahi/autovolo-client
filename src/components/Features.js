const Features = () => {
  return (
    <div className="mx-auto max-w-screen-2xl py-8 px-4 md:px-8 lg:px-16">
      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Pourquoi nous choisir ?</h2>
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          Découvrez les fonctionnalités qui nous distinguent et rendent votre expérience de location de voiture exceptionnelle.
        </p>
      </div>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:gap-16">
        {/* Fonctionnalité 1 : Parc automobile diversifié */}
        <div className="flex flex-col items-center">
          <div className="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">Parc automobile diversifié</h3>
          <p className="mb-2 text-center text-gray-500">
            Choisissez parmi une large gamme de véhicules, y compris des berlines, des VUS, et plus encore, pour répondre à vos besoins spécifiques.
          </p>
        </div>

        {/* Fonctionnalité 2 : Réservation sécurisée */}
        <div className="flex flex-col items-center">
          <div className="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">Réservation sécurisée</h3>
          <p className="mb-2 text-center text-gray-500">
            Vos réservations sont sûres et sécurisées avec notre système de réservation en ligne de confiance.
          </p>
        </div>

        {/* Fonctionnalité 3 : Options flexibles */}
        <div className="flex flex-col items-center">
          <div className="mb-2 flex h-12 w-12 items-center justify-center text-indigo-500 sm:mb-4 md:h-14 md:w-14">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">Options flexibles</h3>
          <p className="mb-2 text-center text-gray-500">
            Profitez de durées de location flexibles et d'options supplémentaires pour personnaliser votre expérience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
