import React from "react";
import Home from "./pages/HomePage";
import Block from "./pages/Block";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App()
{
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Block" exact component={Block} />
      </Switch>
    </BrowserRouter>
  );
};


export default App
