import React from "react";
import HeadingMain from "./components/HeadingMain";
import Input from "./components/Input";


class App extends React.Component {
    state = {todo: " "}

    onFormSubmit(term) {
       const term1 = term;

       return term1;
       
    }



    render() {
        console.log(term1)

        return (
            <div className="ui container">
                <HeadingMain />
                <Input onSubmit = {this.onFormSubmit} />
            </div>
          
            
        );
    }
}

export default App;