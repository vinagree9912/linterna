import logo from '../logo.svg';
import './App.css';
import {AppUI} from "./AppUI";
import React from "react";

const vuelos = [
    {time:"12:20",destination: "Madrid",flight:"BA-903",gate:"31",remarks:"CANCELLED"},
    {time:"12:20",destination: "New york",flight:"QF-211",gate:"22",remarks:"LAST CALL"},
    {time:"12:20",destination: "Caracas",flight:"WS-316",gate:"01",remarks:"BOARDING"},
    {time:"12:20",destination: "Bogota",flight:"OC-903",gate:"10",remarks:"ON TIME"},
    {time:"12:20",destination: "Berlin",flight:"UY-547",gate:"04",remarks:"DELAYED"},
];
const columns = [
    "TIME ","DESTINATION ","FLIGHT ","GATE ","REMARKS "
];
function App() {
    const [searchValue,setSearchValue] = React.useState('');



  return (
   <AppUI
   vuelos = {vuelos}
   columns = {columns}
   searchValue = {searchValue}
   setSearchValue = {setSearchValue}
   />
  );
}

export default App;
