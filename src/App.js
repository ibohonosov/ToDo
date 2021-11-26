import React, { useState, useEffect } from "react";
import ToDoForm from './components/ToDoForm/ToDoForm'
import ToDoList from './components/ToDoList/ToDoList'


// import useMediaQuery from '@mui/material/useMediaQuery';

import "./App.css";


function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="App">
        <ToDoForm setItem={setItem} setItems={setItems} item={item}/>
        <ToDoList setItems={setItems} items={items}/>
    </div>
  );
}

export default App;
