import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { login } from "../http/userAPI";
import { useDispatch, useSelector } from "react-redux";
import { auth, user } from "../store/actions/userAction";
import { registration } from "../http/userAPI";
import { SIGN_IN } from "../utils/consts";

const Auth = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  console.log(isAuth);

  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const isLogin = location.pathname === SIGN_IN;

  const click = async () => {
    let data;

    try {
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password, name);
      }
      dispatch(user(data));
      dispatch(auth(true));
      history.push("/");
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className="app__form">
      <form method="post">
        <input
          type="email"
          name="email"
          placeholder="Введите email..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Введите пароль..."
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {!isLogin ? (
          <input
            type="password"
            name="name"
            placeholder="Введите имя..."
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        ) : null}
        <div className="app__action">
          {!isLogin ? (
            <>
              <p>
                есть аккаунт? <Link to="/signIn">Войдите</Link>
              </p>
              <input type="submit" value="Регистрация" onClick={click} />
            </>
          ) : (
            <>
              <p>
                Нету аккаунта? <Link to="/signUp">Зарегистрируйся</Link>
              </p>
              <input type="submit" value="Войти" onClick={click} />
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Auth;
