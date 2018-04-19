import React, { Component } from 'react';
import './App.css';

// Components
import Board from './containers/Board';
import Stats from './containers/Stats';
import Modal from './containers/modalContainer';

class App extends Component {
	render() {
		return (
			<div className='wrapper'>
				<Board />
				<Stats />
	            <Modal />
			</div>
		);
	}
}

export default App;
