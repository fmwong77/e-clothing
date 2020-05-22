import React, { Component } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends Component {
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		};
	}

	handleChange = (event) => {
		this.setState = { [event.target.name]: event.target.value };
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert("password don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });
			this.state = {
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			};
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2 className="title">I don't have an account</h2>
				<span>Sign up with your email and password</span>
				<form className="signup-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						label="Display Name"
						onChange={this.handleChange}
						required
					></FormInput>
					<FormInput
						type="email"
						name="email"
						value={email}
						label="Email"
						onChange={this.handleChange}
						required
					></FormInput>
					<FormInput
						type="password"
						name="password"
						value={password}
						label="Password"
						onChange={this.handleChange}
						required
					></FormInput>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						label="Confirm Password"
						onChange={this.handleChange}
						required
					></FormInput>
					<CustomButton>Sign Up</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
