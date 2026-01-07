import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDocs, onSnapshot, query, orderBy, updateDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
// ---------- Firebase-Konfiguration ----------
const firebaseConfig = {
  apiKey: "AIzaSyBxyUvXtwqI9-Jb0iUhUuSgqmbMJMAgzAg",
  authDomain: "miniplan-43d9c.firebaseapp.com",
  projectId: "miniplan-43d9c",
  storageBucket: "miniplan-43d9c.firebasestorage.app",
  messagingSenderId: "284553649544",
  appId: "1:284553649544:web:a96421b904948833b22e3d"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
