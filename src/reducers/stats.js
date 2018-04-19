import generateLevelPicker from '../utils/statsFunctions';

const userMaxLevel = JSON.parse(localStorage.getItem('level'));
const userLives = JSON.parse(localStorage.getItem('lives'));

const initialState = {
	level: userMaxLevel || 0,
	time: 0,
	lives: userLives || 0,
	fieldsLeft: 0,
	gameStatus: 'stopped',
	maxLevel: userMaxLevel
};

const stats = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_LEVEL':
			return {
				...state,
				level: payload || state.level + 1
			};
		case 'SET_LIVES':
			return {
				...state,
				lives: 1
			};
		case 'SET_GAME_STATUS':
			return {
				...state,
				gameStatus: payload,
				time: payload === 'stopped' ? 0 : state.time
			};
		case 'LEVEL_UP':
			return {
				...state,
				time: 0,
				lives: state.lives + 1,
				level: state.level + 1
			};
		case 'ACTIVATE_TIME_COUNTER':
			return {
				...state,
				time: state.time + 1
			};
		case 'FIELDS_LEFT':
			return {
				...state,
				fieldsLeft: payload
			};
		case 'LIFE_LOSING':
			return {
				...state,
				lives: state.lives < payload ? 0 : state.lives - payload
			};
		case 'RESTART_GAME':
			return {
				...state,
					level: 0,
					time: 0,
					lives: state.lives,
					fieldsLeft: 0,
					gameStatus: 'stopped'
			};
		default:
			return state;
	}
};
 
export default stats;
