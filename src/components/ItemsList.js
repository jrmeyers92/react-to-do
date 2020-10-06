import React from "react";
import "./ItemList.css";

const ItemsList = (props) => {
	const onXClick = (e) => {
		e.preventDefault();
		e.target.parentElement.parentElement.remove();
	};

	const onCheckClick = (e) => {
		e.preventDefault();
		if (
			e.target.parentElement.children[0].children[1].style.textDecoration ===
			"line-through"
		) {
			e.target.parentElement.children[0].children[1].style.textDecoration =
				"none";
			e.target.parentElement.style.color = "black";
		} else {
			e.target.parentElement.children[0].children[1].style.textDecoration =
				"line-through";
			e.target.parentElement.style.color = "#989898";
		}
	};

	const todos = props.todos.map((todo) => {
		return (
			<div className='list-item' key={todo.value}>
				<div className='left'>
					<i className='x icon' onClick={onXClick}></i>
					<p className='list-item__item'>{todo}</p>
				</div>
				<i className='check icon' onClick={onCheckClick}></i>
			</div>
		);
	});

	return <div className='theItemList'>{todos}</div>;
};

export default ItemsList;
