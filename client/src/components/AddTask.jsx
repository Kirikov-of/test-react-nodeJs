import React from "react";
import { createTask } from "../http/tasksAPI";

function AddTask() {
  const [msg, setMsg] = React.useState("");

  const addTask = () => {
    createTask({ text: msg });
    setMsg("");
  };

  return (
    <div className="app__newTask">
      <input
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Введите задачу..."
      />
      <button onClick={addTask}>Добавить</button>
    </div>
  );
}

export default AddTask;
