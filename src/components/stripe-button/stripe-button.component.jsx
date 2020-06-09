import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const stripeForPrice = price * 100;
	const publishableKey =
		'pk_test_51GsCW9KDYPKUAJ1koU7ShVPeBn6XtErltunp9lx16UsF1KQgszBqFwEhBW6hlsnPujDMCROiBvWVP49bOwFBM0wk00L0DK4cv8';

	const onToken = (token) => {
		console.log(token);
		alert('Payment successful');
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Babes Closet"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={stripeForPrice}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
