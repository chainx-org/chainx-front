import React from 'react';
import PolkaApi from './hooks/usePolka';
import Home from './pages/HomePage';
import Chain from './pages/Chain';
import Validator from './pages/Validator';
import CrossBlock from './pages/CrossBlock';
import Tools from './pages/Tools';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AccountTransfer from './pages/AccountTransfer';
import SS58 from './pages/SS58';
import searchPage from './pages/SearchPage';
import blockDetails from './pages/BlockDetails';
import extrinsicDetails from './pages/ExtrinsicsDetails';
import addressDetails from './pages/AddressDetails';

function App() {
  return (
    <PolkaApi url="wss://testnet-2.chainx.org/ws">
      <BrowserRouter>
        <Switch>
          <Route path="/chain" exact component={Chain}/>
          <Route path="/validators" exact component={Validator}/>
          <Route path="/crossBlock" exact component={CrossBlock}/>
          <Route path="/tools" exact component={Tools}/>
          <Route path="/SS58" exact component={SS58}/>
          <Route path="/Search" exact component={searchPage}/>
          <Route path="/AccountTransfer" exact component={AccountTransfer}/>
          <Route path="/blockDetails" exact component={blockDetails}/>
          <Route path="/extrinsicDetails" exact component={extrinsicDetails}/>
          <Route path="/addressDetails" exact component={addressDetails}/>
          <Route path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
    </PolkaApi>
  );
};


export default App
