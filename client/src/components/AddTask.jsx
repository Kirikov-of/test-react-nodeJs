import React from "react";
import { createTask } from "../http/tasksAPI";
import { useDispatch } from "react-redux";
import { getItem } from "../store/actions/itemAction";

function AddTask() {
  const [msg, setMsg] = React.useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    if (!msg.trim()) {
      alert("Поле не может быть пустым");
      setMsg("");
      return;
    }
    createTask({ text: msg });
    setTimeout(() => {
      dispatch(getItem());
    }, 50);
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
