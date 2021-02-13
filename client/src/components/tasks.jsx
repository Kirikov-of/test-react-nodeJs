import React from "react";
import Item from "./Item";
import { createTask, fetchTasks, complete, removeTask } from "../http/tasksAPI";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../store/actions/itemAction";

const Tasks = () => {
  const [textTast, setTextTask] = React.useState("");
  const dispatch = useDispatch();

  const items = useSelector((state) => state.itemsReducer.items);
  const user = useSelector((state) => state.userReducer.user);

  React.useEffect(() => {
    fetchTasks().then((data) => dispatch(getItem(data)));
  }, []);

  const addTask = () => {
    createTask({ text: textTast, userId: `${user.id}` }).then((data) =>
      setTextTask("")
    );
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
        items.map((item) => (
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
};

export default Tasks;
