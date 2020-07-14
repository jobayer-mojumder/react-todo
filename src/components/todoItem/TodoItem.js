import React from 'react'
import './todoItem.css'

function TodoItem(props) {
	return (
		<div className="todo-item">
			<input type="checkbox" />
			<p style={{ textDecoration: props.item.completed && 'line-through' }}>{props.item.text}</p>
		</div>
	)
}

export default TodoItem;