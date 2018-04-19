const fieldsLeft = (fields, level, fieldsLeftCounter) => {
	const isClickable = ({ status }) =>
		status === 'clickable' || status === 'nextClickable';
	let remaining = fields.reduce((acc, field) =>
		acc += isClickable(field) ? 1 : 0
	, 0);

	if (remaining === 0) {
		remaining = level;
	}

	fieldsLeftCounter(remaining);
}

export default fieldsLeft;
