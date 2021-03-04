import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Main, AuthPage } from "./pages";
import Header from "./components/Header";
import { check } from "./http/userAPI";
import { auth, user } from "./store/actions/userAction";
import { useDispatch } from "react-redux";

function App() {
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch();

  React.useEffect(() => {
    check()
      .then((data) => {
        dispatch(auth(true));
        dispatch(user(data));
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="loading"></div>
      ) : (
        <>
          <Header />
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/signIn" component={AuthPage} />
            <Route path="/signUp" component={AuthPage} />
            <Redirect to="/" />
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
