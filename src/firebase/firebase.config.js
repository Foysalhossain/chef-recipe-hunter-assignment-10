// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwumNZ6dY89NJltYvSXUqWvFr5csy_4fs",
    authDomain: "chef-recipe-hunter-as-10.firebaseapp.com",
    projectId: "chef-recipe-hunter-as-10",
    storageBucket: "chef-recipe-hunter-as-10.appspot.com",
    messagingSenderId: "807746145927",
    appId: "1:807746145927:web:9cd528889c00bea306f222"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;