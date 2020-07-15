import React, { Component } from 'react'
import './todoItem.css'

class TodoItem extends Component {
	render() {
		const item = this.props.item;
		return (
			<div className="todo-item">
				<input type="checkbox" />
				<p style={{ textDecoration: item.completed && 'line-through' }}>{item.text}</p>
			</div>
		)
	}
}

export default TodoItem;