import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCKCMLbTHo_1xnrJ1oWwrngw8edte3_CYM",
  authDomain: "inovact-website.firebaseapp.com",
  projectId: "inovact-website",
  storageBucket: "inovact-website.firebasestorage.app",
  messagingSenderId: "360865007820",
  appId: "1:360865007820:web:261d24e5b5f90348ea5a69",
  measurementId: "G-WGXM47DB2F",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const requests = collection(firestore, "Requests");
