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

export const createUserProfileDocument = async (
	userAuth,
	...additionalData
) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`/users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};

export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);
	const batch = firestore.batch();
	objectsToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();
		// console.log(obj);
		batch.set(newDocRef, obj);
	});
	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformCollections = collections.docs.map((doc) => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			title,
			id: doc.id,
			items,
		};
	});
	return transformCollections.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		// console.log(accumulator);
		return accumulator;
	}, {});
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
