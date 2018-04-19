import React from 'react';
import './modal.css';

const modal = props => {
	const isCompleted = props.content.includes('completed');
	const _onConfirm = () => {
		if (isCompleted) {
			props.onConfirm();
		}
		props.setModal({ visible: false });
	}
	const _onCancel = () => {
		props.onCancel();
		props.setModal({ visible: false });
	}

	return (
		<div className={ `overlay overlay--${props.visible ? 'visible' : 'hidden'}` }>
			<div className="modal">
				<span className="">{ props.content }</span>
				<button onClick={ _onConfirm }>Yes</button> 
				<button onClick={ _onCancel }>No</button> 
			</div>
		</div>
	);
};

export default modal;
