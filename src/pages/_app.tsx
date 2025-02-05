import React, { useEffect } from 'react';
import { AppProps } from 'next/app';

import '@styles/globals.css';
import '@styles/reset.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}

export default App;
