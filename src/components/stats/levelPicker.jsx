import React from 'react';

const levelPicker = props => {
	const generateDropdown = level => {
		const options = [];

		for (; level > 0; level--) {
			options.push(
				<option key={level} value={level}>Level {level}</option>
			);
		}

		return options.length === 0 ?
			<option key={0} value={0}>Level {0}</option> :
			options
	}

	return (
		<div>
			<p>Choose level</p>
			<select onChange={ props.levelPick } value={ props.currentLevel }>
				{ generateDropdown(props.maxLevel === null ? props.currentLevel : props.maxLevel) }
			</select>
			<p>*board must be empty*</p>
		</div>
	);
};

export default levelPicker;
