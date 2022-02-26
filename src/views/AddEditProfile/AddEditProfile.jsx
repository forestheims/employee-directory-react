import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { useProfile } from '../../context/profilesContext';
import { createProfile, updateProfile } from '../../services/profiles';

export default function AddEditProfile({ isProfile = false }) {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [birthday, setBirthday] = useState('');
  const { user } = useAuth();
  const { profile, setProfile } = useProfile();
  const history = useHistory();

  useEffect(() => {
    if (isProfile) {
      setName(profile.name);
      setBio(profile.bio);
      setBirthday(profile.birthday);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isProfile) {
      updateProfile({ name, email: user.email, bio, birthday });
      setProfile({ name, email: user.email, bio, birthday });
      history.push('/profile');
    } else {
      createProfile({ name, email: user.email, bio, birthday });
      setProfile({ name, email: user.email, bio, birthday });
      history.replace('/profile');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>{isProfile ? 'Edit Profile' : 'Create Profile'}</h1>
        <h2>{user.email}</h2>
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
