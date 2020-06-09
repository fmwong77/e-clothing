import React from 'react';
import { connect } from 'react-redux';
// import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { createStructuredSelector } from 'reselect';
import './collections-overview.styles';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => {
	console.log(collections);
	return <div></div>;
	// return (
	// 	<div className="collections-overview">
	// 		{collections.map(({ id, ...otherCollectionProps }) => (
	// 			<CollectionPreview key={id} {...otherCollectionProps} />
	// 		))}
	// 	</div>
	// );
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
