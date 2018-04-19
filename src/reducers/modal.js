const initialState = {
	visible: false,
	content: ''
};

const modal = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_MODAL':
			return {
				...state,
				...payload
			};
		default:
			return state;
	}
};

export default modal;
