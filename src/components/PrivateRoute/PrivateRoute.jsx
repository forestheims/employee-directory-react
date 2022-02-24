import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

export default function PrivateRoute({ children, ...routeProps }) {
  const { user } = useAuth();

  return (
    <Route
      {...routeProps}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect to={{ pathname: '/register', state: { from: location } }} />
        )
      }
    />
  );
}
