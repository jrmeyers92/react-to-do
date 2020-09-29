import React from "react";
import HeadingMain from "./components/HeadingMain";
import Input from "./components/Input";
import ItemsList from "./components/ItemsList";

class App extends React.Component {
	state = { todo: [] };

	onFormSubmit = (term) => {
		this.setState({ todo: [...this.state.todo, term] });
	};

	render() {
		return (
			<div className='ui container'>
				<HeadingMain />
				<Input onSubmit={this.onFormSubmit} />
				<ItemsList todos={this.state.todo} />
			</div>
		);
	}
}

export default App;
