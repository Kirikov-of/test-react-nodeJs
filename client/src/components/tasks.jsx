import React from "react";
import Item from "./Item";
import AddTask from "./AddTask";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../store/actions/itemAction";

const Tasks = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.itemsReducer.items);

  React.useEffect(() => {
    dispatch(getItem(items));
  }, [dispatch]);

  return (
    <div className="app__tasks">
      <AddTask />
      {items &&
        items.map((item) => (
          <Item
            id={item.id}
            text={item.text}
            key={item.id}
            status={item.status}
          />
        ))}
    </div>
  );
};

export default Tasks;
