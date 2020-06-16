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
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import {
	selectIsCollectionFetching,
	selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selectors';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
	// state = {
	// 	loading: true,
	// };

	// unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
		// const collectionRef = firestore.collection('collections');
		// const { updateCollections } = this.props;
		// collectionRef.onSnapshot(async (snapShot) => {
		// 	console.log(snapShot);
		// 	const collectionMaps = convertCollectionsSnapshotToMap(snapShot);
		// 	updateCollections(collectionMaps);
		// 	this.setState({ loading: false });
		// });
	}

	componentWillUnmount() {
		// this.unsubscribeFromSnapshot();
	}

	render() {
		const { match, isCollectionsLoaded } = this.props;
		// const { loading } = this.state;
		console.log(this.props);
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionOverviewWithSpinner
							isLoading={!isCollectionsLoaded}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner
							isLoading={!isCollectionsLoaded}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	isFetchingCollections: selectIsCollectionFetching,
	isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
	// updateCollections: (collectionsMap) =>
	// 	dispatch(updateCollections(collectionsMap)),
	fetchCollectionsStartAsync: dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
