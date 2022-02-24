import { createContext, useContext, useState, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { getUser, signInUser, signOutUser, signUpUser } from '../services/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const history = useHistory();
  // const currentUser = getUser();
  // console.log(currentUser);
  const [user, dispatch] = useReducer(
    userReducer,
    ''
    // currentUser ? currentUser.user.email : ''
    // getUser() ? getUser().user.email : ''
  );

  async function userReducer(user, action) {
    switch (action.type) {
      case 'signin':
        try {
          // const resp = await signInUser(action.payload);
          user = action.payload.email;
          history.replace('/');
        } catch (error) {
          // throw error;
        } finally {
          // loading?
        }
      case 'create':
        try {
          // const resp = await signUpUser(action.payload);
          user = action.payload.email;
          history.replace('/');
        } catch (error) {
          throw error;
        } finally {
          // loading?
        }
      case 'logout':
        try {
          // signOutUser();
          user = '';
        } catch (error) {
          throw error;
        } finally {
          // loading?
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
