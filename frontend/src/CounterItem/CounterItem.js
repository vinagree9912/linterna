import React from "react";
import './CounterItem.css';
function CounterItem (props) {
    return (
        <div>
            <tr className={"CounterItem"}>

                <td>{props.time}</td>
                <td>{props.destination}</td>
                <td>{props.flight}</td>
                <td>{props.gate}</td>
                <td>{props.remarks}</td>



            </tr>
        </div>

    );

}
export {CounterItem}