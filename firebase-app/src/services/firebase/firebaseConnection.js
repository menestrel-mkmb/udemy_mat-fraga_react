import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAIX9oDIt0Ck61gDugY5YLcaGxl0iixoIg',
  authDomain: 'movieteller-8fa40.firebaseapp.com',
  projectId: 'movieteller-8fa40',
  storageBucket: 'movieteller-8fa40.appspot.com',
  messagingSenderId: '504280616253',
  appId: '1:504280616253:web:ab3fe8dfda1e90ec4e0954'
};

const firebaseApp = initializeApp(firebaseConfig);

export const firebasedb = getFirestore(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);