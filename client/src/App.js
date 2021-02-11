import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { signIn, signUp, main } from "./pages";
import Header from "./components/header";
import { check } from "./http/userAPI";
import { auth } from "./store/actions/userAction";

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    return (dispatch) => {
      check()
        .then((data) => {
          dispatch(auth(true));
        })
        .finally(() => setLoading(false));
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" component={main} exact />
        <Route path="/signIn" component={signIn} />
        <Route path="/signUp" component={signUp} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
