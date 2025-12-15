import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getFirestore,
  collection,
  query,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyAdmPnFurkRuoxzeF8_lZaWBEKlVkVz3wI",
  authDomain: "porfolio-6372d.firebaseapp.com",
  projectId: "porfolio-6372d",
  storageBucket: "porfolio-6372d.firebasestorage.app",
  messagingSenderId: "1017922775454",
  appId: "1:1017922775454:web:900c84d5c97e87514e0e8f",
  measurementId: "G-XWWCLMC4G6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export  {db}

