import React from "react";
import { Link, useHistory } from "react-router-dom";
import { registration } from "../http/userAPI";

function SignUp() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  const history = useHistory();

  const registr = async (e) => {
    let data;
    try {
      e.preventDefault();
      data = await registration(email, password, name);
      history.push("/signIn");
    } catch (e) {
      alert(e.response.data);
    }
  };

  return (
    <div className="app__form">
      <form>
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
        <input
          type="password"
          name="name"
          placeholder="Введите имя..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <div className="app__action">
          <p>
            есть аккаунт? <Link to="/signIn">Войдите</Link>
          </p>
          <input type="submit" value="Регистрация" onClick={registr} />
        </div>
      </form>
    </div>
  );
}

export default SignUp;
