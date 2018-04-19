import {
	generateGrid,
	isFieldClickable
} from '../utils/boardFunctions';

const initialState = {
	fields: generateGrid()
};

const board = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'GENERATE_LEVEL':
			return {
				fields: generateLevel(generateGrid(), payload)
			};
		case 'FIELD_CLICKED':
			return {
				fields: state.fields.map(item => {
					if (item.status === 'nextClickable') {
						item.status = 'clickable';
					}
					// Update clicked field status
					if (item.x === payload.x && item.y === payload.y) {
						item.status = 'clicked';
					// Update next clickable fields
					} else if (isFieldClickable(item, payload) && item.status === 'clickable') {
						item.status = 'nextClickable';
					}

					return item;
				})
			};
		default:
			return state
	}
};

function generateLevel(fields, { x, y, level }) {
	const currentField = fields.find(item =>
		item.x === x && item.y === y
	);
	currentField.status = 'clicked';

	return generateFields(currentField, fields, level - 1);
}

function generateFields(currentField, fields, level) {
	const availableFields = fields.filter(item =>
		!['clickable', 'clicked'].includes(item.status) && isFieldClickable(item, {
			x: currentField.x,
			y: currentField.y
		})
	);
	const randomIndex = Math.floor(Math.random() * availableFields.length);
	const nextField = availableFields[randomIndex];

	nextField.status = 'clickable';
	return level ?
		generateFields(nextField, fields, --level) :
		fields;
}

export default board;
