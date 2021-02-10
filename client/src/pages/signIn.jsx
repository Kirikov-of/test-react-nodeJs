import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

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
          <input type="submit" value="Войти" />
        </div>
      </form>
    </div>
  );
}

export default SignIn;
