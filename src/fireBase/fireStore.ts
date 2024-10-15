import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGNzwFI36Ui3Qj7XKd5-FmdmJRcbeV5yY",
  authDomain: "learning-8b474.firebaseapp.com",
  projectId: "learning-8b474",
  storageBucket: "learning-8b474.appspot.com",
  messagingSenderId: "243823048480",
  appId: "1:243823048480:web:e14a606a6b5aba06f9c945",
  measurementId: "G-1MJM018KC7"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Экспорт сервисов Firebase
export const auth = getAuth(app); // Экспорт авторизации
export const googleProvider = new GoogleAuthProvider(); // Экспорт провайдера Google
export const db = getFirestore(app); // Экспорт Firestore
