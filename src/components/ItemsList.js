import React from "react";
import "./List.css";
import Item from "./Item";

const ItemsList = (props) => {
    const inputs = props.inputs.map((input) => {
        return <p input= { input } />
    });

    return <div className="items-list">{inputs}</div>
}


export default ItemsList;