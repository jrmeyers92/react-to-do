import React from "react";

const ItemsList = (props) => {
	const todos = props.todos.map((todo) => {
		return (
			<div className='list-item'>
				<p>{todo}</p>
				<i class='check icon'></i>
			</div>
		);
	});

	return (
		<div>
			{todos}
			<i class='check icon'></i>
		</div>
	);
};

export default ItemsList;
