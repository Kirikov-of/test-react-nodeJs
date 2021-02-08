import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isAuth, setIsAuth] = React.useState(true);

  const name = "Nikita";

  return (
    <div className="app__header">
      <div className="app__logo">
        <Link to="/">Logo</Link>
      </div>
      {isAuth ? (
        <>
          <h3>Привет, {name}</h3>
          <Link to="/" onClick={() => setIsAuth(false)}>
            Выйти
          </Link>
        </>
      ) : (
        <>
          <Link to="/signIn" className="app__signIn">
            Войти
          </Link>
          <Link to="/signUp">Регистрация</Link>
        </>
      )}
    </div>
  );
}

export default Header;
