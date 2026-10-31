import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setLoggedInUser(user);
        setAuthLoading(false);

        if (!user) {
          sessionStorage.removeItem('token');
        }
      },
      (error) => {
        console.error('Failed to check authentication state:', error);
        setAuthLoading(false);
      }
    );

    return unsubscribe;
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem('token');
      })
      .catch((error) => {
        console.error('Failed to log out:', error);
      });
  };

  return (
    <AuthContext.Provider
      value={{ loggedInUser, setLoggedInUser, authLoading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
