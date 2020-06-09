import React from 'react';
import { connect } from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { createStructuredSelector } from 'reselect';
import './collections-overview.styles';
import { selectCollections } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => {
	console.log(collections);
	return (
		<div className="collections-overview">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
