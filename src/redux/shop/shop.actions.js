import ShopActionTypes from './shop.types';
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export const updateCollections = (collectionsMap) => ({
	type: ShopActionTypes.UPDATE_COLLECTIONS,
	payload: collectionsMap,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap,
});

export const fetchCollectionsStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsFailure = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
});

export const fetchCollectionsStartAsync = () => {
	return (dispatch) => {
		const collectionRef = firestore.collection('collections');
		dispatch(fetchCollectionsStart());
		collectionRef
			.get()
			.then((snapShot) => {
				const collectionMaps = convertCollectionsSnapshotToMap(snapShot);
				dispatch(fetchCollectionsSuccess(collectionMaps));
			})
			.catch((error) => dispatch(fetchCollectionsFailure(error.message)));
	};
};
