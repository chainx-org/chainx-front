/** @format */

import React, {useEffect, useState} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import {RouteItem, routeList} from './route'

function App(props: any) {
  const [showSearch, setShowSearch] = useState(window.location.pathname === '/')
  useEffect(() => {
    if (props.location.pathname === '/') {
      setShowSearch(false)
    } else {
      setShowSearch(true)
    }
  }, [props.location])

  return (
    <div>
      <Header showSearch={showSearch} />
      <Switch>
        {routeList.map((item: RouteItem) => (
          <Route path={item.path} component={item.component} exact={item.exact} key={item.path} />
        ))}
      </Switch>
      <Footer />
    </div>
  )
}

export default withRouter(App)
