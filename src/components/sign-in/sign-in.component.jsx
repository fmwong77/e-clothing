import React, { Component } from 'react';
import './sign-in.styles.scss';

class SignIn extends Component {
	constructor() {
		super();

		this.state = { email: '', password: '' };
	}

	handleSubmit = () => {
		this.setState({ email: '', password: '' });
	};

	handleChange = (e) => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<input
						name="email"
						type="email"
						placeholder="Please enter your email"
						value={this.state.email}
						required
						onChange={this.handleChange}
					/>
					<label>Email</label>
					<input
						name="password"
						type="password"
						placeholder="Please enter your password"
						value={this.state.password}
						required
						onChange={this.handleChange}
					/>
					<label>Password</label>
				</form>
			</div>
		);
	}
}

export default SignIn;
