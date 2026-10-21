import { onAuthStateChanged, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log('user', user);
        setLoggedInUser(user);
        // ...
      } else {
        // User is signed out
        sessionStorage.removeItem('token');
        setLoggedInUser({});
        navigate('/login');
      }
    });
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem('token');
        setLoggedInUser({});
      })
      .catch((error) => {
        console.error('Failed to log out:', error);
      });
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
