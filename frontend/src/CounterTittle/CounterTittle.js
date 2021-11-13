import React from "react";
import './CounterTittle.css';
import avion from  './avion.jpeg';
function CounterTittle () {
    return (
        <React.Fragment>
            <img src={avion} />
            <h1> DEPARTURES </h1>
        </React.Fragment>

    );
}
export {CounterTittle}