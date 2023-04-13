import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCcq4b1rmnubdGjo-8Pi0gEUPQv24oPAhY",
    authDomain: "tasy-treat.firebaseapp.com",
    projectId: "tasy-treat",
    storageBucket: "tasy-treat.appspot.com",
    messagingSenderId: "137532425104",
    appId: "1:137532425104:web:2e7a5f8f56fa2d0d636915",
    measurementId: "G-GL6T9BV73F"
};

const app = initializeApp(firebaseConfig);
const auth = auth(app);
const storage = storage(app);
const db = firestore(app);
const fs = firebase
  
export { auth, storage, db, fs};