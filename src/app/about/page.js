const About = () => {
  return (
    <div className="px-4 py-4 md:px-16 w-full">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">À propos de notre agence de location de voitures</h1>

      <p className="text-gray-700 mb-4">
        Bienvenue dans notre monde d'innovation et de satisfaction client chez [Nom de votre agence de location de voitures]. Nous nous engageons
        à fournir des services de location de voitures exceptionnels adaptés à vos besoins. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </p>

      <h2 className="text-xl md:text-2xl font-bold mb-4 text-indigo-700">Notre histoire</h2>

      <p className="text-gray-700 mb-4">
        [Nom de votre agence de location de voitures] a été fondée en [Année] avec pour vision de révolutionner l'industrie de la location de voitures.
        Depuis lors, nous nous sommes engagés à fournir des solutions de pointe et à établir des relations durables avec nos clients.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <h2 className="text-xl md:text-2xl font-bold mb-4 text-indigo-700">Notre mission</h2>

      <p className="text-gray-700 mb-4">
        Notre mission est de fournir des services de location de voitures abordables et fiables tout en priorisant la satisfaction client.
        Nous nous engageons à fournir des véhicules de haute qualité et un excellent service client. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </p>

      <h2 className="text-xl md:text-2xl font-bold mb-4 text-indigo-700">Valeurs fondamentales</h2>

      <ul className="list-disc pl-8 text-gray-700 mb-4">
        <li>Satisfaction client</li>
        <li>Fiabilité</li>
        <li>Intégrité</li>
        <li>Amélioration continue</li>
      </ul>

      <h2 className="text-xl md:text-2xl font-bold mb-4 text-indigo-700">Rencontrez notre équipe</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-indigo-100 p-4 rounded-md shadow-md">
          <img
            src="https://placekitten.com/150/150"
            alt="Membre de l'équipe"
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />
          <p className="text-lg font-bold mb-2">John Doe</p>
          <p className="text-sm text-gray-700">Co-fondateur et PDG</p>
        </div>
        <div className="bg-indigo-100 p-4 rounded-md shadow-md">
          <img
            src="https://placekitten.com/150/151"
            alt="Membre de l'équipe"
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />
          <p className="text-lg font-bold mb-2">Jane Doe</p>
          <p className="text-sm text-gray-700">Directeur des ventes</p>
        </div>
        {/* Ajoutez d'autres cartes de membres de l'équipe si nécessaire */}
      </div>
    </div>
  );
};

export default About;