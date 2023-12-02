
const About = () => {
  return (

    <div className="px-4 py-4 md:px-16 w-full">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">About Us</h1>

      <p className="text-gray-700 mb-4">
        Welcome to our world of innovation and customer satisfaction. At [Your Company Name], we strive to provide
        exceptional services tailored to your needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <h2 className="text-xl md:text-2xl font-bold mb-4 text-indigo-700">Our Story</h2>

      <p className="text-gray-700 mb-4">
        [Your Company Name] was founded in [Year] with a vision to revolutionize [Your Industry]. Since then, we
        have been dedicated to delivering cutting-edge solutions and building lasting relationships with our clients.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <h2 className="text-xl md:text-2xl font-bold mb-4 text-indigo-700">Our Mission</h2>

      <p className="text-gray-700 mb-4">
        Our mission is to [Mission Statement]. We are committed to [Core Values] and constantly innovating to meet
        the evolving needs of our clients. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <h2 className="text-xl md:text-2xl font-bold mb-4 text-indigo-700">Core Values</h2>

      <ul className="list-disc pl-8 text-gray-700 mb-4">
        <li>Customer First</li>
        <li>Innovation</li>
        <li>Integrity</li>
        <li>Teamwork</li>
      </ul>

      <h2 className="text-xl md:text-2xl font-bold mb-4 text-indigo-700">Meet Our Team</h2>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-indigo-100 p-4 rounded-md shadow-md">
          <img
            src="https://placekitten.com/150/150"
            alt="Team Member"
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />
          <p className="text-lg font-bold mb-2">John Doe</p>
          <p className="text-sm text-gray-700">Co-Founder & CEO</p>
        </div>
        <div className="bg-indigo-100 p-4 rounded-md shadow-md">
          <img
            src="https://placekitten.com/150/151"
            alt="Team Member"
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />
          <p className="text-lg font-bold mb-2">Jane Doe</p>
          <p className="text-sm text-gray-700">Sales Manager</p>
        </div>

        {/* Add more team member cards as needed */}
      </div>
    </div>

  );
};

export default About;
