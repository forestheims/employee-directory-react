import { createContext, useContext, useState, useEffect } from 'react';
import { getProfile } from '../services/profiles';
import { useAuth } from './authContext';

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    birthday: '',
  });
  const { user } = useAuth();

  useEffect(() => {
    const fetchProfile = async () => {
      if (user.email) {
        try {
          const response = await getProfile();
          console.log(response);
          setProfile({
            name: response[0].name,
            email: user.email,
            bio: response[0].bio,
            birthday: response[0].birthday,
          });
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchProfile();
  }, [user.email]);

  const contextValue = { profile, setProfile };

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error(
      'Error: useProfile needs to be called within a ProfileProvider'
    );
  }
  return context;
}
