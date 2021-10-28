import React from 'react';
import PolkaApi from './hooks/usePolka';
import Home from './pages/HomePage';
import Chain from './pages/Chain';
import Validator from './pages/Validator';
import CrossBlock from './pages/CrossBlock';
import SearchTool from './pages/SearchTool';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AccountTransfer from './pages/AccountTransfer';
import SS58 from './pages/SS58';
import searchPage from './pages/SearchPage';
import blockDetails from './pages/BlockDetails';
import extrinsicDetails from './pages/ExtrinsicsDetails';
import addressDetails from './pages/AddressDetails';
import NodeDetails from './pages/NodeDetails';
import NoDataPage from './pages/NoData';

function App() {
  return (
    // <PolkaApi url="wss://testnet-2.chainx.org/ws">
      <BrowserRouter>
        <Switch>
          <Route path="/tools/SS58" exact component={SS58}/>
          <Route path="/tools/searchTool" exact  component={SearchTool}/>
          <Route path="/Search"  component={searchPage}/>
          <Route path="/AccountTransfer"  component={AccountTransfer}/>
          <Route path="/blockDetails"  component={blockDetails}/>
          <Route path="/extrinsicDetails"  component={extrinsicDetails}/>
          <Route path="/nodeDetails"  component={NodeDetails}/>
          <Route path="/addressDetails"  component={addressDetails}/>
          <Route path="/crossBlock" component={CrossBlock}/>
          <Route path="/validators" component={Validator}/>
          <Route path="/chain" component={Chain}/>
          <Route path="/Nodata" component={NoDataPage}/>
          <Route path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
    // </PolkaApi>
  );
};


export default App
