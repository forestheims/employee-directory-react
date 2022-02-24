import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      Home
      <Link to="/register">Create Account</Link>
      <Link to="/login">Login</Link>
    </>
  );
}
