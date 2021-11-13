import React from "react";
import './Search.css';



function Search ({searchValue,setSearchValue}) {

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
      //  console.log(event.target.value)
    }

    return (
        <React.Fragment>
            <div>

            </div>
                <input
                    className={"Search"}
                    type="text"
                    placeholder="Search"
                    style={{width: "1200px",height: "70px",marginLeft:"30%"}}
                    value={searchValue}
                    onChange={onSearchValueChange}
                />

        </React.Fragment>
    );
}
export {Search}