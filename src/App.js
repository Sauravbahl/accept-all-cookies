
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import CookieConsent from './cookieConsent';

const App = () => {
  return (
    <CookiesProvider>
      <div className="App">
        <CookieConsent />
        {/* rest of your app */}
      </div>
    </CookiesProvider>
  );
};

export default App;
