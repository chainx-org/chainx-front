import React, { useEffect, useState } from 'react';
import Home from './pages/HomePage';
import Chain from './pages/Chain';
import Validator from './pages/Validator';
import CrossBlock from './pages/CrossBlock';
import SearchTool from './pages/SearchTool';
import { Route, Switch, withRouter } from 'react-router-dom';
import AccountTransfer from './pages/AccountTransfer';
import SS58 from './pages/SS58';
import searchPage from './pages/SearchPage';
import blockDetails from './pages/BlockDetails';
import extrinsicDetails from './pages/ExtrinsicsDetails';
import addressDetails from './pages/AddressDetails';
import NodeDetails from './pages/NodeDetails';
import NoDataPage from './pages/NoData';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchEvent from './pages/SearchEvent';

function App(props: any) {
  const [showSearch, setShowSearch] = useState(window.location.pathname === '/');
  useEffect(()=>{
    if(props.location.pathname === '/'){
      setShowSearch(false)
    }else{
      setShowSearch(true)
    }
  },[props.location])

  return (
    <div>
      <Header showSearch={showSearch}/>
      <Switch>
        <Route path="/tools/SS58" exact component={SS58}/>
        <Route path="/tools/SearchEvent" exact component={SearchEvent}/>
        <Route path="/Search" component={searchPage}/>
        <Route path="/AccountTransfer" component={AccountTransfer}/>
        <Route path="/blockDetails" component={blockDetails}/>
        <Route path="/extrinsicDetails" component={extrinsicDetails}/>
        <Route path="/nodeDetails" component={NodeDetails}/>
        <Route path="/addressDetails" component={addressDetails}/>
        <Route path="/crossBlock" component={CrossBlock}/>
        <Route path="/validators" component={Validator}/>
        <Route path="/chain" component={Chain}/>
        <Route path="/Nodata" component={NoDataPage}/>
        <Route path="/" component={Home}/>
      </Switch>
      <Footer/>
    </div>
  );
};


export default withRouter(App);
