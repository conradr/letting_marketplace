
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB9mvNvRz1JBJd9igRI_7YjVFFAmBMwQUk',
  authDomain: 'house-market-place-1b202.firebaseapp.com',
  projectId: 'house-market-place-1b202',
  storageBucket: 'house-market-place-1b202.appspot.com',
  messagingSenderId: '849994838569',
  appId: '1:849994838569:web:e4212f11b3586eca22a238',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()