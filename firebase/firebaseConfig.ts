// lib/firebaseConfig.ts

import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBeJ2KXmPjFwskO7zqYNcb9hFdgZcr7mv4",
  authDomain: "muzakkir-e7ea9.firebaseapp.com",
  databaseURL: "https://muzakkir-e7ea9-default-rtdb.firebaseio.com",
  projectId: "muzakkir-e7ea9",
  storageBucket: "muzakkir-e7ea9.appspot.com",
  messagingSenderId: "170728036106",
  appId: "1:170728036106:web:911d8afbf0a85b273a4cf3",
  measurementId: "G-B8QM684X5Q"
};
// Initialize Firebase
let app: FirebaseApp;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const database = getDatabase(app);
const storage = getStorage(app)
export { database , storage  };
