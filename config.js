import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCcr3TYTnornFmZ2jKRmTTwkFmhx4vRcM8",
  authDomain: "barterapp-d8c66.firebaseapp.com",
  projectId: "barterapp-d8c66",
  storageBucket: "barterapp-d8c66.appspot.com",
  messagingSenderId: "544595270937",
  appId: "1:544595270937:web:34288b3a78022f845c7988",
  measurementId: "G-6ZP2JT25XZ"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
