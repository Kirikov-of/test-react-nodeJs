import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { signIn, signUp, Main, AuthPage } from "./pages";
import Header from "./components/header";
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
        dispatch(user(true));
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="app">
      {loading ? "" : null}
      <Header />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/signIn" component={AuthPage} />
        <Route path="/signUp" component={AuthPage} />
        {/* <Route path="/signIn" component={signIn} />
        <Route path="/signUp" component={signUp} /> */}
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
