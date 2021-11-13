import React from "react";
import './CounterMatriz.css';


function CounterMatriz (props) {
    return (
        <section>
            {props.columns.map(word => <th className={"CounterMatriz"}>{word}</th>)}
        <ul>
            {props.children}
        </ul>
    </section>);
}

export {CounterMatriz}
