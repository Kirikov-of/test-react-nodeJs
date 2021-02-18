import React from "react";
import { complete, removeTask } from "../http/tasksAPI";
import { useDispatch } from "react-redux";
import { getItem } from "../store/actions/itemAction";

function Item({ id, text, status }) {
  console.log(id);
  const dispatch = useDispatch();

  const deleteTask = (id) => {
    if (global.confirm("Вы точно хотите удалить задачу?")) {
      removeTask({ id: id });
    }
    setTimeout(() => dispatch(getItem()), 50);
  };

  const completeTask = (id) => {
    complete({ id: id });
    setTimeout(() => dispatch(getItem()), 50);
  };

  return (
    <div key={id} className="app__item">
      <input
        type="checkbox"
        name="idDone"
        className="app__check"
        onChange={() => completeTask(id)}
        checked={status}
      />
      <p style={{ textDecoration: status ? "line-through" : "none" }}>{text}</p>
      <input
        type="button"
        value="delete"
        name="delete"
        onClick={() => deleteTask(id)}
      />
    </div>
  );
}

export default Item;
