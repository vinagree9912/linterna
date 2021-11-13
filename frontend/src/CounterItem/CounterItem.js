import React from "react";
import './CounterItem.css';
function CounterItem (props) {
    return (
        <div>
            <tr className={`CounterItem ${props.searched}`}>

                <td><strong>{props.time}</strong></td>
                <td><strong>{props.destination}</strong></td>
                <td><strong>{props.flight}</strong></td>
                <td><strong>{props.gate}</strong></td>
                <td><strong>{props.remarks}</strong></td>



            </tr>
        </div>

    );

}
export {CounterItem}