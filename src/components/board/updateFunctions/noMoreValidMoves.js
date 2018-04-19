const noMoreValidMoves = (fields, boardProps) => {
	const { lifeLosing, setGameStatus, setModal, fieldsLeftCounter, stats } = boardProps;
	const countFields = (fields, fieldType) =>
		fields.reduce((acc, field) =>
			acc += field.status === fieldType ? 1 : 0
		, 0);
	// Counting clickable and nextClickable fields
	const clickable = countFields(fields, 'clickable');
	const nextClickable = countFields(fields, 'nextClickable');

	if (clickable >= 1 && nextClickable === 0) {
		fields.forEach(field => field.status = 'empty');
		lifeLosing(clickable);
		setGameStatus('stopped');
		fieldsLeftCounter(0);
		setModal({
			visible: true,
			content: `You failed level ${stats.level}, losing ${clickable} lives, do you want to play again?`
		});

		clearInterval(window.intervalId);
	}
}

export default noMoreValidMoves;
