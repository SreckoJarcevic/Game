export const setLevel = level => ({
	type: 'SET_LEVEL',
	payload: level
});

export const setLives = () => ({
	type: 'SET_LIVES',
});

export const setGameStatus = status => ({
	type: 'SET_GAME_STATUS',
	payload: status
});

export const activateTimeCounter = () => ({
	type: 'ACTIVATE_TIME_COUNTER',
});

export const levelUp = () => ({
	type: 'LEVEL_UP',
});

export const fieldsLeftCounter = remain => ({
	type: 'FIELDS_LEFT',
	payload: remain
});

export const lifeLosing = life => ({
	type: 'LIFE_LOSING',
	payload: life
});

export const backToLevel1 = () => ({
	type: 'RESTART_GAME',
});
