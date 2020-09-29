import React from "react";
import "./ItemList.css";

const ItemsList = (props) => {
	const onXClick = (e) => {
		// e.preventDefault();
		e.target.parentElement.parentElement.className.add("none");
	};

	const todos = props.todos.map((todo) => {
		return (
			<div className='list-item' key={todo.value}>
				<div className='left'>
					<i className='x icon' onClick={onXClick}></i>
					<p className='list-item__item'>{todo}</p>
				</div>
				<i className='check icon'></i>
			</div>
		);
	});

	return <div className='theItemList'>{todos}</div>;
};

export default ItemsList;
