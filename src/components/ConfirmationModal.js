"use client"
import { useState } from 'react';

const ConfirmationModal = ({ carDetails, handleClose, bookingData }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    pickupDate: '',
    dropoffDate: '',
    pickupPlace: '',
    dropoffPlace: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBook = async () => {
    try {
      const orderData = {
        carDetails,
        customer: {
          name: formData.customerName,
          email: formData.customerEmail,
          phone: formData.customerPhone,
        },
        booking: {
          pickupDate: formData.pickupDate,
          dropoffDate: formData.dropoffDate,
          pickupPlace: formData.pickupPlace,
          dropoffPlace: formData.dropoffPlace,
        },
      };

      // Make a POST request to the booking endpoint
      // const response = await axios.post('https://autovolo-admin.vercel.app/api/orders', orderData);

      // Handle the response as needed (e.g., show a success message)
      alert('Votre demande a été envoyée avec succès !')
      console.log('Réservation réussie :', response.data);

      // Close the modal after successful booking
      handleClose();
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error('Erreur de réservation :', error);

      // Close the modal even if there's an error
      handleClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white mx-4 md:mx-8 lg:mx-16 p-8 rounded-md max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Confirmer la réservation</h2>

        {step === 1 && (
          <div className="space-y-4">
            {/* Formulaire d'informations personnelles */}
            <label htmlFor="customerName">
              <span className="text-sm">Nom du client :</span>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full"
              />
            </label>

            <label htmlFor="customerEmail">
              <span className="text-sm">E-mail du client :</span>
              <input
                type="email"
                id="customerEmail"
                name="customerEmail"
                value={formData.customerEmail}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full"
              />
            </label>

            <label htmlFor="customerPhone">
              <span className="text-sm">Téléphone du client :</span>
              <input
                type="tel"
                id="customerPhone"
                name="customerPhone"
                value={formData.customerPhone}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full"
              />
            </label>

            <div className="flex justify-end mt-4">
              <button onClick={handleClose} className="mr-2 px-4 py-2 border border-gray-300 rounded-md">
                Annuler
              </button>
              <button onClick={handleNext} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Suivant
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            {/* Formulaire de dates et de lieux de réservation */}
            <label htmlFor="pickupDate">
              <span className="text-sm">Date de prise en charge :</span>
              <input
                type="date"
                id="pickupDate"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full"
              />
            </label>

            <label htmlFor="dropoffDate">
              <span className="text-sm">Date de restitution :</span>
              <input
                type="date"
                id="dropoffDate"
                name="dropoffDate"
                value={formData.dropoffDate}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full"
              />
            </label>

            <label htmlFor="pickupPlace">
              <span className="text-sm">Lieu de prise en charge :</span>
              <input
                type="text"
                id="pickupPlace"
                name="pickupPlace"
                value={formData.pickupPlace}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full"
              />
            </label>

            <label htmlFor="dropoffPlace">
              <span className="text-sm">Lieu de restitution :</span>
              <input
                type="text"
                id="dropoffPlace"
                name="dropoffPlace"
                value={formData.dropoffPlace}
                onChange={handleChange}
                className="border border-gray-300 p-2 w-full"
              />
            </label>

            <div className="flex justify-end mt-4">
              <button onClick={() => setStep(step - 1)} className="mr-2 px-4 py-2 border border-gray-300 rounded-md">
                Retour


              </button>
              <button onClick={handleBook} className="px-4 py-2 bg-black text-white rounded-md">
                Réserver maintenant
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmationModal;
