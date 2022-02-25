import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { signInUser, signUpUser } from '../../services/auth';
import './Auth.css';

export default function Auth({ isSignedUp = false }) {
  const { setUser } = useAuth();
  const history = useHistory();

  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignedUp) {
      try {
        const resp = await signInUser(formState);
        setUser({ email: resp.email, id: resp.id });
        history.replace('/profile');
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const resp = await signUpUser(formState);
        setUser({ email: resp.email, id: resp.id });
        history.replace('/profile');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <form className="auth" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
        ></input>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formState.password}
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
        ></input>
        <button type="submit">
          {isSignedUp ? 'Sign In' : 'Create Account'}
        </button>
      </form>
      <h3>
        {isSignedUp ? (
          <>
            'Don't have an account yet?'{' '}
            <Link to="/register">Create Account</Link>
          </>
        ) : (
          <>
            'Don't have an account yet?' <Link to="/login">Login</Link>
          </>
        )}
      </h3>
    </>
  );
}
