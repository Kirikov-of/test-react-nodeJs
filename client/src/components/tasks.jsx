import React from "react";
import Item from "./Item";
import AddTask from "./AddTask";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../store/actions/itemAction";

export default function Tasks({ items }) {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  React.useEffect(() => {
    if (isAuth) {
      dispatch(getItem());
    }
  }, [isAuth]);

  console.log("item", items);

  return (
    <div className="app__tasks">
      <AddTask />
      {isAuth
        ? items &&
          items.map((item) => (
            <Item
              id={item.id}
              text={item.text}
              key={item.id}
              status={item.status}
            />
          ))
        : null}
    </div>
  );
}
