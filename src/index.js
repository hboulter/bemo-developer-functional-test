import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./views/Home";
import Main from "./views/Main";
import Contact from "./views/Contact";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/index" component={Main} />
      <Route exact path="/contact-us" component={Contact} />
    </div>
  </Router>,
  document.getElementById("root")
);
