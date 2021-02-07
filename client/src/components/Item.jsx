import React from "react";

function Item({ index, id, text, removeTask }) {
  const remove = () => {
    removeTask(index);
  };

  const [check, setCheck] = React.useState(false);

  return (
    <div key={id} className="app__item">
      <input
        type="checkbox"
        name="idDone"
        className="app__check"
        onClick={() => setCheck(!check)}
      />
      <p style={{ textDecoration: check ? "line-through" : "none" }}>{text}</p>
      <input
        type="button"
        value="delete"
        name="delete"
        onClick={() => remove(index)}
      />
    </div>
  );
}

export default Item;
