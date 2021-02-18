import React from "react";
import Tasks from "../components/Tasks";
import Timer from "../components/Timer";
import { useSelector } from "react-redux";

function Main() {
  const items = useSelector((state) => state.itemsReducer.items);

  return (
    <div>
      <Timer />
      <Tasks items={items} />
    </div>
  );
}

export default Main;
