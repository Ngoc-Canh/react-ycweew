import React from "react";
import "./style.css";
import SignUp from "./component/SignUp";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}
