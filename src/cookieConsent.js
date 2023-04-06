import React from 'react';
import { useCookies } from 'react-cookie';

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(['acceptAll']);

  const acceptAllCookies = () => {
    setCookie('acceptAll', true, { path: '/' });
  };

  // check for JWT cookie
  const jwt = cookies.jwt;
  if (!jwt) {
    // if JWT cookie is not present, display cookie consent message
    if (!cookies.acceptAll) {
      return (
        <div className="cookie-consent">
          <p>
            We use cookies to enhance your experience on our website. By continuing to use our website, you consent to the use of cookies.
          </p>
          <button onClick={acceptAllCookies}>Accept All Cookies</button>
        </div>
      );
    } else {
      return null;
    }
  } else {
    // if JWT cookie is present, do not display cookie consent message
    return null;
  }
};

export default CookieConsent;
