// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBqqldL27p1jFdBqMULVHQNNeU_EqFmteQ',
  authDomain: 'doctors-portal-6029d.firebaseapp.com',
  projectId: 'doctors-portal-6029d',
  storageBucket: 'doctors-portal-6029d.firebasestorage.app',
  messagingSenderId: '502634678851',
  appId: '1:502634678851:web:0a35a9688cbd647eaba2f6',
  measurementId: 'G-QWB211T8F2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
