import React from "react";
import { v4 as uuidv4 } from "uuid";
import randomColor from "randomcolor";

import './ToDoForm.css'

const ToDoForm = ({setItem , setItems, item}) => {

    const newItem = () => {
        if (item.trim() !== "") {
          const newItem = {
            id: uuidv4(),
            item: item,
            color: randomColor({
              luminosity: "dark",
            }),
            defaultPos: {
              x: 250,
              y: -420,
            },
          };
          setItems((items) => [...items, newItem]);
          setItem("");
        } else {
          alert("Enter something...");
          setItem("");
        }
      };
    
      const keyPress = (e) => {
        const code = e.keyCode || e.which;
        if (code === 13) newItem();
      };

    return (
        <div className="wrapper">
        <input
          type="text"
          value={item}
          placeholder="Enter something..."
          onChange={(e) => setItem(e.target.value)}
          onKeyPress={(e) => keyPress(e)}
        />
        <button className="enter" onClick={newItem}>
          ENTER
        </button>
      </div>
    )
}

export default ToDoForm;