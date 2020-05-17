import React from 'react';
import { HomePage } from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div>
			<Switch>
				<Route path="/" component={HomePage} />
			</Switch>
			{/* <HomePage /> */}
		</div>
	);
}

export default App;
