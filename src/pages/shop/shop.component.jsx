import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collection-preview/collection-preview.component';
import CollectionPage from '../../pages/collection/collection.component';
// import SHOP_DATA from './shop.data';

const ShopPage = ({ match }) => (
	<div className="shop-page">
		{/* <Route excat path={`${match.path}`} component={CollectionOverview} /> */}
		<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
	</div>
);

export default ShopPage;
