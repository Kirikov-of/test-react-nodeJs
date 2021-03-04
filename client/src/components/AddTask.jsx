import React from "react";
import { createTask } from "../http/tasksAPI";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../store/actions/itemAction";

function AddTask() {
  const [msg, setMsg] = React.useState("");
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.userReducer);

  const addTask = () => {
    const userId = user.id;

    if (!msg.trim()) {
      alert("Поле не может быть пустым");
      setMsg("");
      return;
    }

    createTask({ text: msg }, userId);
    setTimeout(() => {
      dispatch(getItem(userId));
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
        disabled={!isAuth}
      />
      <button disabled={!isAuth} onClick={addTask}>
        Добавить
      </button>
    </div>
  );
}

export default AddTask;
