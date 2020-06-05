import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import './cart-icon.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
	console.log(itemCount);
	return (
		<div className="cart-icon" onClick={toggleCartHidden}>
			<ShoppingIcon className="shopping-icon"></ShoppingIcon>
			<span className="item-count">{itemCount}</span>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
