const generateAndMarkFields = (x, y, status, boardProps) => {
	const { generateLevel, onFieldClick, stats } = boardProps;
	if (stats.gameStatus === 'stopped') {
		generateLevel({
			x,
			y,
			level: stats.level === 0 ? 1 : stats.level
		});
	}

	// mark available fields
	if (status === 'empty' || status === 'nextClickable') {
		onFieldClick({ x, y });
	}
}

export default generateAndMarkFields;
