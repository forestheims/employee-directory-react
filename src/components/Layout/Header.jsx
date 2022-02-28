import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { useProfile } from '../../context/profilesContext';
import { signOutUser } from '../../services/auth';

export default function Header() {
  const { user, setUser } = useAuth();
  const { setProfile } = useProfile();

  const handleLogout = async () => {
    await signOutUser();
    setUser({ email: '', id: '' });
    setProfile({ email: '', name: '', bio: '', birthday: '' });
  };

  return (
    <header>
      <Link to="/">Home</Link>
      {user.email ? (
        <>
          <Link to="/profile">Profile</Link>
          <Link to="/profile/add">Add Profile</Link>
          <Link to="/profile/edit">Edit Profile</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Sign In</Link>
          <Link to="/register">Register</Link>
        </>
      )}
      <h3>
        {user.email
          ? `${user.email} is Signed In`
          : 'Welcome. Sign in to access the directory.'}
      </h3>
    </header>
  );
}
