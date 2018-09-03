import firebase from 'firebase'

// initialize firebase //
const config = {
  apiKey: "AIzaSyBV4MuCqJg2p00Ikkr17EGl7XXAMykiMbA",
  authDomain: "mysite-cherylngql.firebaseapp.com",
  databaseURL: "https://mysite-cherylngql.firebaseio.com",
  projectId: "mysite-cherylngql",
  storageBucket: "mysite-cherylngql.appspot.com",
  messagingSenderId: "48175069485"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const storage = firebase.storage();

// Create a storage reference from our storage service
export const storageRef = storage.ref();
export const db = firebase.database();
