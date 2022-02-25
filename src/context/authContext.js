import { createContext, useContext, useState } from 'react';
import { getUser } from '../services/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const currentUser = getUser();

  const [user, setUser] = useState(
    currentUser
      ? { email: currentUser.email, id: currentUser.id }
      : { email: '', id: '' }
  );

  const contextValue = {
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('Error: useAuth needs to be called within a AuthProvider');
  }
  return context;
}
