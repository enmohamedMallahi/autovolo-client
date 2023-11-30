// components/ContactSection.js

const ContactSection = () => {
  return (
    <section
      className="bg-cover bg-center relative text-center"
      style={{ backgroundImage: "url('https://macyscars.ma/wp-content/uploads/2016/08/footer.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 absolute inset-0"></div>
      <div className="container mx-auto relative z-10 py-16">
        <h2 className="text-4xl font-bold text-white mb-8">CONTACTEZ NOUS</h2>
        <p className="text-white text-lg mb-4">
          Vous avez des questions ou avez besoin d'informations complémentaires.
        </p>
        <p className="text-white mb-4">Address: 17 RDC Rue 158 Hay INARA, Casablanca, Morocco</p>
        <strong className="text-yellow-400 text-2xl">+212661356061</strong>
        {/* Add your contact form or additional information here */}
      </div>
    </section>
  );
};

export default ContactSection;