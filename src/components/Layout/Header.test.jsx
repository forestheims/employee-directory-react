import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { AuthProvider } from '../../context/authContext';
import { ProfileProvider } from '../../context/profilesContext';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', async () => {
  const container = render(
    <AuthProvider>
      <ProfileProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </ProfileProvider>
    </AuthProvider>
  );

  expect(container).toMatchSnapshot();
});
