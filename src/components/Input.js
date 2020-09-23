import React from "react";

class Input extends React.Component {

    state = {term: " "};

    onInputSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            // <div className = "ui segment">
                <form onSubmit = {this.onInputSubmit} className="ui form">
                    <div className="ui fluid big input">
                        <input 
                        type="text" 
                        placeholder="Input to-do item" 
                        onChange= { (e) => this.setState( { term: e.target.value })}
                        value = {this.state.term}
                        />
                       
                    </div>
                </form>
            // </div>
            
        );
    }

}

export default Input;