import React from "react";
import { Link } from "react-router-dom";

function header() {
  return (
    <div className="app__header">
      <div className="app__logo">
        <Link to="/">Logo</Link>
      </div>
      <Link to="/signIn" className="app__signIn">
        Войти
      </Link>
      <Link to="/signUp">Регистрация</Link>
    </div>
  );
}

export default header;
