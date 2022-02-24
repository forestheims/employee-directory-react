import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { AuthProvider } from './context/authContext';
import { ProfileProvider } from './context/profilesContext';

render(
  <React.StrictMode>
    <AuthProvider>
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
