import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../../context/authContext';
import { useProfile } from '../../context/profilesContext';
import { createProfile, updateProfile } from '../../services/profiles';

export default function AddEditProfile({ isProfile = false }) {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('foraheims@gmail.com');
  const { user } = useAuth();
  const { profile, setProfile } = useProfile();

  useEffect(() => {
    if (isProfile) {
      setName(profile.name);
      setBio(profile.bio);
      setBirthday(profile.birthday);
      setEmail(profile.email);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isProfile) {
      updateProfile({ name, email, bio, birthday });
      setProfile({ name, email, bio, birthday });
    }
    createProfile({ name, email, bio, birthday });
    setProfile({ name, email, bio, birthday });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>{user}</h2>
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
        <button type="submit">
          {isProfile ? 'Edit Profile' : 'Add Profile'}
        </button>
      </form>
    </>
  );
}
