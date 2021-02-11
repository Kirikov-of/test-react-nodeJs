import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../store/actions/userAction";

function Header() {
  const { isAuth } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const setIsAuth = () => {
    dispatch(auth(false));
    localStorage.removeItem("token");
  };

  const name = "Nikita";

  return (
    <div className="app__header">
      <div className="app__logo">
        <Link to="/">Logo</Link>
      </div>
      {isAuth ? (
        <>
          <h3>Привет, {name}</h3>
          <Link to="/" onClick={() => setIsAuth()}>
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
