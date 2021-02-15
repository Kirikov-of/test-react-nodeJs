import React from "react";
import { complete, removeTask } from "../http/tasksAPI";

function Item({ id, text, status }) {
  console.log(id);

  const deleteTask = (id) => {
    removeTask({ id: id });
  };

  const completeTask = (id) => {
    complete({ id: id });
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
