import React from "react";

class Input extends React.Component {
    state = { term: " " };
    render(props) {
    


        return (
            <form className="ui form">
                <div className="field">
                    <div className="ui fluid input">
                        <input type="text" value={ this.state.term } onChange = { (e) => this.setState( { term: e.target.value } ) }></input>
                    </div>
                </div>
            </form>
            
        );
    }
}

export default Input;