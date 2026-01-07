// ---------- Firebase-Konfiguration ----------
const firebaseConfig = {
  apiKey: "AIzaSyBxyUvXtwqI9-Jb0iUhUuSgqmbMJMAgzAg",
  authDomain: "miniplan-43d9c.firebaseapp.com",
  projectId: "miniplan-43d9c",
  storageBucket: "miniplan-43d9c.firebasestorage.app",
  messagingSenderId: "284553649544",
  appId: "1:284553649544:web:a96421b904948833b22e3d"
};

// ---------- Firebase initialisieren ----------
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
