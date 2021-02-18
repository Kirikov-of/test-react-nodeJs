import React from "react";
import Item from "./Item";
import AddTask from "./AddTask";
import { useDispatch } from "react-redux";
import { getItem } from "../store/actions/itemAction";

export default function Tasks({ items }) {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getItem());
  }, []);

  console.log("item", items);

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
}
