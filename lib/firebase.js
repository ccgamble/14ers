import firebase from 'firebase';

var config = {
	apiKey: "AIzaSyBp0ZowYU0wBc60ykmDl8PKLEvhMlQG5z4",
	authDomain: "ers-b61ae.firebaseapp.com",
	databaseURL: "https://ers-b61ae.firebaseio.com",
	storageBucket: "ers-b61ae.appspot.com",
	messagingSenderId: "686266104056"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
export const reference = firebase.database().ref('favorites')
