import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../../pages/collection/collection.component';
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends Component {
	unsubscribeFromSnapshot = null;
	componentDidMount() {
		const collectionRef = firestore.collection('collections');
		const { updateCollections } = this.props;

		collectionRef.onSnapshot(async (snapShot) => {
			console.log(snapShot);

			const collectionMaps = convertCollectionsSnapshotToMap(snapShot);
			console.log(collectionMaps);
			updateCollections(collectionMaps);
		});
	}

	componentWillUnmount() {}

	render() {
		const { match } = this.props;

		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`} component={CollectionOverview} />
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPage}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) =>
		dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
