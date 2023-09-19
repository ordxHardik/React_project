import React, { Component } from "react";

export class Todos extends Component {
constructor(props) {
	super(props);
	this.state = {
	todos: ["Wake up at 6am", "Get Fresh",
			"DSA class (6:30am - 8 am)"],
	};
}
AddTodo = () => {
	let newTodos = [...this.state.todos];
	newTodos.push(" College ( 9am - 4 pm ) ");
	newTodos.push(" badminton (6 - 7 pm) ");

	this.setState({ todos: newTodos });
	console.log(" Todos in the AddTodo function ", this.state.todos);
};

render() {
	console.log(" Todos in the render() ", this.state.todos);

	return (
	<div>
		<h2>Today's Todos :</h2>
		{this.state.todos.map((todo, idx) => (
		<div key={idx}>
			<h4> {todo}</h4>
		</div>
		))}
		<button onClick={this.AddTodo}>Add todo</button>
	</div>
	);
}
}

export default Todos;