import React from "react";
import "./ItemList.css";

const ItemsList = (props) => {
	const onXClick = () => {
		console.log("hi");
	};

	const todos = props.todos.map((todo) => {
		return (
			<div className='list-item'>
				<div className='left'>
					<i class='x icon x-icon' onClick={onXClick}></i>
					<p className='list-item__item'>{todo}</p>
				</div>
				<i class='check icon'></i>
			</div>
		);
	});

	return <div className='theItemList'>{todos}</div>;
};

export default ItemsList;
