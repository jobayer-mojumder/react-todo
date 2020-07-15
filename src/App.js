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
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(id) {

		this.setState(prevState => {
			const updatedTodos = prevState.todos.map(todo => {

				if (todo.id === id) {
					const newTodo = { ...todo }
					newTodo.completed = !todo.completed
					return newTodo
				}
				return todo
			})

			return {
				todos: updatedTodos
			}

		})
	}

	render() {
		const todoList = this.state.todos.map(element => {
			return <TodoItem key={element.id} item={element} handleChange={this.handleChange} />
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
