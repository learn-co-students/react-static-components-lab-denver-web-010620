import React, { Component } from 'react'; 
import { CatComponent } from '../src/CatComponent'; 
import { GraceHopperQuoteComponent } from '../src/GraceHopperQuoteComponent';
import { MouseComponent } from '../src/MouseComponent';  

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent />
			</div>
		);
	}
}

export default App;
