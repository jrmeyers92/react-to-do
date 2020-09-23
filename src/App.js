import React from "react";
import HeadingMain from "./components/HeadingMain";
import Input from "./components/Input";
import List from "./components/List";

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
                <List input = { this.state.results }/>
            </div>
            
        );
    }
}

export default App;