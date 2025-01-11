import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA6t_XwQRXHMX04-Hc6xnOEryDnBQLwBcQ",
  authDomain: "vimarsha-9fa29.firebaseapp.com",
  projectId: "vimarsha-9fa29",
  storageBucket: "vimarsha-9fa29.appspot.com",
  messagingSenderId: "946831654968",
  appId: "1:946831654968:web:c5ccdca18df262e22566cd",
  measurementId: "G-H1M121KW31",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const requests = collection(firestore, "Requests");
