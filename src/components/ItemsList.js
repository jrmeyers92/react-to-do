import React from "react";

const ItemsList = (props) => {
    
    const todos = props.todos.map((todo) => {
        return <div>{todo}</div>
    });


    
    return (
        <div>
            {todos}
        </div>
    );
      
    
}

export default ItemsList;