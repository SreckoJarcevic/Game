import React from 'react';

// Styles
import './field.css';

const field = ({ x, y, status, onFieldClick }) => {
	return (
		<div
			className={ `field field--${status}` }
			onClick={ () => (status === 'empty' || status === 'nextClickable') && onFieldClick() }
		>
		</div>
	);
};

export default field;
