import React from "react";
import Item from "./Item";

function Tasks() {
  const [items, setItems] = React.useState([
    { text: "Фиксануть лишнию регистрацию", id: 1 },
    { text: "сделать регистрацию", id: 2 },
    { text: "3", id: 3 },
    { text: "4", id: 4 },
  ]);
  const [textTast, setTextTask] = React.useState("");

  const addTask = () => {
    setItems((previtems) => [
      ...previtems,
      {
        text: textTast,
      },
    ]);
  };

  const removeTask = (index) => {
    setItems((previtems) =>
      previtems.filter((_, currIndex) => {
        if (index !== currIndex) {
          return true;
        }
        return false;
      })
    );
  };

  return (
    <div className="app__tasks">
      <div className="app__newTask">
        <input
          type="text"
          value={textTast}
          onChange={(e) => setTextTask(e.target.value)}
          placeholder="Введите задачу..."
        />
        <button onClick={() => addTask()}>Добавить</button>
      </div>
      {items &&
        items.map((item, index) => (
          <Item
            removeTask={removeTask}
            id={item.id}
            text={item.text}
            key={item.id}
            index={index}
          />
        ))}
    </div>
  );
}

export default Tasks;
