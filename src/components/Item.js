import React from "react";

class Item extends React.Component {

    render() {
        return (
            <div>
                <p> { this.props.input} </p>
            </div>
        );
    }
}

export default Item;