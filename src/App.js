import React from "react";
import HeadingMain from "./components/HeadingMain";
import Input from "./components/Input";


class App extends React.Component {



    render() {

        return (
            <div className="ui container">
                <HeadingMain />
                <Input  />
            </div>
          
            
        );
    }
}

export default App;