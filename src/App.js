import React from "react";
import HeadingMain from "./components/HeadingMain";
import Input from "./components/Input";
import ItemsList from "./components/ItemsList";

class App extends React.Component {
    state = {results: [ ] };

    onInputSubmit = (term) => {
        this.setState( { results: [...this.state.results, term] })
    }


    render() {

        return (
            <div className="ui container">
                <HeadingMain />
                <Input  onSubmit = {this.onInputSubmit}/>
                <ItemsList input = { this.state.results }/>
            </div>
            
        );
    }
}

export default App;