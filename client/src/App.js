import { Switch, Route, Redirect } from "react-router-dom";
import { signIn, signUp, main } from "./pages";
import Header from "./components/header";

function App() {
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
