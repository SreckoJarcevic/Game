import { connect } from 'react-redux';

// Actions
import { setModal } from '../actions/modalActions';
import { levelUp, backToLevel1 } from '../actions/statsActions.js';

// Components
import Modal from '../components/modal/modal';

// To remove ???
const mapStateToProps = state => {
	return state.modal;
};
 
const mapDispatchToProps = (dispatch) => ({
	setModal: config => dispatch(setModal(config)),
	onConfirm: () => dispatch(levelUp()),
	onCancel: () => dispatch(backToLevel1())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Modal);
