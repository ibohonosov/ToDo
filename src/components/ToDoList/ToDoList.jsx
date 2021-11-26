import Draggable from "react-draggable";
import './ToDoList.css'

const ToDoList = ({setItems, items}) => {

        const updatePos = (data, index) => {
            let newArray = [...items];
            newArray[index].defaultPos = { x: data.x, y: data.y };
            setItems(newArray);
          };

          const deleteNode = (id) => {
            setItems(items.filter((item) => item.id !== id));
          };
        

        const itemsElem = items.map((item, index) => {
            return (
              <Draggable
                key={index}
                defaultPosition={item.defaultPos}
                onStop={(_, data) => {
                  updatePos(data, index);
                }}
              >
                <div className="todo__item" style={{ background: item.color }}>
                  {`${item.item}`}
                  <button className="delete" onClick={() => deleteNode(item.id)}>
                    X
                  </button>
                </div>
              </Draggable>
            );
          });

          return (
            <div className="list">
                    {itemsElem}
            </div>
          )
}

export default ToDoList;