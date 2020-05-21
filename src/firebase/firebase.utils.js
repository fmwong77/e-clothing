import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyD_u3y3EZ5ZtUbBOqy942JFdqIQwUJ5jKs',
	authDomain: 'e-clothing-db-3c59c.firebaseapp.com',
	databaseURL: 'https://e-clothing-db-3c59c.firebaseio.com',
	projectId: 'e-clothing-db-3c59c',
	storageBucket: 'e-clothing-db-3c59c.appspot.com',
	messagingSenderId: '706175666465',
	appId: '1:706175666465:web:af583eacf8e24106655660',
	measurementId: 'G-GQXE1ZTPD2',
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
