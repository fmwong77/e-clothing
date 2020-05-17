import React from 'react';
import { HomePage } from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/hats" component={HomePage} />
			</Switch>
			{/* <HomePage /> */}
		</div>
	);
}

export default App;
