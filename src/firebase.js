// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log(process.env)
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// }

// Initialize Firebase

//Вместо этого вставляем process.env. и переменные из файла env.local в которыx предварительно записали эти значения
const firebaseConfig = {
  apiKey: 'AIzaSyC3xl4Jt5WdWZsffNxUGpLca8tAiQupseE',
  authDomain: 'auth-example-85307.firebaseapp.com',
  projectId: 'auth-example-85307',
  storageBucket: 'auth-example-85307.appspot.com',
  messagingSenderId: '735342082431',
  appId: '1:735342082431:web:7741fa427ed338bd7bc24a',
}
const app = initializeApp(firebaseConfig)
