// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpU5GY_zy4IryumhkggJrY32K7y6bZki0",
  authDomain: "ocean-2b28f.firebaseapp.com",
  projectId: "ocean-2b28f",
  storageBucket: "ocean-2b28f.appspot.com",
  messagingSenderId: "1024839248379",
  appId: "1:1024839248379:web:2e7af3e970bcda9051c35e",
  measurementId: "G-8WJGTD8J7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);