"use client";

import { useState } from 'react';

const CookieAlert = () => {
  const [accepted, setAccepted] = useState(false);

  const acceptCookies = () => {
    setAccepted(true);
    // if (window) {
    //   window?.localStorage?.setItem('cookiesAccepted', 'true');
    // }
  };

  let shouldShowAlert = !accepted;

  // if (window) {
  //   shouldShowAlert = !accepted && !window?.localStorage?.getItem('cookiesAccepted');
  // }

  return (
    shouldShowAlert && (
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 text-center text-sm z-50">
        <p className="text-sm font-semibold">
          🍪 Nous utilisons des cookies pour améliorer votre expérience. En utilisant notre site, vous acceptez notre{' '}
          <a href="/privacy-policy" className="underline">
            Politique de confidentialité
          </a>
          .
        </p>
        <button
          onClick={acceptCookies}
          className="mt-3 bg-green-400 hover:bg-green-300 px-6 py-2 rounded-md text-white font-bold"
        >
          Accepter
        </button>
      </div>
    )
  );
};

export default CookieAlert;
