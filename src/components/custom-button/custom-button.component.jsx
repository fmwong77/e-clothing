import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
	console.log(children);
	return (
		<button
			className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
			{...otherProps}
		>
			{children}
		</button>
	);
};
export default CustomButton;
