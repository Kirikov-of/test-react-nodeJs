import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const [isAuth, setIsAuth] = React.useState(false);
  const isAuthenticated = useSelector((state) => state.userReducer.isAuth);

  const name = "Nikita";

  return (
    <div className="app__header">
      <div className="app__logo">
        <Link to="/">Logo</Link>
      </div>
      {isAuthenticated ? (
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
        </>
      )}
    </div>
  );
}

export default Header;
