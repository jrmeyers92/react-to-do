import React from "react";
import HeadingMain from "./components/HeadingMain";
import Input from "./components/Input";
import List from "./components/List";

class App extends React.Component {

    onInputSubmit = (term) => {
        console.log(term);
    }

    render() {

        return (
            <div className="ui container">
                <HeadingMain />
                <Input  onSubmit = {this.onInputSubmit}/>
                <List />
            </div>
            
        );
    }
}

export default App;