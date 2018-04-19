import { combineReducers } from 'redux';
import board from './board';
import stats from './stats';
import modal from './modal';
 
export default combineReducers({
	board,
	stats,
	modal
});
