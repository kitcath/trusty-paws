import firebase from 'firebase/app';
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyBMICz6JBYTkd90oYvuUcRC8fRlgMUfQEc",
    authDomain: "trusty-paw.firebaseapp.com",
    projectId: "trusty-paw",
    storageBucket: "trusty-paw.appspot.com",
    messagingSenderId: "980847798419",
    appId: "1:980847798419:web:f3cb591e7402ff5eb80566",
    measurementId: "G-GD67ZLZVXC"
  };
  // Initialize Firebase
 const fire =  firebase.initializeApp(firebaseConfig);


export default fire;