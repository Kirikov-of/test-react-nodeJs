import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

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
        <input
          type="password"
          name="name"
          placeholder="Введите имя..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <div className="app__action">
          <p>
            <Link to="/">Назад</Link>
          </p>
          <input type="submit" value="Регистрация" />
        </div>
      </form>
    </div>
  );
}

export default SignUp;
