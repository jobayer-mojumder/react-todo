import React, { Component } from 'react';
import './App.css'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import TodoItem from './components/todoItem/TodoItem'

import todosData from './data/todosData'

class App extends Component {

	constructor() {
		super()
		this.state = {
			todos: todosData
		}
	}

	render() {

		const todoList = this.state.todos.map(element => {
			return <TodoItem key={element.id} item={element} />
		})

		return (
			<div className="App">
				<Header />
				<div className="todo-list">
					{todoList}
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
