import React from "react";
import Home from "./pages/HomePage";
import Block from "./pages/Block";
import Validator from './pages/Validator'
import CrossBlock from './pages/CrossBlock'
import Dex from './pages/Dex'
import Tools from './pages/Tools'
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AccountTransfer from "./pages/AccountTransfer";

function App()
{
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chain"  component={Block} />
        <Route path="/validators" component={Validator}/>
        <Route path="/crossBlock" component={CrossBlock}/>
        <Route path="/dex" component={Dex}/>
        <Route path="/tools" component={Tools}/>
        <Route path="/AccountTransfer"  component={AccountTransfer} />
      </Switch>
    </BrowserRouter>
  );
};


export default App
