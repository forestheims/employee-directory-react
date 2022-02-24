import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';

export default function AddEditProfile({ isProfile = false }) {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('foraheims@gmail.com');
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Bio:</label>
        <input
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <label>Birthday:</label>
        <input
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <button type="submit">Add / Edit Profile</button>
      </form>
    </>
  );
}
