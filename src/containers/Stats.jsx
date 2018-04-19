import React, { Component } from 'react';
import { connect } from 'react-redux';

// Style
import './Stats.css';

// Actions
import { setLevel } from '../actions/statsActions';

// Components
import Level from '../components/stats/level';
import LevelPicker from '../components/stats/levelPicker';
import Life from '../components/stats/life';
import Time from '../components/stats/time';
import FieldsLeft from '../components/stats/fieldsLeft';

class Stats extends Component {

	_onChange(event) {
		if (this.props.stats.gameStatus === 'stopped') {
			this.props.setLevel(parseInt(event.target.value, 10));
		}
	}

	render() {
		const stats = this.props.stats;

		return(
			<div className='stats'>
				<Level level={ stats.level } />
				<Time time={ stats.time } />
				<Life lives={ stats.lives } />
				<FieldsLeft fieldsLeft={ stats.fieldsLeft } />
				<LevelPicker
					currentLevel={ stats.level }
					maxLevel={ stats.maxLevel }
					levelPick={ this._onChange.bind(this) }
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return state;
};
 
const mapDispatchToProps = dispatch => ({
	setLevel: level => dispatch(setLevel(level))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Stats);
