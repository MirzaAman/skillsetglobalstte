import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from "firebase/auth";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDck8OwBiIwvPJZKKy6Q2syrl7vqSRacWY",
    authDomain: "skillset-global.firebaseapp.com",
    projectId: "skillset-global",
    storageBucket: "skillset-global.appspot.com",
    messagingSenderId: "108226230234",
    appId: "1:108226230234:web:f606690490fbbf532372e3",
    measurementId: "G-5GCTQWLC8Q"
};

const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = getFirestore(firebase);
export const storage = getStorage(firebase);