import React from "react";
import {CounterTittle} from "../CounterTittle/CounterTittle";
import {Search} from "../Search/Search";
import {CounterMatriz} from "../CounterMatriz/CounterMatriz";
import {CounterItem} from "../CounterItem/CounterItem";



function AppUI ({
                    vuelos,
                    columns,
                    searchValue,
                    setSearchValue

}) {
    return (
        <React.Fragment>
            <CounterTittle/>
            <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
            <CounterMatriz columns={columns}>
                {vuelos.map(x =>
                    <CounterItem
                        key={x.flight}
                        flight={x.flight}
                        time={x.time}
                        gate={x.gate}
                        remarks={x.remarks}
                        destination={x.destination}
                    />

                )}
            </CounterMatriz>
        </React.Fragment>
    );
}
export {AppUI}





