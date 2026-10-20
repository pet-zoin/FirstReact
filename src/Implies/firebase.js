import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/*const firebaseConfig = {
  apiKey: "AIzaSyAL7cyYl6Cg5DY5YQ3HCt-UzYh-DgY0Ms8",
  authDomain: "football-535fd.firebaseapp.com",
  databaseURL: "https://football-535fd-default-rtdb.firebaseio.com",
  projectId: "football-535fd",
  storageBucket: "football-535fd.firebasestorage.app",
  messagingSenderId: "707435805663",
  appId: "1:707435805663:web:074bf7b60d30105fc0a26a"
};
*/
const firebaseConfig = {
  apiKey: "AIzaSyBEWaVneLkBv4Fbti-FkKesHlZLyupEHUo",
  authDomain: "urbangoals-6e7f9.firebaseapp.com",
  databaseURL: "https://urbangoals-6e7f9-default-rtdb.firebaseio.com",
  projectId: "urbangoals-6e7f9",
  storageBucket: "urbangoals-6e7f9.firebasestorage.app",
  messagingSenderId: "2470878271",
  appId: "1:2470878271:web:c9e88bc925c8fd1ca6ec8a",
  measurementId: "G-6EX3WZC80D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;