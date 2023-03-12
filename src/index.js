import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA7hZFRz8iBw2mGDZY_Ay2nQjdZUwcSZkk",
  authDomain: "cart-941f7.firebaseapp.com",
  projectId: "cart-941f7",
  storageBucket: "cart-941f7.appspot.com",
  messagingSenderId: "1023869012645",
  appId: "1:1023869012645:web:4292f2124760b71d0bdb4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
