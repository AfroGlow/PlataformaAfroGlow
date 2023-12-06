import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZSaLA_AI-LrbiNZuciNIkqzn3UFoLznM",
  authDomain: "backendafroglow.firebaseapp.com",
  projectId: "backendafroglow",
  storageBucket: "backendafroglow.appspot.com",
  messagingSenderId: "175277613247",
  appId: "1:175277613247:web:01b570fdd7325f145b660a",
  measurementId: "G-PB3THM1DEW"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};