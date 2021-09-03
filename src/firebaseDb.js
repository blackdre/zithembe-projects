import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5I7f0hIhgw8E2hoYINesehjQ889gs5mQ",
  authDomain: "zithembe-projects.firebaseapp.com",
  projectId: "zithembe-projects",
  storageBucket: "zithembe-projects.appspot.com",
  messagingSenderId: "902820889671",
  appId: "1:902820889671:web:5a1b9e11b34adc130a9d62",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
