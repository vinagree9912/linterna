import logo from '../logo.svg';
import './App.css';
import {AppUI} from "./AppUI";
import React from "react";

const vuelos = [
    {time:"12:20",destination: "Madrid",flight:"BA-903",gate:"31",remarks:"CANCELLED"},
    {time:"12:20",destination: "New york",flight:"QF-211",gate:"22",remarks:"LAST CALL",},
    {time:"12:20",destination: "Caracas",flight:"WS-316",gate:"01",remarks:"BOARDING"},
    {time:"12:20",destination: "Bogota",flight:"OC-903",gate:"10",remarks:"ON TIME"},
    {time:"12:20",destination: "Berlin",flight:"UY-547",gate:"04",remarks:"DELAYED"},
];
const columns = [
    "TIME ","DESTINATION ","FLIGHT ","GATE ","REMARKS "
];
function App() {

    const localStorageTv = localStorage.getItem('AIRPORT_v1');
    //solo se puede agregar datos en string
    let parsedData;
    if (!localStorageTv) {
        localStorage.setItem('AIRPORT_v1',JSON.stringify([]));
        parsedData = []
    } else {
        parsedData = JSON.stringify(localStorageTv);

    }
    //problema, creo que en inTv

    const [searchValue,setSearchValue] = React.useState('');
    const [destinationTv,setdestinationTv] = React.useState(vuelos);
    let searchedinTv = [];
    if(!searchValue.length>=1) {
        searchedinTv = destinationTv;
    } else {
        searchedinTv = destinationTv.filter(item => {
            const destinationInTv = item.destination.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return destinationInTv.includes(searchText)
        })
    }
    const saveItems = (items) => {
        const stringifiedItem = JSON.stringify(items);
        localStorage.setItem('AIRPORT_v1', stringifiedItem);
        setdestinationTv(items);

    }
    /*
    const searched = (destination) => {
        const destinationIndex = destinationTv.findIndex(item => item.destination===destination);
        const newItems = [...destinationTv];
        newItems[destinationIndex].completed = true;
        saveItems(newItems);
    }
    const onDelete = (estado) => {
        const index = destinationTv.findIndex(item => item.searched===false);
        const newItems = [...destinationTv];
        newItems.splice(index,1);
        saveItems(newItems);
    }

     */



  return (
   <AppUI
   columns = {columns}
   searchValue = {searchValue}
   setSearchValue = {setSearchValue}
   searchedinTv = {searchedinTv}
   vuelos = {vuelos}

   />
  );
}

export default App;
