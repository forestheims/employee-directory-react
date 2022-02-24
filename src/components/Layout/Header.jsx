import React from 'react';
import { Link } from 'react-router-dom';
import githubLogo from '../../assets/GitHub_Logo.png';
import { useAuth } from '../../context/authContext';
import { signOutUser } from '../../services/auth';

export default function Header() {
  const { user } = useAuth();

  return (
    <header>
      <a href="https://github.com/forestheims/employee-directory-react">
        <img src={githubLogo} alt="GitHub Logo" style={{ width: 50 }} />
      </a>
      <Link to="/">Home</Link>
      {user ? (
        <button onCLick={signOutUser}>Logout</button>
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
