import React, { useState } from 'react';
import { useProfile } from '../../context/profilesContext';

export default function Profile() {
  const { profile } = useProfile();
  // const [componentProfile, setComponentProfile] = useState({});

  // while (profile.email !== '') {
  //   setComponentProfile(profile);
  // }

  return (
    <>
      <p>Employee Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Birthday: {profile.birthday}</p>
      <p>Bio: {profile.bio}</p>
    </>
  );
}
