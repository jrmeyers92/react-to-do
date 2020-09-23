import React from "react";
// import "./List.css";

const List = (props) => {
    props.results.map((result) => {
        return <div>{result}</div>
    } );

        return (
            <div className="ui container list">
               {props.input}
            </div>
        );
}




export default List;