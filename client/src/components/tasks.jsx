import React from "react";
import Item from "./Item";
import { createTask, fetchTasks, complete, removeTask } from "../http/tasksAPI";

function Tasks() {
  const [items, setItems] = React.useState();
  const [textTast, setTextTask] = React.useState("");

  React.useEffect(() => {
    fetchTasks().then((data) => setItems(data));
  }, []);

  const addTask = () => {
    createTask({ text: textTast }).then((data) => setTextTask(""));
  };

  const deleteTask = (id) => {
    removeTask({ id: id }).then((data) => alert(data));
  };

  const completeTask = (id) => {
    complete({ id: id }).then((data) => alert(data));
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
            deleteTask={deleteTask}
            id={item.id}
            text={item.text}
            key={item.id}
            completeTask={completeTask}
          />
        ))}
    </div>
  );
}

export default Tasks;
