import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { login } from "../http/userAPI";
import { useDispatch } from "react-redux";
import { auth, user } from "../store/actions/userAction";
import { registration } from "../http/userAPI";
import { SIGN_IN } from "../utils/consts";

const Auth = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [errorEmail, setErrorEmail] = React.useState("");
  const [errorName, setErrorName] = React.useState("");

  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const isLogin = location.pathname === SIGN_IN;

  const click = async (e) => {
    e.preventDefault();
    let data;

    try {
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password, name);
      }
      dispatch(auth(true));
      dispatch(user(data));

      history.push("/");
    } catch (error) {
      alert(error.response.data);
    }
  };

  const validEmail = (e) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setErrorEmail("Не правильно введенный email");
    } else {
      setErrorEmail("");
    }
  };

  const validName = (e) => {
    setName(e.target.value);
    const letters = /^[A-Za-z]+$/;
    if (!letters.test(String(e.target.value))) {
      setErrorName("Имя не может содержать цифр");
    } else {
      setErrorName("");
    }
  };

  return (
    <div className="app__form">
      <form method="post">
        {errorEmail && <div style={{ color: "red" }}>{errorEmail}</div>}
        <input
          type="email"
          name="email"
          placeholder="Введите email..."
          onChange={(e) => validEmail(e)}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Введите пароль..."
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {errorName && <div style={{ color: "red" }}>{errorName}</div>}
        {!isLogin ? (
          <input
            type="name"
            name="name"
            placeholder="Введите имя..."
            onChange={(e) => validName(e)}
            value={name}
          />
        ) : null}
        <div className="app__action">
          {!isLogin ? (
            <>
              <p>
                есть аккаунт? <Link to="/signIn">Войдите</Link>
              </p>
              <input
                type="submit"
                value="Регистрация"
                onClick={(e) => click(e)}
              />
            </>
          ) : (
            <>
              <p>
                Нету аккаунта? <Link to="/signUp">Зарегистрируйся</Link>
              </p>
              <input type="submit" value="Войти" onClick={(e) => click(e)} />
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Auth;
