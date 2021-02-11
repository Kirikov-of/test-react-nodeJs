import React from "react";

function Item({ id, text, deleteTask, completeTask }) {
  console.log(id);
  const [check, setCheck] = React.useState(false);

  const remove = () => {
    deleteTask(id);
  };

  const complete = () => {
    completeTask(id);
    setCheck(id);
  };

  return (
    <div key={id} className="app__item">
      <input
        type="checkbox"
        name="idDone"
        className="app__check"
        onClick={() => complete(id)}
      />
      <p style={{ textDecoration: check ? "line-through" : "none" }}>{text}</p>
      <input
        type="button"
        value="delete"
        name="delete"
        onClick={() => remove(id)}
      />
    </div>
  );
}

export default Item;
