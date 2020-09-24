import React from "react";


class Input extends React.Component {
    state = { term: " " };
    
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    
    render() {
    


        return (
            <form  onSubmit={ this.onFormSubmit }  className="ui form">
                <div className="field">
                    <div className="ui fluid input">
                        <input type="text" value={ this.state.term } onChange = { e => this.setState( { term: e.target.value } ) }></input>
                    </div>
                </div>
            </form>
            
        );
    }
}

export default Input;