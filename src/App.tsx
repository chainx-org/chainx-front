import React from "react";
import PolkaApi from './hooks/polka'
import Home from "./pages/HomePage";
import Chain from "./pages/Chain";
import Validator from './pages/Validator'
import CrossBlock from './pages/CrossBlock'
import Tools from './pages/Tools'
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AccountTransfer from "./pages/AccountTransfer";
import SS58 from './pages/SS58';
import searchPage from './pages/SearchPage';
import blockDetails from './pages/BlockDetails';
import extrinsicsDetails from './pages/ExtrinsicsDetails'
import addressDetails from './pages/AddressDetails'

function App()
{
  return (
    <PolkaApi url="wss://testnet-2.chainx.org/ws">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chain"  component={Chain} />
        <Route path="/validators" component={Validator}/>
        <Route path="/crossBlock" component={CrossBlock}/>
        <Route path="/tools" component={Tools}/>
        <Route path="/SS58"  component={SS58} />
        <Route path="/Search"  component={searchPage} />
        <Route path="/AccountTransfer"  component={AccountTransfer} />
        <Route path="/blockDetails"  component={blockDetails} />
        <Route path="/extrinsicsDetails" component={extrinsicsDetails} />
        <Route path="/addressDetails" component={addressDetails}/>
      </Switch>
    </BrowserRouter>
    </PolkaApi>
  );
};


export default App
