import React from "react";
import Home from "./pages/HomePage";
import Block from "./pages/Block";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AccountTransfer from "./pages/AccountTransfer";

function App()
{
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Block" exact component={Block} />
        <Route path="/AccountTransfer" exact component={AccountTransfer} />

      </Switch>
    </BrowserRouter>
  );
};


export default App
