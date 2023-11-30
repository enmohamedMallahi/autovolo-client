"use client"

import { useState } from 'react';

const CookieAlert = () => {
  const [accepted, setAccepted] = useState(false);

  const acceptCookies = () => {
    setAccepted(true);
    localStorage.setItem('cookiesAccepted', 'true');
  };

  const shouldShowAlert = !accepted && !localStorage?.getItem('cookiesAccepted');

  return (
    shouldShowAlert && (
      <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 text-center text-sm z-50">
        <p className="text-sm font-semibold">
          🍪 We use cookies to enhance your experience. By using our site, you agree to our{' '}
          <a href="/privacy-policy" className="underline">
            Privacy Policy
          </a>
          .
        </p>
        <button
          onClick={acceptCookies}
          className="mt-3 bg-green-400 hover:bg-green-300 px-6 py-2 rounded-md text-white font-bold"
        >
          Accept
        </button>
      </div>
    )
  );
};

export default CookieAlert;
