import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAF5D2SN3W0qQSJ0eLO7l5e1cJ4ltWiWsA",
  authDomain: "e-ride-stage-ed526.firebaseapp.com",
  projectId: "e-ride-stage-ed526",
  storageBucket: "e-ride-stage-ed526.appspot.com",
  messagingSenderId: "865856960477",
  appId: "1:865856960477:web:b09f79d0c5ccf5ff9be834"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
