import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyA2oOWX6PsrFqPHQh-d4iXJ7_KhNmxEovw",
  authDomain: "fir-setup-8b120.firebaseapp.com",
  projectId: "fir-setup-8b120",
  storageBucket: "fir-setup-8b120.appspot.com",
  messagingSenderId: "644928590157",
  appId: "1:644928590157:web:05560e775f5ddc07d02704"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const firestore = firebase.firestore();

export { firestore };