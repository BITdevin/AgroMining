
import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-text-main/90 dark:bg-black/90 backdrop-blur-sm text-white p-4 z-50 animate-fade-in-up">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
        </p>
        <button
          onClick={handleAccept}
          className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors whitespace-nowrap"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
