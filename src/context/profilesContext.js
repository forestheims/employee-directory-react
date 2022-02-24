import { createContext, useContext, useState, useReducer } from 'react';
import { useHistory } from 'react-router-dom';

const ProfilesContext = createContext();

export function ProfileProvider({ children }) {
  const history = useHistory();
  // const currentUser = getUser();
  // console.log(currentUser);
  const [user, dispatch] = useReducer(
    userReducer,
    ''
    // currentUser ? currentUser.user.email : ''
    // getUser() ? getUser().user.email : ''
  );

  const contextValue = {};

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
