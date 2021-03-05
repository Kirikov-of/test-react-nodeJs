import React from "react";
import Item from "./Item";
import AddTask from "./AddTask";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../store/actions/itemAction";

export default function Tasks({ items }) {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.userReducer);

  React.useEffect(() => {
    if (isAuth) {
      let userId = user.id;
      dispatch(getItem(userId));
    }
  }, [isAuth, user]);

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
