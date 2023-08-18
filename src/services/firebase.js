// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBwT87WPnrKOQ1wfMK6AGZi0GTR4SDvfZI',
  authDomain: 'financial-hackathon.firebaseapp.com',
  projectId: 'financial-hackathon',
  storageBucket: 'financial-hackathon.appspot.com',
  messagingSenderId: '803618097304',
  appId: '1:803618097304:web:66b8bba1f2956671e468ed',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Instantiate a Google Auth provider
const provider = new GoogleAuthProvider();

// Get current auth instance
export const auth = getAuth(app);

// Setup auth Functions

/* PREVIOUS CODE */
// export function login() {
//   return signInWithPopup(auth, provider);
// }

/* NEW CODE */
export async function login() {
  try {
    await signInWithPopup(auth, provider)
  } catch (error) {
    console.log(error)
  }
}

export function logout() {
  return signOut(auth);
}
