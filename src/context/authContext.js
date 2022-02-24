import { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser, signOutUser, signUpUser } from '../services/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState('');
  const history = useHistory();

  async function userReducer(state, action) {
    switch (action.type) {
      case 'signin':
        try {
          const resp = await signInUser();
          setUser(resp.email);
          history.replace('/');
        } catch (error) {
          throw error;
        } finally {
          // loading?
          return {};
        }
      case 'create':
        try {
          await signUpUser();
        } catch (error) {
          throw error;
        } finally {
          // loading?
          return {};
        }
      case 'logout':
        try {
          await signOutUser();
          setUser('');
        } catch (error) {
          throw error;
        } finally {
          // loading?
          return {};
        }
      default:
        throw new Error();
    }
  }

  const handleSignIn = (formState) => {
    dispatch({ type: 'signin', payload: formState });
  };

  const handleCreateAccount = (formState) => {
    dispatch({ type: 'create', payload: formState });
  };

  const handleLogOut = () => {
    dispatch({ type: 'logout' });
  };

  const contextValue = {
    user,
    setUser,
    handleSignIn,
    handleCreateAccount,
    handleLogOut,
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
