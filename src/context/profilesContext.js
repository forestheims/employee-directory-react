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
      if (user) {
        try {
          const response = await getProfile();
          setProfile(response);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchProfile();
  }, []);

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
