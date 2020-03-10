import React, { Component } from 'react';
import CatComponent from './CatComponent.js';
// import GraceHopperQuoteComponent from './GraceHopperQuoteComponent.js';
import MouseComponent from './MouseComponent.js';
import EinsteinQuoteComponent from './EinsteinQuoteComponent.js';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<EinsteinQuoteComponent />
				<MouseComponent />
				{/* one more component missing */}
			</div>
		);
	}
}

export default App;
