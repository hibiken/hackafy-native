import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyDUaaXntP10bRzgRqmi4dtBeWSRcqTc_xs",
  authDomain: "hackafy.firebaseapp.com",
  databaseURL: "https://hackafy.firebaseio.com",
  storageBucket: "hackafy.appspot.com",
  messagingSenderId: "121206091996"
});

const firebaseAuth = firebase.auth();
const facebookProvider = firebase.auth.FacebookAuthProvider;

const API_URL = 'https://enigmatic-mountain-38641.herokuapp.com/api';

export {
  firebaseAuth,
  facebookProvider,
  API_URL,
}
