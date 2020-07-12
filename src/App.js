import React from 'react';
import './App.css'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import TodoItem from './components/todoItem/TodoItem'

function App() {
	return (
		<div className="App">
			<Header />
			<div className="todo-list">
				<TodoItem />
				<TodoItem />
				<TodoItem />
			</div>
			<Footer />
		</div>
	);
}

export default App;
