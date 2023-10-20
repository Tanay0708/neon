
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBHS9ByGurV9kRyf-OpVS9W0Au2IoQaTe4",
  authDomain: "neon-stoke-firebase.firebaseapp.com",
  projectId: "neon-stoke-firebase",
  storageBucket: "neon-stoke-firebase.appspot.com",
  messagingSenderId: "726429564135",
  appId: "1:726429564135:web:a08568e37294f58a303642",
  measurementId: "G-Y0PND5QZJD"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)