import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import Main from "./views/Main";
import Contact from "./views/Contact";

function App() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path={"/index"}
          render={(props) => <Main {...props} />}
        ></Route>
        <Route path="/contact-us" component={Contact}></Route>
      </Switch>
    </div>
  );
}

export default App;
