import React from "react";
import { complete, removeTask } from "../http/tasksAPI";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../store/actions/itemAction";

function Item({ id, text, status }) {
  const dispatch = useDispatch();
  const { user, isAuth } = useSelector((state) => state.userReducer);

  const userId = user.id;

  const deleteTask = (id, userId) => {
    if (isAuth) {
      if (global.confirm("Вы точно хотите удалить задачу?")) {
        removeTask({ id: id });
        setTimeout(() => dispatch(getItem(userId)), 50);
      }
    }
  };

  const completeTask = (id, userId) => {
    if (isAuth) {
      complete({ id: id });
      setTimeout(() => dispatch(getItem(userId)), 50);
    }
  };

  return (
    <div key={id} className="app__item">
      <input
        type="checkbox"
        name="idDone"
        className="app__check"
        onChange={() => completeTask(id, userId)}
        checked={status}
      />
      <p style={{ textDecoration: status ? "line-through" : "none" }}>{text}</p>
      <input
        type="button"
        value="delete"
        name="delete"
        onClick={() => deleteTask(id, userId)}
      />
    </div>
  );
}

export default Item;
