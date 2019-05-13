import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import './Board.css';

// Actions
import { fieldClicked, generateLevel } from '../actions/boardActions';
import { setModal } from '../actions/modalActions';
import {
	setLevel,
	setLives,
	setGameStatus,
	activateTimeCounter,
	fieldsLeftCounter,
	lifeLosing,
	backToLevel1
} from '../actions/statsActions';

// Components
import Field from '../components/board/field';

// Update functions
import updatingLocalStorage from '../components/board/updateFunctions/localStorage';
import noMoreValidMoves from '../components/board/updateFunctions/noMoreValidMoves';
import fieldsLeft from '../components/board/updateFunctions/fieldsLeft';
import startingTime from '../components/board/updateFunctions/startingTime';
import firstLevelSetup from '../components/board/updateFunctions/firstLevelSetup';
import generateAndMarkFields from '../components/board/updateFunctions/generateAndMarkFields';
import levelComplete from '../components/board/updateFunctions/levelComplete';

class Board extends Component {
	componentWillReceiveProps(nextProps) {
		noMoreValidMoves(nextProps.board.fields, this.props);
	}

	componentDidUpdate() {
		const { level, lives } = this.props.stats;
		updatingLocalStorage(level, lives);
	}
	
	_onFieldClick(x, y, status) {
		const fields = this.props.board.fields;
		const { level, lives, time, gameStatus } = this.props.stats;
		const currentField = fields.find(field => field.x === x && field.y === y);        

		// click on empty field while playing
		if (currentField.status === 'empty' && gameStatus === 'active') {
			return;
		}

		// all lives lost
		if (gameStatus === 'stopped' && level > 0 && lives === 0) {
			this.props.setModal({
				visible: true,
				content: `You lost all your lives, do you want to play again?`
			});
			this.props.backToLevel1();

			return;
		}

		this.props.setGameStatus('active');

		startingTime(gameStatus, time, this.props.activateTimeCounter);

		firstLevelSetup(level, this.props.setLevel, this.props.setLives);

		generateAndMarkFields(x, y, status, this.props);

		fieldsLeft(
			fields,
			level === 0 ? 1 : level,
			this.props.fieldsLeftCounter
		);

		levelComplete(fields, level, this.props);
	}

	render() {
		return(
			<div className="boardWrapper">
				<div className="board">
					<div className="gridBoard">
						{ this.props.board.fields.map(({ x, y, status }) =>
							<Field
								x={ x }
								y={ y }
								status={ status }
								key={ `${x}-${y}` }
								onFieldClick={ () => this._onFieldClick(x, y, status) }
							/>
						) }
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return state;
};
 
const mapDispatchToProps = (dispatch, ownProps) => ({
	onFieldClick: field => dispatch(fieldClicked(field)),
	setLevel: () => dispatch(setLevel()),
	setLives: () => dispatch(setLives()),
	setGameStatus: status => dispatch(setGameStatus(status)),
	fieldsLeftCounter: remain => dispatch(fieldsLeftCounter(remain)),
	activateTimeCounter: () => dispatch(activateTimeCounter()),
	backToLevel1: () => dispatch(backToLevel1()),
	generateLevel: level => dispatch(generateLevel(level)),
	lifeLosing: life => dispatch(lifeLosing(life)),
	setModal: config => dispatch(setModal(config))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Board);
