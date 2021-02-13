import React from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from "../http/userAPI";
import { useDispatch } from "react-redux";
import { auth, user } from "../store/actions/userAction";
import { registration } from "../http/userAPI";

function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const log = async (e) => {
    let data;
    try {
      e.preventDefault();
      data = await login(email, password);
      dispatch(auth(true));
      dispatch(user(email, password));
      history.push("/");
    } catch (e) {
      alert(e.response.data);
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
        <div className="app__action">
          <p>
            Нету аккаунта? <Link to="/signUp">Зарегистрируйся</Link>
          </p>
          <input type="submit" value="Войти" onClick={log} />
        </div>
      </form>
    </div>
  );
}

export default SignIn;
