// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCorHnVbSJbgEiT6iJ6ACFijbc0vRzVXQA",
  authDomain: "textshare-c64d3.firebaseapp.com",
  projectId: "textshare-c64d3",
  storageBucket: "textshare-c64d3.firebasestorage.app",
  messagingSenderId: "1012939156558",
  appId: "1:1012939156558:web:c4730499103995fe0b271f",
  measurementId: "G-4RPTEMH1ZP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);