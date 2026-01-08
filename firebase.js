// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// 🔥 DEINE Firebase-Daten
const firebaseConfig = {
  apiKey: "AIzaSyBxyUvXtwqI9-Jb0iUhUuSgqmbMJMAgzAg",
  authDomain: "miniplan-43d9c.firebaseapp.com",
  projectId: "miniplan-43d9c",
  storageBucket: "miniplan-43d9c.appspot.com",
  messagingSenderId: "284553649544",
  appId: "1:284553649544:web:a96421b904948833b22e3d"
};

// Initialisieren
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
