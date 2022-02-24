import React from 'react';
import { Link } from 'react-router-dom';
import ACMELogo from '../../assets/ACME_Logo.jpg';
import { useAuth } from '../../context/authContext';

export default function Header() {
  const { user, handleLogOut } = useAuth();

  return (
    <header>
      <a href="https://villains.fandom.com/wiki/ACME">
        <img src={ACMELogo} alt="GitHub Logo" style={{ width: 100 }} />
      </a>
      <Link to="/">Home</Link>
      {user ? (
        <button onClick={handleLogOut}>Logout</button>
      ) : (
        <Link to="/login">Sign In</Link>
      )}
      <h3>
        {user
          ? `${user} is Signed In`
          : 'Welcome. Sign in to access the directory.'}
      </h3>
    </header>
  );
}
